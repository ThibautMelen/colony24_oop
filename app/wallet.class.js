class Wallet
{
    constructor(gold, ecu)
    {
      this.goldValue = 1.2; //SQL GOLD VALUE A INTEGRER
      this.gold = gold;
      this.ecu = ecu;
      console.log(`[[WALLET]] goldValue is ${this.goldValue} \n[[[WALLET]] gold is ${this.gold } \n[[WALLET]] ecu is ${this.ecu } \n▪️▪️▪️`);
    }
    convertGoldEcu() {
  	    console.log("Vous convertisez " + or + " d'or en ecu");
  	    ecu += or * tauxChange;
  	    or = 0;
  	    console.log("Vous avez désormais : " + ecu + " ecu");
  	    document.getElementById("demo").innerHTML = "Vous avez " + ecu + "ecu";
  	}
}
