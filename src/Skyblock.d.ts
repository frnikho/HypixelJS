import { Collections } from "./skyblock/SkyblockCollections";
export declare class Skyblock {
    private token?;
    /**
     * Class Constructor
     * @param token (optional)
     */
    constructor(token: string | undefined);
    /**
     * Return new Collections instance
     */
    getCollections(): Collections;
}
