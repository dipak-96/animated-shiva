function automorphicnum(num){
    let squarenum=num*num;
    while(squarenum>0){
        let ld=squarenum%100;
        if(num==ld){
            return true;
        }
        return false;
squarenum=Math.floor(squarenum/10);

    }
}
console.log(automorphicnum(25));