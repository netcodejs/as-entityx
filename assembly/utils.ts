import { MAX_FAMILY_ID } from "./macro";

export namespace utils {
    // export function bitmask4<T1, T2, T3, T4>(): Bitset {
    //     const bitset = new Bitset(MAX_FAMILY_ID);
    //     bitset[familyof<T1>()] = true;
    //     bitset[familyof<T2>()] = true;
    //     bitset[familyof<T3>()] = true;
    //     bitset[familyof<T4>()] = true;
    //     return bitset;
    // }
    // export function bitmask3<T1, T2, T3>(): Bitset {
    //     const bitset = new Bitset(MAX_FAMILY_ID);
    //     bitset[familyof<T1>()] = true;
    //     bitset[familyof<T2>()] = true;
    //     bitset[familyof<T3>()] = true;
    //     return bitset;
    // }
    // export function bitmask2<T1, T2>(): Bitset {
    //     const bitset = new Bitset(MAX_FAMILY_ID);
    //     bitset[familyof<T1>()] = true;
    //     bitset[familyof<T2>()] = true;
    //     return bitset;
    // }
    // export function bitmask1<T1>(): Bitset {
    //     const bitset = new Bitset(MAX_FAMILY_ID);
    //     bitset[familyof<T1>()] = true;
    //     return bitset;
    // }

    export function using<T>(ins: T, cb: (ins: T) => void): void {
        cb(ins);
        heap.free(changetype<usize>(ins));
    }

    @final
    @unmanaged
    export class Bitset {
        [key: number]: boolean;
        bitsize: usize;
        // @ts-ignore
        // @inline
        constructor(bitsize: usize = sizeof<usize>(), offset: usize = 0) {
            const worldsize = <usize>Mathf.ceil(<f32>bitsize / 8);
            bitsize = worldsize * 8;
            if (offset == 0) {
                offset = heap.alloc(worldsize + offsetof<Bitset>());
            }
            const t = changetype<Bitset>(offset);
            t.bitsize = bitsize;
            return t;
        }

        @inline
        private assertOutofRange(index: usize): void {
            assert(
                index >= 0 && index < this.bitsize,
                `[Error]Out of range, you try to access the length(${this.bitsize}) index by ${index}.`
            );
        }

        @operator("[]=")
        set(index: usize, value: bool): void {
            this.assertOutofRange(index);
            const worldOffset = index / 8;
            const bitOffset = index % 8;

            const offset =
                changetype<usize>(this) + offsetof<Bitset>() + worldOffset;
            let worldValue = load<u8>(offset) | ((<usize>1) << bitOffset);
            store<bool>(offset, worldValue);
        }

        @operator("[]")
        get(index: usize): bool {
            this.assertOutofRange(index);
            const worldOffset = index / 8;
            const bitOffset = index % 8;

            const offset =
                changetype<usize>(this) + offsetof<Bitset>() + worldOffset;
            const worldValue = load<u8>(offset);
            return (worldValue & ((<usize>1) << bitOffset)) > 0 ? true : false;
        }

        dispose(): void {
            heap.free(changetype<usize>(this));
        }

        toString(): string {
            return "";
        }
    }
}
