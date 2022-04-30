document.getElementById("pricing").style.display = "none";
document.getElementById("features").style.display = "none";
document.getElementById("about").style.display = "none";

function home() {
    document.getElementById("home").style.display = "block";
    document.getElementById("pricing").style.display = "none";
    document.getElementById("features").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function pricing() {
    document.getElementById("pricing").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("features").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function features() {
    document.getElementById("features").style.display = "block";
    document.getElementById("pricing").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function about() {
    document.getElementById("about").style.display = "block";
    document.getElementById("pricing").style.display = "none";
    document.getElementById("features").style.display = "none";
    document.getElementById("home").style.display = "none";
}