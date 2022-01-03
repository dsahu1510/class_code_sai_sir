var a=100;
console.log(a); //100
function f1(){
    console.log(a); // undefined
    var a=20;
    console.log(a); // 20
}
f1();

/*
  var a;
  a=100;
  console.log(a);//100
  function f1(){
      var a;
      console.log(a); //undefined
      a=20;
      console.log(a);// 20
  }
*/