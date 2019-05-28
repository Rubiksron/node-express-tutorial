SCRIPTS:

CSS
First thing we’re going to do is add some CSS.  This app serves its purpose as a demonstration, but let’s add some styling so the rest of the tutorial is easier to look at.
I’m going to create a new file inside the public folder called style.css.
Then, I’ll need to create a connection between the two files, so that the CSS can effect the html elements.
We’ll do this by adding a <link> tag, then add an href=‘style.css’, which is the relative path to the CSS file that we just created, and then set rel=stylesheet.

Let’s go to our CSS file and we’ll add some style to the body, h2, user_form_delete, #user_form_put, #user_form_post, #user_form, and #results. Then, we’ll go back to the browser and checkout the new look.  Looks great!!

Let’s take a quick look at the mobile view, notice how the screen becomes unreadable.  We can add a ‘meta’ tag to help the app to size to the width of the screen being used.
We add this line in the ‘head’ tag of the html file:
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">

Let’s try it out!  It works like a charm.  But, as we make calls to the server the results div gets crowded and starts to look messy if all of your requests add up on the screen.
To resolve this issue we can clear the results <div> by adding this one line of code:
document.getElementById("results").innerHTML = ' ';
We’ll add it to our function right before the line where we want to print something to the screen, so it’ll clear the div before we print new results to the screen.  What it’s doing is assigning the value in the empty string to the ‘results’ div in our index.html, thereby clearing it.

One more thing, if you look at the tab you’ll see my URL: localhost:3000, but if we add a ‘title’ tag with ‘Tutorial’ in it, then refresh and you should see that our tab now reflects our customized title.  Next we’ll look at how to DELETE a movie.

DELETE
Now we’re going to create a field for the client to interact with the DELETE function, so we’ll need to add another input field to our index.html file just like we did above with our GET and POST fields.
We’ll create a few labels, an input field, and a button.
We’ll set an: id, name, value, and type.  Then, we’ll give the form a unique #ID so that we can attach the eventListener( ) to it, then we’ll need to build our callback function to handle the event.  Let’s save this file and then look into the browser and make sure that our changes are being reflected.  Everything looks good here.
So let’s head over to our api.js file and create a variable in which we can store the connection to the ‘results’ div, through the getElementById( ‘results’) method, then we use that very variable on the next line to add an event listener.  It’s listening for a ‘submit’ and then it’ll handle the event with a callback function, here we’ll call it deletePost.
We can start building out this function just like the other two.








GET ONE
Next we’ll be adding functionality to GET a single movie from the database by providing a ‘movieId’ in the specified input field.  First off lets add the input field to our index.html file and give it the attributes required to grab the data from the input fields, so that we can assign the data to a variable in the backend and use it in our URL.
  We’ll add an if() statement in our current GET request function.
Then, we create a variable to store the value given in the input field and call it movieId = event.target.movieId.value;
Then, we can use that variable as a template literal in the URL so that we can immediately use the data provided by the user.
Then in the index.html file we need to add an input for the GET request that GETS just the one movie.
We could create a whole new function that would grab the single movie, but for simplicity I’ll just add it’s functionality into the existing GET request.

