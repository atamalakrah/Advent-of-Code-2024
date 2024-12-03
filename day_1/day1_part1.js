const fs = require('fs');
let list_1 = []
let list_2 = []
let count = 0

const data = fs.readFileSync('./day_1/puzzle_input.txt', { encoding: 'utf8', flag: 'r' });
//Splitting data by new line
let split_string = data.split(/\r?\n/);
//Splitting into 2 lists
for (let i = 0; i < split_string.length; i++){
    let temp_arr = split_string[i].split('   ');
    list_1.push(temp_arr[0]);
    list_2.push(temp_arr[1]);
}
//For use in the sort call
function compareNumbers(a,b) {
    return a - b;
}

//Sort the lists in numberical order
list_1 = list_1.sort(compareNumbers)
list_2 = list_2.sort(compareNumbers)

//Compare each row and get the difference, add to count
for (let i = 0; i < list_1.length; i++){
    count += Math.abs(list_1[i] - list_2[i]);
}

console.log(count)

