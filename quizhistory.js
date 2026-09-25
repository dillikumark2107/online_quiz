let loggedUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);

let username = loggedUser.username;

let allHistory = JSON.parse(
    localStorage.getItem("quizHistory")
) || {};

let userHistory = allHistory[username] || {};


// Python
let python = userHistory["Python"] || [];

document.getElementById("attempt1").textContent = python.length;

if (python.length > 0) {
    document.getElementById("last_score1").textContent =
        python[python.length - 1].score;
} else {
    document.getElementById("last_score1").textContent = "0";
}






// Java
let java = userHistory["Java"] || [];

document.getElementById("attempt2").textContent = java.length;

if (java.length > 0) {
    document.getElementById("last_score2").textContent =
        java[java.length - 1].score;
} else {
    document.getElementById("last_score2").textContent = "0";
}


// Django
let django = userHistory["Django"] || [];

document.getElementById("attempt3").textContent = django.length;

if (django.length > 0) {
    document.getElementById("last_score3").textContent =
        django[django.length - 1].score;
} else {
    document.getElementById("last_score3").textContent = "0";
}


// Frontend
let frontend = userHistory["Frontend"] || [];

document.getElementById("attempt4").textContent = frontend.length;

if (frontend.length > 0) {
    document.getElementById("last_score4").textContent =
        frontend[frontend.length - 1].score;
} else {
    document.getElementById("last_score4").textContent = "0";
}