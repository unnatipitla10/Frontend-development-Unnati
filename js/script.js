console.log("Day 1 Task Loaded");

//Hamburger 
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

//Searching Bar
function showPopup(){
    let input = document.getElementById("searchInput").value;
    if(input.trim() !== ""){
        document.getElementById("popup").style.display="block";
    }
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}
