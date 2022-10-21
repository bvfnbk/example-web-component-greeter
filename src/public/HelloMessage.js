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

  /**
   * Cf. https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance
   *
   * - `super()` is the first statement
   * - no `return` statement
   * - no `document.write()` or `document.open()
   * - &hellip;
   *
   * etc. this means that the shadow root _can_ be created (including eventual listeners).
   */
  constructor() {
    super();

    // Attach shadow root:
    this.attachShadow({mode: 'open'});

    // "Create" content
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._wrapper = this.shadowRoot.getElementById('wrapper');
  }

  /**
   * Called whenever an attribute is updated.
   *
   * **Note:**
   *
   * - will only be called if `attributeName` is in `HelloMessage.observedAttributes`
   * - will eventually be called before the `HelloMessage.connectedCallback()`
   * - not all fields may be defined if they are set up in `HelloMessage.connectedCallback()`
   *
   * @param attributeName The name of the attribute.
   * @param _oldValue The previous value (`null` for the first time)
   * @param newValue The new value.
   */
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName === 'name') {
      // this._wrapper is initialised in the constructor
      this._wrapper.innerText = `Hello ${(newValue ? newValue : 'World')}!`;
    }
  }
}

customElements.define('hello-message', HelloMessage);
