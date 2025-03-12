// 1
function sumOfNumbers(arr){
    let total=arr.filter(num=> num >25 && num <=75).reduce((acc,sum)=>acc + sum);
    return total;
}
console.log(sumOfNumbers([40, 22, 67, 89, 32, 19]));


// 2
function sumOfpostiveNegative(arr) {
  let positiveSum = 0;
  let negativeSum = 0;
  arr.forEach((element) => {
    if (element > 0) positiveSum = positiveSum + element;
    negativeSum = negativeSum + element;
  });
  if (positiveSum > Math.abs(negativeSum))
    console.log("positve : " + positiveSum);
else
  console.log("negative : " + negativeSum);
}
sumOfpostiveNegative([3, -2, 7, -5, 8]);



// 3
let obj={
    "meta": "info",
    "content": {
    "navigation": [
    {
    "title": "Homepage",
    "links": "https://example.com/home"
    },
    {
    "values": [10, 20, 30]
    }
    ]
    }
   } 

function extractObject(obj){
    const link=  obj.content.navigation[0].links;
    const values=obj.content.navigation[1].values;
    console.log("links : "+link ,"\nvalus :"+values);
}
extractObject(obj);

// 4
function countAlphabets(str){
let lowerCaseCount=0;
let upperCaseCount=0;
   for(let i=0;i<str.length;i++){
     char=str.charAt(i);
    if(char <='a' && char <='z'){
     
        upperCaseCount++;
        
    }
    else{
        lowerCaseCount++;
    }

   }
   if(lowerCaseCount > upperCaseCount){
    console.log("lowercase count is greater -count :"+lowerCaseCount);
   }
   else{
    console.log("uppercase count is greater -count :"+upperCaseCountCaseCount);
   }
 
}
 countAlphabets("Helloworld")
