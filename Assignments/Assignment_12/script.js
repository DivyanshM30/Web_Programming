// Function to update the z-index of an element
function updateZIndex(elementId, value) {
    const element = document.getElementById(elementId);
    element.style.zIndex = value;
    
    // Update the displayed z-index value
    const zValueDisplay = element.querySelector('.z-value');
    zValueDisplay.textContent = value;
    
    // Update the input field value
    const inputField = document.getElementById(`${elementId}-z-index`);
    inputField.value = value;
}

// Function to increase the z-index
function increaseZIndex(elementId) {
    const element = document.getElementById(elementId);
    const currentZIndex = parseInt(element.style.zIndex) || parseInt(getComputedStyle(element).zIndex);
    updateZIndex(elementId, currentZIndex + 1);
}

// Function to decrease the z-index
function decreaseZIndex(elementId) {
    const element = document.getElementById(elementId);
    const currentZIndex = parseInt(element.style.zIndex) || parseInt(getComputedStyle(element).zIndex);
    updateZIndex(elementId, currentZIndex - 1);
}

// Function to bring an element to the front
function bringToFront(elementId) {
    // Find the highest z-index currently in use
    const boxes = document.querySelectorAll('.box');
    let highestZIndex = 0;
    
    boxes.forEach(box => {
        const zIndex = parseInt(box.style.zIndex) || parseInt(getComputedStyle(box).zIndex);
        if (zIndex > highestZIndex) {
            highestZIndex = zIndex;
        }
    });
    
    // Set the element's z-index to one higher than the highest
    updateZIndex(elementId, highestZIndex + 1);
}

// Function to send an element to the back
function sendToBack(elementId) {
    // Find the lowest z-index currently in use
    const boxes = document.querySelectorAll('.box');
    let lowestZIndex = 0;
    
    boxes.forEach(box => {
        const zIndex = parseInt(box.style.zIndex) || parseInt(getComputedStyle(box).zIndex);
        if (zIndex < lowestZIndex || lowestZIndex === 0) {
            lowestZIndex = zIndex;
        }
    });
    
    // Set the element's z-index to one lower than the lowest
    updateZIndex(elementId, lowestZIndex - 1);
}

// Initialize the z-index values on page load
document.addEventListener('DOMContentLoaded', () => {
    updateZIndex('box1', 1);
    updateZIndex('box2', 2);
    updateZIndex('box3', 3);
    
    // Make boxes draggable for better demonstration
    makeElementDraggable('box1');
    makeElementDraggable('box2');
    makeElementDraggable('box3');
});

// Function to make elements draggable
function makeElementDraggable(elementId) {
    const element = document.getElementById(elementId);
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    element.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
