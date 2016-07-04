$(document).ready(function(){
      $("#repos").html("test");
      var text = "";
      var repos = [];
      githubAPI("users/tumblegamer/repos", function(data) {
            repos=data;
            data;
      });
      $("#repos").html(repos[0].name);
      
    });
