const getArray = () => {
    const numString = prompt("Enter numbers separated by commas (e.g. 3, 4, 5):");
    const numArrayAsStrings = numString.split(",");
    const numArray = numArrayAsStrings.map(convertToNumber);
    return numArray;
}

function loop1() {
    let fruits = ["apple", "banana", "cherry"];
    for (let i=0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

const loop2 = () => {
    console.log("loop2 called");
    const items = [];
    for (let i = 1; i < 4; i++) {
        let item = prompt(`Enter Item ${i}:`)
        items.push(item);
    }
    for (let i = 0; i < items.length; i++) {
        document.getElementById("output").innerHTML +=
        "<p>" + items[i] + "</p>";
        console.log(items[i])
    }
};

const loop3 = () => {
    const itemstring = prompt(`Enter 3 items, separated by commas:`);

    const items = itemstring.split(",").map((item) => item.trim()); 
    console.log(items);
};

const convertToNumber = (stringNumber) => parseInt(stringNumber.trim());

const doubleNumber = (nums) => nums * 2;

const map1 = () => {
    let numArray = getArray();
    //     stringNumber.trim();
    //     return parseInt(stringNumber); 
    // });

    // for (let i = 0; i <numArrayAsStrings; i++) {
    //     const num = parseInt(numArrayAsStrings[i]);
    //     numArray.push(num);
    // }
    console.log(numArray);
};

const map2 = () => {
    let nums = getArray();
    const doubled = nums.map(doubleNumber);
    const sortedDoubledDsc = [...doubled].sort((a, b) => b - a) // Descending order
    const sortedDoubledAsc = [...doubled].sort((a, b) => a - b) // Ascending order


    console.log(sortedDoubledDsc)
    console.log(sortedDoubledAsc)
}

const map3 = () => {
    // loop through numbers. If even, double it. If odd, triple it.
    let numArray = getArray();

    // const converted = numArray.map((num) => {
    //     if (num % 2 === 0){
    //         return num * 2;
    //     } else {
    //         return num * 3;
    //     }
    // })
    // console.log(converted);

    const loopedConversion = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0){
            loopedConversion.push(numArray[i] * 2);
        } else {
            loopedConversion.push(numArray[i] * 3);
        }
    }
    for (let i = 0; i < loopedConversion.length; i++) {
        console.log(`Original: ${numArray[i]}, changed: ${loopedConversion[i]}`)
    }



    // const tripleNumbers = (nums) => nums * 3;
    // for (let i = 0; i < numArray.length; i++) {
    //     if (numArray[i] % 3 === 0) {
    //         const tripledNum = numArray.map(tripleNumbers);
    //     } else if (numArray[i] % 2 === 0) {
    //         const doubledNum = numArray.map(doubleNumber);
    //     }
    // }

    // console.log(numArray)
}


const testNumberFilter = () => {
    const nums = [1,2,3,4,5,6,7,8,-23,-1,-223,100];
    const filteredNumbers = numberFilterForEach(nums);
    console.log(filteredNumbers); // [1,2,3,4,5]
};

const numberFilter = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0 && nums[i] <= 5) {
            result.push(nums[i]);
        }
    }
    return result;
}

const numberFilterFilter = (nums) => {
    return result = nums.filter(number => number >= 0 && number <=5);
}

const numberFilterForEach = (nums) => {
    const result = [];
    nums.forEach(number => {
        if (number <=5 && number >= 0) {
            result.push(number);
        }
    });
    return result;
};

const filter1 = () => {
    // Use a single prompt, ask for a list of numbers ✅
    // Split nubmers into array ✅
    // Filter out even numbers (keep odd) into new array ✅
    //      - Use a For loop ✅
    // Loop through and print each number one at a time (the odd numbers) ✅
    //
    // Extra Challenges:
    //      - Use map to turn the array of strings into numbers ✅
    //      - Use a while loop
    //      - Use the filter function ✅
    //      - Use a foreach loop ✅
    //      - add the result as a <li> to a list somewhere 
    
    let numArray = getArray();

    const oddArray = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 !== 0) {
            oddArray.push(numArray[i]);
        }
    }
    console.log(oddArray);

    oddArray.forEach(number => console.log(number));
};

const filter2 = () => {
    let numArray = getArray();

    let oddArray = numArray.filter(number => number % 2 !== 0);
    console.log(oddArray);
    oddArray.forEach(number => console.log(number));
};


const filterModifyArray = () => {
    // Filter out all numbers that aren't between 8-15.
    // Do not create a new array; modify the existing array.
    // Do _not_ return anything.

    const numbersIRandomlyPutIn = [0, 8, 17, 13, 14, 9, 3, 0, 22, 12];

    filter3(numbersIRandomlyPutIn);
    console.log(numbersIRandomlyPutIn);
};

const filter3 = (numbersToFilter) => {
    //my code here
    for (let i = numbersToFilter.length - 1; i >= 0; i--){
        if (numbersToFilter[i] < 8 || numbersToFilter[i] >15) {
            numbersToFilter.splice(i, 1)
        }
    };
};


const addArray = () => {
    // Write a function that takes an array of numbers, adds them together, and returns the result
    let nums = getArray();
    // const nums = [1,2,3,4,5,6,7,8,9];

    const sum = nums.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const max = nums.reduce((accumulator, currentValue) => {
        return currentValue > accumulator ? currentValue : accumulator;
    }, nums[0]);
    console.log(max);

    // let sum = 0;
    // nums.forEach(number => {
    //     sum += number
    // });
    console.log(sum);
    return sum;
};