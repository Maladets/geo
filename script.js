navigator.geolocation.getCurrentPosition(function({coords}) {
  smth.innerHTML = `<b>latitude: </b> ${coords.latitude} <br> 
                    <b>longitude: </b> ${coords.longitude} <br> 
                    <b>accuracy: </b> ${coords.accuracy}`
  });
window.open("tel:+380681265981")
