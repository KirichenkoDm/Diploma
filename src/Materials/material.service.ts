import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMaterialDto } from './DTO/create-material.dto';
import { IMaterial } from './material.interface';

@Injectable()
export class MatrialService {
    constructor (@InjectModel('Material') private materialModel: Model<IMaterial>) {}

    async createMaterial (createMaterialDto: CreateMaterialDto): Promise<IMaterial> {
        const newMaterial = await new this.materialModel(createMaterialDto);
        return newMaterial;
    }

    async PutMaterial (filename: string): Promise<IMaterial> {
        
    }
}