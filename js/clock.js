const TimeToPremiere = function() { 

    var premiereDate = new Date(2018, 07, 27, 17, 0, 0, 0, 0)
    var actualDate = new Date()
    var timeLeft = premiereDate - actualDate

    var sec = timeLeft / 1000
    var min = sec / 60
    var hours = min / 60
    var days = hours / 24

    var secIntegerLeft = Math.floor(sec % 60)
    var minIntegerLeft = Math.floor(min % 60)
    var hoursIntegerLeft = Math.floor(hours % 24)
    var daysIntegerLeft = Math.floor(days)

    const container = document.querySelector('.premiere__date')

    if(minIntegerLeft < 10)
    minIntegerLeft = "0" + minIntegerLeft 

    if(secIntegerLeft < 10) {
    secIntegerLeft = "0" + secIntegerLeft }

    console.log(container)

    if(timeLeft <= 999) {
        container.innerHTML = "The product premiere took place on August 27, 2018!"
        return
    }

    container.innerHTML = "To Product Premiere Left:" + "<br>" + "<br>" + daysIntegerLeft + " days : " + hoursIntegerLeft + " hours : " + minIntegerLeft + " minutes : " + secIntegerLeft + " seconds"

}
    
    setInterval(TimeToPremiere, 3000)

