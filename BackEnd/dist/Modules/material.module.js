"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const material_controller_1 = require("../Controllers/material.controller");
const material_schema_1 = require("../Schemas/material.schema");
const material_service_1 = require("../Sevices/material.service");
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Material', schema: material_schema_1.matherialScheema }
            ])
        ],
        controllers: [
            material_controller_1.MaterialController
        ],
        providers: [
            material_service_1.MaterialService
        ]
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map