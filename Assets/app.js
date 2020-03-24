


// Corona function
function coronaAjax() {
    var country = "spain";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "e4420810e6msh08ee16571aa2e63p11d2e6jsnc7f841440ab7"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(JSON.parse(response));
    });
}

coronaAjax();

//function to get news response and append to page
function newsApiCall(countryCode) {
    //Key to access API
    var newsAPIKey = "7df80f17ac7a4d13ae60f8308308d6f1";
    //URL to get response from
    var queryURL = "http://newsapi.org/v2/top-headlines?country=" + countryCode + "&category=general&apiKey=" + newsAPIKey;
    //ajax call to news API to get data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console log the response object
        console.log(response);
        //target empty div to append to
        var newsDiv1 = $("#news1");
        //empty div before appending new articles
        newsDiv1.empty();
        //make loop to put 2 random articles on the page 
        for (let index = 0; index < 2; index++) {
            //get a random article from array
            var newsIndex = Math.floor(Math.random() * response.articles.length);
            //get the title
            var newsTitle = response.articles[newsIndex].title;
            //put title in h3
            var titleHeader = $("<h3>").text(newsTitle);
            //get author
            var newsAuthor = response.articles[newsIndex].author
            //put author name in a p
            var authorP = $("<p>").text("Author: " + newsAuthor);
            //create image element
            var newsImage = $("<img>").attr("id", "article-img" + index);
            //get image url 
            newsImage.attr("src", response.articles[newsIndex].urlToImage);
            //get description
            var newsDescription = response.articles[newsIndex].description;
            //put description in a p
            var descriptionP = $("<p>").text("Description: " + newsDescription);
            //append empty div on the page to put article
            newsDiv1.append(titleHeader, authorP, newsImage, descriptionP);
            //add a link to the news article
            $("#article-img" + index).wrap("<a href=" + response.articles[newsIndex].url + " target=\"_blank\"></a>");
        }

    })
}
//test news API function
// newsApiCall("us");

