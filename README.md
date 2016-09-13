# Card Display

Card Display is a mobile web application to manage and display cards, specifically for advertising and selling mobile content delivered via USSD codes.

### Usage
Unauthenticated users can browse all available cards on the root path. To add or edit entries, users with admin privileges may do so at `/edit`.

### Installing dependencies
From within the root directory:
```sh
npm install
```

#### API keys
The application uses Auth0 to authenticate and authorise users to be able to edit existing cards.

Do one of the following:

##### Config file
>Add the appropriate variables into the file `_auth0Config.js` found in the root directory, and remove the leading underscore from the name.

##### Environment variables
>Add the following environment variables:
>``` sh
>REACT_APP_DOMAIN='Auth0 domain'
>REACT_APP_CLIENT_ID='Auth0 client id'
>SECRET='Auth0 client secret'
>```

#### Build and run

Make sure a MongoDB instance is already running, if not then start it using the following command:

```sh
mongod
```

Also from within the root directory:
```sh
npm run build && node index.js
```

The application will be available at http://localhost:8128