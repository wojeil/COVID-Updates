$(document).ready(function () {

//reach for dropdown button
function search(event){
    $("#search").on("click",function(){
    event.preventDefault();
    var drop= $("#drop");
    drop.css("display","none");
    
})

};
console.log(search);


//drop down function
function dropItems(){
    $("#drop").on("click",function(){
       event.preventDefault();
       

    })

};


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








})