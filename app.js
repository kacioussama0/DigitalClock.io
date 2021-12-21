// DOM
let hour = document.querySelector('span.hour');
let minute = document.querySelector('span.minute');
let second = document.querySelector('span.second');
let amPm = document.querySelector('span.pm-am')


// Interval

setInterval(() => {
            let time = new Date();
            (time.getHours() >= 0 && time.getHours() < 12) ? amPm.innerHTML = '\t AM': amPm.innerHTML = '\t PM';
            hour.innerHTML = `${(time.getHours() < 10) ? `0${time.getHours()}:`: `${time.getHours()}:`}`;
            minute.innerHTML = `${(time.getMinutes() < 10) ? `0${time.getMinutes()}:`: `${time.getMinutes()}:`}`;
            second.innerHTML =  `${(time.getSeconds() < 10) ? `0${time.getSeconds()}`: `${time.getSeconds()} `}`;
}, 1000)


// colors 
let ColorObj = {
    'red': "#dc3545", 
    'blue': "#007bff",
    'black': "#343a40",
    'green' : '#28a745' ,
    'white' : '#f8f9fa'
};


let colors = document.querySelector('div.colors');

colors.addEventListener('click' , (e)=> {
   if(e.target.matches('button')){

    let color = e.target.dataset.color;
    if(color == 'blue' || color == 'red'|| color == 'green'){
        document.body.style.backgroundColor = ColorObj[color];
        document.querySelector('div.clock').style.color = '#fff';
    }
    else{
        document.body.style.backgroundColor = ColorObj[color];
        document.querySelector('div.clock').style.color = '#007bff';
    }
   }
})