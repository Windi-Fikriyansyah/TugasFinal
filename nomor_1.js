function totalLompat(x, y, k) {
    let lompat = 0;
    while (x + k < y) {
        x += k;
        lompat++;
    }
    return lompat;
}

console.log(totalLompat(10, 85, 30));