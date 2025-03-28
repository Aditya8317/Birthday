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
let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlider() {
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(step) {
    index += step;
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    updateSlider();
}

setInterval(() => moveSlide(1), 3000); // Auto-slide every 3 seconds
