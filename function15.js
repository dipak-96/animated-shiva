function countEvenNum(n){
    let count=0;
    for(let i=2;i<=n;i+=2){
        count=count+1;

    }
    return count;
}
console.log(countEvenNum(20));