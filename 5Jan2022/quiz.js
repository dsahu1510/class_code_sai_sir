function captureData(){

    var data= {
        q1: {
            answer:"",
            correctAnswer:"W3C"
        },
        q2:{
            answer:"",
            correctAnswer:"HyperText Mark up Language"
        },
        q3:{
            answer: "",
            correctAnswer:"Cascading Style sheets"

        }
    }

   var q1= document.getElementsByName("q1");
   var q2= document.getElementsByName("q2");
   var q3= document.getElementsByName("q3");

   console.log(q1);

//var q1= document.getElementById("q1");

console.log(q1);
 for(var i=0;i<q1.length;i++){
     var q1Option = q1[i];
      if(q1Option.checked == true){
          data.q1.answer=q1Option.value;
      }
 }
 for(var j=0;j<q2.length;j++){
    var q2Option = q2[j];
     if(q2Option.checked == true){
         data.q2.answer=q2Option.value;
     }
}
for(var k=0;k<q3.length;k++){
    var q3Option = q3[k];
     if(q3Option.checked == true){
         data.q3.answer=q3Option.value;
     }
}
console.log(data);
}

/*


   4 Balls -  1sticker



*/