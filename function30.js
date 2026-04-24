function firstdigitposition(num,target){
    let poss=1;
    while(num>0){
        let rightdigit=num%10;
        if(rightdigit==target){
            return poss;
        }
        num=Math.floor(num/10);
        poss++;
    }
    return -1//agar koi digit na mile

}
console.log(firstdigitposition(23456,9));