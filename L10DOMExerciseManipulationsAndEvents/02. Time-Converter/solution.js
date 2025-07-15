function attachEventsListeners() {

    let daysInputFiled = document.getElementById("days");
    let daysButton = document.getElementById("daysBtn");
    
    let hoursInputFiled = document.getElementById("hours");
    let hoursButton = document.getElementById("hoursBtn");
    
    let minutesInputFiled = document.getElementById("minutes");
    let minutesButton = document.getElementById("minutesBtn");
        
    let secondsInputFiled = document.getElementById("seconds");
    let secondsButton = document.getElementById("secondsBtn");
    
    

    daysButton.addEventListener('click', daysConverter); 
    hoursButton.addEventListener('click', hoursConverter);
    minutesButton.addEventListener('click', minutesConverter);
    secondsButton.addEventListener('click', secondsConverter);


    function daysConverter(){
        let currentDayCount = daysInputFiled.value;
        hoursInputFiled.value = currentDayCount * 24;
        minutesInputFiled.value = currentDayCount * 1440;
        secondsInputFiled.value = currentDayCount * 86400
    }

    function hoursConverter(){
        let currentHoursCount = hoursInputFiled.value;
        daysInputFiled.value = currentHoursCount / 24;
        minutesInputFiled.value = currentHoursCount * 60;
        secondsInputFiled. value = currentHoursCount * 3600;
    }

    function minutesConverter(){
        let currentMinutesCount = minutesInputFiled.value;
        daysInputFiled.value = currentMinutesCount / 1440;
        hoursInputFiled.value = currentMinutesCount / 60;
        secondsInputFiled.value = currentMinutesCount * 60;
    }

    function secondsConverter(){
        let currentSecondsCount = secondsInputFiled.value;
        daysInputFiled.value = currentSecondsCount / 86400;
        hoursInputFiled.value = currentSecondsCount / 3600;
        minutesInputFiled.value = currentSecondsCount / 60;
    }
}