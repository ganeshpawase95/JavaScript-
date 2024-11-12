var x = [85, 50, 95, 67, 80, 60]

total = 0;
for(let a = 0; a < x.length; a++){
    total += x[a];
}
average = total / x.length;
console.log("Average is:",average);
console.log("Total is:",total);
