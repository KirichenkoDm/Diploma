import { CreateMaterialDto } from '../DTO/create-material.dto';
import { MaterialService } from '../Sevices/material.service';
export declare class MaterialController {
    private readonly materialService;
    constructor(materialService: MaterialService);
    createMaterial(response: any, createMaterialDto: CreateMaterialDto): Promise<any>;
    addMaterial(response: any, materialId: string, filename: string): Promise<any>;
    removeMaterial(response: any, materialId: string, filename: string): Promise<any>;
    getMaterial(response: any, materialId: string): Promise<any>;
}
