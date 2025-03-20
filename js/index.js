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

 ramens.forEach(ramens=>{
  const img = document.createElement("img")
  img.src = ramens.image;
  img.alt = ramens.name;
  img.addEventListener("click",function() {handleClick(ramens)})
  ramenMenu.appendChild(img)
 }) }

 function handleClick(ramens){
const ramenDetail =document.getElementById("ramenDetails");
document.getElementById("ramen-img").src=ramens.image;
document.getElementById("ramen-name").textContent=ramens.name;
document.getElementById("ramen-restaurant").textContent=ramens.restaurant;
document.getElementById("ramen-rating").textContent=ramens.rating
document.getElementById("ramen-comment").textContent=ramens.comment

 }
function addSubmitListener(){
  const newramen = document.getElementById("newramen")
  newramen.addEventListener("submit",function(e){
e.preventDefault();
  })
  
  const newRamen={
    name: document.getElementById("ramen-name").value,
    restaurant: document.getElementById("ramen-restaurant").value,
    image: document.getElementById("ramen-img").value,
    rating:document.getElementById("ramen-rating").value,
    comment:document.getElementById("ramen-comment").value
  };
  
  
  img.addEventListener("click",()=>
    handleClick(newRamen));
    ramenMenu.appendChild(img);

    
  };
  
function main(){
displayRamens();
addSubmitListener();
handleClick()
}
main()
 







 