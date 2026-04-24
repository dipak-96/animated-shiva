function perfectnumber(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum=sum+i;
        }
    }
    if(num==sum){
        return true;
    }
    return false;
}
console.log(perfectnumber(8));