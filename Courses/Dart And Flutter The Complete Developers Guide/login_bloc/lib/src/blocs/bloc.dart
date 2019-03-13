import 'dart:async';

import 'package:rxdart/rxdart.dart';

import 'validators.dart';

class Bloc with Validators {
  final _emailController = BehaviorSubject<String>();

  final _passwordController = BehaviorSubject<String>();

  // Add data to stream
  Stream<String> get email => _emailController.stream.transform(validateEmail);

  Stream<String> get password =>
      _passwordController.stream.transform(validatePassword);

  Stream<bool> get isValid =>
      Observable.combineLatest2(email, password, (e, p) => true);

  // Change data
  Function(String) get changeEmail => _emailController.sink.add;

  Function(String) get changePassword => _passwordController.sink.add;

  submit() {
    final validEmail = _emailController.value;
    final validPassword = _passwordController.value;

    print('Email is $validEmail and password is $validPassword');
  }

  // Clean up
  dispose() {
    _emailController.close();
    _passwordController.close();
  }
}
