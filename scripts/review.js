var hikeDocID = localStorage.getItem("hikeDocID");    //visible to all functions on this page

function saveHikeDocumentIDAndRedirect(){
    let params = new URL(window.location.href) //get the url from the search bar
    let ID = params.searchParams.get("docID");
    localStorage.setItem('hikeDocID', ID);
    window.location.href = 'review.html';
}

function getHikeName(id) {
    db.collection("hikes")
      .doc(id)
      .get()
      .then((thisHike) => {
        var hikeName = thisHike.data().name;
        document.getElementById("hikeName").innerHTML = hikeName;
          });
}

getHikeName(hikeDocID);
console.log("Hike ID: " + hikeDocID);