function timer(){
    let t = document.getElementById("time");
    let d = document.getElementById("date");
    let o = new Date();
    t.innerHTML = addZero(o.getHours()) + "\'" + addZero(o.getMinutes()) + "\"" + addZero(o.getSeconds());
    d.innerHTML = showDay(o.getDay()) + " " + o.getDate() + " " + showMonth(o.getMonth()) + " " + o.getFullYear();
}

function addZero(time) {
    if(parseInt(time) >= 0 && parseInt(time) <= 9){
        return "0"+time;
    }
    return time;
}

function showDay(day) {
    let days = ["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."];
    return days[day];
}

function showMonth(month) {
    let months = ["Jan.", "Feb.", "Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];
    return months[month];
}

setInterval(timer,1000);