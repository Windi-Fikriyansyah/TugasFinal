function printPattern(n) {
    let currentValue = 1;

    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            row += currentValue + ' ';
            currentValue++;
        }

        console.log(row);
    }
}

printPattern(7);