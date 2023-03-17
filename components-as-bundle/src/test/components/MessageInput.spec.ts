import MessageInput from '../../ts/components/MessageInput';

describe('The <message-input> element', () => {
    let element: HTMLElement;
    let shadowRoot: ShadowRoot;
    let input: HTMLInputElement;

    beforeAll(() => {
        // Required for document.createElement() to return something...
        customElements.define('message-input', MessageInput);
    });

    beforeEach(() => {
        element = document.createElement('message-input');
        shadowRoot = element.shadowRoot!;
        input = shadowRoot.getElementById('someInput')! as HTMLInputElement;

        document.body.append(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    /*
     * Use Cases:
     *
     * The user enters something into the <input> field and
     * the defined callback is called with a matching event.
     *
     * Any 'input' event listener is _not_ called (i.e.
     * processing the event is stopped).
     *
     * Q: Are there more use cases to test?
     */

    it('should emit a "MessageUpdateEvent".', () => {
        // Given

        // The event which will be emitted by the internal <input> element:
        const event = new Event('input');
        // The spy to be used to verify the call:
        event.stopPropagation = jest.fn(() => {});


        // A flag documenting the event reception:
        let eventReceived = false;

        // Register listener...
        element.addEventListener(
            'MessageUpdateEvent',
            (event: CustomEvent) => eventReceived = true
        );

        // When

        // Note: updating input.value will not emit the event,
        //   but calling dispatch does.
        input.dispatchEvent(event);

        // Then
        expect(eventReceived).toBeTruthy();
        expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('should not emit an "input" event.', () => {
        // Given

        // The event which will be emitted by the internal <input> element:
        const event = new Event('input');
        // The spy to be used to verify the call:
        event.stopPropagation = jest.fn(() => {});


        // A flag documenting the event reception:
        let eventReceived = false;

        // Register 'input' listener at the parent element:
        // Note: This listener would get called if propagation of the source event
        //   is not stopped:
        element.addEventListener(
            'input',
            (event: Event) => eventReceived = true
        );

        // When

        // Note: updating input.value will not emit the event,
        //   but calling dispatch does.
        input.dispatchEvent(event);

        // Then
        expect(eventReceived).toBeFalsy();
        expect(event.stopPropagation).toHaveBeenCalled();
    });
});
