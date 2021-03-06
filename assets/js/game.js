/*game.js
  Bootcamp Module 3 Exercise
  Create a robot fight game
  AJ Ureel 12/5/2021
*/

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Ask what the player wants to do
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //check what the player wants to do
    if (promptFight === "fight" || promptFight === "FIGHT"){
        //if they want to fight, then
    
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log("enemyHealth: " + enemyHealth);

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log("playerHealth: " + playerHealth);

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "skip" || promptFight === "Skip") {
        //confirm if user wants to skip so penalize them
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes leave the fight
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight!")
            playerMoney = playerMoney - 2;
        } 
        //return to fight and confirm desire to fight
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option, please try again!");
    }
  };

fight();