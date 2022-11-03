import { Router } from "express";
import MateriaService from "../services/materias-services.js";

const srvMateria = new MateriaService()

const router = Router();

router.get('/AgarrarMaterias/', async (req, res) => {   //
  console.log('ivan was here')
  const post = await srvMateria.getAll();
  res.status(200).json(post); 
})

export default router;
