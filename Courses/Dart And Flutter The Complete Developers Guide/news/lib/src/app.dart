import 'package:flutter/material.dart';
import 'package:news/src/blocs/comments_provider.dart';
import 'package:news/src/blocs/stories_provider.dart';
import 'package:news/src/screens/news_detail.dart';
import 'package:news/src/screens/news_list.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CommentsProvider(
      child: StoriesProvider(
        child: MaterialApp(
          title: 'News!',
          onGenerateRoute: routes,
        ),
      ),
    );
  }

  MaterialPageRoute routes(RouteSettings settings) {
    if (settings.name == '/') {
      return MaterialPageRoute(builder: (BuildContext context) {
        final bloc = StoriesProvider.of(context);

        bloc.fetchTopIds();

        return NewsList();
      });
    }

    return MaterialPageRoute(builder: (BuildContext context) {
      final int itemId = int.parse(settings.name.replaceFirst('/', ''));

      final commentsBloc = CommentsProvider.of(context);

      commentsBloc.fetchItemWithComments(itemId);

      return NewsDetail(itemId: itemId);
    });
  }
}
