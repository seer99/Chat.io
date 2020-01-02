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
/*create sample users*/
createUser("userid_1",{"name":"USER_1"})
createUser("userid_2",{"name":"USER_2"})

//user collection create
function createUser(userId,data) {

    firestore.collection('users').doc(userId).set(data).then(ref => {
        console.log(ref)
        console.log("create user id -> " + userId); 
    }).catch(error => {
        console.log(error);
    })
       
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




