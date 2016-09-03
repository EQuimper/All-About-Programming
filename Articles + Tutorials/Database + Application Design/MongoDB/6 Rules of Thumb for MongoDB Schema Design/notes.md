# Basics: Modeling One-to-Few

An example of “one-to-few” might be the addresses for a person. This is a good use case for embedding.

```js
> db.person.findOne()
{
  	name: 'Kate Monster',
  	ssn: '123-456-7890',
  	addresses : [
     	{ street: '123 Sesame St', city: 'Anytown', cc: 'USA' },
     	{ street: '123 Avenue Q', city: 'New York', cc: 'USA' }
  	]
}
```
## Pros & Cons

The main advantage is that you don’t have to perform a separate query to get the embedded details; the main disadvantage is that you have no way of accessing the embedded details as stand-alone entities.

---

# Basics: One-to-Many

An example of “one-to-many” might be parts for a product in a replacement parts ordering system. Each product may have up to several hundred replacement parts, but never more than a couple thousand or so.

```js
> db.parts.findOne()
{
    _id : ObjectID('AAAA'),
    partno : '123-aff-456',
    name : '#4 grommet',
    qty: 94,
    cost: 0.94,
    price: 3.99
}
```
```js

> db.products.findOne()
{
    name : 'left-handed smoke shifter',
    manufacturer : 'Acme Corp',
    catalog_number: 1234,
    parts : [     // array of references to Part documents
        ObjectID('AAAA'),    // reference to the #4 grommet above
        ObjectID('F17C'),    // reference to a different Part
        ObjectID('D2AA'),
        // etc
    ]
}
```

```js
 // Fetch the Product document identified by this catalog number
> product = db.products.findOne({catalog_number: 1234});
   // Fetch all the Parts that are linked to this Product
> product_parts = db.parts.find({_id: { $in : product.parts } } ).toArray() ;
```

## Pros & Cons

Each Part is a stand-alone document, so it’s easy to search them and update them independently. One trade off for using this schema is having to perform a second query to get details about the Parts for a Product.

---

# Basics: One-to-Squillions

An example of “one-to-squillions” might be an event logging system that collects log messages for different machines. Any given host could generate enough messages to overflow the **16 MB** document size, even if all you stored in the array was the ObjectID.

```js
> db.hosts.findOne()
{
    _id : ObjectID('AAAB'),
    name : 'goofy.example.com',
    ipaddr : '127.66.66.66'
}

>db.logmsg.findOne()
{
    time : ISODate("2014-03-28T09:42:41.382Z"),
    message : 'cpu is on fire!',
    host: ObjectID('AAAB')       // Reference to the Host document
}
```

```js
  // find the parent ‘host’ document
> host = db.hosts.findOne({ipaddr : '127.66.66.66'});  // assumes unique index
   // find the most recent 5000 log message documents linked to that host
> last_5k_msg = db.logmsg.find({host: host._id}).sort({time : -1}).limit(5000).toArray()
```
---

# Intermediate: Two-Way Referencing

If you want to get a little bit fancier, you can combine two techniques and include both styles of reference in your schema, having both references from the “one” side to the “many” side and references from the “many” side to the “one” side.

```js

db.person.findOne()
{
    _id: ObjectID("AAF1"),
    name: "Kate Monster",
    tasks [     // array of references to Task documents
        ObjectID("ADF9"), 
        ObjectID("AE02"),
        ObjectID("AE73") 
        // etc
    ]
}
```

```js
db.tasks.findOne()
{
    _id: ObjectID("ADF9"), 
    description: "Write lesson plan",
    due_date:  ISODate("2014-04-01"),
    owner: ObjectID("AAF1")     // Reference to Person document
}
```

## Pros & Cons

This design has all of the advantages and disadvantages of the “One-to-Many” schema, but with some additions. Putting in the extra ‘owner’ reference into the Task document means that its quick and easy to find the Task’s owner, but it also means that if you need to reassign the task to another person, you need to perform two updates instead of just one.

---

# Intermediate: Denormalizing With “One-To-Many” Relationships

## Denormalizing from Many -> One

```js
> db.products.findOne()
{
    name : 'left-handed smoke shifter',
    manufacturer : 'Acme Corp',
    catalog_number: 1234,
    parts : [     // array of references to Part documents
        ObjectID('AAAA'),    // reference to the #4 grommet above
        ObjectID('F17C'),    // reference to a different Part
        ObjectID('D2AA'),
        // etc
    ]
}
```

Denormalizing would mean that you don’t have to perform the application-level join when displaying all of the part names for the product, but you would have to perform that join if you needed any other information about a part.

