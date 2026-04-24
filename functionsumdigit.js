function sumdigits(num){
    while(num>10){
        let sum=0;
        while(num>0){
            let lastdigit=num%10;
            sum=sum+lastdigit;
            num=Math.floor(num/10);
        }
        num=sum;
    }
    return num;
}
console.log(sumdigits(876543));