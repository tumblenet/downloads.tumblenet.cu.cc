$(document).ready(function(){
      $("#repos").html("loading GitHub API...");
      var text = "";
      githubAPI("users/tumblegamer/repos", function(data) {
            text=data[0].id;
      });
      $("#repos").html(text);
      
    });
