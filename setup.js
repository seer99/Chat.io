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

//user collection create
function createUser(userId,data) {

}

//chat group collection create
function createChatGroup(userId,chatGroupName) {
}


//subscribe collection create
function createSubscribe() {
}

//chat collection create
function createChat() {

    
}




