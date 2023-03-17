const helloMessageTemplate: HTMLTemplateElement = document.createElement('template');
helloMessageTemplate.innerHTML = `
<style>
span#wrapper {
  font-weight: bolder;
  color: brown;
}
</style>
<span id="wrapper">Hello World!</span>
`;

export default class HelloMessage extends HTMLElement {
    static get observedAttributes(): string[] {
        return ['name'];
    }

    /**
     * Copy the `null`-able field to spare oneself of the non-`null` assertion operator.
     *
     * @private
     */
    private shadow: ShadowRoot;

    /**
     * The wrapper element.
     *
     * Note: there is no need to mark the field as private anymore, so skipping the `_`.
     *
     * @private
     */
    private wrapper: HTMLElement;

    constructor() {
        super();

        // Use the new instance variable:
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(helloMessageTemplate.content.cloneNode(true));
        this.wrapper = this.shadow.getElementById('wrapper')!;
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
        if (name === 'name') {
            this.wrapper.innerHTML = `Hello ${(newValue ? newValue : 'World')}!`;
        }
    }
}
