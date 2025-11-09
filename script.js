function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "maharani") {
        window.location.href = "indexmywish.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
function gohome() {
        window.location.href = "index.html";
}
function gobdy() {
    window.location.href = "indexbdy.html";
}
function gogovlog() {
    var passwordtwo = document.getElementById("inputBox").value;
    if (passwordtwo === "heycamvlogs") {
        window.location.href = "nvlogs.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
function gonvlogs() {
    const gonvlogs = document.getElementById('gonvlogs');
    const inputBoxContainer = document.getElementById('inputBoxContainer');


    // Add a click event listener to Button 1
    gonvlogs.addEventListener('click', () => {
        inputBoxContainer.style.display = 'inline-block'; // Make Button 2 visible
    }); 
    
    
    inputBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            var passwordtwo = document.getElementById("inputBox").value;
    if (passwordtwo === "heycamvlogs") {
        window.location.href = "nvlogs.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
    }
    });
}

    