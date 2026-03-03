console.log("Day 1 Task Loaded");

//Hamburger 
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

//Searching Bar
function openPopup(){
    let value = document.getElementById("searchInput").value;
    if(value.trim()===""){
        document.getElementById("popupText").innerText="Please type something cutie 😊";
    } else {
        document.getElementById("popupText").innerText="You searched for: " + value + "❤️";
    }
    document.getElementById("popup").style.display="flex";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

//Notification Banner 
const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");
const container = document.getElementById("notificationContainer");

successBtn.addEventListener("click", () => {
    showNotification("success", "Success: Project saved!");
});

errorBtn.addEventListener("click", () => {
    showNotification("error", "Error: Failed to fetch data.");
});

function showNotification(type, message){

    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>
    `;

    container.appendChild(notification);

    // Auto remove after 5 sec
    setTimeout(() => {
        notification.remove();
    }, 5000);

    // Manual close
    notification.querySelector(".close-btn")
        .addEventListener("click", () => {
            notification.remove();
        });
}



