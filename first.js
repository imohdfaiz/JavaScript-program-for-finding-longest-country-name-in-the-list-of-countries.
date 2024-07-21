let country = ["Austrailia", "Germany", "United States of America"];

function longestName(){
    let ansIdx = 0;
    for(let i=0; i<country.length; i++){
        let currLen = country[i].length;
        let ansLen = country[ansIdx].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    console.log(country[ansIdx]);
// console.log(s);
}

longestName();