// Parent de "boat", genere tout les type de bateau
class Fleet
{
  constructor(fleet)
  {
    this.fleet = fleet;
    console.log(`${this.fleet[0][0]}`);
  }

  createBoat(name, structure, blindage, capacite, poid)
  {
      this.name   = name;
      this.structure = structure;
      this.blindage = blindage;
      this.capacite = capacite;
      this.poids = poids;
  }

  fix()
  {
      if (this.structure < 100) {
          var diff = 100-this.structure;
          console.log(`Le bateau a été répéré, il a récupéré ${diff} pv et à récupéré tout ses pv (100)`);
          this.structure = 100;

      }
  }
}
