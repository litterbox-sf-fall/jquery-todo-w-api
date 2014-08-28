
# SPA App
## Lesson Discussion




## SPA APP

First,

  rails g controller todos index --no-test-framework
 

We need to work with the `todo.js` and the `todos/index.html.erb`


`todos/index.html.erb`
    
    <div id="testCon">
    </div>
    

All template information:
`./templates/test.hbs`
    <div>
     {{ msg }}
    </div>

All application logic:
`/todos.js`

    $(function(){
        var testObj = {msg: "Hello, world!"};
        var $myTest = $(HandlebarsTemplates.test(testObj));
        
          $("#testCon").append($myTest);
    });
    












