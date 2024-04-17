import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateMaterialDto } from '../DTO/create-material.dto';
import { MaterialService } from '../Sevices/material.service';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  async createMaterial(
    @Res() response,
    @Body() createMaterialDto: CreateMaterialDto,
  ) {
    try {
      const newMaterial = await this.materialService.createMaterial(
        createMaterialDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Material created succesfully',
        newMaterial,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: material not created',
        error: 'Bed Request',
      });
    }
  }

  @Put('/:id')
  async addMaterial(
    @Res() response,
    @Param('id') materialId: string,
    @Param('filename') filename: string,
  ) {
    try {
      const updatedMaterial = await this.materialService.addMaterial(
        materialId,
        filename,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Material added succesfully',
        updatedMaterial,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Put('/:id')
  async removeMaterial(
    @Res() response,
    @Param('id') materialId: string,
    @Param('filename') filename: string,
  ) {
    try {
      const updatedMaterial = await this.materialService.removeMaterial(
        materialId,
        filename,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Material removed succesfully',
        updatedMaterial,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get('/:id')
  async getMaterial(@Res() response, @Param('id') materialId: string) {
    try {
      const materialData = await this.materialService.getMaterial(materialId);
      return response.status(HttpStatus.OK).json({
        message: 'Material found succesfully',
        materialData,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
