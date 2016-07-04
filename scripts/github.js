$(document).ready(function(){
      $("#repos").html("test");
      var text = "";
      var reposArray=[];
      reposArray = githubAPI("orgs/tumblegamer/repos", function(data) {
            $.each(data, function(index,element) {
          text = text + "<li>" + element.name + "<br><a href=" + element.zipball_url + ">Download ZIP</a> | <a href=" + element.tarball_url + ">Download TAR</a> | <a href=" + element.html_url + ">Change Log</a></li><br>";
      });
      });
      text = "<ul>" + text + "</ul>";
      alert(text);
      alert(releasesText);
      
      $("#repos").html(text);
    });
