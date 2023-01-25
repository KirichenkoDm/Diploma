import { Model } from 'mongoose';
import { CreateMaterialDto } from '../DTO/create-material.dto';
import { IMaterial } from '../Interfaces/material.interface';
export declare class MaterialService {
    private materialModel;
    constructor(materialModel: Model<IMaterial>);
    createMaterial(createMaterialDto: CreateMaterialDto): Promise<IMaterial>;
    addMaterial(id: string, filename: string): Promise<IMaterial>;
    removeMaterial(id: string, filename: string): Promise<IMaterial>;
    getMaterial(id: string): Promise<IMaterial>;
}
