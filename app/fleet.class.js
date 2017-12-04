class Fleet
{
  constructor(fleet, wallet)
  {
    //obliger de mettre un setTimeout sinon bug de synchro
    // Wallet
    // this.goldValue = colony24.wallet.goldValue;
    // this.gold = colony24.wallet.gold;
    // this.ecu = colony24.wallet.ecu;
    // console.log(`[[FLEET]] goldValue is ${this.goldValue} \n[[[FLEET]] gold is ${this.gold } \n[[FLEET]] ecu is ${this.ecu } \n`);

    // Fleet
    this.fleet = fleet;
    this.allBoat = [];
    for (var i = 0; i < this.fleet.length; i++) {
      this.allBoat.push(this.fleet[i]);
    }
    // Pour creer un bateau
    this.createBoat("TEST", 1000, 1000, 1000, 1000);
    console.log(`[[FLEET]] Creation Root Boat >> ${this.allBoat}`);
  }
  createBoat(name, life, shield, capacity, weight)
  {
      let newBoat = [name, life, shield, capacity, weight];
      this.allBoat.push(newBoat);
      console.log(`[[FLEET]] A new boat was created ${this.allBoat[this.allBoat.length -1]}`);
  }
  fix()
  {
  }

  ////ACTION WITH WALLET
  buyBoat()
  {
  }
  sellBoat()
  {
  }
  
}
