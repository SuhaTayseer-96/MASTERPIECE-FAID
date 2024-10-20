var authButton = document.getElementById("authButton");
var profileLink1 = document.getElementById("profileLink1");
var profileLink2 = document.getElementById("profileLink2");
var cartLink = document.getElementById("cartLink");

function checkLoginStatus() {
    var userId = localStorage.getItem('userId');
    var userEmail = localStorage.getItem('userEmail'); 
    
    if (userId) {
        authButton.innerText = "Logout";
        authButton.href = "#"; 
        authButton.addEventListener('click', logout); 

     
        if (userEmail === "suha@user.com") {
            profileLink1.style.display = "inline-block"; 
        } else if (userEmail === "spoonpalace@rest.com") {
            profileLink2.style.display = "inline-block"; 
        }

        cartLink.style.display = "inline-block";
        profileLink1.style.display="inline-block";
        profileLink1.style.display="inline-block";
    } else {
        authButton.innerText = "Join Us";
        authButton.href = "login.html"; 

        profileLink1.style.display = "none";
        profileLink2.style.display = "none";
        cartLink.style.display = "none";
    }
}

function logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail'); // Remove the email from localStorage as well
    alert("Logged out Successfully");
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);
