import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { CatsService } from "src/cats/cats.service";
import { Cat } from "src/dto/create-cat.dto";

@Injectable()
export class CatByIdPipe implements PipeTransform<number, Cat> {
    constructor(private catsService: CatsService) { }

    transform(value: number, metadata: ArgumentMetadata): Cat {

        const cat = this.catsService.getById(value);

        if (!cat) {
            throw new NotFoundException(`Cat with id ${value} not found`);
        }

        return cat;
    }

}