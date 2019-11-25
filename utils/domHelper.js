const createOption = (attributes) => {
  const option = document.createElement('option');
  Object.keys(attributes).forEach((attr) => { option[attr] = attributes[attr]; });
  return option;
};

const ERROR_CLASS = 'error-message';
/**
 * Get all of an element's parent elements up the DOM tree
 * @param  {Node}   select     The element
 * @param  {Array<Object>} options options to be added
 * @return {void}           The parent elements
 */
export const replaceOptions = (select, options) => {
  const docFrag = document.createDocumentFragment();
  options.forEach((c) => docFrag.appendChild(createOption(c)));
  // eslint-disable-next-line no-param-reassign
  select.innerHTML = '';
  select.appendChild(docFrag);
};

export const appendOptions = (select, options) => {
  const docFrag = document.createDocumentFragment();
  options.forEach((c) => docFrag.appendChild(createOption(c)));
  select.appendChild(docFrag);
};

export const createErrorField = (inputContainer, errorText) => {
  const errorElement = inputContainer.querySelector(`.${ERROR_CLASS}`) || document.createElement('p');
  errorElement.textContent = errorText;
  errorElement.className = ERROR_CLASS;
  inputContainer.appendChild(errorElement);
};

export const removeErrorField = (inputContainer) => {
  const errorMessage = inputContainer.querySelector(`.${ERROR_CLASS}`);
  if (errorMessage) errorMessage.remove();
};
