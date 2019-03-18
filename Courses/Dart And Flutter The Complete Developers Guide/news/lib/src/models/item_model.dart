import 'dart:convert';

class ItemModel {
  final int id;
  final bool deleted;
  final String type;
  final String by;
  final int time;
  final String text;
  final bool dead;
  final int parent;
  final List<dynamic> kids;
  final String url;
  final int score;
  final String title;
  final int descendants;

  ItemModel.fromJson(Map<String, dynamic> parsedJson)
      : id = parsedJson['id'],
        deleted = parsedJson['deleted'] ?? false,
        type = parsedJson['type'],
        by = parsedJson['by'] ?? '',
        time = parsedJson['json'],
        text = parsedJson['text'] ?? '',
        dead = parsedJson['dead'] ?? false,
        parent = parsedJson['parent'],
        kids = parsedJson['kids'] ?? [],
        url = parsedJson['url'],
        score = parsedJson['score'],
        title = parsedJson['title'],
        descendants = parsedJson['descendants'] ?? 0;

  ItemModel.fromDb(Map<String, dynamic> result)
      : id = result['id'],
        // SQLite don't have boolean so 0 = false,1 = true
        deleted = result['deleted'] == 1,
        type = result['type'],
        by = result['by'],
        time = result['json'],
        text = result['text'],
        dead = result['dead'] == 1,
        parent = result['parent'],
        // because of blob type we need this
        kids = jsonDecode(result['kids']),
        url = result['url'],
        score = result['score'],
        title = result['title'],
        descendants = result['descendants'];

  Map<String, dynamic> toMapForDb() {
    return {
      'id': id,
      'deleted': deleted ? 1 : 0,
      'type': type,
      'by': by,
      'time': time,
      'text': text,
      'dead': dead ? 1 : 0,
      'parent': parent,
      'url': url,
      'score': score,
      'title': title,
      'descendants': descendants,
      'kids': jsonEncode(kids),
    };
  }
}
