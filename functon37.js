function secondLargest(num){
   let  largest=0;
   let secondlargest;
while(num>0){
    let ld=num%10;
    if(ld>largest){
        secondlargest=largest;
        largest=ld;
    }
    else if(ld>secondlargest){
        secondlargest=ld;

    }
    num=Math.floor(num/10)
    

}
return secondlargest;
}
console.log(secondLargest(8976543));