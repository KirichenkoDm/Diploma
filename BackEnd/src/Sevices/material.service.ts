import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMaterialDto } from '../DTO/create-material.dto';
import { IMaterial } from '../Interfaces/material.interface';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel('Material') private materialModel: Model<IMaterial>,
  ) {}

  async createMaterial(
    createMaterialDto: CreateMaterialDto,
  ): Promise<IMaterial> {
    const newMaterial = await new this.materialModel(createMaterialDto);
    return newMaterial;
  }

  async addMaterial(id: string, filename: string): Promise<IMaterial> {
    const updatedMaterial = await this.materialModel.findByIdAndUpdate(id, {
      $push: { materials: filename },
    });

    if (!updatedMaterial) {
      throw new NotFoundException(`Material "#${id}" not found`);
    }
    return updatedMaterial;
  }

  async removeMaterial(id: string, filename: string): Promise<IMaterial> {
    const updatedMaterial = await this.materialModel.findByIdAndUpdate(id, {
      $pullAll: { materials: [filename] },
    });
    if (!updatedMaterial) {
      throw new NotFoundException(`Material "#${id}" not found`);
    }
    return updatedMaterial;
  }

  async getMaterial(id: string): Promise<IMaterial> {
    const materialsData = this.materialModel.findById(id);
    if (!materialsData) {
      throw new NotFoundException(`Materials "#${id}" not found`);
    }
    return materialsData;
  }

  // async deleteMaterial ()
}
