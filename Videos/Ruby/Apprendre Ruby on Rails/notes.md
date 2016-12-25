## Counting cache

For get the count of a article but we don't want to make a other sql call just add to the controller of the belongs_to element the

Example

```rb
belongs_to :category, counter_cache: true
```

After we add migrations

```
rails g migration add_posts_count_to_categories posts_count:integer
```

And inside the migration we add

```rb
class AddPostsCountToCategories < ActiveRecord::Migration[5.0]
  def change
    add_column :categories, :posts_count, :integer, default: 0
  end
end
```

---

## Create join table

```
rails g migration create_join_table_posts_tags post tag
```

## Rename table

For rename a table just make a migration.
