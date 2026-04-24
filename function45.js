function countstep(num){
    let count=0;
   // let sum=0;
    while(num>9){
        let sum=0;
        
        count++;
        while(num>0){
            //let sum=0;
            let ld=num%10;
            sum=sum+ld;
            num=Math.floor(num/10);
        }
        num=sum;
    }
    return count;
}
console.log(countstep(7654));