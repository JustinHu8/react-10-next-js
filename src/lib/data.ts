export interface Item {
    id: number;
    name: string;
}

    export const items: Item[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    // Mock data for testing
    // Should look like below
    // [
    //  { id: 1, name: `Item 1` },
    //  { id: 2, name: `Item 2` },
    //  { id: 3, name: `Item 3` },
    //  ...
    // ]
}));