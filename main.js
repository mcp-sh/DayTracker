    const notInSh = ["20170323", "20180323","20190323","20190723", "20200326", "20200328", "20200406", "20200412"];
    // Sorting the array to by date
    function sortDates(dates) {
        return dates.sort((a,b) => {
            return moment(a) - moment(b)
        });
    }
    // console.log(sortDates(notInSh));
    
    // Function to get an array of single dates between startDate and endDate    
    function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('YYYYMMDD') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }
    //This array can then be saved to a database
    const singleDays = getDates("20200412", "20200418");
    // console.log(singleDays);

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