CLIENT SIDE CRUD
Before we get started let’s start up our server and make sure everything is still working properly.  Let’s jump over to our terminal window and get our code running.  Okay now that we’re set up let’s begin.
-Next we’re going to build out a shallow front-end so that our client can use the RESTful API we’ve built in their browser, because using POSTMAN is just a means to test our routes during production and make sure that they’re doing what they should be doing.  We want to add input forms so that our user has somewhere to enter values and this will enable them to interact with their database.
To do this we’ll be building in the <body> of the index.html page.
-First we’ll create a <form>, inside of which we will create a <fieldset> so that we can add input fields.
To create a api for our frontend to communicate with our backend we could set up a second server on the frontend, we could use jQuery’s ajax methods, or we could use FETCH.
-Fetch is a promise based HTTP request API, which makes chaining functionality nice and easy.
Fetch provides a generic definition of the request and response objects, along with other things involved with network requests.
-So, the next thing we’re going to do is create an Event Listener so that when a submit button is clicked it will be heard by the listener and a callback function will be triggered to handle the request.
This works the same way that routes work: the request listens for which route is used, then a route handler will be triggered to process the event and handle any data therein.
To do this we set a variable called getButton and set it’s value to ‘document.getElementById('user_form’)’
Then in the line below we’ll use that variable to add the event listener to with dot notation.  The addEventListener() method takes 2 arguments; the event to listen for and the callback function that will be called.

POST
Now to create a post functionality.
The values that are entered into the input fields will be stored in a variable and used on the back end to be plugged into the database functions.  At the bottom of the form field we’ll want to add a submit button beneath each field to allow the user to send the request.
-At the bottom of our index.html’s body, we need to add a <script> tag to connect the index.html file to the index.js file.
-We also will want to add in a <meta> tag with initial-scale=1, so that our application will resize to the window that it is being viewed on, basically making it mobile friendly.  —give demonstration with and without—
Add the file api.js to add jQuery to our code.
We’ll need to build an event handler that will take the value from the input field and ‘plug’ it into the route as a variable.
We need communication between the frontend and the backend.
Run for loop over the data object to strip the movieTitle property from each iteration, then use innerhtml() to target the html attribute tag whose id matches.

Deployment

A few things to cover before we deploy.  Heroku apps include a Procfile which specifies the commands that are executed by the app on startup. You can use a Procfile to declare a variety of process types, including: Your application’s web server.
The Procfile goes in the root of your application and will tell Heroku that we’ll be running our app using Node.js.  This file is required or you’ll receive an error message saying that you need to specify your language.  If you recall before we started using nodemon we needed to start the server with the command ‘node index.js’, this is exactly what we’re telling Heroku to do when it starts our app.

So, I’ve made a few changes before starting this video, 1. I added line 10 to the index.js file, and 2. I added a new folder named: public, inside of which I created a new file called index.html.
In this index.html page I’m going to type out a hello world message to print to the browser just so we know that the app is working when we turn on our server.

Once last thing before we’ll be deploying our app to heroku.  First of all we need to have a Heroku account, and second; a github repository.  This isn’t a tutorial on github so I’ll only explain what needs to be known for this video.

We’ll use app.use(express.static(‘public’)) in our index.js page above the other app.use( ) functions this way our app will run the express.static() method and serve our index.html file, and this is how we’ll see our hello world message.
Then we’ll run the server, using nodemon, go to localhost:3000 and we’ll see our hello world message.
Now to deploy.
Then we go to heroku to sign up for an account, start a free account, add your platform, then we can deploy.
Log into heroku by entering your password and email.
Go to terminal and run the command ‘heroku —version’ to ensure that we have heroku installed.
Now to deploy our app we go to our terminal window.
Then type ‘heroku create’
Now, if we run the command ‘git remote -v’ we can see the heroku and github(origin) remotes.git
Sometimes there is a problem, that’s okay we just need to manually add our heroku remote
with this command; heroku git:remote -a ‘app-name’
git push heroku master - this will get our app ready.
once installed and deployed we can run ‘heroku open’ and see our app in the browser.

To make a change in the future, we go back to terminal;
git add .
git commit -m “version 2’
git push origin master
Go to github and accept changes
git push heroku master
go to browser and see the changes.

DataBase

Let’s now build our DELETE route.
Now in order to update for things that are actually sent to us in the request.

Before we get started with PUT and DELETE route let’s first create a helper function.  This helper function will look up whether or not we have a certain resource in the database, and whether we do or not we will see confirmation.  First we declare the variable movie, then we open a try catch block.  In this try block we attempt to look  single resource with the findById() method that we use on our Movie database.  If that movie is null then we want to return a 404 status code and a message to let the client know that we couldn’t find their movie.  If there’s an error we want to  let them know which error so they can have clues as to what’s broken.  If neither of these error handlers are triggered then we want to set movie = res.movie, then we call the next() function, which tells our code to go to the next middleware, if there is any at all.  This procedure is necessary when we look movies by ID, if we want to UPDATE movies, or even if we need to DELETE a resource, so it makes sense to use this functionality as middleware and write our code more efficiently.  To test out this code we can add getMovie() to our GET ALL route as middleware and then go to the browser and run ‘http://localhost:3000/movies/5cdb3e3809f8dd5802b9bc88 ‘
and we should see the movie whose ID number we passed as params.   It works!! we can also return res.json(res.movie.movieTitle)
So far we’ve built a RESTful API with a mock database, which was just an array of objects in our index.js file, now we’re going to set up an actual database.  We’ll be using MongdDB to store our favorite movies. And we’re going to write our routes in a separate file, so I’ll comment out the routes that we have in our index.js file.
First off lets install mongoose with the command:  `npm install —save mongoose`
Mongoose will allow us to interact with MongoDB.

First we need to create a variable called mongoose and set the value equal to the ‘mongoose’ library.
Then, we’ll want to connect to database, so we’ll use the .connect() method.  In the .connect() method we’ll pass the  connection string to our database.
Let’s try to run our server and make sure there are currently no issues… we see a warning here in the terminal window, this is a Deprecation warning;
“DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.”
So what we’re going to do to bring our code up to date is to pass the object ‘{ useNewUrlParser: true } ’ as a second parameter to the connect method.
Then when we run our server with nodemon we see that the warning has gone away.
We are also going to add db.once(‘open’, () => console.log(‘Connected to Database’); this way we have some confirmation that we have connected to our database.
We’ll keep our code clean by declaring a DATABASE_URL variable to store our connection string in.  Then we can pass the variable into the mongoose.connect() method.
Next we’ll create a separate file for our routes up at the top of our index.js file. Then, we’ll create that folder and that file.  So, we click on new folder, we’ll go ahead and name it routes, then we’ll create a new file inside of our routes folder called movies.js.
Next, we’re going to use the app.use() method to access our movies.js file in our routes folder and pass ‘/movies’ as the first parameter.  The second parameter will be ‘moviesRouter’, which will be our route handler.
Over in our movies.js file we’ll start adding dependancies; for example express, we’ll require that module in, and then also the router from express like this:  const router = express.Router(); , then we set this file up for export by adding module.exports = router; to the bottom of the file and now were set export from this file and import to another file.
So the last video left off with declaring the moviesRouter in an app.use() method in the index.js page. If we look into our terminal window we’ll see that it is yet to be defined, and that’s because it does not yet exist.   now we need to declare the variable moviesRouter and set it’s value to require() the contents of movies.js.
Then lets create a folder called routes, then create a file named movies.js where we will create our routes.
GET :ID
The next route we want to create is one that will take parameters, so that we can target a movie to view or to target a movie that we want to update or possibly delete.
So lets build out this GET route just below and then add the :id param to the end of the PATH.
Then we add the route handler function and we will return res.send(req.body.params) in the code block and the go POSTMAN so that we can test the functionality of our route.
This is the way that we can test whether our params are being passed properly. On the update route we want to use ‘patch’ and not ‘put’ because we only want to update the properties passed as a parameter.

We open up POSTMAN and set our URL, select a GET request and run it, and we see our message: “hello world, how are you?”
Let’s go down to the GET route that grabs a specified ID and use th res.send(req.params.id) method to print our id, which again is anything passed into the URL at the end of this route.  And we see our ‘id’ in the browser! Let’s change it and try it again… success.  Now we know our router is connected to our index.js and our route is working.
Let’s also create the shell of our PUT and DELETE functions, perfect.

Next we want to create our database models so we’ll make a folder called models, and inside we’ll create a file named movie.js.
A the top of this file we need to require in mongoose.  This will allows us to work with MongoDB nice and easily.
Next we want to create a variable called movieSchema and set its value to a new instance of mongoose like this:  const movieSchema = new mongoose.Schema({}).   mongoose.Schema will take a JavaScript object that will list our models properties.
Our mongoose schema will have 3 properties: the movieDirector, movieTitle, and movieDate.  Each property while have an object value to it’s key where we will specify whether or not this property is required.  This is also the place where we will specify what ‘type’ this property is.
Next we’ll set up our POST route, so that we can create movie objects in our database.

Now in our GET route we will set up our GET ALL code block.  We are going to use async/await here.  Async/await always returns a promise.
Basically what we’ll be doing is using a try/catch block.  We want to set up our code like this: router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
If we were to send this GET request now all that we’ll see is an empty object because we don’t have any movies in our database, yet. GO TO POSTMAN and show this to be true.
Since we don’t have any movies in our database we are going to create some using our POST method, so let’s build our POST method so that it’ll take new movies.
201 status code means that we’ve successfully created a new object.  If not specified, by default a 200 server status code will be sent, which is correct, however a 201 code is more specific so we’re going to use it to let the user know that a new object was in fact created in our database.
When we go to POSTMAN to test our route we can see that an object is created.  It automatically has an ID assigned to it, it has the ‘movieDirector’, ‘movieTitle’, and ‘movieDate’ properties just as we specified in the movie.js model.
If we don’t pass one of the required properties we’ll see an error message.  SHOW A POST ATTEMPT WITHOUT ONE OF THE REQUIRED PROPS.

REQUIRE.JS
Quick lexical arrow note: While arrow functions allow us to write cleaner code, and allows us to write one line functions we should keep in mind that we can’t build a constructor or class out of arrow functions.  This is because they don’t have the ‘this’ property, so arrow functions are unable to refer to itself, it instead refers to the nearest outer scope, so, again, there is no inheritance with arrow functions.

So we’ve gone from 78 lines of code in our index.js file to 58 lines of code.  Now i’m going to show you how to make this code even more streamline.  We’re going to move some error handling to another file as it’s own function and export it from its file, and import it into our index.js file so that we can use it’s functionality where we need it.

A quick note: require() is not part of the standard JavaScript API. But in Node.js, it's a built-in function with a special purpose: to load modules.
In fact, Your application is much easier to maintain if you keep your functionality separated into files of no more than one function in it.  Modules are a way to split an application into separate files instead of having all of your application in one file.

It’ll be much easier to debug your app, too.  If we have all of our functionality in one file we might have to look through hundreds or even thousands of lines of code to find our bug, separating our files like this a great way to set ourselves up for success.

Now I’ll show you how to build your own validate() function and import the module into the main index.js page.
First let’s create a new file, called validate.js.  This is where we’ll define our function to be exported.
We’ll start by declaring a variable; validate and passing req and res.

Here we’re going to take the ‘if()’ statement out of the POST route in lines 32 - 37.
This if() statement will be validating the incoming lesson object that is to posted, so we’ll call this function validate.
You can see above that it is checking the length and existence of the ‘lesson’ that is attempting to be POSTED.
Then, we paste the if() statement into the function shell and set module.exports = validate;
This will create a ‘wrapper’ that will enclose the contents of the file and make them exportable from and importable to other files.
To use this validate() function in our POST and PUT route in our main index.js page we need to import the file into index.js by using the require(); function.
So at the top we declare a variable called ‘validate’ and assign it the value of the imported ‘./validate.js’ file.  By doing this we are creating a connection between the two files and therefore able to share the functionality in that file.
So, let’s test the error handling with POSTMAN and make sure that we can still run the POST and PUT methods.
const validate = (req, res) => {
  if (!req.body.lesson || req.body.lesson.length < 3) {
    res
      .status(404)
      .send('lesson is required and must be a minimum of 3 characters long.');
    return;
  }
};
module.exports = validate;

REFACTOR
Now that we have our routes written out, were going to take a look at where we can clean up our code.  One thing that we can do as programmers is we can make comments in our code, for any other developers that might be looking at our code in the future.  There is not a lot of code here that is hard to understand, in fact these routes are pretty straight forward, however at some point you will be writing more complex code, in which case it is a good idea to take a few notes written into your code as a comment.  I’ll go ahead and note the different routes, just to be clear.

For example the ‘if()’ statements only need to open curly braces if the code block is more than one line long, otherwise you can put the code on the same line as the ‘if()’ itself.
So, we delete the surrounding curly braces and then backspace until the if() statement is entirely on one line, then you can see here we have a much cleaner way to write this statement’s functionality.

Also, at this time we’re going to talk about arrow functions.  Arrow functions are a cleaner way to write your code, but there are other functional differences to note.
The arrow function has a few differences than regular ES5 functions.
For example we can’t build a constructor or class out of arrow functions because they don’t have the ‘this’ property, so it is unable to refer to itself, it instead refers to the nearest outer scope, so, again, there is no inheritance with arrow functions.
Also, If your arrow function has only one parameter then you don’t need the parenthesis.
DELETE ROUTE
So far we have built GET routes, a POST route, a PUT route, and now we’ll be creating a DELETE route.  Just as we did in the PUT route, we’ll be reusing some of the code that we’ve already written.  Were going to borrow the lookup from our get route along with the error handling, so that if the requested ID is not found the client will be told so.  Then we have two new array methods that we’ll be using: the indexOf() method and the .splice() method.
  //Look up lessons
  //If it does not exist, return a 404
  //delete
  //Return the lesson

  const index = lessons.indexOf(lesson);
  lessons.splice(index, 1);
  res.send(lesson);

PUT ROUTE

Now we’re going to create a PUT route to update existing lessons.  First, we want to:
  //Look up existing lessons
  //If lessons do not exist, return a 404 error - not found
  //Validate the input
  //If input is invalid, then return a 400 error - bad request
  //Update the specified lessons
  //Return the updated lesson to the client, in the browser

From here we can reuse some of our code that we have in our GET and POST routes. So, we’ll borrow lines 21 - 26 from our GET route, since all we will be doing at this point is looking up our current lesson. Just make sure that we grab the error handling.  Then from our POST route we’ll grab lines 31 - 35, which will ensure that our request has both a lesson and a lesson that is at least 3 characters long.

lesson.lesson = req.body.lesson;
  res.send(lesson);

INPUT VALIDATION
Now we’re going to talk about input validation.  As a best practice we should never trust any data that is coming in from a client.  We should always validate the input.  In this example we have only one property which is lesson.
If req.body.lesson does not exist , or if req.body.lesson.legnth is not at least 3 characters long then we can send an error message to the client.  Best practices say that we should respond with the http status code, which here is 400, which means bad request.  To do this we will call res.status(400) .send() an error and then add a generic error message. This is a very simple example, sometimes you’ll be dealing with a POST object that has multiple properties to validate, but you would go about it in the same way.  So if we go back to POSTMAN and  post a lesson whose lesson property is less than 3 characters long we will see our error message, which is coming from line 15 in our code.  If we attempt to POST a lesson without out a lesson property we should see and error.

POST
So now we have two get routes; one that will return all of the lessons, and one that will return a specified route.  In this lesson we’re going to create a route that will respond to http POST requests.  To make a POST request would mean creating a new lesson.  Let’s get started!

Instead of GET we’ll be using the POST method and our PATH will be /api/lessons.  In the callback we pass the request and response object.  Now, in this route handler we need to read the lesson object, in the body of the request, and use its properties to create a new lesson object and then add that object to our lessons array.

So let’s create a new lesson object. Since we’re not working with an actual database right now we need to manually assign an ID to the object,  to do this we get the length of the lessons array and add one to it, this way we won’t duplicate any id numbers.

When you are using an actual database an ID will be assigned to each new entry automatically.  Next is the lesson property, which we will read from the body of the request, so we assign the lesson property to the value of req.body.lesson.
Next we need to enable the parsing of JSON objects in the body of the request, because this is not enabled by default in Express.

We do this by adding some middleware to our app.  At the top of our file we want to type: app.use(express.json()); which will parse any JSON coming from our incoming request object.

The next thing we want to do is add our new lesson to our array by using the push method into which we will pass our new lesson object.  Then as per best practices we will want to print the new object to the browser for our client to have some confirmation that they did in fact POST a new lesson, we’ll do this by using .send() on the response object.

To test our POST route we’ll be using a Chrome Extension called Postman.  If you haven’t used Postman before its easy to download and get started.  Lets take a look at the site now.  Postman offers a clean and easy to use UI with response codes and shows the body of the POST, if you might need to get the ID number for example.

At the top we want to set our method in the dropdown to POST, then type out our URL which will be http://localhost:3000/api/lessons.  Select body, then to set the body of the request,  from the list select raw, then dropdown to JSON, this way we can use a JSON object in the body of the request.  We’ll add the property ‘lesson’ and give it a value, but you’ll notice that we don’t need to create an ID because our code is doing that for us already.
We look down and we can see that our server code is 200, which is a success, and we can also see that our ID is now 4, because we now have 4 lessons in our array, and the lesson property is the same value that we sent to the server.   In this POST request we are assuming that our client has included all required fields to create a new lesson object, but what if the lesson property was missing or they send a lesson that is too short.  We’ll talk about input validation in the next lesson.

RESTFUL API
Now were going to implement what we've learned so far to build a RESTful API.
When building an application one must consider two main concepts: the client-side, or the UI that the client will be using when accessing the app, and the server-side which uses http protocol and its many services.  The client can use http services to 'talk' to the server.  This is where a RESTful API comes in.
HTTP methods are GET for getting data, POST for creating data, PUT updating data, DELETE deleting data.

---Open the express download page and show how many downloads have happened that day and that week--- explain it has 7.5 million downloads this week due to it’s lightweight and easy setup and it’s documents are very well written.

1.mkdir express-demo
2.cd express-demo
3.npm init (go through the process) now we have a 4.package.json file
5.npm i express
6.create index.js
7.require express module
8.const app = express()
this app object has many helpful methods
app.get()
app.post()
app.put()
app.delete()
But here we are only using GET, this method takes two arguements, first the endpoint and the second is the callback function. This function will be called when this endpoint is hit.  The function will have two arguements; request and response.  This request objects has a lot of useful properties about the incoming request, if you'd like to learn more about these you can look at the Express documentation as their documentation is very well written.
--Go to expressjs.com and click the API reference tab and then click request on the side bar to show the different properties that the request object has.---
Back to the code, when we get a http get requst we will respond with a 'hello world' message.

app.get('/', function(req, res) {
  res.send('Hello World');
})

This is how a route is defined, we have the PATH or URL and the callback function, which is also called a route handler.
Now we need to set our PORT.  We can hard code the variable PORT, or we can dynamically set it which we'll talk about soon.
Now lets jump over to our terminal window and run 'node index.js'.
Let's go to chrome and see our hello world message.

Now to define another route.

app.get('/api/lessons', function(req, res) {
  res.send([1, 2, 3]);
})

Again we are using 'app' then we use a dot to access the GET method.  This PATH will be /api/lessons and then the callback function is taking the req and res.  Here in this route we will get a list of lessons from our database and return them, normally.  We don't have a database so we'll create a mock database while continuing to focus on setting up our endpoints for our RESTful API.
So, instead we'll return an array of numbers.
In the terminal window we need to stop and start our server again so that it will reflect the changes that we've made.
With this structure we can move our routes to different files as our application continues to grow, and in that way we can keep our main index.js page clear and easy to read.
So each time we've made a change we have been stopping the server and starting it again.  As we talked about earlier we do have 'nodemon' so let's use it now.  Again nodemon detects any changes made in the app and will restart each time, so that changes made are immediately reflected.
Nodemon is short for 'Node monitor' and the way to install this is to run 'npm i -g nodemon' and now we can use it.
Instead of using node we will be using nodemon.
--start nodemon in terminal--
Go to the browser, make a change and show in terminal that nodemon has detected a change and has restarted as a result of that change. We no longer need to do this manually.
Now to set the PORT to a dynamic variable. When you deploy an app the PORT is dynamically assigned. The value will be set outside of this application.
The way that we can fix this is by setting our PORT variable to process.env.PORT || PORT, so that when our app is used it will look first for the .env file and if one is not found, then it will set the value to the default of 3000.
Then we change our message accordingly.
THIS...
app.listen(3000, () => {
  console.log('listening on port: 3000');
});

BECOMES...
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
If PORT 3000 was not available then we could set an environmental variable in the terminal window with the command:  ‘export PORT=5000’.  If we restart our server then we can see that our PORT  has now been set to 5000 as our console.log shows.
This variable will only exist until your terminal window is closed, then it will be set back to the value set in the .env file or it will be set back to the default value.
—————————start here——————————————


Now we are going to create a route that will return a single lesson.  So, we’ll begin by creating another get route.   This path will be similar to the one above, but here we’ll be adding another parameter, so we add colon, then id.

However, in the PATH we’ll be adding  ‘:id’.  Then we add the callback function or route handler which takes the request and response objects as arguments.

Then in the code block we’ll use res.send(req.params.id) to send the ‘id’ to the client-side to be shown in the browser, so that we can read the parameters in the browser. When we look to the browser we type 3000/api/lessons/1 an we see that the parameter has in fact been printed to the browser.

It is also possible to have multiple parameters.  Let’s say that you were going to have a movie database and when you post to that database you will need the year and title of the movie,  so we would change the PATH to /api/:year/:title and with this we can get the movies that were posted with that title or movies that came out that year.  First we remove the .id from the req.params and we will see our

We could use req.params.year or req.params.title, and it would return those properties, but lets take a look at the req.params.  Here we have our params object with the two properties;  year and title,  those properties come from the route parameters.
With Express we can also get the query string parameters that we add in the URL after a question mark, for example we can get all of the movies posted from 2019 and sort them by name.

So we add a question mark, followed by sortBy and set it to name.  /api/posts/2019/sortBy=name.
This is a query string parameter we use query string parameters to add optional values.  The routes are for essential data and the query string is for optional data.  Now back in our editor we change req.params to req.query, save the file and then go to the browser and we can see the query object where the values are saved in key-value pairs.


Now we still haven’t created the route to return a single lesson so we’ll go ahead and do that now. The next thing that we’ll do is move the array of numbers into it’s own variable.  So, we’ll take the array out of the .send() method and declare it above
as an array of lesson objects, each one representing it’s own lesson.

In this array we’ll have 3 lesson objects each one with a couple of properties, and in this case we’ll add an ‘id’ and a ‘lesson’ property.
Then we’ll pass lessons as a parameter into the .send() method like this: ‘res.send(lessons)’.
And if we go the terminal we see that nodemon has restarted our server, and if we go to the browser we can see that our lesson array has been printed to the DOM or the document object model in our browser.

So, we already have a route that gets all of the lessons and now we have the start of a get route that will grab just one lesson at a time.  In the first route we’ll pass the lessons array and in the second route we’ll attach the .find() method to our lessons array.  The .find() method is native to all JavaScript arrays and will return the lesson that matches the given criteria.

.find() method returns a boolean value of whether or not this is the lesson that we are looking for.
We’re going to pass a callback function as a parameter to the .find() method and pass ‘l’ for lessons as a parameter, then we look for the l.id to match the req.params.id that is passed into the PATH or URL.

However, req.params.id returns a string, so for the comparison to work we need to parse the params by adding parseInt() and wrapping req.params.id to convert it into an integer. parseInt() is a global method of JavaScript.  Then we’ll want to store the value returned in a variable called ‘lesson’.
Now we need to run a check, we set an if statement to check if a lesson exists at all, and if it does not we’ll send a response to the client with res.status() and we’ll pass an error code of 404, then we’ll use .send() to chain a message to the response and pass the string “The lesson with the given ID was not found”.
And if the lesson is found we want to send it to the client like this: res.send(lesson);   now let’s test our code.  If we select /1 we will see the record for lesson 1, but if we look for 15 we will get our error message.  That message comes from our code in the if block.  And to ensure that our status code is a 404 we can open up our developer tools and go to INSPECT then to the  NETWORK tab, refresh and see our status code.  And a 404 means not found.

Node.js allows us to create and handle custom events by using the events module. The Events Module includes the EventEmitter class, which can be used to raise and handle custom events.
JavaScript is an event driven language, so it’s very helpful to have customizable events.

When we require in this module we want to capitalize the variable name because it is a class.

Here we are using the events module through the emitter variable and through method chaining we are accessing the .on() method.
The .on() method in this example takes two parameter: the name of the event that this emitter is listening for, and the callback function.  This callback function is going to trigger a console.log that will print a message to the terminal window that says; “listener has been called”.

REMEMBER: We need to register the emitter before we call it’s function because this process is asynchronous.

The emit() method raises the specified event that is passed as a parameter, then triggers the callback function.  The first parameter is the name of the event, as a string, and any additional parameters are whatever arguments you wish to pass. But, In this example we’ll only be passing a callback function that will log a message to the terminal window, just so that we’ll have proof of concept. We can also run two emitters back to back.  just below I have another emitter. Let’s uncomment it and run the code again.
Down below I have created a sequence of emitters that when the first is triggered it will call the next emitter in line, which in return will call the next.

As you can see I’ve named these first, second, and third events for simplicity.  At the bottom is where the .emit() method calls the first event, which calls the second event, which in return calls the third and final event.

A real world example might be creating a user, then wanting to store that user in your database, and then finally reflecting those changes in the browser for the client to see that their user account has been successfully created and saved.

Again, this is a very simple example to demonstrate the concept and purpose of event emitters, but even here you can see how powerful event emitters can be.


Now we’re going to take a look at creating multiple routes including sub routes and routes that use middleware.  We can create a route, let’s call it ‘/example’, and we can use res.send() to send a message to the browser when that endpoint is hit.

Looking at the get method on line 5 we can see that the first parameter passed is the endpoint, and when that endpoint is hit it will trigger a callback function.
That function will use the .send() method to attach a message to the response object, so when we look in the browser we should see the message: “Hello from the example route”.

Now if we were to hit the sub route ‘example/c’ we should see a specific message fired off by the callback function, which is “hello from sub-route C!’.
The same behavior is expected of sub-route ‘example/b’, so to show the result we go to ‘example/b’ and we should see the message:
“Hello from sub-route B!

Now I’m going to talk more about middleware; here on line 17 we have a callback function named callbackOne.  If you look at the parameters that the function takes you’ll notice that req and res are there as per usual, but in addition we have ‘next’ as a 3rd parameter.  The next() function tells your code to move on to the next middleware function, if there is any at all.  If we don’t add the next function the code will get stuck on the first callback.
You’ll see that on line 19 the next() function is invoked, and this is so that we can move on to callbackTwo.

If we look at route ‘example/d’ we see that we have two callback functions one after the other.  The reason that we are able to structure our code like this is due to the next() function, which again will tell our code to move on to the next function in sequence.

So, when we hit the endpoint ‘example/d’ the code will fire off a console.log that will be printed to the terminal window and then the second function will use the .send() method to write a message to the browser.

Next were going to look at passing middleware functions in an array.  Here on line 42 we can see an array of the 3 callback functions that are declared above being passed as a parameter all at once.

When we hit the endpoint '/example/c/withmiddleware' in the browser we will see the message from callbackThree on the page.  Here we can see ‘callbacks triggered’, and if we go to the terminal window we can see that the console.log from each callback has been printed to the terminal window.

node has an http module that can be used to create a simple server.  First we need to require the ‘http’ module and assign it to a variable called http.
Then, we can start building the server object:

First we use http, the module, then chain the createServer() method.  This method takes two parameters: the request and the response object.

Inside this function we’re going to use the .write method to write a message to the browser, then we use the .end() method to let the server know that our message is complete.

At the end of this object we want to use dot notation to chain the listen method so that we can tell the server which port to listen on, and also to pass a callback function that will confirm that the server is not only running, but running on the right port.
Once we’ve built out this structure we can run a quick test to ensure that the server is responding.

What we can do is conole.log(req.url) go to the browser and attempt to hit a few end points and see if those logged urls are printed to the terminal window.
————————————————————————————————————————————————————————————
const http = require('http');

http
  .createServer((req, res) => {
   console.log(req.url);
  })
  .listen(3000);
  });

