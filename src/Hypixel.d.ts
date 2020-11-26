import { User } from "./User";
import { Skyblock } from "./Skyblock";
/**
 * Token Model Interface
 */
interface TokenModel {
    key: string;
    owner: string;
    limit: number;
    queriesInPastMin?: number;
    totalQueries?: number;
}
/**
 * Booster Model Interface
 */
interface BoosterModel {
    _id: string;
    purchaserUuid: string;
    amount: number;
    originalLength: number;
    length: number;
    gameType: number;
    dateActivated: number;
    stacked?: any;
}
/**
 * Hypixel Class
 * @constructor call init() after creating a new instance of Hypixel class
 */
export declare class Hypixel {
    tokenData: TokenModel | undefined;
    /**
     * initialize the hypixel class
     * @param token get it from hypixel
     */
    initializeToken(token: string): Promise<this | null>;
    /**
     * Get active Hypixel boosters
     * @param callback (boosters: BoosterModel[]) => void
     */
    getBoosters(callback: (boosters: BoosterModel[]) => void): void;
    /**
     * Get User from Hypixel
     * @param uuid Player uuid
     * @param callback (user: UserModel) => void
     */
    findUser(uuid: string, callback: (user: User) => void): null | undefined;
    /**
     * Get Guild by name
     * @param name Guild nam
     * @param callback (data, error) => void
     */
    findGuildByName(name: string, callback: (data: any, error: any) => void): void;
    /**
     * Get guild by uuid
     * @param uuid Guild uuid
     * @param callback (data, error) => void
     */
    findGuildByUuid(uuid: string, callback: (data: any, error: any) => void): void;
    /**
     * Get players online in Hypixel Server
     * @param callback (count: number) => void
     */
    getOnlinePlayers(callback: (count: number) => void): void;
    /**
     * Get players online on game servers
     * @param callback (data) => void
     */
    getOnlinePlayersByGames(callback: (data: any) => void): void;
    /**
     * Get Leaderboards
     * @param callback (leaderboards, error) => void
     */
    getLeaderboards(callback: (leaderboards: any, error?: any) => void): void;
    /**
     * Get new Skyblock instance
     */
    getSkyblock(): Skyblock;
}
export {};
