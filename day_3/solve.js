const fs = require('fs');

fs.readFile("./day_3/input.txt", "utf-8", (err, data) => {
    let total = 0;
    const arr = data;
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    match = regex.exec(arr);

    while (match != null){
        total += Number(match[1] * Number(match[2]));
        match = regex.exec(arr);
    };
    console.log('part 1: ' +  total);

    total = 0;
    let regex2 = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;
    let match2;
    let enable = true; // Start in do() mode
    let result = [];

    while ((match2 = regex2.exec(arr)) !== null) {
        const matched = match2[0];

        if (matched === "do()") {
            enable = true; // Enable mul() processing
        } else if (matched === "don't()") {
            enable = false; // Disable mul() processing
        } else if (enable && matched.startsWith("mul(")) {
            result.push(matched); // Add valid mul() calls
            total += Number(match2[1]) * Number(match2[2]);
        }
    }

    // Output the result
    console.log('part 2: ' +  total);
    //result.forEach(item => console.log(item));
});
