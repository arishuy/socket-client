export function datenow ()
{
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Chủ nhật";
    weekday[1] = "Thứ hai";
    weekday[2] = "Thứ ba";
    weekday[3] = "Thứ tư";
    weekday[4] = "Thứ năm";
    weekday[5] = "Thứ sáu";
    weekday[6] = "Thứ bảy";
    var n = weekday[d.getDay()];
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var dateNow = n + ", " + date + "/" + month + "/" + year + ", " + hour + ":" + minutes + ":" + seconds;
    return dateNow;
}
