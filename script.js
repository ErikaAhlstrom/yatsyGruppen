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

});


// let  = document.getElementById("headline");
// let old_text = headline_variable.innerHTML; 

// console.log(old_text);
// headline_variable.style.color = "red";