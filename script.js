// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', () => {
    // DOM element references
    const dynamicText = document.getElementById('dynamicText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const toggleElementBtn = document.getElementById('toggleElementBtn');
    const extraSection = document.getElementById('extraSection');
  
    // Update text content dynamically
    changeTextBtn.addEventListener('click', () => {
      dynamicText.textContent = 'The text has been changed dynamically!';
    });
  
    // Toggle CSS class to modify styles dynamically
    changeStyleBtn.addEventListener('click', () => {
      dynamicText.classList.toggle('highlight');
    });
  
    // Toggle element creation and removal on button click
    let elementAdded = false; // Track the state of the added element
  
    toggleElementBtn.addEventListener('click', () => {
      if (!elementAdded) {
        const newElement = document.createElement('div');
        newElement.id = 'newElement';
        newElement.textContent = 'I am a new element added via JavaScript!';
        newElement.classList.add('added');
        extraSection.appendChild(newElement);
        elementAdded = true;
        toggleElementBtn.textContent = 'Remove Element';
      } else {
        const newElement = document.getElementById('newElement');
        if (newElement) {
          extraSection.removeChild(newElement);
        }
        elementAdded = false;
        toggleElementBtn.textContent = 'Add Element';
      }
    });
  });
  