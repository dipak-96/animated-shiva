function increasing(num){
    let prev=num%10;
    num=Math.floor(num/10);
    while(num>0){
        let nextdigit=num%10;
        if(nextdigit>=prev){
            return false;
        }
        prev=nextdigit;
        num=Math.floor(num/10);
    }
    return true;
 
}
console.log(increasing(11234));
