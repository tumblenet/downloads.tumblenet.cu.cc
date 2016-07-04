$(document).ready(function(){
      $("#repos").html("test");
      var text = "";
      githubAPI("users/tumblegamer/repos", function(data) {
            text=data[0].name;
      });
      $("#repos").html(text);
      
    });
