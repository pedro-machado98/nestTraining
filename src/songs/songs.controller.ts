import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService:SongsService){}

    @Post()
    create(@Body() createSongDTO : CreateSongDTO) {
        return this.songsService.create(createSongDTO);
    }

    @Get()
    findAll(){
        try {
            return this.songsService.findAll()

        } catch(e) {
            throw new HttpException(
                'server error',
                HttpStatus.FORBIDDEN,
                {
                    cause:e
                }
            );
        }
    }

    @Get(':id')
    findOne( @Param('id', new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE})) id:number ) {
        return `Trouxe uma musica endpoint ${typeof id}`
    }

    @Put(':id')
    update(){
        return 'Alterou uma musica endpoint'
    }

    @Delete(':id')
    delete(){
        return 'Deletei apenas uma musica endpoint'
    }

}
