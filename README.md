# node-movie-api
practice repo to get api key for TMDb

## setup

1) Go to the main directory and run this command to get all the dependencies:
```
npm install
```
2) Look at app/config/config.js to change to your own apiKey for moviedb.
3) Make sure to have redis installed. You can find a.zip here: https://redis.io/download .
4) Make sure redis is on your PATH variable if you are using Windows. Type:
```
redis-server
```
5) NOTE: You can use redis-cli to get a command line interface and test some of your queries and it helps to keep track of how many keys you have present.

6) Make sure you run node in prodution mode: Run this command or something similar
```
NODE_ENV=production node myapp/app.js
```
7) Open a new terminal and type:
```
webpack -p
```
for a smaller webpack build, or
```
webpack -w
```
if you want to edit the React Components

## How it works
1) The setup is mostly done in the main index.js file notably using compression to get a little extra information sent to the client.
2) The routes.js just off of the app/ folder is doing the routing using a controller located in the app/controller folder where it is meant to be extended for other methods such as put/create/delete. 
I didn't use anything other than get because you are leveraging information mostly from other api's for this use case.
3) The movieTrailerController has one main method where it is sending the api request based off of the url.
If the url has data already in the redis cache, then it will return that to the user instead.
If there is no matching url then nothing new will render on the front-end. 
If there is data, then it will use the imdb id as a foreign key to get the youtube key.
NOTE: This is a nuance of the data, so if there is a movie that doesn't have an imdb key, then it won't find the trailerUrl and nothing will render from that.
From there before returning the data, it will add the new key into the redis cache using hmset.
In order to benefit from the cache, the trade-off here is that using hmset/hgetall you can use the JSON data, this will only work because the data is one level-deep. Otherwise you can use a hget/hset and appending all the values into strings.
I decided against it because there would be alot of parsing of strings on the back-end before returning any data to the user.
Though if you use hset/hget you can leverage the hsetex where only the most frequent titles will be cached rather than ones that aren't queried very often.
4) The components are located in the app/components portion where axios was used to send client requests. I stuck with a SPA because there wasn't a need for another endpoint to redirect users. 
5) The container folder is for "smart" components that have their own state, while the presentation folder is for the "dumb" components that are conditionally rendered when props are passed to them from the parent component.
NOTE:
I returned the first trailer since I figured the user didn't want a list of them. However this solution is easily extendable to include all the trailer videos by passing each of the video urls to respective Trailer Components.

## Testing
1) For the most part I had to do some research on Mocha so I left that for the last part even though it should have been done first.
2) For the tests run: and the main file is within the /test folder.
```
mocha test
```
## Next steps
1) First there is always the use of nginx to serve static content. For this I have a very minimal amount of css so using nginx on that didn't seem necessary.
2) Perhaps using multiple copies of the node server using different redis caches? Though I haven't research enough into redis to know for sure the full benefits of this versus other methods.
3) Perhaps the use of Jest for front-end testing of React components (though the components were relatively simple and most of them were "dummy" components)
4) Building up the API so that it does deal with POST,PUT, DELETE requests.


