import 'dart:async';

import 'package:flutter/material.dart';
import 'package:news/src/models/item_model.dart';
import 'package:news/src/widgets/loading_container.dart';

class Comment extends StatelessWidget {
  final int commentId;
  final Map<int, Future<ItemModel>> itemMap;

  Comment({this.commentId, this.itemMap});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: itemMap[commentId],
      builder: (BuildContext context, AsyncSnapshot<ItemModel> snapshot) {
        if (!snapshot.hasData) {
          return LoadingContainer();
        }

        final item = snapshot.data;

        final children = <Widget>[
          ListTile(
            title: buildText(item),
            subtitle: item.by == '' ? Text('Deleted') : Text(item.by),
          ),
          Divider(),
        ];

        snapshot.data.kids.forEach((kidId) {
          children.add(
            Container(
              margin: EdgeInsets.only(left: 16.0),
              child: Comment(commentId: kidId, itemMap: itemMap),
            ),
          );
        });

        return Column(
          children: children,
        );
      },
    );
  }

  Widget buildText(ItemModel item) {
    final text = item.text
        .replaceAll('&#x27;', "'")
        .replaceAll('<p>', '\n\n')
        .replaceAll('</p>', '');

    return Text(text);
  }
}
