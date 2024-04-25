import { Router } from 'express';
import PokemonController from '../controllers/PokemonController';

const pokemonController = new PokemonController();
export const pokemonRouter: Router = Router();

// GET
pokemonRouter.get("/pokemons", (req, res) => {
    pokemonController.getAllPokemons(req, res);
});