$(document).ready(function(){

  $("#addTodo").on("submit", function(e){
    e.preventDefault();
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
  };

  // Saved
  $.post('/todos.json', {todo: newTodo}).done(function(data){}
      var todoHTML = HandlebarsTemplates.todo(data);
      $("#todos").append(todoHTML);
    });
  });

  $.get("/todos.json").done(function(data){
    data.forEach(function(someTodo){
      var todoHTML = HandlebarsTemplates.todo(someTodo);
      $("#todos").append(todoHTML);
    })
  });

  $("#todos").on("click", ".todo", function(e){
    if(e.target.id === "todo_completed"){
      var checkbox = e.target;
      var _this = this;
      var updated_todo = {};
      updated_todo.completed = checkbox.checked;
      updated_todo.id = this.dataset.id;

      $.ajax({
          type: 'patch',
          url: '/todos/'+updated_todo.id+'.json',
          data: {todo: updated_todo}
        }).done(function(data){
          $(_this).toggleClass("done-true");
      });
    }

  if(e.target.id === "removeTodo") {
    var _this = this;
    var id = this.dataset.id;

    $.ajax({
        type: 'delete',
        url: '/todos/' + id
    }).done(function (data) {
        $(_this).remove();
      });
    }

  }); // close todos.click
}); // close document.ready