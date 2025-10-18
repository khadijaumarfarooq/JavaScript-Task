let countries = [
   "India",
 "Pakistan",
 "Hungry",
  "Tuvalu" ,
  "Vanuatu",
  "Bhutan",
   "Qatar",
   "Togo",
  "Palestine",
   "Comoros"
]; 
// let unorderedlist = document.getElementById("unorderedlist");
let ulItems = "";
let olItems="";
for(let i=0;i < countries.length; i++) { 
    ulItems +="<li>" + countries[i] + "</li>"
    olItems +="<li>" + countries[i] + "</li>"
}
let unorderedlist = document.getElementById("unorderedlist").innerHTML= ulItems
let orderedlist = document.getElementById("orderedlist").innerHTML=olItems
