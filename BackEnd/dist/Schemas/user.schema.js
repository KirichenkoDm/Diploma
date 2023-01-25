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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.user = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let user = class user {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Object)
], user.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Object)
], user.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Object)
], user.prototype, "salt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Object)
], user.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Object)
], user.prototype, "surname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Object)
], user.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], user.prototype, "courses", void 0);
user = __decorate([
    (0, mongoose_1.Schema)()
], user);
exports.user = user;
exports.userSchema = mongoose_1.SchemaFactory.createForClass(user);
//# sourceMappingURL=user.schema.js.map