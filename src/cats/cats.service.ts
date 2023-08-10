import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number): Cat {
        if (this.cats[id]) {
            return this.cats[id];
        }
        throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
}
