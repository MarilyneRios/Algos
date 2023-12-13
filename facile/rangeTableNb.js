function getRangeTable(minVal, maxVal) {
    const list = [];
    
    // Insert your code here
      for (let i = minVal; i <= maxVal; i++) {
        list.push(i);
    }

    
    return list
};

console.log(getRangeTable(-5, 5));
// Expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]