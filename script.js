function bookFlight() {
  
    const travellers = document.getElementById("travellers").value;
}

let travellersData = {
    'Adults': 0,
    'Students': 0,
    'Youths': 0,
    'Children': 0
};

function openTravellerModal() {
    updateTravellerDetails();
    document.getElementById("travellerModal").style.display = "block";
}

function closeTravellerModal() {
    updateTotalTravellers();  // Update total when closing the modal
    document.getElementById("travellerModal").style.display = "none";
}
