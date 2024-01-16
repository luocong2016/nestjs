import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CatDto {
  @ApiProperty({
    example: 'catName',
    description: '昵称',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 2,
    description: '年龄',
  })
  @IsInt()
  readonly age: number;

  @ApiProperty({
    example: 'xyz',
    description: '孕育',
  })
  @IsString()
  readonly breed: string;
}
