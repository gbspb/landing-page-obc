document.getElementById("flexRadioDefault1").addEventListener("click", function () {
    document.getElementById("validationCustom").disabled = true;
});
document.getElementById("flexRadioDefault2").addEventListener("click", function () {
    document.getElementById("validationCustom").disabled = true;
});
document.getElementById("flexRadioDefault3").addEventListener("click", function () {
    document.getElementById("validationCustom").disabled = true;
});

document.getElementById("validationCustom").addEventListener("click", function () {
    document.getElementById("flexRadioDefault3").disabled = true;
});
document.getElementById("validationCustom").addEventListener("click", function () {
    document.getElementById("flexRadioDefault2").disabled = true;
});
document.getElementById("validationCustom").addEventListener("click", function () {
    document.getElementById("flexRadioDefault1").disabled = true;
});