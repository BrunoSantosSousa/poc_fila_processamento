import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsuarioDocumento = Usuario & Document;

@Schema()
export class Usuario {
  id;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  email: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
