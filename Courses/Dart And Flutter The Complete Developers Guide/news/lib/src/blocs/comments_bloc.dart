import 'dart:async';

import 'package:news/src/models/item_model.dart';
import 'package:news/src/resources/repository.dart';
import 'package:rxdart/rxdart.dart';

class CommentsBloc {
  final _repository = Repository();

  final _commentsFetcher = PublishSubject<int>();
  final _commentsOutput = BehaviorSubject<Map<int, Future<ItemModel>>>();

  Observable<Map<int, Future<ItemModel>>> get itemWithComments =>
      _commentsOutput.stream;

  Function(int) get fetchItemWithComments => _commentsFetcher.sink.add;

  CommentsBloc() {
    _commentsFetcher.stream
        .transform(_commentsTransformer())
        .pipe(_commentsOutput);
  }

  void close() {
    _commentsFetcher.close();
    _commentsOutput.close();
  }

  StreamTransformer<int, Map<int, Future<ItemModel>>> _commentsTransformer() {
    return ScanStreamTransformer<int, Map<int, Future<ItemModel>>>(
      (Map<int, Future<ItemModel>> cache, int id, int index) {
        print(index);

        cache[id] = _repository.fetchItem(id);
        // We need to recurse here, cause item have kids who are item who have kids
        cache[id].then((ItemModel item) {
          item.kids.forEach((kidId) => fetchItemWithComments(kidId));
        });

        return cache;
      },
      <int, Future<ItemModel>>{},
    );
  }
}
