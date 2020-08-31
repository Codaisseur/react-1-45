// src/components/Pokemon.js
import React from "react";

export default function Pokemon(props) {
  console.log("abilities", props.pokemon.abilities.split(", "));
  const { abilities, name, weight, awesome, terrifying } = props.pokemon;
  const abilitiesArray = abilities.split(", ");
  return (
    <div>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight} kg</p>
      <p>Awesome: {awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {terrifying ? "Very" : "nah, lovable"}</p>
      <p>Amount of abilities: {abilitiesArray.length}</p>
      <p>Abilities:</p>
      <ul>
        {abilitiesArray.map(ability => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
