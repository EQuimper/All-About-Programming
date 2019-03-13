import 'dart:async';

import 'validators.dart';

class Bloc with Validators {
  final _emailController = StreamController<String>();

  final _passwordController = StreamController<String>();

  // Add data to stream
  Stream<String> get email => _emailController.stream.transform(validateEmail);
  
  Stream<String> get password =>
      _passwordController.stream.transform(validatePassword);

  // Change data
  Function(String) get changeEmail => _emailController.sink.add;

  Function(String) get changePassword => _passwordController.sink.add;

  // Clean up
  dispose() {
    _emailController.close();
    _passwordController.close();
  }
}

final bloc = Bloc();