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
exports.User = void 0;
const axios_1 = require("axios");
class User {
    constructor(uuid, data) {
        this.uuid = uuid;
        this._id = data._id;
        this.achievements = data.aachievements;
        this.achievementsOneTime = data.achievementsOneTime;
        this.clock = data.clock;
        this.displayname = data.displayname;
        this.firstLogin = data.firstLogin;
        this.friendRequests = data.friendRequests;
        this.friendRequestsUuid = data.friendRequestsUuid;
        this.karma = data.karma;
        this.knownAliases = data.knownAliases;
        this.lastLogin = data.lastLogin;
        this.networkExp = data.networkExp;
    }
    getFriends(token, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.hypixel.net/friends?key=${token}&uuid=${this.uuid}`).then((response) => {
                let json = response.data.records;
                callback(json, null);
            }).catch((error) => {
                callback([], error);
            });
        });
    }
    isOnline(token, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.hypixel.net/status?key=${token}&uuid=${this.uuid}`).then((response) => {
                let json = response.data.session;
                let data = {
                    gameType: json.gameType,
                    mode: json.mode,
                    map: json.map
                };
                callback(json.online, json.online ? data : null, null);
            }).catch((error) => {
                callback(false, null, error);
            });
        });
    }
}
exports.User = User;
