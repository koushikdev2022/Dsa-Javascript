let isPalendrom = (number) =>{
    let copyNumber = number ;
    let reverseNumber = 0;
    
    while(copyNumber > 0){
        let lastDigit = copyNumber%10;
        reverseNumber = reverseNumber* 10 + lastDigit;
        copyNumber = Math.floor(copyNumber/10);
    }
    if(reverseNumber === number){
        return true;
    }else{
        return false;
    }
   
}

console.log(isPalendrom(122));