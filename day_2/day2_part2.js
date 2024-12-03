const fs = require('fs');
const checkSequence = (row) => {
    const isIncreasing = row[1] > row[0];
    const isDecreasing = row[1] < row[0];

    for(let i = 0; i < row.length; i++){
        const diff = row[i] - row[i-1];

        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;
        if (isIncreasing && diff <= 0) return false;
        if (isDecreasing && diff >= 0) return false;
    }
    return true;
};


fs.readFile("./day_2/puzzle_input.txt", "utf-8", (err, data) => {
    const arr = data.split("\n").map((row) => row.split(" ").map(Number));


    let count = 0;
    arr.forEach((row) => {
        if(checkSequence(row)){
            count++;
            return;
        }
        else{
            for (let i = 0; i < row.length; i++){
                const modifiedArr = row.slice(0, i).concat(row.slice(i+1));
                if (checkSequence(modifiedArr)){
                    count++;
                    return;
                }
            }
        }
    })
    console.log(count)

});
