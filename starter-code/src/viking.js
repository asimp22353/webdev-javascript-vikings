// Soldier
class Soldier{
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strenght;
    }
    reciveDamage(theDamage){
        this.health-= theDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name= name;
    }
    battleCry(){
        return "Odin Owns You All";
    }
    reciveDamage (theDamage){
        this.health -= theDamage;
        if(this.health> 0){
            return `${this.name} has recived ${theDamage} points of damage`
        }else{
            return `${this.name} has died in combat`
    
        }
    }
 }


// Saxon
class Saxon extends

// War
class War {}
