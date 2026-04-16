import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat, createCatSchema, type CreateCatDto } from 'src/dto/create-cat.dto';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { CatByIdPipe } from 'src/pipes/cat-by-id-pipe';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    create(@Body(new ZodValidationPipe(createCatSchema)) createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get(':catId')
    getById(
        @Param('catId', ParseIntPipe, CatByIdPipe)
        cat: Cat
    ) {
        return cat;
    }
}
