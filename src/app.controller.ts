import { Controller, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Query } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get('getId/:houseId')
  async findOne(
    @Param('houseId', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    houseId: string,
    @Query('catId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) 
    catId: number
  ) {
    return `you entered houseId: ${houseId} and catId: ${catId}`;
  }
}
