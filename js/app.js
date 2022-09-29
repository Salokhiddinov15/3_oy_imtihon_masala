function convert(bool){
  let answer=""
  if(bool){
    answer="Yes"
  }else{
    answer="No"
  }

  return answer
}

console.log(convert(true));

function sumOfNegatives(arr){
  let summ=0
  arr.forEach(e => {
    if(e<0){
      summ=summ+e;
    }
  });
  return(summ)
}

console.log(sumOfNegatives([-2,2,4,-7]));

function sumOfTwoArrays(arr1,arr2){
  let summ1=0
  let summ2=0
  arr1.forEach(e => {
    summ1+=e;
  });
  arr2.forEach(e => {
    summ2+=e;
  });

  return summ1+summ2
}

console.log(sumOfTwoArrays([5,6,7],[-3,4,9]));


let fArray=[]
function generateAndSum(num){
  let summ=0
  for(let i=1;i<=num;i++){
    fArray.push(i);
    summ+=i
  }

  return summ
}

console.log(generateAndSum(9));
console.log(fArray);