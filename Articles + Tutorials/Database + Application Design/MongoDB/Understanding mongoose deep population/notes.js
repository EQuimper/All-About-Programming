// Population is the process of automatically replacing the specified paths in the document
// with document(s) from other collection(s). We may populate a single document,
// multiple documents, plain object, multiple plain objects, or all objects returned from a query.

// Example
var UserSchema = {
  _id: String,
  username: String
};

var PostSchema = {
  _id: String,
  user: {
    ref: 'User',
    type: String
  }
};

var results = [
  {
    __t: 'Post',
    _id: '1234',
    user: {
      __t: 'User',
      _id: '5678',
      username: 'josh'
    }
  }
];

/**********************/

// Deep population

// Maybe our user has friends. Let’s update our User schema (we’ll drop the ref fields too):
var UserSchema = {
  _id: String,
  username: String,
  friends: [{ type: String }]
};

// Now we can populate down an extra level:

Post.find({}).populate({
  path: 'user',
  model: 'User',
  populate: {
    path: 'friends',
    model: 'User'
  }
}).exec(callback);

// Even better. Now we’ll get this as our result:
var results = [
  {
    __t: 'Post',
    _id: '1234',
    user: {
      __t: 'User',
      _id: '5678',
      username: 'josh',
      friends: [
        {
          __t: 'User',
          _id: '9012',
          username: 'barry',
          friends: ['3456', '7890']
        },
        {
          __t: 'User',
          _id: '3456',
          username: 'rooney',
          friends: ['9012', '5678']
        }
      ]
    }
  }
];

// Under the hood
posts.find({});
users.find({ _id: { $in: ['5678', '9012', '3456'] } });

// Sibling populations

var PostSchema = {
  _id: String,
  user: String,
  related_posts: [{ type: String }]
};

// So now we want to start at 2 different root nodes: the user field, and the related_posts field.
// Mongoose supports this too, and has for quite some time (but only deeply since recently):

Post.find({}).populate([
  {
    path: 'user',
    model: 'User',
    populate: {
      path: 'friends',
      model: 'User'
    }
  },
  {
    path: 'related_posts',
    model: 'Post',
    populate: {
      path: 'user',
      model: 'User',
      populate: {
        path: 'friends',
        model: 'User'
      }
    }
  }
]).exec(callback);

// Automatic population per document

// But what if you always wanted to load the lead singer every time you loaded a band?

// example from the article above

var bandSchema = new mongoose.Schema({
  name: String,
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'person' }
});

var autoPopulateLead = function(next) {
  this.populate('lead');
  next();
};

bandSchema.
  pre('findOne', autoPopulateLead).
  pre('find', autoPopulateLead);

var Band = mongoose.model('band', bandSchema, 'bands');
