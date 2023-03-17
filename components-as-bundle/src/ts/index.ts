import HelloMessage from './components/HelloMessage';
import MessageInput from './components/MessageInput';

// Define all elements:
customElements.define('hello-message', HelloMessage);
customElements.define('message-input', MessageInput);

const greeter = document.getElementById('greeter');
document.getElementById('msgInput')!.addEventListener(
    'MessageUpdateEvent',
    (event: Event) => {
        const custom = event as CustomEvent;
        greeter!.setAttribute('name', custom.detail);
    });
