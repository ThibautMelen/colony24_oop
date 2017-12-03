//classe Inventory
class Inventory
{
    constructor(name = "JeanPierre", durability = 50)
    {
        this.name = name;
        this.durability = durability;
    }
    equip()
    {
        console.log("You equip " + this.name);
    }
}
