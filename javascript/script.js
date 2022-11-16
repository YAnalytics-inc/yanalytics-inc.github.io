//write a function to show which page to display:
function showPage(page) {
    //first hide all pages:
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    })
    //Then show the requested page:
    document.querySelector(`#${page}`).style.display = 'block';
}
// Wait until all the content on the page has been loaded
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            showPage(this.dataset.page);
        }

    });

});   

// Function to get geolocation onclick:
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            // Your location
            console.log("Latitude: " + pos.coords.latitude + 
                "Longitude: " + pos.coords.longitude);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

