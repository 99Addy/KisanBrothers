// const { Client } = require('appwrite');
import { Client } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('KisanBrothers')                // Your project ID
    // .setKey('9c4f84a6f3fb7c2f782a2e434bec54b0c5f0e808ffa854a2f5df4e0f6e70d78540713bfffeb89682f9bd790dd4868546dd08c481efa2929e8a0ab5799e498332e346a4dc16ccd0225a47a2d527a16e6ae47d57c8f530027dd6882a5d82809eb5d7519a9cc745cee5240af2aea6b8df9f3269906c6edce3ec252aaa4e004bbe0b');         // Your secret API key

// console.log(client);

export {client};