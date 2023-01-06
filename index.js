document.getElementById("flexRadioDefault1").addEventListener("click", function () {
    document.getElementById("validationCustom").disabled = true;
});
document.getElementById("flexRadioDefault2").addEventListener("click", function () {
    document.getElementById("validationCustom").disabled = true;
});
document.getElementById("flexRadioDefault3").addEventListener("click", function () {
    document.getElementById("validationCustom").disabled = true;
});

function disableRadios() {
    let radioInputs = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].disabled = true;
    }
}

let select = document.querySelector('select');
select.addEventListener('change', disableRadios);