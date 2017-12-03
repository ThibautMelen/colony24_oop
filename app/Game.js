class Game {
	constructor(config)
	{
    // Launch
		console.log(`▪️▪️▪️\n[[GAME]] 🇬️🇦️🇲️🇪️ 🇨️🇴️🇱️🇴️🇳️🇾️ 24 🇸️🇹️🇦️🇷️🇹️🇮️🇳️🇬️ \n▪️▪️▪️ `);

		// Creation des environment
		this.wallet = new Wallet(config.gold, config.ecu);
		this.fleet = new Fleet(config.fleet, this.wallet);
		this.inventory = new Inventory(this.wallet);
	}



//////////////////////

	sellBoat(){
	   console.log("Vous vendez un bateau pour" )
	}


//////////////////////

	expedition(){
	    console.log("Vous envoyer un bateau en mission")
	}


}
