




   var obj= {
          name:"ravi"
   };

   function f1(m){
   console.log(m); //
   m.age=21;
   m.name="anil";
   }

   f1(obj); // call by reference
   console.log(obj); //