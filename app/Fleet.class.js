class Fleet
{
  constructor(fleet)
  {
    //obliger de mettre un setTimeout sinon bug de synchro
    console.log(`▪️▪️▪️\n`);
    // Wallet
    this.goldValue = colony24.wallet.goldValue;
    this.gold = colony24.wallet.gold;
    this.ecu = colony24.wallet.ecu;
    console.log(`////////////////////TEST ${this.ecu }\n▪️▪️▪️`);
    // Fleet
    this.fleet = fleet;
    this.allBoat = [];
    this.allBoat.push(this.fleet);
    // Pour creer un bateau
    this.createBoat("TEST", 1000, 1000, 1000, 1000);
    console.log("B");
    this.ecu--;
    console.log(`[[FLEET]] Creation Root Boat${this.allBoat}`);
    console.log(`[[FLEET]] goldValue is ${this.goldValue} \n[[[FLEET]] gold is ${this.gold } \n[[FLEET]] ecu is ${this.ecu } \n▪️▪️▪️`);
    console.log(`\n▪️▪️▪️`);
    // this.ecu--;

  }

  createBoat(name, life, shield, capacity, weight)
  {
      let newBoat = [name, life, shield, capacity, weight];
      this.allBoat.push(newBoat);
      console.log(`//TEST [[FLEET]] A new boat was created ${this.allBoat[this.allBoat.length -1]}`);
  }
// this.allBoat.length()-1
  fix()
  {
      // if (this.structure < 100) {
          // var diff = 100-this.structure;
          // console.log(`Le bateau a été répéré, il a récupéré ${diff} pv et à récupéré tout ses pv (100)`);
          // this.structure = 100;

      // }
  }
  buyBoat() {
      if (ecu >= 100) {
          let bato = new Flotte();
          window.bato = bato;
          boat.push(bato);
          ecu -= 100;
          console.log(`Vous acheter un bateau de type${config.fleet} pour ${config.fleet} écu `);
      }
      else{
          console.log("Vous ne posedez pas assez d'écu pour acheter ce bateau")
      }
  }
}