————————————————————————————————————————————————————————————
var http = require('http');

var PORT = process.env.PORT || 3000;

var server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Home Page!</h1>');
  }
  console.log(req.url);
});

server.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});

————————————————————————————————————————————————————————————
File System is a node module that will allow for the reading of files on your computer.  If you’ve ever uploaded a file to a website that had a button that said ‘browse’ then you have used FS.readfile.  FS.readfile allows for you to search your file directory and select a specific file to upload.  The FS module also lets you create files or directories and write to them too.

Here we are calling the FS module and chaining the mkdir method.
The mkdir method takes the current dir name and the second param is options, which we don’t have so i’ll pass an empty object, and then lastly mkdir takes a callback function, so we can  handle any errors that should occur.

When we run this function, you can see that it does create the folder.
Now, if we wanted to write to this file we would use the fs.writeFile() method which takes 3 params:
The path, The text itself, and a callback function that will handle any errors.
If we wanted to append text to this hello.txt file we could try copy an pasting the function below.
But we’ll find that the second fs.writeFile will override the first, no problem we just need to use the right tool for the job.  That tool is the fs.appendFile() method.

fs.mkdir(path.join(__dirname, 'test-folder'), {}, err => {
  if (err) throw err;
  console.log('File being created...');
});

fs.writeFile(
  path.join(__dirname, 'test-folder', 'hello.txt'),
  'Hello World!',
  err => {
    if (err) throw err;
    console.log('File being written to...');
  }
);

