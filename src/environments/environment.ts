// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:'/api/v1',
  endpoint:{
    appVersion_Stores:'/appVersion_Stores',
    appVersion_TC55:'/appVersion_TC55',
    Device_Store_Count:'/Device_Store_Count',
    Device_MultipleStore:'/Device_MultipleStore',
    LoginType_Appversion:'/LoginType_Appversion',
    StoreNumber_uers_TC55_Count:'/StoreNumber_uers_TC55_Count',
    TC55_Browser:'/TC55_Browser',
    TC55_Stores_Users:'/TC55_Stores_Users'
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
