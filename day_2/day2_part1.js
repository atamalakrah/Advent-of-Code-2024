const fs = require('fs');
let final_arr = []
let count = 0

const data = fs.readFileSync('./day_2/puzzle_input.txt', { encoding: 'utf8', flag: 'r' });
//Splitting data by new line
let split_string = data.split(/\r?\n/);

//Setting data up by splitting array into multiple entries and converting to Int
for (let i = 0; i < split_string.length; i++){
        final_arr[i] = split_string[i].split(' ');    
        for (let j = 0; j < final_arr[i].length; j++){
            final_arr[i][j] = Number(final_arr[i][j])
        }
}

// a is the first number
// b is the second number
function determine_safety(a,b){
    if (Math.abs(a - b) <= 3 && Math.abs(a - b) >= 1){
        if (a > b){
            return "decreasing";
        }
        else if(a < b){
            return "increasing";
        }
    }
    else{
        return "neither";
    }
    
}

for(let i = 0; i < final_arr.length; i++){
    let old_value = "";
    let current_value = "";
    for(let j = 0; j < final_arr[i].length; j++){
        if(j == final_arr[i].length - 1){
            count ++;
            break;
        }
        else if(current_value == "neither" || current_value != old_value){
            break;
        }
        else{
            old_value = current_value;
            current_value = determine_safety(final_arr[i][j], final_arr[i][j+1]);
            if (old_value == ""){
                old_value = current_value;
            }
        }
    }
}



console.log(count)