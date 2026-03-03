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
function createNotification(message, type) {
  const container = document.getElementById("notificationContainer");

  const notification = document.createElement("div");
  notification.classList.add("notification", type);

  notification.innerHTML = `
    <span>${message}</span>
    <span class="close-btn" onclick="this.parentElement.remove()">×</span>
  `;

  container.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function showSuccess() {
  createNotification("Success: Project saved!", "success");
}

function showError() {
  createNotification("Error: Failed to fetch data.", "error");
}

