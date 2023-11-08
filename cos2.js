function calculateSphere() {
    const radius = parseFloat(document.getElementById("sphere-radius").value);
    
    if (isNaN(radius) || radius <= 0) {
        document.getElementById("result-text").textContent = "Please enter a valid radius.";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);

    const resultText = `Sphere Parameters:
        - Radius: ${radius}
        - Volume: ${volume.toFixed(2)}
        - Surface Area: ${surfaceArea.toFixed(2)}`;
    
    document.getElementById("result-text").textContent = resultText;
}

document.getElementById("shape-type").addEventListener("change", function () {
    const selectedShape = this.value;
    
    // Hide all shape details
    document.querySelectorAll(".shape-details").forEach(element => {
        element.style.display = "none";
    });
    
    // Show the selected shape details
    document.getElementById(selectedShape + "-form").style.display = "block";
});
