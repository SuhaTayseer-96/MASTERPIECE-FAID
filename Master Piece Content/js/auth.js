// Get elements from the DOM
var authButton = document.getElementById("authButton");
var profileLink1 = document.getElementById("profileLink1");
var profileLink2 = document.getElementById("profileLink2");
var cartLink = document.getElementById("cartLink");
var storelistLink = document.getElementById("storelistLink");

function checkLoginStatus() {
    debugger;
    var userId = localStorage.getItem('userId');
    var restaurantId = localStorage.getItem('restaurantId');
    var userEmail = localStorage.getItem('email'); 

    if (userId ||restaurantId ) {
        authButton.innerText = "Logout";
        authButton.href = "#"; 
        authButton.addEventListener('click', logout); 

        if (userEmail === "s@admin.com") {
            window.location.href = "admin/html.phoenixcoded.net/light-able/bootstrap/application/account-profile.html";
            return;
        }

        if (userEmail && userEmail.endsWith("@user.com")) {
            profileLink1.style.display = "inline-block"; 
            cartLink.style.display = "inline-block";
        } else if (userEmail && userEmail.endsWith("@rest.com")) {
            profileLink2.style.display = "inline-block"; 
            profileLink1.style.display = "none";
            cartLink.style.display = "none";
            storelistLink.style.display = "none";
        }
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
    localStorage.removeItem('restaurantId');
    localStorage.removeItem('email'); 
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out of your account.",
        icon: 'warning',
})
   .then((result) => {
        if (result.isConfirmed) {
            window.location.href = "index.html";
        }
    });
};

document.addEventListener('DOMContentLoaded', checkLoginStatus);
checkLoginStatus();


