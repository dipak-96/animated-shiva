function finallgulam(num){
    let orignalnum=num;
    let reversenum=0;
let sum=0;
    while(num>0){
        let lastdigit=num%10;
         reversenum=reversenum*10+lastdigit;
         sum=sum+lastdigit;
        num=Math.floor(num/10);
        
    }
   
     if (sum%2==0){
        return reversenum;
    }
    else{
        return orignalnum;
}
}
console.log(finallgulam(7469));