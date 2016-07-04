$(document).ready(function(){
      $("#repos").html("test");
      var text = "";
      var repoArray = [];
      githubAPI("orgs/tumblegamer/repos", function(data) {
            repoArray = data;
      });
      $.each(repoArray, function(index,element) {
                  text = text + "<li>" + element.name + "<br><a href=" + element.zipball_url + ">Download ZIP</a> | <a href=" + element.tarball_url + ">Download TAR</a> | <a href=" + element.html_url + ">Change Log</a></li><br>";
            });
      text = "<ul>" + text + "</ul>";
      $("#repos").html(text);
      
      
    });
