const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
    greeting.innerText = "Good Morning ☀️";
} 
else if (hour >= 12 && hour < 17) {
    greeting.innerText = "Good Afternoon 👋";
} 
else if (hour >= 17 && hour < 21) {
    greeting.innerText = "Good Evening 🌆";
} 
else {
    greeting.innerText = "Good Night 🌙";
}
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you for your message! 😊");
    return true;
}
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
