function reverseNumber(num){
    let reversenum=0;
    while(num>0){
        let ld=num%10;
        reversenum=reversenum*10+ld;
        num=Math.floor(num/10);
    }
    return reversenum;
}
console.log(reverseNumber(765));