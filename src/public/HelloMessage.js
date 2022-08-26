const template = document.createElement('template');
template.innerHTML = `
<style>
span#wrapper {
  font-weight: bolder;
  color: brown;
}
</style>
<span id="wrapper">Hello World!</span>
`;

class HelloMessage extends HTMLElement {
  // This cannot be changed (or externalized & updated)
  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();
    this._wrapper = null;
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._wrapper = this.shadowRoot.getElementById('wrapper');

    if (this.hasAttribute('name')) {
      this._wrapper.innerText = this._getMessage(this.getAttribute('name'));
    }
  }

  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName === 'name') {
      this._updateMessage(newValue);
    }
  }

  _updateMessage(value) {
    if (this._wrapper) {
      this._wrapper.innerText = this._getMessage(value ? value : 'World');
    }
  }

  _getMessage(value) {
    return `Hello ${value}!`;
  }
}

customElements.define('hello-message', HelloMessage);
