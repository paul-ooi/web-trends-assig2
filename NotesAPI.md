# NoteLog API
By Paul Ooi

## Introduction 

The NoteLog API (v1.0) is a RestfulAPI service that has a number of note entries for you to pull and read. Make calls to this API to retrieve notes in a _JSON_ format so that you can display them on your site with your own styling.

## How to use this API 

### Access Endpoint
http://api.paulooidesign.ca/notes.php?api_key=_[YOUR-KEY]_&user=_[YOUR-USERNAME]_ 

Contact me if you want access and I'll provide you an _API KEY_. Use it along with your _User Name_. You can use the above endpoint with your details as parameters. This will return an array of JSON Object(s). 

Each Note is a JSON object that will have the following structure
``` TypeScript
class Note {
    id : number;
    title : string;
    date_created : Date;
    body : string;
    archived : boolean;
    category_ref: number;
}
```

You can use jQuery to make a request using AJAX to the endpoint and recieve your results.
```JavaScript
        $.ajax({
            url: 'http://api.paulooidesign.ca/notes.php',
            data: $.param(options), //CREATE AN OBJECT OF THE api_key AND user TO BE PASSED IN AS PARAMETERS
            success: function (results) {
                console.log(results);
                //STATUS CODE IS 200, OK
                //HANDLE YOUR RESULTS IN THIS CODE BLOCK
            }
        })
```


### Example Request 

```JavaScript
        var options = {
            api_key: 'trends',
            user : 'Lee'
        };
        $.ajax({
            url: 'http://api.paulooidesign.ca/notes.php',
            data: $.param(options),
            success: function (results) {
                var arrayOfNotes = JSON.parse(results); //Parse the Array of JSON objects so JavaScript can use them
                var dataDiv = document.getElementById('data');
                dataDiv.innerHTML = "";
                arrayOfNotes.forEach((note) => { //go through each of the JSON objects and add them to a DIV on the page
                    dataDiv.innerHTML +=  '<h2>' + note.title + '</h2>'; 
                    dataDiv.innerHTML +=  '<p>' + note.body + '</p>'; 
                    dataDiv.innerHTML +=  '<p>Date Created: ' + note.date_created + '</p>'; 
                    dataDiv.innerHTML +=  '<hr>'; 
                })
            }
        })
```
> Here I've placed this script in my HTML (but you can place it in a JavaScript file that is referenced by a script tag). Have fun with it! 

> At the moment I've place temporary parameters here that can be used for testing as this API is still in development.

### Unauthrozied Requests
If you don't have an API_KEY or a USERNAME (just accessing the endpoint alone: http://api.paulooidesign.ca/notes.php), you will not be able to access the API, and will be given a Error code 401: Unauthorized.

## Contact Me
If you have questions, comments to make this better or want to find more about me, checkout my [GitHub](https://github.com/paul-ooi) or contact me through [my Website](https://www.paulooidesign.com/)
 
## Terms of use 
Feel free to use this code as a way to learn or practice making requests to an API. This is not an API meant to be used for monetary profit of any kind. 

