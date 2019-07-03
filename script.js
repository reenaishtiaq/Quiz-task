
var q1 = document.querySelector("#All input").value;
var q2 = document.querySelector("#Pandemic input").value;
var q3 = document.querySelector("#Smallpox input").value;
var q4 = document.querySelector("#Neutral input").value;
var q5 = document.querySelector("#Lungs input").value;
var numb = 0;


function result() {

    if (q1 == "All") {
        numb++
    }
    if (q2 == "Pandemic") {
        numb++
    }
    if (q3 == "Smallpox") {
        numb++
    }
    if (q4 == "Neutral") {
        numb++
    }
    if (q5 == "Lungs") {

        numb++
    }
    alert("Congratulation! You got Full marks");

}



