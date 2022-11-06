function fetchname(){
  var name1 = document.querySelector('#name1').value;
  var name2 = document.querySelector('#name2').value;
  var gender1male = document.querySelector('#gender1male');
  var gender1female = document.querySelector('#gender1female');
  var gender2male = document.querySelector('#gender2male');
  var gender2female = document.querySelector('#gender2female');
  if(gender1male.checked){gender1=gender1male.value}
  else{gender1=gender1female.value}

  if(gender2female.checked){gender2=gender2female.value}
  else{gender2=gender2male.value}

  return [name1,name2,gender1,gender2];
}

function nameTonumber(finalname){
  var numarr=[];
  while(finalname.length!=0) {
    var character = finalname[0];
    var count=1;
    finalname = finalname.slice(1,);
    while(finalname.includes(character)){
      count+=1;
      var index = finalname.indexOf(character);
      var arr1 = finalname.slice(0,index);
      var arr2 = finalname.slice(index+1,);
      finalname = arr1.concat(arr2);
    }
    numarr.push(count);
  }
  return numarr;
}
function numtopercent(numarr){
    while(numarr.length!=2){
      mid = Math.floor(numarr.length/2);
      numarr = sum(numarr.slice(0,mid),numarr.slice(mid,));
  }
  var percent="";
  for(var i = 0;i<numarr.length;i++){
    percent=percent+numarr[i];
  }
  return (percent);
}
function sum(arr1,arr2){
  var sumar=[];
  arr2 = arr2.reverse();
  if (arr1.length!=arr2.length){
    arr1.push(0);
  }
  for(var i = 0; i<arr1.length;i++){
    sumar.push(arr1[i]+arr2[i]);
  }
  return sumar;
}

function LoveCalculator(){
  var names = fetchname();
  var finalname = ((names[0]+"love"+names[1]).toLowerCase()).split('');
  var numarr=nameTonumber(finalname);  // name to numbers
  var percent = numtopercent(numarr);
  while(percent!='100' && percent.length>=3){
    var arr = percent.split("");
    var newarr=[];
    for(var i =0;i<arr.length;i++){
      newarr.push(parseInt(arr[i]));
    }
    percent = numtopercent(newarr);
  }
  names.push(percent);
  console.log(names);
  window.location.href=`LoveCalc.html?data=${JSON.stringify(names)}`;
}

function flames(){
  names=fetchname();
  len = names[0].length + names[1].length;
  // Friends, Lovers, Affectionate, Marriage, Enemies, and Siblings.
  var flame = 'FLAMES';
  while(flame.length!=1){
    var rem = len%(flame.length)-1;
    if(rem===-1){flame=flame.slice(0,(flame.length)-1);}
    else{flame=flame.slice(0,rem)+flame.slice(rem+1,)}
    console.log(flame);
  }
  if(flame==='F'){names.push('Friends');}
  else if(flame==='L'){names.push('Lovers');}
  else if(flame==='A'){names.push('Affectionate');}
  else if(flame==='M'){names.push('Marriage');}
  else if(flame==='E'){names.push('Enemies');}
  else{names.push('Siblings');}
  names.push(flame)
  console.log(names);
  window.location.href=`Flames.html?data=${JSON.stringify(names)}`;

}
