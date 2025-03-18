const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "nirvana Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "naruto Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview",rating:3,comment:"delight" },
    { id: 4, name: "kojiro Ramen",restaurant: "chonli",image: "https://moringa.instructure.com/courses/967/files/517798/preview",rating:5,comment:"tasty"},
    { id: 5, name:"gyukotsu",restaurant: "chen",image: "https://moringa.instructure.com/courses/967/files/517797/preview",rating:4,comment:"spicy"}
 ];
 function displayRamens(){
  const ramenMenu=document.getElementById("ramenMenu")
 ramenMenu.innerHTML=``

 ramens.forEach(ramen=>{
  const img = document.createElement("img")
  img.src = ramen.image;
  img.alt = ramen.name;
  img.addEventListener("click",()=> handleClick(ramen))
  ramenMenu.appendChild(img)
 }) }

 function handleClick(){
const ramenDetail =document.getElementById("ramenDetails");
document.getElementById("ramen-img").scr=ramens.image;
document.getElementById("ramen.name").textContent=ramens.name;
document.getElementById("ramen-restaurant").textContent=ramens.restaurant;
document.getElementById("ramen-rating").textContent="rating"
document.getElementById("ramen-comment").textContent="comment"

 }
function addSubmitListener(){
  const newramen = document.getElementById("newramen")
  newramen.addEventListener("submit",function(e){
e.preventDefault();
  })

  const newRamen={
    id: ramens.length + 1,
    name: document.getElementById("name").value,
    restaurant: document.getElementById("restaurant").value,
    image: document.getElementById("image").value,
    rating:document.getElementById("rating").value,
    comment:document.getElementById("comment").value
  };
  ramens.push(newRamen)
  const img =document.createElement("img");
  img.src=newRamen.image;
  img.alt=newRamen.name;

  img.classList.add("ramen-thumbnail");
  img.addEventListener("click",()=>
    handleClick(newRamen));
    ramenMenu.appendChild(img);

    
  };
  

displayRamens();
addSubmitListener();
newRamen()


 







 