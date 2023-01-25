// Question 1
let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

function studentWithHighestMarks(array) {
    sum = [];
    array.forEach((item, index) => sum.push (item.marks.reduce((acc, cV) => acc + cV, 0)))
    sum.forEach((item, index) => {
        if (item == Math.max(...sum)) {
            sum = index
        }
    })
    return (array[sum].name)
}
console.log(`The student with the highest overall grade is ${studentWithHighestMarks(student)}`);

// Question 2
array = [20, -2, 4, -11, 0, 25]

let minimumValue = array => {
    minimum = Infinity;
    array.forEach((item, index) => {
        if (item < minimum) {
            minimum = item
        }
    })
    return minimum;
}
console.log(`the minimum value of the array is ${minimumValue(array)}`);
console.log(`${minimumValue(array)} has the lowest value`);

// Question 3
let lengthOfString = string => string.length;
console.log(`the length of "Hello World" is ${lengthOfString("HelloWorld")}`)