fs.appendFile(
  path.join(__dirname, 'test-folder', 'hello.txt'),
  ' fs.appendFile just added this text to existing text!!',
  err => {
    if (err) throw err;
    console.log('File being written to...');
  }
);

Now I’m going to show you how to use another express method.
First we’re going to create a file named path.js.
Then we use the require function to bring in the path module. We’ll require in the module and assign it to a variable, path, then we’re ready to use it.

The Path module comes with it’s own set of methods and now we’re going to use a few of them.

There will be times that you need to separate parts of a url or dissect a file path and this method is a great tool to use for that.

If we look here at the node.js documentation on the path module we can see many methods that come built-in.

Basename, gets the base file name.
If we console.log(path.basename(__filename));
it will give us just the filename at the end

Now, if we were to log:  console.log(path.basename(__filename));
We get back path.js
Just the directory name:
console.log(path.dirname(__filename));

var path = require('path');

//BASENAME GIVES THE FILES NAME
console.log('basename:', path.basename(__filename));

//DIRNAME GIVES THE DIRECTORY NAME
console.log('dirname: ', path.dirname(__filename));

//EXTNAME GIVES EXTENSION DIRNAME
console.log('extname: ', path.extname(__filename));

//CREATE AN OBJECT AND THEN ACCESS WITH DOT NOTATION
console.log('parse: ', path.parse(__filename).base);


