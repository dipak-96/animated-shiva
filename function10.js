function reverseNumber(num){
    let reversenum=0;
    while(num>0){
    let lastnum=num%10;
   // let reversenum=0;
    reversenum=reversenum*10+lastnum;
    num=Math.floor(num/10);
      //return reversenum;
   
    }
     return reversenum;

}
console.log(reverseNumber(123));