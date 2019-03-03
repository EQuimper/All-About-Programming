import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' show get;
import 'package:pics/src/models/image_model.dart';
import 'package:pics/src/widgets/image_list.dart';

class App extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return AppState();
  }
}

class AppState extends State<App> {
  int counter = 0;

  List<ImageModel> images = [];

  void fetchImage() async {
    counter++;

    final url = 'https://jsonplaceholder.typicode.com/photos/$counter';
    final res = await get(url);
    final parsedJson = json.decode(res.body);
    final imageModel = new ImageModel.fromJson(parsedJson);

    setState(() {
      images.add(imageModel);
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Let's see some images"),
        ),
        body: ImageList(
          images: images,
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: fetchImage,
          tooltip: "Increment",
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
