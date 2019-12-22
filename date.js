let d = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let footer = document.getElementById("footer");
footer.innerHTML = "Today's date is the " + d;
