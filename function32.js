function evenSum(num){
    let sum=0;
    while(num>0){
        let lastdigit=num%10;
        if(lastdigit%2==0){
            sum=sum+lastdigit;
        
        }
        num=Math.floor(num/10);
    }
    return sum;
}
console.log(evenSum(275964));