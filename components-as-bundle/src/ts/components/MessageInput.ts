const messageInputTemplate: HTMLTemplateElement = document.createElement('template');

messageInputTemplate.innerHTML = `
<div>
    <label for="someInput">Message:</label>
    <input id="someInput" type="text"/>
</div>
`;


class MessageInput extends HTMLElement {
    private shadow: ShadowRoot;
    private inputElement: HTMLInputElement;
    private readonly eventHandler: EventListener;

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(messageInputTemplate.content.cloneNode(true));
        this.inputElement = this.shadow.getElementById('someInput')! as HTMLInputElement;
        this.eventHandler = (event: Event) => this.inputEventHandler(event as InputEvent);
    }

    private inputEventHandler(inputEvent: InputEvent) {
        // The 'input' event is stopped here;
        // it is replaced with a custom event
        // containing the message as string.
        inputEvent.stopPropagation();

        // Dispatch custom event:
        this.dispatchEvent(new CustomEvent<string>(
            'MessageUpdateEvent',
            {detail: this.inputElement.value}
        ));
    }

    connectedCallback() {
        this.inputElement.addEventListener('input', this.eventHandler);
    }

    disconnectedCallback() {
        this.inputElement.removeEventListener('input', this.eventHandler);
    }
}



customElements.define('message-input', MessageInput);
