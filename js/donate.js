function checkOut () {
    alert ("Thank You For Your Donation.")


}
function ShowHideDiv() {
    var chkYes = document.getElementById("chkYes");
    var customAmount = document.getElementById("customAmount");
    customAmount.style.display = chkYes.checked ? "block" : "none";
}