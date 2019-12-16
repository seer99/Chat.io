var admin = require("firebase-admin");


console.log("start configuration...")
var serviceAccount = require("./env/firebase-adminsdk.json");
var DATABASE_NAME = serviceAccount.project_id //for [DEFAULT]  if you want to config to deferent db change the db name
//<DATABASE_NAME>

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
});

//Data Base firestore create reference
var firestore = admin.firestore()


console.log("Create Collection with Sample Data...")

//user
console.log("Create user...")
let userRef = firestore.collection('user');
userRef.add({displayName:"sachithamh"}).then((reference)=>{//othe data you can add if you need to keep more data
    console.log("Create user sucessfully...")
}).catch((error)=>{
    console.error(error);
});

//chat group
console.log("Create chat_group...")
let userRef = firestore.collection('chat_group');
userRef.add({displayName:"sachithamh"}).then((reference)=>{//othe data you can add if you need to keep more data
    console.log("Create user sucessfully...")
}).catch((error)=>{
    console.error(error);
});

//subscribe
console.log("Create user...")
let userRef = firestore.collection('user');
userRef.add({displayName:"sachithamh"}).then((reference)=>{//othe data you can add if you need to keep more data
    console.log("Create user sucessfully...")
}).catch((error)=>{
    console.error(error);
});

//chat
console.log("Create user...")
let userRef = firestore.collection('user');
userRef.add({displayName:"sachithamh"}).then((reference)=>{//othe data you can add if you need to keep more data
    console.log("Create user sucessfully...")
}).catch((error)=>{
    console.error(error);
});



