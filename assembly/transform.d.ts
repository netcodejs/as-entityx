declare function family(constructor: Function): void;
declare function familyof<T>(): u32;
declare type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
declare function overloadgeneric(funcName: string): any;
// declare interface EntityManager {
//     foreach<T extends any[]>(cb: (...args: T) => void): void
// }