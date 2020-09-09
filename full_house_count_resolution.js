function countDice(dice) {
    let values = [];

    for (let i = 0; i <= 6; i++) {
        values[i] = 0;
    }

    // [0, 0, 0, 0, 0, 0, 0]
    // [0, 1, 2, 3, 4, 5, 6]

    for (let current_dice of dice) {
        values[current_dice]++;
    }

    console.log(values)

}

countDice([3, 4, 5, 5, 6]);