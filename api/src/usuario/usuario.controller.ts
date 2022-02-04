import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CriarUsuarioDto } from './criar-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private service: UsuarioService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async criar(@Body() usuarioDto: CriarUsuarioDto) {
    this.service.criar(usuarioDto);

    return 'Usuário criado com sucersso';
  }
}
