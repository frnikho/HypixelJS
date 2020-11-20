import { UserModel } from "./User";
export interface TokenData {
    key: string;
    owner: string;
    limit: number;
    queriesInPastMin?: number;
    totalQueries?: number;
}
export interface BoosterModel {
    _id: string;
    purchaserUuid: string;
    amount: number;
    originalLength: number;
    length: number;
    gameType: number;
    dateActivated: number;
    stacked?: any;
}
export declare class Hypixel {
    private tokenData;
    init(token: string): Promise<this | null>;
    getBootsters(callback: (boosters: BoosterModel[]) => void): Promise<void>;
    findUser(uuid: string, callback: (user: UserModel) => void): Promise<null | undefined>;
    findGuildByName(name: string, callback: (data: any, error: any) => void): Promise<void>;
    findGuildByUuid(uuid: string, callback: (data: any, error: any) => void): Promise<void>;
    getOnlinePlayers(callback: (count: number) => void): Promise<void>;
    getOnlinePlayersByGames(callback: (data: any) => void): Promise<void>;
}
