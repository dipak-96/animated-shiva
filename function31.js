function removedigit(num,target){
    let result=0;
    let place=1;
    while(num>0){
        let lastdigit=num%10;
        if(!(lastdigit==target)){
            result=result+lastdigit*place;
            place=place*10;
        }
        num=Math.floor(num/10);

    }
    return result;

}
console.log(removedigit(65432,5));