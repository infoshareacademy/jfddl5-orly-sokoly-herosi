const personalCheckbox = document.querySelector('#use')
const commercialCheckbox = document.querySelector('#use2')

personalCheckbox.addEventListener('click', handleClick)

function handleClick() {
    const isCheckedPersonal = personalCheckbox.checked
    if (isCheckedPersonal) {
        document.querySelector('.range-container').style.display = 'none'
        document.getElementById('result-price').innerHTML = "$0"
    } else {
        document.querySelector('.range-container').style.display = 'block'
    }
}

commercialCheckbox.addEventListener('click', handleClick)


const person = document.getElementById("person")
const result = document.getElementById("result-person")

person.addEventListener("input", function () {
    result.innerHTML = person.value;
    document.querySelector("#result-price").innerHTML = "$" + person.value * 5
}, false);