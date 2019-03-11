import 'dart:async';

class Cake {}

class Order {
  String type;

  Order({this.type});
}

void main() {
  final controller = new StreamController();

  final banana = new Order(type: 'banana');
  final order = new Order(type: 'chocolate');

  final baker = new StreamTransformer.fromHandlers(
    handleData: (cakeType, sink) {
      if (cakeType == 'chocolate') {
        sink.add(new Cake());
      } else {
        sink.addError('I cant bake that type!!!');
      }
    },
  );

  controller.sink.add(order);
  controller.sink.add(banana);



  controller.stream.map((el) => el.type).transform(baker).listen(
      (cake) => print('Heres your cake $cake'),
      onError: (err) => print(err));
}
