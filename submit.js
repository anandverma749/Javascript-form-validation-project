const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const fullname = urlParams.get('fullname');
const email = urlParams.get('email');
const phonenumber = urlParams.get('phonenumber');

document.getElementById("name").innerText = fullname;
document.getElementById("email").innerText = email;
document.getElementById("phone").innerText = phonenumber;