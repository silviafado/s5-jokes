# s5-jokes

# Description:

This project creates an asynchronous web app that uses a web API to dynamically update the UI with jokes for the user and the current weather in Barcelona. Local server running on Node and Express Enviornment.


# Requirements:

This project runs on a local server that should be initialised through express. It uses Node. 

It should be installed express, cors and body-parser for the local server to work.

```
npm install express cors body-parser
```


# Instructions to use:

Initialise the server running on the console:

```
npm start
```

The current weather and temperature in Barcelona will appear in the web header. 
Click the Next Joke button and you will get a random joke from the project's given API https://icanhazdadjoke.com/ or from Chuck Norris API.
After reading the joke you can rate it with one of the 3 score buttons; clicking the desired score button will generate a entry in the report array as requested.


Note: Score buttons will only appear after clicking the Next Joke button. Once you click one of the score buttons the report entry will be generated.
