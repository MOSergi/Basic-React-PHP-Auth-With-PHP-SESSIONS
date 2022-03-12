# Basic-React-PHP-Server-Side-Auth

This project is an example-test of authentication using React and Php.

# Explication

This project is an example-test authentication using React and Php. Authentication is performed at the time it is validated that the user is created and their credentials are correct. At that moment, a Session is created on the server side where it will be saved if the user has logged in or not. To do this we will use the PHP sessions together with the "include" credentials directive when we make the request to the server and on the server we will allow the use of credentials with the corresponding header. With this we achieve that the server, when creating the session, sends what is known as a "session cookie" to our frontend.

# Consider

As already said, this is a test or example project to practice this type of authentication, so if you want to implement a similar design, do some research if you are in the best shape, since, as already mentioned, this project it is made as an example or test to practice this type of authentication
