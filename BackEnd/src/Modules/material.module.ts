import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MaterialController } from "src/Controllers/material.controller";
import { matherialScheema } from "src/Schemas/material.schema";
import { MaterialService } from "src/Sevices/material.service";


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Material', schema: matherialScheema }
        ])
    ],
    controllers: [
        MaterialController
    ],
    providers: [
        MaterialService
    ]
})
export class MaterialModule {}