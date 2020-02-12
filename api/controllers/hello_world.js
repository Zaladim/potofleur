'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  hello: hello
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
// const admin = require('./node_modules/firebase-admin');
// const serviceAccount = require("./serviceAccountKey.json");
// const data = require("./data.json");
// const collectionKey = "entities"; //name of the collection
// admin.initializeApp({  
//   credential: admin.credential.cert(serviceAccount),  
//   databaseURL: "https://testpotofleur.firebaseio.com"
// });

// const firestore = admin.firestore();

// const settings = {timestampsInSnapshots: true};

// firestore.settings(settings);

// if (data && (typeof data === "object")) {
//   Object.keys(data).forEach(docKey => { 
//     firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
//       console.log("Document " + docKey + " successfully written!");
//     }).catch((error) => {
//          console.error("Error writing document: ", error);
//     });
//   });
// }


// import * as firebase from 'firebase/app'
// var firebase = require('firebase/app')
// require('firebase/auth')
// require('firebase/firestore')
// require('firebase/storage')

// var firebase = require('firebase/app')

// var firebaseConfig = {
//     apiKey: "AIzaSyDXZamprRa_OQ_-pw3KPaHD_vnl_j8RO4Y",
//     authDomain: "potofleur-56855.firebaseapp.com",
//     databaseURL: "https://potofleur-56855.firebaseio.com",
//     projectId: "potofleur-56855",
//     storageBucket: "potofleur-56855.appspot.com",
//     messagingSenderId: "99197670423",
//     appId: "1:99197670423:web:2dbae836ae9f641f973852",
//     measurementId: "G-R2Z7BQB6TY"
//   }
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig)

function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'Kiwi';
  var hello = util.format('Kiwi, %s!', name);

  // var test = req.swagger.params.test.value;
  var id = req.swagger.params.id.value;
  var lum = req.swagger.params.lum.value;
  var temp = req.swagger.params.temp.value;
  var hum = req.swagger.params.hum.value;
  // var hello2 = util.format('Hello, %s!', test);

  // See calls
  // console.log('=== NodeMCU ' + name + ' ===');
  // console.log('=== NodeMCU ' + test + ' ===');

  firebase.firestore().collection("AllArduino").doc(id).set({
    lum: lum,
    temp: temp,
    hum: hum
    // expected_temp: this.state.txtTemp,
    // expected_hum: this.state.txtHum,
    // expected_lum: this.state.txtLum
  })

  // const admin = require('../../node_modules/firebase-admin');
  // const serviceAccount = require("./serviceAccountKey.json");
  // // const data = require("./data.json");
  // var data = {Name: "Kiwi"};
  // const collectionKey = "entities"; //name of the collection
  // admin.initializeApp({  
  //   credential: admin.credential.cert(serviceAccount),  
  //   databaseURL: "https://testpotofleur.firebaseio.com"
  // });
  
  // const firestore = admin.firestore();
  
  // const settings = {timestampsInSnapshots: true};
  
  // firestore.settings(settings);
  
  // if (data && (typeof data === "object")) {
  //   Object.keys(data).forEach(docKey => { 
  //     console.log(docKey);
  //     firestore.collection(collectionKey)
  //     .doc(docKey)
  //     .set(data[docKey])
  //     .then((res) => {
  //       console.log("Document " + docKey + " successfully written!");
  //     }).catch((error) => {
  //          console.error("Error writing document: ", error);
  //     });
  //   });
  // }


  // this sends back a JSON response which is a single string
  
  // res = {"Kiwi": hello};


  res.json(hello);

}


