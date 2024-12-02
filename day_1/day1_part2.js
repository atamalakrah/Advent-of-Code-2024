const fs = require('fs');
let list_1 = []
let list_2 = []
let count = 0

const data = fs.readFileSync('./puzzle_input.txt', { encoding: 'utf8', flag: 'r' });
//Splitting data by new line
let split_string = data.split(/\r?\n/);
//Splitting into 2 lists
for (let i = 0; i < split_string.length; i++){
    let temp_arr = split_string[i].split('   ');
    list_1.push(temp_arr[0]);
    list_2.push(temp_arr[1]);
}

//Creates a map of the number of times a value appears in list 2
const map = list_2.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());


//calculate the count value - take value i in list_1 and multiply by the number of occurences in list_2
for (let i = 0; i < list_1.length; i++){
    if (typeof(map.get(list_1[i])) == "number"){
        count += Number(list_1[i]) * map.get(list_1[i])
    }

}
//output final result
console.log(count);

