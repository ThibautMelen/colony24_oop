// Parent de "boat", genere tout les type de bateau
class Fleet{
    constructor(name,structure,blindage,capacite,poids){
        this.name   = name;
        this.structure = 60;
        this.blindage = 30;
        this.capacite = 5;
        this.poids = 2;
    }
    reparer(){
        if (this.structure < 100) {
            var diff = 100-this.structure;
            console.log("Le bateau a été répéré, il a récupéré " + diff + " pv et à récupéré tout ses pv (100)" );
            this.structure = 100;

        }
    }
}
