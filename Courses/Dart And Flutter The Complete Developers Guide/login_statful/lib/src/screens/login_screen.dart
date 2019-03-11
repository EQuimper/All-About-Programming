import 'package:flutter/material.dart';
import '../mixins/validation_mixin.dart';

class LoginScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return LoginScreenState();
  }
}

class LoginScreenState extends State<LoginScreen> with ValidationMixin {
  final formKey = GlobalKey<FormState>();

  String email = '';

  String password = '';

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(20.0),
      child: Form(
        key: formKey,
        child: Column(
          children: <Widget>[
            emailField(),
            passwordField(),
            Container(
              margin: EdgeInsets.only(top: 25.0),
            ),
            submitButton(),
          ],
        ),
      ),
    );
  }

  Widget emailField() {
    return TextFormField(
      validator: validateEmail,
      onSaved: (value) {
        email = value;
      },
      decoration: InputDecoration(
        labelText: 'Email Address',
        hintText: 'you@example.com',
      ),
      keyboardType: TextInputType.emailAddress,
      textCapitalization: TextCapitalization.none,
    );
  }

  Widget passwordField() {
    return TextFormField(
      validator: validatePassword,
      onSaved: (value) {
        password = value;
      },
      decoration: InputDecoration(labelText: 'Password', hintText: 'Password'),
      textCapitalization: TextCapitalization.none,
      obscureText: true,
    );
  }

  Widget submitButton() {
    return SizedBox(
      width: double.infinity,
      child: RaisedButton(
        child: Text('Submit'),
        color: Colors.blue,
        textColor: Colors.white,
        onPressed: () {
          if (formKey.currentState.validate()) {
            formKey.currentState.save();

            print('Time to post $email and $password to my API');
          }
        },
      ),
    );
  }
}
