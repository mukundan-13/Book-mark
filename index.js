var ad=document.getElementById("add-popupbutton")
var overlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
ad.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var add=document.getElementById("add")
var tit=document.getElementById("bktit")
var athr=document.getElementById("bkathr")
var desc=document.getElementById("bkdes")
add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${tit.value}</h2>
    <h5>${athr.value}</h5><br>
            <p>${desc.value}</p>
            <br><button onclick='del(event)'>Delete</button>`
    container.append(div)
})
function del(event)
{
    event.target.parentElement.remove()
}
