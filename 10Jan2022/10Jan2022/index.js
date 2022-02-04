var array= ["Sai","kiran","rajesh","anil","venkat","Sai","kiran","rajesh"];
var newArray = [];
  for(var i=0;i<array.length; i++){
    console.log(array[i]);
    if(newArray.includes(array[i])){
        continue;
    }
    else
    {
        newArray.push(array[i]);
    }
  }
  array =newArray;
  console.log(newArray);
  console.log(array);