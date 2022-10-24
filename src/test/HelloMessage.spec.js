describe('The <hello-message> element', () => {
  beforeEach(() => {
    // Add elements to the DOM; the first w/o 'name', the second w/ 'name'
    document.body.insertAdjacentHTML('afterbegin', `<hello-message id="default"></hello-message>`);
    document.body.insertAdjacentHTML('afterbegin', `<hello-message id="custom" name="Friend"></hello-message>`);
  });

  afterEach(() => {
    // Cleanup DOM
    document.body.removeChild(document.getElementById('default'));
    document.body.removeChild(document.getElementById('custom'));
  })

  it('should contain the default message if the input element has no value set.', function () {
    const element = document.getElementById('default');

    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello World!');
  });

  it('should contain the message containing the value provided using the "name" attribute.', function () {
    const element = document.getElementById('custom');

    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello Friend!');
  });

  it('should change the message when the "name" attribute is added.', function () {
    const element = document.getElementById('custom');

    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello Friend!');
    element.setAttribute('name', 'Jasmine');
    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello Jasmine!');
  });

  it('should change the message when the "name" attribute is updated.', function () {
    const element = document.getElementById('custom');

    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello Friend!');
    element.setAttribute('name', 'Jasmine');
    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello Jasmine!');
  });

  it('should change the message back to the default when the "name" attribute is removed.', function () {
    const element = document.getElementById('custom');

    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello Friend!');
    element.removeAttribute('name');
    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe('Hello World!');
  });
});
