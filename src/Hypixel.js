"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hypixel = void 0;
var User_1 = require("./User");
var axios_1 = require("axios");
var Skyblock_1 = require("./Skyblock");
/**
 * Hypixel Class
 * @constructor call init() after creating a new instance of Hypixel class
 */
var Hypixel = /** @class */ (function () {
    function Hypixel() {
    }
    /**
     * initialize the hypixel class
     * @param token get it from hypixel
     */
    Hypixel.prototype.initializeToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var keyInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token === null)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, getKeyData(token)];
                    case 1:
                        keyInfo = _a.sent();
                        if (keyInfo.status === 403) {
                            return [2 /*return*/, null];
                        }
                        this.tokenData = keyInfo.data.record;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Get active Hypixel boosters
     * @param callback (boosters: BoosterModel[]) => void
     */
    Hypixel.prototype.getBoosters = function (callback) {
        var _a;
        axios_1.default.get("https://api.hypixel.net/boosters?key=" + ((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key)).then(function (response) {
            callback(response.data.boosters);
        });
    };
    /**
     * Get User from Hypixel
     * @param uuid Player uuid
     * @param callback (user: UserModel) => void
     */
    Hypixel.prototype.findUser = function (uuid, callback) {
        var _a, _b;
        if (((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key) == undefined)
            return null;
        axios_1.default.get("https://api.hypixel.net/player?key=" + ((_b = this.tokenData) === null || _b === void 0 ? void 0 : _b.key) + "&uuid=" + uuid).then(function (response) {
            callback(new User_1.User(uuid, response.data.player));
        });
    };
    /**
     * Get Guild by name
     * @param name Guild nam
     * @param callback (data, error) => void
     */
    Hypixel.prototype.findGuildByName = function (name, callback) {
        var _a;
        axios_1.default.get("https://api.hypixel.net/findGuild?key=" + ((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key) + "&byName=" + name).then(function (response) {
            callback(response.data, null);
        }).catch(function (error) {
            callback(null, error);
        });
    };
    /**
     * Get guild by uuid
     * @param uuid Guild uuid
     * @param callback (data, error) => void
     */
    Hypixel.prototype.findGuildByUuid = function (uuid, callback) {
        var _a;
        axios_1.default.get("https://api.hypixel.net/findGuild?key=" + ((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key) + "&byUuid=" + uuid).then(function (response) {
            callback(response.data, null);
        }).catch(function (error) {
            callback(null, error);
        });
    };
    /**
     * Get players online in Hypixel Server
     * @param callback (count: number) => void
     */
    Hypixel.prototype.getOnlinePlayers = function (callback) {
        var _a;
        axios_1.default.get("https://api.hypixel.net/playerCount?key=" + ((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key)).then(function (response) {
            callback(response.data.playerCount);
        });
    };
    /**
     * Get players online on game servers
     * @param callback (data) => void
     */
    Hypixel.prototype.getOnlinePlayersByGames = function (callback) {
        var _a;
        axios_1.default.get("https://api.hypixel.net/gameCounts?key=" + ((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key)).then(function (response) {
            callback(response.data);
        });
    };
    /**
     * Get Leaderboards
     * @param callback (leaderboards, error) => void
     */
    Hypixel.prototype.getLeaderboards = function (callback) {
        var _a;
        axios_1.default.get("https://api.hypixel.net/leaderboards?key=" + ((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key)).then(function (response) {
            callback(response.data);
        }).catch(function (err) {
            callback(null, err);
        });
    };
    /**
     * Get new Skyblock instance
     */
    Hypixel.prototype.getSkyblock = function () {
        var _a;
        return new Skyblock_1.Skyblock((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key);
    };
    return Hypixel;
}());
exports.Hypixel = Hypixel;
/**
 * Get Token Data
 * @param token
 */
function getKeyData(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, axios_1.default.get("https://api.hypixel.net/key?key=" + token).then(function (data) {
                    return data;
                }).catch(function (err) {
                    return err;
                })];
        });
    });
}
