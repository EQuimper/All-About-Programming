import 'package:flutter/material.dart';
import 'package:news/src/blocs/stories_bloc.dart';
import 'package:news/src/blocs/stories_provider.dart';
import 'package:news/src/widgets/news_list_tile.dart';
import 'package:news/src/widgets/refresh.dart';

class NewsList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final bloc = StoriesProvider.of(context);

    return Scaffold(
      appBar: AppBar(
        title: Text('Top News!'),
      ),
      body: buildList(bloc),
    );
  }

  Widget buildList(StoriesBloc bloc) {
    return StreamBuilder(
      stream: bloc.topIds,
      builder: (BuildContext context, AsyncSnapshot<List<int>> snapshot) {
        if (!snapshot.hasData) {
          return Center(
            child: CircularProgressIndicator(),
          );
        }

        return Refresh(
          child: ListView.builder(
            itemBuilder: (BuildContext context, int index) {
              bloc.fetchItem(snapshot.data[index]);
              return NewsListTile(
                itemId: snapshot.data[index],
              );
            },
            itemCount: snapshot.data.length,
          ),
        );
      },
    );
  }
}
