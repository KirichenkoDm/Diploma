"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeQuerryAgregateCourse = exports.HashPassword = void 0;
const bcrypt = require('bcrypt');
const saltRounds = 10;
async function HashPassword(newUser) {
    newUser.salt = await bcrypt.genSalt(saltRounds);
    newUser.password = await bcrypt.hash(newUser.password, newUser.salt);
    return Promise.resolve(newUser);
}
exports.HashPassword = HashPassword;
async function MakeQuerryAgregateCourse(agregateObject) {
    let query = {};
    if (agregateObject.topics && agregateObject.topics.length != 0) {
        query = { "topic": { $all: agregateObject.topics } };
    }
    if (agregateObject.searchQuery && agregateObject.searchQuery.length != 0) {
        query = Object.assign({ query }, {
            "name": { $regex: agregateObject.searchQuery },
            "description": { $regex: agregateObject.searchQuery }
        });
    }
    return query;
}
exports.MakeQuerryAgregateCourse = MakeQuerryAgregateCourse;
//# sourceMappingURL=utils.js.map