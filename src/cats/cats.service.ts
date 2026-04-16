import { Injectable } from '@nestjs/common';
import { Cat } from 'src/dto/create-cat.dto';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        const id = this.cats.length + 1;
        cat.id = id;
        this.cats.push(cat);
        return `This action adds a new cat: ${JSON.stringify(cat)}`;
    }

    getById(id: number) {
        return this.cats.find((cat) => cat.id === id);
    }
}