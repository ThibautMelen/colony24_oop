class Game {
	constructor(config)
	{
    // Launch
		console.log(`▪️▪️▪️\n[[GAME]] 🇬️🇦️🇲️🇪️ 🇨️🇴️🇱️🇴️🇳️🇾️ 24 🇸️🇹️🇦️🇷️🇹️🇮️🇳️🇬️ \n▪️▪️▪️ `);

		// Creation des environment
		this.wallet = new Wallet(config.gold, config.ecu);
		//obliger de mettre un setTimeout sinon bug de synchro
		setTimeout(function() {
			console.log("A");
			this.fleet = new Fleet(config.fleet);
			this.inventory = new Inventory();
		}, 1);
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
