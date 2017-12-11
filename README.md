# task1
# Instructions to run the app on your system:-
1)Assuming that your system already has NodeJS/ExpressJS intalled, first create a folder in c:\ drive named "myapp"(or any name of your choice) and then place all the files on the task1 git repository in this folder.
2)To run the app, write command "node app.js" in command prompt and go the url http://localhost:8080/
(Note: Make sure that you are present in your local directory(i.e. "myapp" folder in this case) and then execute above command)
3)Some important instructions:-
->Please refresh the web page if you are not able to see the output on the webpage.
->And,for the http://localhost:8080/input page , after clicking on  "ok" button, you can check the output in the command prompt.

#Following are the details about the app file "app.js":-
app.js:Consists of expressJS code.It has been segregated into 7 snippets(snippet no. is indicated through comments in the code) where each snippet is used for:-
snippet 1:A simple hello-world at http://localhost:8080/ that displays a simple string like "Hello World - Arpit"; replace "Arpit" with your own first name).
snippet 2:Add a route, for e.g. http://localhost:8080/authors, which:
fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users
fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts
Respond with only a list of authors and the count of their posts (a newline for each author).
snippet 3:Set a simple cookie (if it has not already been set) at http://localhost:8080/setcookie with the following values: name=<your-first-name> and age=<your-age>.
snippet 4:
Fetch the set cookie with http://localhost:8080/getcookies and display the stored key-values in it.
snippet 5:Deny requests to your http://localhost:8080/robots.txt page and display the denial message at http://httpbin.org/deny .
snippet 6:Render an HTML page at http://localhost:8080/html or an image at http://localhost:8080/image.
snippet 6:A text box at http://localhost:8080/input which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.
