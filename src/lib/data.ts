export interface Item {
    id: number;
    name: string;
}

    export const items: Item[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
}));