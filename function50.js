function disariumnumber(num){
    let original=num;
    let count=0;
    let temp=num;
    while(temp>0){
        count++;
        temp=Math.floor(temp/10);
    }
    let sum=0;
    while(num>0){
        let lastdigit=num%10;
        //let sum=0;
        let pow=1;
        for(let i=1;i<=count;i++){
            pow=pow*lastdigit;
        }
        
        sum=sum+pow;
        count--;
        num=Math.floor(num/10);
    }
    return sum==original;

}
console.log(disariumnumber(135));