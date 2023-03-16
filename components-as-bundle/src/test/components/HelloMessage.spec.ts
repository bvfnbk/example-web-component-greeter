
describe('The <hello-message> element', () => {
    let defaultElement:HTMLElement;
    let defaultShadow: ShadowRoot;

    let customElement: HTMLElement;
    let customShadow: ShadowRoot;

    beforeEach(() => {
        // Add elements to the DOM; the first w/o 'name', the second w/ 'name'
        defaultElement = document.createElement('hello-message');
        defaultShadow = defaultElement.shadowRoot as ShadowRoot;

        customElement = document.createElement('hello-message');
        customElement.setAttribute('name', 'Friend');
        customShadow = customElement.shadowRoot as ShadowRoot;

        document.body.append(
            defaultElement,
            customElement
        );
    });

    afterEach(() => {
        // Cleanup DOM
        document.body.removeChild(defaultElement);
        document.body.removeChild(customElement);
    });

    it('should contain the default message if the input element has no value set.', () => {
        expect(defaultShadow.getElementById('wrapper').innerText).toBe('Hello World!');
    });

    it('should contain the message containing the value provided using the "name" attribute.', () => {
        expect(customShadow.getElementById('wrapper').innerText).toBe('Hello Friend!');
    });

    it('should change the message when the "name" attribute is added.', () => {
        expect(defaultShadow.getElementById('wrapper').innerText).toBe('Hello World!');
        defaultElement.setAttribute('name', 'Jasmine');
        expect(defaultShadow.getElementById('wrapper').innerText).toBe('Hello Jasmine!');
    });

    it('should change the message when the "name" attribute is updated.', () => {
        expect(customShadow.getElementById('wrapper').innerText).toBe('Hello Friend!');
        customElement.setAttribute('name', 'Jasmine');
        expect(customShadow.getElementById('wrapper').innerText).toBe('Hello Jasmine!');
    });

    it('should change the message back to the default when the "name" attribute is removed.', () => {
        expect(customShadow.getElementById('wrapper').innerText).toBe('Hello Friend!');
        customElement.removeAttribute('name');
        expect(customShadow.getElementById('wrapper').innerText).toBe('Hello World!');
    });
});
