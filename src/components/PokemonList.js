import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = props => {
  console.log(props.list);
  const pokemonsToRender = props.list.map(poke => <Pokemon pokemon={poke} />);

  return <div>{pokemonsToRender}</div>;
};

export default PokemonList;
