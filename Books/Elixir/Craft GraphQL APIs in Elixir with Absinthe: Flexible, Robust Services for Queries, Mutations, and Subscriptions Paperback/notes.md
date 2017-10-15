# Craft GraphQL APIs in Elixir with Absinthe: Flexible, Robust Services for Queries, Mutations, and Subscriptions

## Part 1 Build a GraphQL API

### Chapter 1 Meet GraphQL

GraphQL is a query language that gives the users of an API the ability to describe the data that they want, and lets creators of the API focus on data relationships and business rules, instead of worrying about the various data payloads the API needs to return.

Grahpql excel in relation between entities. Really good for social media.

### Phoenix 1.3 Context

Phoenix v1.3 introduced the concept of bounded context modules. These modules define the business logic for a portion of your overall domain model.

A compelling, more structured choice for laying out your Absinthe-related modules involves grouping your Absinthe types into modules that mirror the names of your Phoenix contexts, then calling functions present in your contexts from your field resolvers.

As we you learned in the previous chapter, its important to keep your business logic inside your context modules—don’t pull it into your resolvers or duplicate it there. Think of your resolvers as a way to trigger your business logic, a way to wire it into schema.

### Interfaces

Interfaces are a handy tool, and they’re often the right choice when you need an abstract class precisely for the reason that we’ve illustrated here. If there are fields in common, interfaces allow users to write more simple, readable GraphQL.

### Fragments

Example of fragment use

```graphql
query Search($term: String!) {
  search(matching: $term) {
    ...MenuItemFields
    ...CategoryFields
    __typename
  }
}

fragment MenuItemFields on MenuItem {
  name
  id
}

fragment CategoryFields on Category {
  name
  items {
    ...MenuItemFields
  }
}
```
