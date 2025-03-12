// Function to create falling flowers
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = "🌸"; // You can use any emoji like 🌼, 🌺
    
    // Random horizontal position
    flower.style.left = Math.random() * 100 + "vw";
    
    // Random animation duration (to make them fall at different speeds)
    flower.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s and 5s

    document.querySelector(".flower-shower").appendChild(flower);

    // Remove the flower after it falls
    setTimeout(() => {
        flower.remove();
    }, 5000); // Remove after 5 seconds
}

// Generate flowers at intervals
setInterval(createFlower, 300); // Every 300ms (adjust for more/less flowers)
