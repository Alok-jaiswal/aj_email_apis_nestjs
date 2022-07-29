import { ApiProperty } from "@nestjs/swagger";

export class CreateEmailtemplateDto {
    @ApiProperty()
    template:string
}
