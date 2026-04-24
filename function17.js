let sum=0
let product=0;
function sumDigit(num){
while(num>0){
   // let sum=0;
    let lastdigit=num%10;
    sum=sum+lastdigit;
    product=product+(lastdigit*lastdigit);

    num=Math.floor(num/10);
}
    return{
sum:sum,
product:product,
    }


}
console.log(sumDigit(234));