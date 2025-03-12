
var ID;

function saveHikeDocumentIDAndRedirect(ID){
  this.ID = ID.getElementById("id");
  console.log("ID CLICKED: "  + ID);
  localStorage.setItem('hikeDocID', ID);
  window.location.href = 'review.html';
}

var hikeDocID = localStorage.getItem("hikeDocID");    //visible to all functions on this page
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