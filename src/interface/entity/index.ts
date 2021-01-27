export type EntityMongoProjections<T> = Partial<Record<keyof T, 0 | 1 | true | false>>;

export type EntityMongoSort<T> = Partial<Record<keyof T, -1 | 1>>;
