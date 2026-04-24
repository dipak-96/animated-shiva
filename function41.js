function maxdigit(num){
    let prev=num/10;
    let max=prev;
    num=Math.floor(num/10);
    while(num>0){
        let nextdigit=num%10;
        if(nextdigit<prev){
            max=prev;


        }
        max=nextdigit;
    }
    return max;
}
console.log(maxdigit(9867));