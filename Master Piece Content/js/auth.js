var authButton = document.getElementById("authButton");
var profileLink1 = document.getElementById("profileLink1");
var profileLink2 = document.getElementById("profileLink2");
var cartLink = document.getElementById("cartLink");

function checkLoginStatus() {
    debugger
    var userId = localStorage.getItem('userId');
    var userEmail = localStorage.getItem('email'); 
    
    if (userId) {
        authButton.innerText = "Logout";
        authButton.href = "#"; 
        authButton.addEventListener('click', logout); 

     debugger

     if(userEmail === "s@admin.com"){
        window.location.href = "admin/html.phoenixcoded.net/light-able/bootstrap/application/account-profile.html";
        return ;
     }

        if (userEmail === "suha@user.com") {
            profileLink1.style.display = "inline-block"; 
            cartLink.style.display = "inline-block";

        } else if (userEmail === "spoonpalace@rest.com") {
            profileLink2.style.display = "inline-block"; 
            profileLink1.style.display = "none";
        }

       // profileLink1.style.display="inline-block";
       // profileLink1.style.display="inline-block";
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
    alert("Are you sure you want to log out?");
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);
checkLoginStatus()