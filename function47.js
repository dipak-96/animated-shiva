function armstrongcount(num){
    let orginalnum=num;
    let sum=0;
    while(num>0){
        let lastdigit=num%10;
        let cube=lastdigit*lastdigit*lastdigit;
        sum=sum+cube;
        num=Math.floor(num/10);
      }
      if(orginalnum==sum){

        return true;
      }
    return false;
}
console.log(armstrongcount(153));