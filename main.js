    
    // Array with dates outside of China fixed for testing purposes
    // This will come from the db
    const notInSh = ["20170323","20170219", "20180323","20190323","20190723", "20200326", "20200328", "20200406", "20200412", "20151223"];

    
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
        let sortedDates = sortDates(notInSh);
        let startYear = moment().subtract(i, 'year');
        let endYear = moment(startYear).add(1, 'year');
        // calculate the number of days in the year we are looking at to calculate the number of days in China
        const daysInYear = endYear.diff(startYear, 'days');
        // counter to keep track of dasy outside of China
        let dayCounter = 0;
        content += `<h2>  ${i}  years ago:  ${ startYear.format("MMM-DD-YYYY") }  ->  ${ endYear.format("MMM-DD-YYYY") } (${ daysInYear } days)</h2>`;
        sortedDates.forEach(function(date) {
            if (moment(date).isBetween(startYear,endYear)) {
                content += `<p> ${ moment(date).format("MMM-DD-YYYY") } </p>`;
                dayCounter++;
            }
        });
        content += `<h3>Not in China: ${ dayCounter } | in China: ${ daysInYear - dayCounter }</h3>`;
    }
    
    $("#elapsed").html(content);