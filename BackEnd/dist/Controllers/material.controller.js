"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialController = void 0;
const common_1 = require("@nestjs/common");
const create_material_dto_1 = require("../DTO/create-material.dto");
const material_service_1 = require("../Sevices/material.service");
let MaterialController = class MaterialController {
    constructor(materialService) {
        this.materialService = materialService;
    }
    async createMaterial(response, createMaterialDto) {
        try {
            const newMaterial = await this.materialService.createMaterial(createMaterialDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Material created succesfully',
                newMaterial,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: material not created',
                error: 'Bed Request',
            });
        }
    }
    async addMaterial(response, materialId, filename) {
        try {
            const updatedMaterial = await this.materialService.addMaterial(materialId, filename);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Material added succesfully',
                updatedMaterial,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async removeMaterial(response, materialId, filename) {
        try {
            const updatedMaterial = await this.materialService.removeMaterial(materialId, filename);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Material removed succesfully',
                updatedMaterial,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async getMaterial(response, materialId) {
        try {
            const materialData = await this.materialService.getMaterial(materialId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Material found succesfully',
                materialData,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_material_dto_1.CreateMaterialDto]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "createMaterial", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "addMaterial", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "removeMaterial", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "getMaterial", null);
MaterialController = __decorate([
    (0, common_1.Controller)('material'),
    __metadata("design:paramtypes", [material_service_1.MaterialService])
], MaterialController);
exports.MaterialController = MaterialController;
//# sourceMappingURL=material.controller.js.map