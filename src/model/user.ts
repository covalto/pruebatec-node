import { Schema, model, Document } from "mongoose";
export interface Iuser extends Document {
  nombre: string;
  correo: string;
  password: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const shema = new Schema({
  nombre: {
    type: String,
    min: 4,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    unique: true,
    lowercase: true,
  },
  telefono: {
    type: Number,
    lowercase: true,
  },
});
export default model<Iuser>("user", shema);
