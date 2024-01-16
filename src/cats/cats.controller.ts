import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: '创建猫实体' })
  @ApiResponse({ status: 403, description: '未获得权限' })
  @ApiResponse({ status: 500, description: '服务器错误' })
  async create(@Body() createCatDto: CatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ summary: '获取猫列表' })
  @ApiResponse({ status: 200, description: '[]' })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
