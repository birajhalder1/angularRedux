// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  /* development Server */
  // apiUrl: 'http://15.206.126.224:3004/api_v2/v1/',
 
  ccavenue_access_code : "AVDQ92HF63AQ66QDQA",
  ccavenue_url : "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction",

/* Production Server */
 apiUrl: 'https://crm.myraymond.com/api/v1/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
