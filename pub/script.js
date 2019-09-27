// This script comes from the server and drives the client side
console.log("hello from the back end");

// link to html
const info = document.getElementById("info")
const button = document.getElementById("sendMe")
const input = document.getElementById("inp")


// Set the text of the 'main' info span to 
// the data ----?
// make sure this fetch url matches the sever.js app.listen 
fetch("http://localhost:3030/data")
  .then(response => response.json())
  .then(data => {
    info.textContent = data.data
  })

// make sure this fetch url matches the sever.js app.listen 
// when the send button is clicked, post it to the 
// 3001/register endpoint ensuring the body is 
// JSONed and contains the email address entered byt the user
button.addEventListener("click", () => {
  fetch("http://localhost:3030/register", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email: input.value
    })

})

    //  reload the JavaScript
    window.location.reload()

  })

// if the enter key is pressed instead of clicking the send button
// then also make send button 'click'
  input.addEventListener("keyup", () => {
    if (event.keyCode == 13) {
      button.click();
    }
  })
  



