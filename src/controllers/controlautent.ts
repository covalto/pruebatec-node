import { Request, Response } from "express";
import user, { Iuser } from "../model/user";

export const signup = async (req: Request, res: Response) => {
  //creando nuevo usuario
  const usuario: Iuser = new user({
    nombre: req.body.nombre,
    correo: req.body.correo,
    password: req.body.password,
    telefono:req.body.telefono
  });
  //guardando usuario
  const usuarioGuardado = await usuario.save();
  console.log(usuarioGuardado);
  res.send("usario confirmado");
};
//registrase
export const signin = (req: Request, res: Response) => {
  res.send('usuario guardado correctamente');
};

export const profile = (req: Request, res: Response) => {
  res.send('perfil creado');
};
