function upper(name){
  name = name[0].toUpperCase()+name.slice(1,).toLowerCase();
  return name;
}
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const arr1 = JSON.parse(params.data)
var text;
console.log(arr1);
document.querySelector('.name1').innerHTML = upper(arr1[0]);
document.querySelector('.name2').innerHTML = upper(arr1[1]);
document.querySelector('.score').innerHTML = arr1[4]+"%"
document.querySelector('.percent').innerHTML = arr1[4]+"%";
document.querySelector('.sen').innerHTML=upper(arr1[0])+" truly loves you "+upper(arr1[1])+".";

if(parseInt(arr1[4])<=100 && parseInt(arr1[4])>90){
  text = "Your score is marvelous. You guys set an example of Heer and Ranjha the Indian Romeo and Juliet.";
}
else if(parseInt(arr1[4])<=90 && parseInt(arr1[4])>80){
  text = "Your score is awesome. You guys are perfect for each other. You are like Bajirao and Mastani.";
}
else if(parseInt(arr1[4])<=80 && parseInt(arr1[4])>60){
  text = "Your score is great. You guys make a perfect balance. Your love will grow with better communication and trust.";
}
else if(parseInt(arr1[4])<=60 && parseInt(arr1[4])>40){
  text = "Your score is nice. Score is just perfect. Remember only you guys can judge your love.";
}
else{
  text="It's true that score are low, but score are just numbers and you can't measure love with numbers.";
}
document.querySelector('.sentence').innerHTML=text;
