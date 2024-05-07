let icon = document.getElementById("icon");
let style = document.getElementById("style");

icon.onclick = function(){
 

  if(style.href.includes("assets/css/dark.css")){
    style.href = "assets/css/white.css"
    icon.src = "assets/img/images/moonn-01-01.png"
  } else if (style.href.includes("assets/css/white.css")) {
    style.href = "assets/css/dark.css"
    icon.src = "assets/img/images/sunn-01.png"
    
  }
  // style.src ="darktheme.css"
  // document.body.classList.toggle("darkmode");
  // if(document.body.classList.contains("darkmode")){
  //   icon.src = "icons/sunn-01.png"
  // } else {
  //   icon.src = "icons/moonn-01-01.png"
  // }
 
}