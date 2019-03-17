import 'package:http/http.dart';
import 'package:news/src/resources/news_api_provider.dart';
import 'package:http/testing.dart';
import 'package:test_api/test_api.dart';
import 'dart:convert';

void main() {
  test('fetchTopIds returns a list of ids', () async {
    final newsApi = NewsApiProvider();

    newsApi.client = MockClient((request) async {
      return Response(json.encode([19388979, 19388913, 19388473]), 200);
    });

    final ids = await newsApi.fetchTopIds();

    expect(ids, [19388979, 19388913, 19388473]);
  });

  test('fetchItem return a item model', () async {
    final newsApi = NewsApiProvider();

    final expectedItem = {
      'id': 123,
      'title': 'An article'
    };

    newsApi.client = MockClient((request) async {
      return Response(json.encode(expectedItem), 200);
    });

    final item = await newsApi.fetchItem(expectedItem['id']);

    expect(item.id, expectedItem['id']);
    expect(item.title, expectedItem['title']);
  });
}