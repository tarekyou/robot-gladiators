<<<<<<< HEAD
var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

var enemyNames= ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0 ){
=======

var randomNumber = function (min, max) {
    var value = Math.floor (Math.random() * (max - min + 1) + min);
    return value;
};

var fight = function(enemy) {
    while(playerInfo.health > 0 && enemy.health > 0 ){
>>>>>>> develop
  // Alert players that they are starting the round
 // window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
   if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    // if yes (true), leave fight
    if (confirmSkip) {
<<<<<<< HEAD
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
=======
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max (0, playerInfo.money - 10);
      console.log("playerInfo.money", playerInfo.money);
>>>>>>> develop
      break;
    }
}
  // if player choses to fight, then fight

<<<<<<< HEAD
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
=======
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      playerInfo.money = playerInfo.money + 20;
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max (0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
>>>>>>> develop
    }
    // if player choses to skip
  
}
};

var startGame = function() {
<<<<<<< HEAD
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0 ; i < enemyNames.length; i++) {
    if (playerHealth > 0 ){
        window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ));
    

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    /*console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + "index");*/
    fight(pickedEnemyName);
=======
 playerInfo.reset();
for(var i = 0 ; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0 ){
        window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ));
    

    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    /*console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + "index");*/
    fight(pickedEnemyObj);
    if (playerInfo.health > 0 && i < enemyInfo.length - 1){
        var storeConfirm = window.confirm("The fight is over, visit the sore before the next round?");
        if (storeConfirm){
        shop();
        };
    }
>>>>>>> develop
}
else {
    window.alert ("You have lost your robot in battle! Game over!");
    break;
}
}
endGame();
 };
 var endGame = function () {
<<<<<<< HEAD
     if (playerHealth > 0){
         window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + "." );
=======
     if (playerInfo.health > 0){
         window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + "." );
>>>>>>> develop
     }
     else {
     window.alert("You've lost your robot in battle.");
     }
     var playAgainConfirm = window.confirm("Would you like to play again?");{
     if (playAgainConfirm){
         startGame();
     }
     else{
         window.alert("Thank you for playing Robot Gladiators! Come back soon!");
     }
     }
 };
<<<<<<< HEAD
=======
 var shop = function() {
     var shopOptionPrompt = window.prompt(
         "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
     );
     switch (shopOptionPrompt){
         case "refill":
          case "REFILL" :   
          playerInfo.refillHealth();
             break;
             
             
        case  "upgrade":
        case "UPGRADE":    
        playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE":    
            window.alert ("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;        
     }
 };
 var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset : function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money");
        }
    },
    upgradeAttack : function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

// console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Tumble",
        attack: randomNumber(10, 14)
    }

];
>>>>>>> develop
startGame();
 // fight();