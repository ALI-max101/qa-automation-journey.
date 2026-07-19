console.log("Printing the patterns through the loops ")

for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern+="*";
    }
    console.log(pattern);
}


for(let k=4;k>=1;k--){
    let pattern="";
    
    for(let l=1;l<=k;l++){
        pattern+="*";
    }
    console.log(pattern);
}