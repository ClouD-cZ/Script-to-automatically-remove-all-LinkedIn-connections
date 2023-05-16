// Function to remove a connection
function removeConnection(connectionElement) {
  const moreButton = connectionElement.querySelector('.artdeco-dropdown__trigger');
  if (moreButton) {
    moreButton.click(); // Click on the "More" button
    setTimeout(() => {
      const removeButton = connectionElement.querySelector('.artdeco-dropdown__item--is-dropdown button');
      if (removeButton) {
        removeButton.click(); // Click on the "Remove" button
        setTimeout(() => {
          const confirmButton = document.querySelector('[data-test-dialog-primary-btn]');
          if (confirmButton) {
            confirmButton.click(); // Click on the "Confirm" button to remove the connection
          }
        }, 1000); // Delay before clicking "Confirm" 
      }
    }, 1000); // Delay before clicking "Remove"
  }
}

// Get all connection elements
const connectionElements = document.querySelectorAll('.mn-connection-card');

// Loop through each connection element and remove it
connectionElements.forEach((connectionElement, index) => {
  setTimeout(() => {
    removeConnection(connectionElement);
  }, index * 2000); // Delay between each removal
});