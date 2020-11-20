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
    getFriends(token: string, callback: (friends: FriendModel[], error: any) => void): Promise<void>;
    isOnline(token: string, callback: (online: boolean, data: any, error: any) => void): Promise<void>;
}
