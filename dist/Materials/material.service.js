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
exports.MaterialService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MaterialService = class MaterialService {
    constructor(materialModel) {
        this.materialModel = materialModel;
    }
    async createMaterial(createMaterialDto) {
        const newMaterial = await new this.materialModel(createMaterialDto);
        return newMaterial;
    }
    async addMaterial(id, filename) {
        const updatedMaterial = await this.materialModel.findByIdAndUpdate(id, { $push: { materials: filename } });
        if (!updatedMaterial) {
            throw new common_1.NotFoundException(`Material "#${id}" not found`);
        }
        return updatedMaterial;
    }
    async removeMaterial(id, filename) {
        const updatedMaterial = await this.materialModel.findByIdAndUpdate(id, { $pullAll: { materials: [filename] } });
        if (!updatedMaterial) {
            throw new common_1.NotFoundException(`Material "#${id}" not found`);
        }
        return updatedMaterial;
    }
    async getMaterial(id) {
        const materialsData = this.materialModel.findById(id);
        if (!materialsData) {
            throw new common_1.NotFoundException(`Materials "#${id}" not found`);
        }
        return materialsData;
    }
};
MaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Material')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MaterialService);
exports.MaterialService = MaterialService;
//# sourceMappingURL=material.service.js.map