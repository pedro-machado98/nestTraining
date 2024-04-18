import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

@Module({
  controllers: [SongsController],
  providers: [
    // SongsService   //opção 1
    {
      provide:SongsService,  //opção 2
      useClass:SongsService
  }
  ]
})
export class SongsModule {}
