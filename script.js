{
 clock(); // время и дата
}

function clock() { // настройка функции времени и даты
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");
if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;
date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
" г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}

var browser = get_name_browser(); // проверка на браузер
alert(browser);

function get_name_browser(){ // настройка функции проверки браузера
    // получаем данные userAgent
    var ua = navigator.userAgent;    
    // с помощью регулярок проверяем наличие текста,
    // соответствующие тому или иному браузеру
    if (ua.search(/Chrome/) !=-1) return 'Google Chrome';
    if (ua.search(/Firefox/) !=-1) return 'Firefox';
    if (ua.search(/Opera/) !=-1) return 'Opera';
    if (ua.search(/Safari/) !=-1) return 'Safari';
    if (ua.search(/Trident/) !=-1) return 'Рекомендуем воспользоваться другим браузером, так как в Internet Explorer нет поддержки некоторых важных функций';
    // условий может быть и больше.
    // сейчас сделаны проверки только 
    // для популярных браузеров
    return 'Не определен';
}