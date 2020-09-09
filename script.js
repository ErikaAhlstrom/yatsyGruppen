document.addEventListener("DOMContentLoaded", function(e){
    let calc_button=document.getElementById("calc");
    calc_button.addEventListener("click", function(event){

        let p1 = document.getElementById("player1");
        let p1_ones = document.getElementById("player1_ones"); ////objekt
        let p1_twos = document.getElementById("player1_twos");
        let p1_threes = document.getElementById("player1_threes");
        let p1_fours = document.getElementById("player1_fours");
        let p1_fives = document.getElementById("player1_fives");
        let p1_sixes = document.getElementById("player1_sixes");
        let p1_sum = document.getElementById("player1_sum");
        let p1_bonus = document.getElementById("player1_bonus");

        let p1_sum_array = [p1_ones.value,
                            p1_twos.value, 
                            p1_threes.value, 
                            p1_fours.value, 
                            p1_fives.value, 
                            p1_sixes.value];
        let sum = 0;
        for (x of p1_sum_array) {
            
            let y = parseInt(x);
            if (!x || x === NaN) {      //// varför funkar det
                x = 0;
            }
            sum += y;
        }
        p1_sum.innerHTML = sum;
        
        if (sum >= 63) {
            p1_bonus.innerHTML = 50;
        } else {
            p1_bonus.innerHTML = 0;
        }

    });

    function countDice(dice_array) {
        let values_array = []; ////Skapa en tom array
    
        for (let i = 0; i <= 6; i++) { //// assignar värdet 0 till varje index i values
            values_array[i] = 0;
        }
    
        // [0, 0, 0, 0, 0, 0, 0]    //// arrayen nu
        // [0, 1, 2, 3, 4, 5, 6]    //// arrayens index
    
        for (let current_dice of dice_array) { 
            values_array[current_dice]++;
        }
    
        return values_array;
    
    }
    
    
    function calcFullHouse(numbers_array) {
        let arr = countDice(numbers_array); //// skicka vidare till countDice funktionen
        let pair = 0;
        let three_kind = 0;
        let full_house_score = 0;
    
        if (arr.indexOf(2) > 0) {
            pair = arr.indexOf(2); //// .indexOf letar efter värdet 2, returnar indexet
        }
        if (arr.indexOf(3) > 0) {
            three_kind = arr.indexOf(3); //// returnar index av ev värde 3 i arrayen
        }
    
        if (pair > 0 && three_kind > 0) { //// om det är en kåk, spara totala summan
            full_house_score = (pair * 2) + (three_kind * 3);
        }
    
        return full_house_score;    //// returnar värde 0 om ej kåk, eller summan av kåken
    
    }
    
    console.log(calcFullHouse([5, 5, 6, 6, 6]));


    //TODO: Random dice function
    function diceRandomizer() {
        Math.floor(Math.random() * 7);
    }


});





// let  = document.getElementById("headline");
// let old_text = headline_variable.innerHTML; 

// console.log(old_text);
// headline_variable.style.color = "red";