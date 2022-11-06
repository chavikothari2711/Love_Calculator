function upper(name){
  name = name[0].toUpperCase()+name.slice(1,).toLowerCase();
  return name;
}
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const arr1 = JSON.parse(params.data)
var text;
console.log(arr1);
document.querySelector('.result').innerHTML = arr1[4];
document.querySelector('.name1').innerHTML = upper(arr1[0]);
document.querySelector('.name2').innerHTML = upper(arr1[1]);
document.querySelector('.score').innerHTML = arr1[4];
if(arr1[5]==='F'){
  text="You got Friends, which means "+upper(arr1[0])+" and "+upper(arr1[1])+" are great friends. You must make this Friendship last Forever."
}
else if(arr1[5]==='L'){
  text="You got Love, which means "+upper(arr1[0])+" and "+upper(arr1[1])+" are Lovers. Your love remains forever and make a history like Heer and Ranjha."
}
else if(arr1[5]==='A'){
  text="You got Affectionate, which means "+upper(arr1[0])+" and "+upper(arr1[1])+" show fondness or tenderness towards each other. You are true admirers of each other."
}
else if(arr1[5]==='M'){
  text="You got Marriage, which means "+upper(arr1[0])+" and "+upper(arr1[1])+" might marry each other. Your marriage will be like Jodha and Akbar."
}
else if(arr1[5]==='E'){
  text="You got Enemies, which means "+upper(arr1[0])+" and "+upper(arr1[1])+" are true enemy, might one of you kill the other. Hope you won't end up like Indians and Pakistans."
}
else{
  text="You got Siblings, which means "+upper(arr1[0])+" and "+upper(arr1[1])+" are great Siblings like Amenadiel and Lucifer Morning Star."
}
document.querySelector('.sentence').innerHTML=text;
