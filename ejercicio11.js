const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(mixedElements) {
    let sum = 0;

    for (let element of mixedElements) {
        if (typeof element === "number") {
            sum += element; 
        } else if (typeof element === "string") {
            sum+= element.length;
        }
    }
    return sum / mixedElements.length;
}

console.log(averageWord(mixedElements));