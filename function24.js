function checkArmstrong(num){
    let original=num;
    let sum=0;
    while(num>0){
      let  lastdigit=num%10;
        let fact=1;
    for(let i=1;i<=lastdigit;i++){
        fact=fact*i;
    }
    sum=sum+fact;
        num=Math.floor(num/10);

    }
   return(sum===original) ;


}
console.log(checkArmstrong(145));