function hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}

function toHHMMSS(str) {
    var sec_num = parseInt(str, 10); // don't forget the second parm
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = '';
    if (hours > 0) {
	    time += hours+':';
    }
    time += minutes+':'+seconds;
    return time;
}

var button = document.getElementById("btnCalculate");

button.addEventListener("click", function(){
    event.preventDefault();
	var goalTime = document.getElementById("goalTime").value;
	var raceDistance = document.getElementById("raceDistance").value;
	if (goalTime == "") {
		alert("Please enter a goal time");
	} else {
		var re=/^(?:(?:([01]?\d|2[0-3]):)?([0-9]?\d):)?([0-5]?\d)$/;
		if(re.test(goalTime)) {		
			var goalSeconds = hmsToSecondsOnly(goalTime);
			document.getElementById("result").innerHTML = "Your goal pace is<br /><strong>"+toHHMMSS(goalSeconds/raceDistance)+"/mi </strong>";
		} else {
			alert("Please use valid mm:ss or hh:mm:ss time format");
		}
	}
}, false);
