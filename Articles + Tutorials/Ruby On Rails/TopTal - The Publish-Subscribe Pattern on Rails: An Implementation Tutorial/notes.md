# TopTal - The Publish-Subscribe Pattern on Rails: An Implementation Tutorial

Pub/Sub is a pattern used to communicate messages between different system components without these components knowing anything about each other’s identity.

![](https://assets.toptal.io/uploads/blog/image/711/toptal-blog-image-1418655135025.png)

## Advantages to Pub-Sub Implementation

- Reducing Model/Controller Bloat
- Fewer Callbacks
- [The Single Responsibility Principle (SRP)](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- Testing
- Performance
- The Bottom Line

## Disadvantages of Pub-Sub Implementation

- Loose Coupling (Inflexible Semantic Coupling)
- Messaging Bus Stability
- Infinite Event Loops
