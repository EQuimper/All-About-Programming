import 'dart:io';

import 'package:news/src/models/item_model.dart';
import 'package:news/src/resources/repository.dart';
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';

class NewsDbProvider implements Source, Cache {
  Database db;

  NewsDbProvider() {
    init();
  }

  void init() async {
    Directory documentsDirectory = await getApplicationDocumentsDirectory();
    final path = join(documentsDirectory.path, 'items.db');
    db = await openDatabase(path, version: 1,
        onCreate: (Database newDb, int version) {
      newDb.execute("""
        CREATE TABLE items
          (
            id INTEGER PRIMARY KEY,
            type TEXT,
            by TEXT,
            time INTEGER,
            text TEXT,
            parent INTEGER,
            kids BLOB,
            dead INTEGER,
            deleted INTEGER,
            url TEXT,
            score INTEGER,
            title TEXT,
            descendants INTEGER
          );
        """);
    });
  }

  Future<ItemModel> fetchItem(int id) async {
    final maps = await db.query(
      'items',
      columns: null,
      where: "id = ?",
      whereArgs: [id],
    );

    if (maps.length > 0) {
      return ItemModel.fromDb(maps.first);
    }

    return null;
  }

  Future<int> addItem(ItemModel item) {
    return db.insert(
      'items',
      item.toMapForDb(),
      conflictAlgorithm: ConflictAlgorithm.ignore,
    );
  }

  // TODO - Store and fetch ids
  Future<List<int>> fetchTopIds() {
    return null;
  }

  Future<int> clear() {
    return db.delete('items');
  }
}
