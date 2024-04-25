import express from 'express';
import { pokemonRouter } from './pokemons';

export const routes = express.Router();

routes.use(pokemonRouter);