$(document).ready(function(){
      $("#repos").html("test");
      var text = "";
      githubAPI("orgs/tumblegamer/repos", function(data) {
            text=data[0].id;
            $("#repos").html(text);
      });
      
      
      
      
    });
