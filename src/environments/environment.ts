// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HLT } from 'C:/Users/sam/webdev/enVAR/firebase.HLT.environment';


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: HLT,
    authDomain: "hickorylaketutor.firebaseapp.com",
    databaseURL: "https://hickorylaketutor.firebaseio.com",
    projectId: "hickorylaketutor",
    storageBucket: "hickorylaketutor.appspot.com",
    messagingSenderId: "741098074398",
    appId: "1:741098074398:web:92fe9aadc215044fec190f",
    measurementId: "G-251WR8VENH"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
