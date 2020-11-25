"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skyblock = void 0;
var SkyblockCollections_1 = require("./skyblock/SkyblockCollections");
var Skyblock = /** @class */ (function () {
    /**
     * Class Constructor
     * @param token (optional)
     */
    function Skyblock(token) {
        this.token = token;
    }
    /**
     * Return new Collections instance
     */
    Skyblock.prototype.getCollections = function () {
        return new SkyblockCollections_1.Collections();
    };
    return Skyblock;
}());
exports.Skyblock = Skyblock;
