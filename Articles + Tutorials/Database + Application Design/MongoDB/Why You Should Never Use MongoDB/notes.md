# Why You Should Never Use MongoDB

![](http://www.sarahmei.com/blog/wp-content/uploads/2013/11/Screen-Shot-2013-11-09-at-7.09.27-PM.png)

There are a number of ways you could model this data. In a typical relational store, each of these boxes would be a table. You’d have a tv_shows table, a seasons table with a foreign key into tv_shows, an episodes table with a foreign key into seasons, and reviews and cast_members tables with foreign keys into episodes. So to get all the information for a TV show, you’re looking at a five-table join.

We could also model this data as a set of nested hashes. The set of information about a particular TV show is one big nested key/value data structure. Inside a TV show, there’s an array of seasons, each of which is also a hash. Within each season, an array of episodes, each of which is a hash, and so on. This is how MongoDB models the data. Each TV show is a document that contains all the information we need for one show.

Here’s an example document for one TV show, Babylon 5.

![](http://www.sarahmei.com/blog/wp-content/uploads/2013/11/Screen-Shot-2013-11-09-at-7.25.40-PM.png)

All of the data we need for a TV show is under one document, so it’s very fast to retrieve all this information at once, even if the document is very large. There’s a TV show here in the US called “General Hospital” that has aired over 12,000 episodes over the course of 50+ seasons. On my laptop, PostgreSQL takes about a minute to get denormalized data for 12,000 episodes, while retrieval of the equivalent document by ID in MongoDB takes a fraction of a second.

---

## Cache Invalidation

Cache invalidation is just knowing when a piece of your cached data is out of date, and needs to be updated or replaced.

![](http://www.sarahmei.com/blog/wp-content/uploads/2013/11/Screen-Shot-2013-11-09-at-10.31.52-PM.png)
