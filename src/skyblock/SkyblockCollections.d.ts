export declare enum SkillsType {
    farming = "FARMING",
    mining = "MINING",
    combat = "COMBAT",
    foraging = "FORAGING",
    fishing = "FISHING"
}
export declare class Collections {
    /**
     * Get all Hypixel Skyblock collections
     * @param callback (collections, error?) => void
     */
    getAll(callback: (collections: any, error?: any) => void): void;
    /**
     * Get Collections by skills
     * @param type SkillsType
     * @param callback (collections, error?) => void
     */
    getBySkills(type: SkillsType, callback: (collections: any, error?: any) => void): void;
}