Using express we are also able to serve static files.  Static files are files that the client has downloaded as they are from the server.
Express does not allow you to serve static files by default, so we need to enable it using built-in middleware.

Now that we’ve scene how to create a route with an endpoint and callback function, now we’re going to use the router methods provided by the Express package.  First off let’s start our server with nodemon and run the existing route we have coded in our index.js, to prove that it is still working.

Then we will create the same route using the express router. To do this we use a separate routes.js file that will contain our GET request to the /hello route.
This routes.js file will use the require function to import the express module and then we’ll declare a new variable ‘router’ that will be using the express router, so we want to set router equal to the entire express framework up which the router method will operating.
At the bottom of the routes.js file we need to export the router functionality so we use: module.exports = router;  so that we can import this functionality into the index.js file.
Once we have connected routes.js to index.js we are able to use the express.router

Defining multiple routes on an app can be quite tedious to maintain so we want to separate the routes file from our main index.js

Middleware functions are functions that have access to the request object, response object, and next middleware function in the app request-response cycle.  These middleware functions are used to modify the request and response objects for actions such as parsing request bodies or adding headers, just to name a few.
Our middleware is going to use the inbuilt JavaScript function Date.now( ), which will return the number of milliseconds elapsed since January 1, 1970.  This is a simple example to demonstrate how middleware can be used to append data to an existing request object.  Our middleware will be called for every request to our server.  So, after each request we will get a message in the terminal window that show exactly when the request was made

Your code will be much easier to manage if you are able to separate your code into different files.  Ideally you would separate your program into files that contained no more than one function or component.
If you have a complex app you would have to scroll through hundreds or thousands of lines of code to resolve any issue occurring in your program, which can make debugging very difficult.
To handle this modularity JavaScript comes equipped with imports and exports.
In order to use a function from file B in file A we have to export the function from file B and import the function into file A.

To do this we use RequireJS.  Before we get started I’m going to install nodemon, which updates our the browser without restarting the server. To install nodemon we type this command in the terminal window: npm install —save-dev and then the name of the module which is nodemon,  or just  or —D which is a short cut and will do the same thing.  If we look in our package.json we can see that nodemon has been added to our dependencies.

So, if anyone were download our software they would only have to run the command: npm install and node would download all of the packages in the dependencies section of our package.json file.
I’m going to show you a simple example of how one can import a file using require.js.
