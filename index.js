function quadraticFunction(a, b, c, x) {
    return a * Math.pow(x, 2) + b * x + c;
}

function generateNumbers(a, b, c, numNumbers) {
    let numbers = [];
    for (let i = 0; i < numNumbers; i++) {
        let x = Math.floor(Math.random() * 100);
        numbers.push(quadraticFunction(a, b, c, x));
    }
    return numbers;
}

function applyFunction(n) {
    if (n % 2 === 0) {
        return n / 2;
    } else {
        return (3 * n + 1) / 2;
    }
}

function buildTree(numbers) {
    let tree = { name: "Root", children: [] };
    numbers.forEach(num => {
        let currentNode = { name: num.toString(), children: [] };
        let steps = currentNode.children;
        let nextValue = applyFunction(num);
        while (nextValue !== 1) {
            steps.push({ name: nextValue.toString(), children: [] });
            steps = steps[steps.length - 1].children;
            nextValue = applyFunction(nextValue);
        }
        steps.push({ name: "1", children: [] });
        tree.children.push(currentNode);
    });
    return tree;
}
