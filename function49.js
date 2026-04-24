function automorphicnum(num){
    let sqare=num*num;
    let temp=num;
let count=0;
while(temp>0){
    count++;
    temp=Math.floor(temp/10);
}
let ld=sqare%Math.pow(10,count);
/*let pow=1;
for(let i=1;i<=count;i++){
    pow=pow*10;

}
let ld=sqare%pow;
if(num==ld){
    return true;
}
return false;
    

}*/
if(num==ld){
    return true;

}
return false;
}
console.log(automorphicnum(25));
console.log(automorphicnum(37));