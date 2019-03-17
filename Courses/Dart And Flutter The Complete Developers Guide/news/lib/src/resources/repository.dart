import 'dart:async';

import 'package:news/src/models/item_model.dart';

import 'news_api_provider.dart';
import 'news_db_provider.dart';

// SQLite don't like multiple connection
final newsDbProvider = new NewsDbProvider();

class Repository {
  List<Source> sources = [
    newsDbProvider,
    new NewsApiProvider(),
  ];

  List<Cache> caches = [newsDbProvider];

  Future<List<int>> fetchTopIds() {
    // FIXME - This is cause we fake out the fetchTopIds in db provider
    return sources[1].fetchTopIds();
  }

  Future<ItemModel> fetchItem(int id) async {
    ItemModel item;
    Source source;

    for (source in sources) {
      item = await source.fetchItem(id);
      if (item != null) {
        break;
      }
    }

    for (var cache in caches) {
      cache.addItem(item);
    }

    return item;
  }

  Future<void> clear() async {
    for (var cache in caches) {
      await cache.clear();
    }
  }
}

abstract class Source {
  Future<ItemModel> fetchItem(int id);

  Future<List<int>> fetchTopIds();
}

abstract class Cache {
  Future<int> addItem(ItemModel item);
  Future<int> clear();
}
