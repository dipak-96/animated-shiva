function powernum(num){
    let square,cube;
   // let sum=0;
    square=(num*num)
    
    cube=(num*num*num)
    return {
        square:square,
        cube:cube,
    }
    

}
console.log(powernum(5));