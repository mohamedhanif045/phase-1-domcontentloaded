// Your code goes here!
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");

    // Select the paragraph element with id "text"
    const paragraph = document.getElementById('text');
    
    // Change the text content of the paragraph
    paragraph.textContent = "This is really cool!";
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
