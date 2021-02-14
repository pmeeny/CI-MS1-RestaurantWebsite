function initMap() {
    const restaurant = { lat: 52.660, lng: -8.631 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: restaurant,
    });
    // The marker, positioned at the restaurant
    const marker = new google.maps.Marker({
      position: restaurant,
      map: map,
    });
}