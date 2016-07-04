$(document).ready(function(){
      $("#repos").html("test");
      var text = "";
      githubAPI("orgs/tumblegamer/repos", function(data) {
            $.each(data, function(index,element) {
                  text=element.id;
      $("#repos").html(text);
            });
      });
      
      
      
      
    });
