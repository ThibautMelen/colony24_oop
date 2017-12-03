//classe Inventory
class Inventory
{
    constructor()
    {
    }
    equip()
    {
        console.log("You equip " + this.name);
    }
    buyEquipment(){
        var peri = new Inventory();
        window.peri = peri;
        console.log("Vous acheter un périscope pour 100 écu")
        this.ecu -=100;
    }

}
