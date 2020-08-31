import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

const pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: true,
    abilities: "Solar power, Tough claws, Drought",
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: "Overgrow, Chlorophyll",
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: false,
    abilities: "Pressure, Unnerve, Steadfast, Insomnia",
  },
  {
    name: "Mega beedrill",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: "Intimidate, Unnerve",
  },
];

function App() {
  const totalWeight = pokemons.reduce((acc, poke) => {
    return acc + poke.weight;
  }, 0);

  console.log("total", totalWeight);
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Total weight: {totalWeight}</h2>
        <PokemonList list={pokemons} />
      </header>
    </div>
  );
}

export default App;
