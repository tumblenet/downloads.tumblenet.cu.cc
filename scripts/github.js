$(document).ready(function(){
      var text = "";
      var reposArray = githubAPI("users/tumblegamer/repos");
      
      $.each(reposArray, function(index,element) {
          text = text + "<li>" + element.name + "<br><a href=" + element.zipball_url + ">Download ZIP</a> | <a href=" + element.tarball_url + ">Download TAR</a> | <a href=" + element.html_url + ">Change Log</a></li><br>";
      });
      text = "<ul>" + text + "</ul>";
      //alert(text);
      var releasesText = reposArray.toString()
      alert(releasesText);
      
      $("#releases").html(text);
    });
