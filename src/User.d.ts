export interface UserModel {
    _id: string;
    achievements: object;
    achievementsOneTime: any;
    clock: boolean;
    displayname: string;
    firstLogin: number;
    friendRequests?: any;
    friendRequestsUuid?: any;
    karma: number;
    knownAliases?: any;
    lastLogin: number;
    networkExp: number;
}
export interface FriendModel {
    _id: string;
    uuidSender: string;
    uuidReceiver: string;
    started: string;
}
export declare class User implements UserModel {
    uuid: string;
    _id: string;
    achievements: object;
    achievementsOneTime: any;
    clock: boolean;
    displayname: string;
    firstLogin: number;
    friendRequests: any;
    friendRequestsUuid: any;
    karma: number;
    knownAliases: any;
    lastLogin: number;
    networkExp: number;
    constructor(uuid: string, data: any);
    /**
     * Get Player's friends
     * @param token Hypixel Token
     * @param callback (friends: FriendModel[], error) => void
     */
    getFriends(token: string, callback: (friends: FriendModel[], error: any) => void): void;
    /**
     * Return true if player is online
     * @param token Hypixel Token
     * @param callback (online: boollean, error) => void
     */
    isOnline(token: string, callback: (online: boolean, data: any, error: any) => void): void;
    /**
     * Get Recent Games
     * @param token Hypixel Token
     * @param callback (recentGames, error) => void
     */
    getRecentGames(token: string, callback: (recentGames: any, error?: any) => void): void;
}
