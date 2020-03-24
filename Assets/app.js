

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