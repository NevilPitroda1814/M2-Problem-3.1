function store() {
    var user = document.getElementById("usernm");
    localStorage.setItem("usernm", user.value);

    // var noofQuiz = document.getElementById("noofquiz");
    // localStorage.setItem("noofquiz",noofQuiz.value);

    var quizName = document.getElementById("quizname");
    localStorage.setItem("Quiz name", quizName.value);
}
function storeQue() {
    var quetion = document.getElementById("quetion");
    localStorage.setItem("Question", quetion.value);

    var OpA = document.getElementById("select_a").value;
    localStorage.setItem("Option A", OpA);

    var OpB = document.getElementById("select_b").value;
    localStorage.setItem("Option B", OpB);

    var OpA = document.getElementById("select_c").value;
    localStorage.setItem("Option C", OpA);

    var OpC = document.getElementById("select_d").value;
    localStorage.setItem("Option D", OpC);
}
window.onload = function () {
    // document.getElementById("unm").innerText = localStorage.getItem("usernm");
    document.getElementById("que").innerText = localStorage.getItem("Question");
    document.getElementById("option_a").innerText = localStorage.getItem("Option A");
    document.getElementById("option_b").innerText = localStorage.getItem("Option B");
    document.getElementById("option_c").innerText = localStorage.getItem("Option C");
    document.getElementById("option_d").innerText = localStorage.getItem("Option D");
}
