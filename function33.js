function oddproduct(num){
    let product=1;
    let found=false;
    while(num>0){
        let lastdigit=num%10;
        if(lastdigit%2!==0){
            product=product*lastdigit;
        
        }
        num=Math.floor(num/10);
    }
    return product;
}
console.log(oddproduct(275964));