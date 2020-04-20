    const notInSh = ["20170323", "20180323","20190323","20190723", "20200326", "20200328", "20200406", "20200412"];

    let content = "";
    
    for (let i = 5; i > 0; i--) {
        let currentYear = moment().subtract(i, 'year');
        let nextYear = moment(currentYear).add(1, 'year');
        let dayCounter = 0;
        // console.log(i + " years ago");
        // console.log(currentYear.format("MMM-DD-YYYY") + " -> " + nextYear.format("MMM-DD-YYYY"));
        content += "<h2>" + i + " years ago: " + currentYear.format("MMM-DD-YYYY") + " -> " + nextYear.format("MMM-DD-YYYY") + "</h2>";
        notInSh.forEach(function(date) {
            if (moment(date).isBetween(currentYear,nextYear)) {
                content += "<p>" + moment(date).format("MMM-DD-YYYY") + "</p>";
                dayCounter++;
            }
        });
        // console.log("Total for period: " + dayCounter);
        content += "<h3>Total for period: " + dayCounter + "</h3>";
    }
    
    $("#elapsed").html(content);