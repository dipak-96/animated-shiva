function strongnumber(num){
    let sum=0;
   // let fact=1;
    while(num>0){
        let fact=1;
        let ld=num%10;
        for(let i=1;i<=ld;i++){
            fact=fact*i;
        }
        sum=sum+fact;
        num=Math.floor(num/10);
}
return sum;

}
console.log(strongnumber(234));