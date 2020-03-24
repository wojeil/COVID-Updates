//function
function newsApiCall(countryCode) {
    //Key to access API
    var newsAPIKey = "7df80f17ac7a4d13ae60f8308308d6f1";
    //URL to get response from
    var queryURL = "http://newsapi.org/v2/top-headlines?country=" + countryCode + "&q=coronavirus&apiKey=" + newsAPIKey;
//ajax call to news API to get data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console log the response object
        console.log(response)
    })
}
//test news API function
newsApiCall("us");
