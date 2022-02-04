

var arr= [10,200,78,123,145];

arr.forEach(function(element){
   console.log(element);
})


function myOwnForEach(msbvksdvkjbksjdb){
        for(var i=0;i<arr.length;i++){
            msbvksdvkjbksjdb(arr[i]);
        }
}

console.log(".......................")
myOwnForEach(function(x){
    console.log(x);
})