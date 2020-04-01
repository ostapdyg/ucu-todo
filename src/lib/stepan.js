
export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);

    console.log(newElement);
    if (newElement instanceof HTMLUnknownElement) {
      throw new StepanError("Invalid tag name!");
    }
    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

}
// Works not only in Chrome
Stepan.Component = class {
  constructor(parent) {
    console.log(parent);

    // TODO: 1. Create StepanError class to define all framework errors
    //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
    if (!(parent instanceof HTMLElement)) {
      throw new StepanError("Invalid parent!");
    }

    this.parent = parent;

  }

  // TODO (Bonus): Ensure that every component returns a top-level root element
}

class StepanError extends Error {
  constructor(message) {
    super(message);
  }

}

