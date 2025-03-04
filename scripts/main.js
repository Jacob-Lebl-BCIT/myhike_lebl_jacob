// Function to read the quote of the day from the Firestore "quotes" collection
// Input param is the String representing the day of the week, aka, the document name
function readQuote(day) {
    db.collection("quotes").doc(day)                                                         //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(dayDoc => {                                                              //arrow notation
            console.log("current document data: " + dayDoc.data());                          //.data() returns data object
            document.getElementById("quote-goes-here").innerHTML = dayDoc.data().bean;      //using javascript to display the data on the right place

            //Here are other ways to access key-value data fields
            //$('#quote-goes-here').text(dayDoc.data().quote);         //using jquery object dot notation
            //$("#quote-goes-here").text(dayDoc.data()["quote"]);      //using json object indexing
            //document.querySelector("#quote-goes-here").innerHTML = dayDoc.data().quote;

        }, (error) => {
            console.log ("Error calling onSnapshot", error);
        }); 
    }
 readQuote("tuesday");        //calling the function

 // Add an authentication state observer
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        console.log("User logged in: ", user.uid);
        readName(user.uid); // Call the readName function with the user's UID
    } else {
        // No user is signed in
        console.log("No user is logged in");
        document.getElementById("name-goes-here").innerHTML = "Please log in";
    }
});

 console.log("User ID: " + userID);
 function readName(userID) {
    db.collection("users").doc(userID)
        .onSnapshot(userDoc => {
            console.log("current document data: " + userDoc.data());
            document.getElementById("name-goes-here").innerHTML = userDoc.data().name;
        }, (error) => {
            console.log ("Error calling onSnapshot", error);
        });
    }

