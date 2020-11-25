"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collections = exports.SkillsType = void 0;
var axios_1 = require("axios");
var SkillsType;
(function (SkillsType) {
    SkillsType["farming"] = "FARMING";
    SkillsType["mining"] = "MINING";
    SkillsType["combat"] = "COMBAT";
    SkillsType["foraging"] = "FORAGING";
    SkillsType["fishing"] = "FISHING";
})(SkillsType = exports.SkillsType || (exports.SkillsType = {}));
var Collections = /** @class */ (function () {
    function Collections() {
    }
    /**
     * Get all Hypixel Skyblock collections
     * @param callback (collections, error?) => void
     */
    Collections.prototype.getAll = function (callback) {
        axios_1.default.get("https://api.hypixel.net/resources/skyblock/collections").then(function (result) {
            callback(result.data.collections);
        }).catch(function (error) {
            callback(null, error);
        });
    };
    /**
     * Get Collections by skills
     * @param type SkillsType
     * @param callback (collections, error?) => void
     */
    Collections.prototype.getBySkills = function (type, callback) {
        axios_1.default.get("https://api.hypixel.net/resources/skyblock/collections").then(function (result) {
            callback(result.data.collections[type]);
        }).catch(function (error) {
            callback(null, error);
        });
    };
    return Collections;
}());
exports.Collections = Collections;
