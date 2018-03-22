

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("bgimg1").className = "scrolldog";
    }
    else {
        document.getElementById("bgimg1").className = "";
    }
}