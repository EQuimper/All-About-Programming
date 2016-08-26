For create some fake data we can do a loop with this inside the `db/seeds.rb`

```ruby
1.upto(50) do |i|
  Todo.create(:name => "Todo #{i}")
end
```

We get 50 Todo with a name who get a number

inside the console we just need to 

`rails db:seed`
