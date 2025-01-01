let day = document.querySelector("#day")
let month = document.querySelector("#month")
let year = document.querySelector("#year")
let hours = document.querySelector("#hour")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#second")
let amPm = document.querySelector("#amPm")



const clock = () => {
    const dateTime = new Date()

    const monthNames = [1,2,3,4,5,6,7,8,9,10,11,12]

    day.textContent = dateTime.getDate()
    month.textContent = monthNames[dateTime.getMonth()]
    year.textContent = dateTime .getFullYear()

    hours.textContent = dateTime.getHours()
    minutes.textContent = dateTime.getMinutes()
    seconds.textContent =dateTime.getSeconds()

    if(dateTime.getHours() <10){
        hours.textContent = `0 ${dateTime.getHours()}`
    }
    else{
        hours.textContent = dateTime.getHours() + " :"
    }

    if(dateTime.getMinutes() <10){
        minutes.textContent = `0 ${dateTime.getMinutes()}`
    }
    else{
        minutes.textContent = dateTime.getMinutes() + " :"
    }


    if(dateTime.getSeconds() <10){
        seconds.textContent = `0 ${dateTime.getSeconds()} :`
    }
    else{
        seconds.textContent = dateTime.getSeconds() + " :"
    }

   dateTime.getHours() > 12 ? amPm.innerHTML = "PM" : amPm.innerHTML = "AM"
    

    

}

setInterval(clock)
