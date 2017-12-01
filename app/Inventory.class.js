//classe Inventory
class Inventory{
    constructor(name, durability){
        this.name = name;
        this.durability = durability;
    }
    equip(){
        console.log("You equip " + this.name);
    }
}
