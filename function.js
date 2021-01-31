// variable declaring the time it currently is 

var currentDay = document.querySelector('#currentDay')
currentDay.textContent = dayjs().format('dddd MMMM D, YYYY  hh:mm')

// variable declaring all the time blocks
var timeBlock = document.querySelectorAll('.time-block')

var timeBlockHr = document.querySelector('.time-blockHR')

var userEvent = document.querySelectorAll('.description')

var saveBtn = document.querySelectorAll('.saveBtn')
console.log(saveBtn)


var currentHour = dayjs().format('hh')





// FUNCTIONS 


// function changeColor() {



// };


// function saveText() {

   
//     localStorage.setItem('event', userEvent.value)





// }














// EVENT LISTENER 
saveBtn.forEach(function(i) {
    i.addEventListener('click', function(){
        
    
        


    })
})