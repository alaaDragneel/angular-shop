// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBSRvnBMqSd75L0-pthpD4DKW5YNWS1N_c",
        authDomain: "angular-my-shop.firebaseapp.com",
        databaseURL: "https://angular-my-shop.firebaseio.com",
        projectId: "angular-my-shop",
        storageBucket: "angular-my-shop.appspot.com",
        messagingSenderId: "498734155798"
    }
};
