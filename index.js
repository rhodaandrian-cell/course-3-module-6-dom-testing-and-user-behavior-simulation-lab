// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

// =========================
// DOM Manipulation Functions
// =========================

// Add an element to the DOM
function addElementToDOM(id, text) {
  const parent = document.getElementById(id);
  if (!parent) {
    displayError(`Parent element with id "${id}" not found.`);
    return;
  }
  const element = document.createElement('div');
  element.textContent = text;
  parent.appendChild(element);
}

// Remove an element from the DOM
function removeElementFromDOM(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  } else {
    displayError(`Element with id "${id}" not found.`);
  }
}

// Simulate a button click that updates a DOM element
function simulateClick(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  } else {
    displayError(`Element with id "${id}" not found.`);
  }
}

// Handle form submission and update a DOM element
function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const output = document.getElementById(outputId);

  if (!form || !output) {
    displayError('Form or output element not found.');
    return;
  }

  const input = form.querySelector('input');
  if (!input || input.value.trim() === '') {
    displayError('Input cannot be empty');
    return;
  }

  output.textContent = input.value.trim();
  input.value = '';
}

// Error handling
function displayError(message) {
  let errorDiv = document.getElementById('error-message');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.id = 'error-message';
    document.body.prepend(errorDiv);
  }

  errorDiv.textContent = message;
  errorDiv.classList.remove('hidden');
}

// Export for Jest
if (typeof module !== 'undefined') {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    displayError
  };
}