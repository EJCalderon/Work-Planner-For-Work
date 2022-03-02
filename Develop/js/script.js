document.getElementById("currentDay").innerHTML = moment().format('dddd, MMM Do YYYY');

if(localStorage.getItem("8Tasks") !=""){
    $("#8Am").val(localStorage.getItem("8Tasks"));
}

saveBtn8.addEventListener("click", function(){
    var userInput = $("8Tasks");
    localStorage.setItem("8Task", $("#8Am"))
});
