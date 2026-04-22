import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import z from "zod";

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: z.ZodType) { }

    transform(value: unknown, metadata: ArgumentMetadata) {
        try {
            const result = this.schema.parse(value);
            return result;

        } catch (error) {
            throw new BadRequestException(`Validation failed: ${error}`);
        }
    }
}