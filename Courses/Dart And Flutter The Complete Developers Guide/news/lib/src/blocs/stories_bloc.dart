import 'dart:async';

import 'package:news/src/models/item_model.dart';
import 'package:rxdart/rxdart.dart';

import '../resources/repository.dart';

class StoriesBloc {
  final _repository = Repository();
  final _topIds = PublishSubject<List<int>>();
  final _itemsOutput = BehaviorSubject<Map<int, Future<ItemModel>>>();
  final _itemsFetcher = PublishSubject<int>();

  Observable<List<int>> get topIds => _topIds.stream;

  Observable<Map<int, Future<ItemModel>>> get items => _itemsOutput.stream;

  Function(int) get fetchItem => _itemsFetcher.sink.add;

  StoriesBloc() {
    _itemsFetcher.stream.transform(_itemsTransformer()).pipe(_itemsOutput);
  }

  StreamTransformer<int, Map<int, Future<ItemModel>>> _itemsTransformer() {
    return ScanStreamTransformer(
      (Map<int, Future<ItemModel>> cache, int id, int index) {
        print(index);
        cache[id] = _repository.fetchItem(id);

        return cache;
      },
      <int, Future<ItemModel>>{},
    );
  }

  Future<void> fetchTopIds() async {
    final ids = await _repository.fetchTopIds();

    _topIds.sink.add(ids);
  }

  Future<void> clearCache() {
    return _repository.clear();
  }

  void close() {
    _topIds.close();
    _itemsFetcher.close();
    _itemsOutput.close();
  }
}
