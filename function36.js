function largestfind(num){
    let greatestdigit=0;
    while(num>0){
        let ld=num%10;
        if(ld>greatestdigit){
            greatestdigit=ld;
        }
        num=Math.floor(num/10);
    }
    return greatestdigit;
}
console.log(largestfind(7654));