```js
> db.products.findOne()
{
    name : 'left-handed smoke shifter',
    manufacturer : 'Acme Corp',
    catalog_number: 1234,
    parts : [
        { id : ObjectID('AAAA'), name : '#4 grommet' },         // Part name is denormalized
        { id: ObjectID('F17C'), name : 'fan blade assembly' },
        { id: ObjectID('D2AA'), name : 'power switch' },
        // etc
    ]
}
```

I'm not sure but here I think what that mean is you add inside the array object refs the key:value you need later. So here we only need the name when we reference the products.

```js
// Fetch the product document
> product = db.products.findOne({catalog_number: 1234});  
  // Create an array of ObjectID()s containing *just* the part numbers
> part_ids = product.parts.map( function(doc) { return doc.id } );
  // Fetch all the Parts that are linked to this Product
> product_parts = db.parts.find({_id: { $in : part_ids } } ).toArray() ;
```

Denormalizing saves you a lookup of the denormalized data at the cost of a more expensive update: if you’ve denormalized the Part name into the Product document, then when you update the Part name you must also update every place it occurs in the ‘products’ collection.

Denormalizing only makes sense when there’s an high ratio of reads to updates. If you’ll be reading the denormalized data frequently, but updating it only rarely, it often makes sense to pay the price of slower updates – and more complex updates – in order to get more efficient queries. As updates become more frequent relative to queries, the savings from denormalization decrease.

Also note that if you denormalize a field, you lose the ability to perform atomic and isolated updates on that field. Just like with the two-way referencing example above, if you update the part name in the Part document, and then in the Product document, there will be a sub-second interval where the denormalized ‘name’ in the Product document will not reflect the new, updated value in the Part document.

## Denormalizing from One -> Many

```js
> db.parts.findOne()
{
    _id : ObjectID('AAAA'),
    partno : '123-aff-456',
    name : '#4 grommet',
    product_name : 'left-handed smoke shifter',   // Denormalized from the ‘Product’ document
    product_catalog_number: 1234,                     // Ditto
    qty: 94,
    cost: 0.94,
    price: 3.99
}
```

However, if you’ve denormalized the Product name into the Part document, then when you update the Product name you must also update every place it occurs in the ‘parts’ collection. This is likely to be a more expensive update, since you’re updating multiple Parts instead of a single Product. As such, it’s significantly more important to consider the read-to-write ratio when denormalizing in this way.

---

# Intermediate: Denormalizing With “One-To-Squillions” Relationships

```js
> db.logmsg.findOne()
{
    time : ISODate("2014-03-28T09:42:41.382Z"),
    message : 'cpu is on fire!',
    ipaddr : '127.66.66.66',
    host: ObjectID('AAAB')
}
```

```js
> last_5k_msg = db.logmsg.find({ipaddr : '127.66.66.66'}).sort({time : -1}).limit(5000).toArray()
```

In fact, if there’s only a limited amount of information you want to store at the “one” side, you can denormalize it ALL into the “squillions” side and get rid of the “one” collection altogether.

```js
> db.logmsg.findOne()
{
    time : ISODate("2014-03-28T09:42:41.382Z"),
    message : 'cpu is on fire!',
    ipaddr : '127.66.66.66',
    hostname : 'goofy.example.com',
}
```

On the other hand, you can also denormalize into the “one” side. Lets say you want to keep the last 1000 messages from a host in the 'hosts’ document. You could use the $each / $slice functionality introduced in MongoDB 2.4 to keep that list sorted, and only retain the last 1000 messages:

The log messages get saved in the 'logmsg’ collection as well as in the denormalized list in the 'hosts’ document: that way the message isn’t lost when it ages out of the 'hosts.logmsgs’ array.

```js
 //  Get log message from monitoring system
logmsg = get_log_msg();
log_message_here = logmsg.msg;
log_ip = logmsg.ipaddr;
  // Get current timestamp
now = new Date()
  // Find the _id for the host I’m updating
host_doc = db.hosts.findOne({ipaddr : log_ip },{_id:1});  // Don’t return the whole document
host_id = host_doc._id;
  // Insert the log message, the parent reference, and the denormalized data into the ‘many’ side
db.logmsg.save({time : now, message : log_message_here, ipaddr : log_ip, host : host_id ) });
  // Push the denormalized log message onto the ‘one’ side
db.hosts.update( {_id: host_id }, 
        {$push : {logmsgs : { $each:  [ { time : now, message : log_message_here } ],
                           $sort:  { time : 1 },  // Only keep the latest ones 
                           $slice: -1000 }        // Only keep the latest 1000
         }} );
```

Note the use of the projection specification ( {_id:1} ) to prevent MongoDB from having to ship the entire ‘hosts’ document over the network. By telling MongoDB to only return the _id field, I reduce the network overhead down to just the few bytes that it takes to store that field (plus just a little bit more for the wire protocol overhead).
