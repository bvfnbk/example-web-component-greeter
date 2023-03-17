import HelloMessage from '../../ts/components/HelloMessage';

describe('The <hello-message> element', () => {
    let defaultElement:HTMLElement;
    let defaultShadow: ShadowRoot;
    let defaultWrapper: HTMLElement;

    let customElement: HTMLElement;
    let customShadow: ShadowRoot;
    let customWrapper: HTMLElement;

    beforeAll(() => {
       customElements.define('hello-message', HelloMessage);
    });

    beforeEach(() => {
        // Add elements to the DOM; the first w/o 'name', the second w/ 'name'
        defaultElement = document.createElement('hello-message');
        defaultShadow = defaultElement.shadowRoot!;
        defaultWrapper = defaultShadow.getElementById('wrapper')!;

        customElement = document.createElement('hello-message');
        customElement.setAttribute('name', 'Friend');
        customShadow = customElement.shadowRoot!;
        customWrapper = customShadow.getElementById('wrapper')!;

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
        expect(defaultWrapper.innerHTML).toBe('Hello World!');
    });

    it('should contain the message containing the value provided using the "name" attribute.', () => {
        expect(customWrapper.innerHTML).toBe('Hello Friend!');
    });

    it('should change the message when the "name" attribute is added.', () => {
        expect(defaultWrapper.innerHTML).toBe('Hello World!');
        defaultElement.setAttribute('name', 'Jasmine');
        expect(defaultWrapper.innerHTML).toBe('Hello Jasmine!');
    });

    it('should change the message when the "name" attribute is updated.', () => {
        expect(customWrapper.innerHTML).toBe('Hello Friend!');
        customElement.setAttribute('name', 'Jasmine');
        expect(customWrapper.innerHTML).toBe('Hello Jasmine!');
    });

    it('should change the message back to the default when the "name" attribute is removed.', () => {
        expect(customWrapper.innerHTML).toBe('Hello Friend!');
        customElement.removeAttribute('name');
        expect(customWrapper.innerHTML).toBe('Hello World!');
    });
});
