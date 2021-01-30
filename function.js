// variable declaring the time it currently is 

var currentDay = document.querySelector('#currentDay')
currentDay.textContent = dayjs().format('dddd MMMM D, YYYY  hh:mm')

// variable declaring all the time blocks
var timeBlock = document.querySelectorAll('.time-block')

var timeBlockHr = document.querySelector('.time-blockHR')

var currentHour = dayjs().format('hh')





// FUNCTIONS 


function changeColor(){

    // if (timeBlockHr < currentHour){

    //     timeBlock.setAttribute('class', 'past')


    // }


};


function saveEvents(){

}














// EVENT LISTENER 

// saveBtn.addEventListner('click' function(){

// })