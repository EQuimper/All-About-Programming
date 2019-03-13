import 'dart:async';
import 'dart:html';

void main() {
  final ButtonElement button = querySelector('button');
  final InputElement input = querySelector('input');
  final DivElement div = querySelector('div');

  button.onClick.take(4).where((event) => input.value == 'banana').listen(
      (event) => print('You got it!'),
      onDone: () => print('Nope, bad guesses'));

  final validateEmail =
      new StreamTransformer.fromHandlers(handleData: (inputValue, sink) {
    if (inputValue.contains('@')) {
      sink.add(inputValue);
    } else {
      sink.addError('Enter a valid email');
    }
  });

  input.onInput
      .map((dynamic event) => event.target.value)
      .transform(validateEmail)
      .listen(
        (inputValue) => div.innerHtml = '',
        onError: (err) => div.innerHtml = err,
      );
}
