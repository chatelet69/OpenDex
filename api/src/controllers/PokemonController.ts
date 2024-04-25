import { Request, Response } from 'express';
const { pokemons } = require("../../json/pokemons.json");

class PokemonController {
    getAllPokemons = async (req: Request, res: Response): Promise<void> => {
        try {
            res.status(200).json(pokemons);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Une erreur est survenue durant la récupération" });
        }
    }
}

export default PokemonController;

