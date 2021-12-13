 function checkLoginState() {
  FB.getLoginStatus(function(response) {
    try {
      const accessToken = response.authResponse.accessToken;
      document.querySelector(".accessToken").innerHTML = `Access token: ${accessToken}`
    } catch(e) {
      console.log("not logged in");
    }
  });
}