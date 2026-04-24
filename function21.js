function armstrongCheck(num){
    let cube=0;
    let original=num;
    while(num>0){
    let lastdigit=num%10;
    cube=cube+(lastdigit*lastdigit*lastdigit);
    num=Math.floor(num/10);
    }
    if (cube==original){
        return true;
    }
    else{
    return false;
    }
    

}
console.log(armstrongCheck(159))