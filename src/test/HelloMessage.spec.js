describe('The <hello-message> element', () => {
  beforeEach(async () => {
    document.body.insertAdjacentHTML('afterbegin', `<hello-message id="default"></hello-message>`);
    document.body.insertAdjacentHTML('afterbegin', `<hello-message id="custom" name="Friend"></hello-message>`);
  });

  afterEach(() => {
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
    const id = 'custom';
    const newName = 'Jasmine';
    const oldMessage = 'Hello Friend!';
    const newMessage = 'Hello Jasmine!';

    const element = document.getElementById(id);

    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe(oldMessage);
    element.setAttribute('name', newName);
    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe(newMessage);
  });

  it('should change the message when the "name" attribute is updated.', function () {
    const id = 'custom';
    const newName = 'Jasmine';
    const oldMessage = 'Hello Friend!';
    const newMessage = 'Hello Jasmine!';

    const element = document.getElementById(id);

    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe(oldMessage);
    element.setAttribute('name', newName);
    expect(element.shadowRoot.getElementById('wrapper').innerText).toBe(newMessage);
  });
});
