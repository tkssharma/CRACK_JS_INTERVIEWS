function convertToMilitaryHours(time) {
    var hours = parseInt(time.substr(0, 2));
    if(time.indexOf('am') != -1 && hours == 12) {
        time = time.replace('12', '0');
    }
    if(time.indexOf('pm')  != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
    }
    return time.replace(/(am|pm)/, '');
}

// convertTo24Hour('2:30 pm')
// "14:30 "
// convertTo24Hour('3:30 pm')
// "15:30 "
