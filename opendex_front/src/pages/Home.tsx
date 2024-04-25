import { FunctionComponent, useEffect, useState } from 'react';
import "../css/home.css";

const Home: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  async function getPokemons() {
    try {
      const res = await fetch("http://localhost:3001/pokemons", {
        mode: "cors",
        headers: { "Access-Control-Allow-Origin": "*" }
      });
      const data: { pokemons: any[] } = await res.json();
      console.log("e",res.json());
      if (data.pokemons) setPokemons(data.pokemons);
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    getPokemons();
    console.log(pokemons);
  }, []);

  return (
    <div className="Home">
        <h2>Pokémons</h2>
        <div id="pokemonsContainer">
          {
            pokemons !== null && pokemons.length > 0 && 
            pokemons.map((pokemon) => {
              return (
                <div key={pokemon.id}>
                  <h4>Nom : {pokemon && pokemon.name.french}</h4>
                  <p>HP : {pokemon.base.HP}</p>
                </div>
              );
            })
          }
        </div>
    </div>
  );
}

export default Home;