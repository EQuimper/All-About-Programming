# Why use Token Authentication?

1. Statelessness

Here’s the crucial bit for scalability: Your server will need to generate a token, but it will never need to store said token anywhere. All of the user metadata is encoded right into the token itself, so any machine on your network can validate any user. The server and client can pass the token back and forth forever and never store any user or session data. This is “statelessness,” and it’s the key to your application’s scalability.
