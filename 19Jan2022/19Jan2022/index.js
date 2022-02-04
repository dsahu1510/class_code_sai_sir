var arr= [10,20,30,40,50,60];
arr.push(70);
arr.unshift(5);
arr.pop();
arr.shift();
var index = arr.indexOf(30);
arr.splice(index,1);
arr.reverse();
console.log(arr);
var num =arr.reduce(function(prevNum,currNum){
    return prevNum + currNum;
})
console.log(num);



