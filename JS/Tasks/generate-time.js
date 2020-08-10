function generateTime(a, b, c, d) {
    const values = [...arguments];
    const counts = new Array(10).fill(0);
    for (let i = 0; i < values.length; i++) {
        for (let j = values[i]; j < counts.length; j++) {
            counts[j]++;
        }
    }


}