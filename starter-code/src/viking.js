// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    battleCry(){
        return "Odin Owns You All!";
    }
    
    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`   
        } else {
            return `${this.name} has died in act of combat`   
        }
  
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    
    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;   
        } else {
            return `A Saxon has died in combat`;   
        }
       
    }

    
}

// War
class War {
    
   constructor(){
       this.vikingArmy = [];
       this.saxonArmy = [];
       this.length = 0;
   } 

     addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length) //gets random vikinkg/saxon from army
        let randomSaxon = Math. floor(Math.random() * this.saxonArmy.length)

        let  strengthOfViking = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());

        if(this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.splice(randomSaxon, 1); //removes dead saxon
        }

        return strengthOfViking ; //viking with stength of viking
    }

    saxonAttack(){
     let randomViking = Math.floor(Math.random() * this.vikingArmy.length) //gets random
     let randomSaxon = Math. floor(Math.random() * this.saxonArmy.length)

     let equalStregthOfViking= this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());

    if(this.vikingArmy[randomViking].health <= 0){ //removes dead viking
         this.vikingArmy.splice(randomViking, 1);
     }

    return equalStregthOfViking; //saxon with stregth of viking
    }


    showStatus(){

        if (this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }     
    }

    
    
}


