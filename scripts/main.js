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

    function writeHikes() {
        //define a variable for the collection you want to create in Firestore to populate data
        var hikesRef = db.collection("hikes");
    
        hikesRef.add({
            code: "BBY01",
            name: "Burnaby Lake Park Trail", //replace with your own city?
            city: "Burnaby",
            province: "BC",
            level: "easy",
                    details: "A lovely place for lunch walk",
            length: 10,          //number value
            hike_time: 60,       //number value
            lat: 49.2467097082573,
            lng: -122.9187029619698,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        hikesRef.add({
            code: "AM01",
            name: "Buntzen Lake Trail", //replace with your own city?
            city: "Anmore",
            province: "BC",
            level: "moderate",
            details: "Close to town, and relaxing",
            length: 10.5,      //number value
            hike_time: 80,     //number value
            lat: 49.3399431028579,
            lng: -122.85908496766939,
            last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
        });
        hikesRef.add({
            code: "NV01",
            name: "Mount Seymour Trail", //replace with your own city?
            city: "North Vancouver",
            province: "BC",
            level: "hard",
            details:  "Amazing ski slope views",
            length: 8.2,        //number value
            hike_time: 120,     //number value
            lat: 49.38847101455571,
            lng: -122.94092543551031,
            last_updated: firebase.firestore.Timestamp.fromDate(new Date("January 1, 2023"))
        });
    }

