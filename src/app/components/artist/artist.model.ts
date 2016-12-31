import { Album } from './album.model';

export class Artist {
    constructor (
        public id: number,
        public name: string,
        public genres: any,
        albums: Album[]
    ) {}
}