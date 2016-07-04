$(document).ready(function(){
      function githubTest(location) {
  var url = "https://api.github.com/" + location;
  $.getJSON(url, function(data) {
    return data;
  });
}
      var text = "";
      var reposArray = githubTest("users/tumblegamer/repos");
      
      $.each(reposArray, function(index,element) {
          text = text + "<li>" + element.name + "<br><a href=" + element.zipball_url + ">Download ZIP</a> | <a href=" + element.tarball_url + ">Download TAR</a> | <a href=" + element.html_url + ">Change Log</a></li><br>";
      });
      text = "<ul>" + text + "</ul>";
      //alert(text);
      var releasesText = reposArray.toString()
      alert(releasesText);
      
      $("#repos").html(text);
    });
