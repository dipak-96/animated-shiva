function reverseNum(num){
    let isnegative=num<0;
    num=Math.abs(num);//number negative ho ya postitive vo positive hi rahega
    let reversenum=0;
    while(num>0){
        let lastdigit=num%10;
         reversenum=reversenum*10+lastdigit;
        num=Math.floor(num/10);
    }
    return isnegative?-reversenum:reversenum;
}
console.log(reverseNum(234));
console.log(reverseNum(-876));