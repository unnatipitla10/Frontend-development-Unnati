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
function showNotification(type){
    const container = document.getElementById("notificationContainer");

    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    notification.innerHTML = `
        <span>${type === "success" ? "✅ Success: Project saved!" : "⚠ Error: Failed to fetch data."}</span>
        <button class="close-btn">&times;</button>
    `;

    container.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(()=>{
        notification.remove();
    },5000);

    // Manual close
    notification.querySelector(".close-btn").addEventListener("click",()=>{
        notification.remove();
    });
}



