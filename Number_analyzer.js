console.log("Number ANALYSER :")
const check=(a) => {
    if (a<0){
        console.log("NUMBER IS NEGATIVE ");
    }
    else{
        console.log("NUMBER IS POSTTIVE");
    }

    if(a%2==0){
        console.log("NUMBER IS  EVEN");
    }
    else{
         console.log("NUMBER IS  ODD");
    }
    
    if(a%3==0 && a%5==0){
        console.log("Number is divisble by both 3 and 5");
    }
    if(a>100){
        console.log("Number is greater than 100");
    }

}

check(124);