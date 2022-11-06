function getTime(){

    let today = new Date();   
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초

    clock.innerText = "현재시간 🕰 " + `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    ;
}
getTime();
setInterval(getTime, 1000);

function second_Counter(){
    let today = new Date();   
    let seconds = today.getSeconds();  // 초
    return counted_seconds = seconds;
}
second_Counter();
setInterval(second_Counter, 1000);

function realtime_conversion() {
    let today = new Date();   
    let hours = 17;//today.getHours(); // 시
    let minutes = 55;//today.getMinutes();  // 분

    var realtime_conversion_result = (hours * 60) + minutes;
    return realtime_conversion_result;
}

var yatap_depart = ['06:40', '07:05', '07:20', '07:35', '07:50', '08:05', '08:25', '08:40', '08:55', '09:10', '09:25', '09:40', '10:00', '10:20', '10:35', '10:50', '11:05', '11:20', '11:35', '11:50', '12:10', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:20', '14:40', '15:00', '15:20', '15:40', '16:00', '16:20', '16:40'];
var yatap_depart_conversion = [ 400, 425, 440, 455, 470, 485, 505, 520, 535, 550, 565, 580, 600, 620, 635, 650, 665, 680, 695, 710, 730, 750, 765, 780, 795, 810, 825, 840, 860, 880, 900, 920, 940, 960, 980, 1000 ];
var church_depart = [ '06:55', '07:10', '07:25', '07:40', '07:55', '08:15', '08:30', '08:45', '09:00', '09:15', '09:30', '09:50', '10:10', '10:25', '10:40', '10:55', '11:10', '11:25', '11:40', '12:00', '12:20', '12:35', '12:50', '13:05', '13:20', '13:35', '13:50', '14:10', '14:30', '14:50', '15:10', '15:30', '15:50', '16:10', '16:30', '17:00' ];
var church_depart_conversion = [ 415, 430, 445, 460, 475, 495, 510, 525, 540, 555, 570, 590, 610, 625, 640, 655, 670, 685, 700, 720, 740, 755, 770, 785, 800, 815, 830, 850, 870, 890, 910, 930, 950, 970, 990, 1020 ];


function nextbus_yatap(){
    var realtime_conversion_result = realtime_conversion(); // Realtime 컨버전 로딩
    // 조건문 시작
    for(i = 0;realtime_conversion_result > yatap_depart_conversion[i];i++){}
    if (yatap_depart[i] == null) {
        yatap_depart[i] = '운행이 종료되었습니다';
    }
    yt_nextbus_time.innerText = "🚎  다음 버스 - " + yatap_depart[i];
    if (yatap_depart[i+1] == null) {
        yatap_depart[i+1] = '없습니다';
    } else {

        yt_nextbus2_time.innerText = "🚌  다다음 차 - " + yatap_depart[i+1];

        var min = yatap_depart_conversion[i]- realtime_conversion() - 1;
        var hours = Math.floor(min / 60);
        var mins = min - (hours * 60);

        if (min > 60){ // n시간 n분 n초 남음 출력 모듈

            yt_minutes_left.innerText = hours + "시간 " + mins + "분 " + (60 - counted_seconds) + "초 남음";
        } else if ( min < 60 ) {
            yt_minutes_left.innerText = mins + "분 " + (60 - counted_seconds) + "초 남음";
        }

        if (yatap_depart[i-1] == null) { // 이전 차 출력 (야탑)
            yt_passed_bus.innerText = "아직 떠나지 않았습니다";
        } else {
            yt_passed_bus.innerText = yatap_depart[i-1] + "분 차는 떠났네요 😢";
        }
    }
}    
nextbus_yatap();
setInterval(nextbus_yatap,1000);

    
function nextbus_church(){
    var realtime_conversion_result = realtime_conversion(); // Realtime 컨버전 로딩
    
    // 조건문 시작
    for(i = 0;realtime_conversion_result > church_depart_conversion[i];i++){}
    if (church_depart[i] == null) {
        church_depart[i] = '운행이 종료되었습니다';
    }
    ch_nextbus_time.innerText = "🚎  다음 버스 - " + church_depart[i];
    
    if (church_depart[i+1] == null) {
        church_depart[i+1] = '없습니다';
    }
    ch_nextbus2_time.innerText = "🚌  다다음 차 - " + church_depart[i+1];


    var min = church_depart_conversion[i]- realtime_conversion() - 1; 
    var hours = Math.floor(min / 60);
    var mins = min - (hours * 60);

    if (min > 60){ // n시간 n분 n초 남음 출력 모듈
        ch_minutes_left.innerText = hours + "시간 " + mins + "분 " + (60 - counted_seconds) + "초 남음";
    } else if (min < 60) {
        ch_minutes_left.innerText = mins + "분 " + (60 - counted_seconds) + "초 남음";
    } else {
    }


    if (church_depart[i-1] == null) { // 이전 차 출력 (교회)
        ch_passed_bus.innerText = "아직 떠나지 않았습니다";
    } else {
        ch_passed_bus.innerText = church_depart[i-1] + "분 차는 떠났네요 😢";
    }
}
nextbus_church();
setInterval(nextbus_church,1000)


function passedbus_yatap(){
    var realtime_conversion_result = realtime_conversion(); // Realtime 컨버전 로딩
    // 조건문 시작
    for(i = 0; 600 > yatap_depart_conversion[i]; i++){}
    ch_passed_bus.innerText = church_depart[i-1] + "분 차는 떠났네요 😢";
}    
passedtbus_yatap();
setInterval(passedbus_yatap,1000);


function passedbus_church(){
    var realtime_conversion_result = realtime_conversion(); // Realtime 컨버전 로딩
    // 조건문 시작
    for(i = 0;realtime_conversion_result > church_depart_conversion[i];i++){}
    if (church_depart[i-1] == null) {
        church_depart[i-1] = '운행이 종료되었습니다';
    }
    ch_passed_bus.innerText = church_depart[i-1] + "분 차는 떠났네요 😢";
}    
passedtbus_church();
setInterval(passedbus_church,1000);