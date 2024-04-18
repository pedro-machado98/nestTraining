import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './create-song-dto';

@Injectable()
export class SongsService {
    //local db
    //local array

    private readonly songs = [];

    // private readonly songs2: Array<CreateSongDTO>;

    create(song : CreateSongDTO) {
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        throw new Error('Error in Db while fetching records')
        return this.songs;
    }
}
