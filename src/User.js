"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var axios_1 = require("axios");
var User = /** @class */ (function () {
    function User(uuid, data) {
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
    /**
     * Get Player's friends
     * @param token Hypixel Token
     * @param callback (friends: FriendModel[], error) => void
     */
    User.prototype.getFriends = function (token, callback) {
        axios_1.default.get("https://api.hypixel.net/friends?key=" + token + "&uuid=" + this.uuid).then(function (response) {
            var json = response.data.records;
            callback(json, null);
        }).catch(function (error) {
            callback([], error);
        });
    };
    /**
     * Return true if player is online
     * @param token Hypixel Token
     * @param callback (online: boollean, error) => void
     */
    User.prototype.isOnline = function (token, callback) {
        axios_1.default.get("https://api.hypixel.net/status?key=" + token + "&uuid=" + this.uuid).then(function (response) {
            var json = response.data.session;
            var data = {
                gameType: json.gameType,
                mode: json.mode,
                map: json.map
            };
            callback(json.online, json.online ? data : null, null);
        }).catch(function (error) {
            callback(false, null, error);
        });
    };
    /**
     * Get Recent Games
     * @param token Hypixel Token
     * @param callback (recentGames, error) => void
     */
    User.prototype.getRecentGames = function (token, callback) {
        axios_1.default.get("https://api.hypixel.net/recentGames?key=" + token + "&uuid=" + this.uuid).then(function (response) {
            callback(response.data, null);
        }).catch(function (error) {
            callback(null, error);
        });
    };
    return User;
}());
exports.User = User;
