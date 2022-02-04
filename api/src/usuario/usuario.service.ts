import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { IUsuario } from './usuario.interface';
import { Usuario, UsuarioDocumento } from './usuario.schema';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocumento>,
  ) {}

  async criar(usuario: IUsuario) {
    const usuarioCriado = new this.usuarioModel(usuario);
    return usuarioCriado.save();
  }

  async listarTodos(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }
}
