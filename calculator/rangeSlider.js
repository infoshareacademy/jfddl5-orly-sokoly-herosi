
const rangeSlider = document.getElementById("sliderRange");
const output = document.getElementById("price");
output.innerHTML = rangeSlider.value;





rangeSlider.addEventListener(
    'input',
    function () {
        output.innerHTML = this.value * 5 + ' ' + 'PLN'
    }
)
