jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
     
    var target = this;
    var text = "";
    githubAPI("users/" + username + "/repos", function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos);    
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.io')) {
                text = text + "<section class='section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp'><div class='mdl-card mdl-cell mdl-cell--12-col'><div class='mdl-card__supporting-text'><h4>" + this.name + "</h4>" + this.description + "</div><div class='mdl-card__actions'><a href='" + this.html_url + "' class='mdl-button'>GitHub</a>";
                if(this.homepage != ""){
                    text = text + "<a href='" + this.homepage + "' class='mdl-button'>Website</a>";
                }
                text = text + "</div></div></section>";
            }
        });
        target.html(text);
    });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};

