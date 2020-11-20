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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hypixel = void 0;
const User_1 = require("./User");
const axios_1 = require("axios");
class Hypixel {
    init(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (token === null)
                return null;
            let keyInfo = yield getKeyData(token);
            if (keyInfo.status === 403) {
                return null;
            }
            this.tokenData = keyInfo.data.record;
            return this;
        });
    }
    getBootsters(callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.hypixel.net/boosters?key=${(_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key}`).then((response) => {
                callback(response.data.boosters);
            });
        });
    }
    findUser(uuid, callback) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (((_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key) == undefined)
                return null;
            axios_1.default.get(`https://api.hypixel.net/player?key=${(_b = this.tokenData) === null || _b === void 0 ? void 0 : _b.key}&uuid=${uuid}`).then((response) => {
                callback(new User_1.User(uuid, response.data.player));
            });
        });
    }
    findGuildByName(name, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.hypixel.net/findGuild?key=${(_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key}&byName=${name}`).then((response) => {
                callback(response.data, null);
            }).catch((error) => {
                callback(null, error);
            });
        });
    }
    findGuildByUuid(uuid, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.hypixel.net/findGuild?key=${(_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key}&byUuid=${uuid}`).then((response) => {
                callback(response.data, null);
            }).catch((error) => {
                callback(null, error);
            });
        });
    }
    getOnlinePlayers(callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.hypixel.net/playerCount?key=${(_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key}`).then((response) => {
                callback(response.data.playerCount);
            });
        });
    }
    getOnlinePlayersByGames(callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.hypixel.net/gameCounts?key=${(_a = this.tokenData) === null || _a === void 0 ? void 0 : _a.key}`).then((response) => {
                callback(response.data);
            });
        });
    }
}
exports.Hypixel = Hypixel;
function getKeyData(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default.get(`https://api.hypixel.net/key?key=${token}`).then((data) => {
            return data;
        }).catch((err) => {
            return err;
        });
    });
}
