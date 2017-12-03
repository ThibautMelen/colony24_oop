class Game {
	constructor(config)
	{
		console.log("Game Colony 24 starting...");

		//Creation des bateaux
		this.fleet = new Fleet(config.fleet);
		this.inventory = new Inventory("clickMe");
		// this.color_selector = new Color_selector("colors", config.colors);

		console.log(`gold is ${config.fleet}`);
		config.gold += 100;
		console.log(`gold is ${config.gold}`);

		this.goldValue = 1.2;
		this.boar = [];
	}

	BuyEquipment(){
	    var peri = new Inventory();
	    window.peri = peri;
	    console.log("Vous acheter un périscope pour 100 écu")
	    ecu -=100;
	}
	BuyBoat() {
			if (ecu >= 100) {
					var bato = new Flotte();
					window.bato = bato;
					boat.push(bato);
					document.getElementById("demo").innerHTML  = "Vous avez : " + boat.length + " embarcation(s) disponible";
					ecu -= 100;
					console.log("Vous acheter un bateau pour 100 écu");

			}else{
					console.log("Vous ne posedez pas assez d'écu pour acheter ce bateau")
			}
	}

//////////////////////

	SellBoat(){
	    console.log("Vous vendez un bateau pour" )
	}
	ConvertGoldEcu() {

	    console.log("Vous convertisez " + or + " d'or en ecu");
	    ecu += or * tauxChange;
	    or = 0;
	    console.log("Vous avez désormais : " + ecu + " ecu");
	    document.getElementById("demo").innerHTML = "Vous avez " + ecu + "ecu";
	}

//////////////////////

	Expedition(){
	    console.log("Vous envoyer un bateau en mission")
	}
}
