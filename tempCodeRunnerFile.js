function createPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        if (i === 1 || i === rows) {
            console.log('*'.repeat(rows));
        } else {
            console.log('*' + ' '.repeat(rows - 2) + '*');
        }
    }
}

const numberOfRows = 1;