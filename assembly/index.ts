// The entry file of your WebAssembly module.
import "wasi"
import { Entity } from "./entity";
import './system'

@family @unmanaged
export class Foo {
  index: i32;
  version: i32;
  @inline static get offset(): usize {
    return offsetof<Foo>();
  }
}

@family
export class Coo {

}

@unmanaged
class VectorHeader {
  length: i32
  genericSize: usize
}

@unmanaged
@final
class Vector<T> {
  // @ts-ignore
  [key: number]: T
  // @ts-ignore: decorator
  @inline
  constructor(genericSize: usize, opcaity: i32) {
    const ptr = heap.alloc(genericSize * opcaity + offsetof<VectorHeader>());
    const header = changetype<VectorHeader>(ptr);
    header.genericSize = genericSize;
    header.length = opcaity
    return changetype<Vector<T>>(ptr);
  }

  get length(): i32 {
    return changetype<VectorHeader>(changetype<usize>(this)).length
  }

  get genericSize(): usize {
    return changetype<VectorHeader>(changetype<usize>(this)).genericSize
  }

  @inline @operator("[]")
  public get(index: i32): T {
    if (ASC_OPTIMIZE_LEVEL == 0) {
      if (index < 0 || index >= this.length) {
        throw new Error("Out of range");
      }
    }

    const ptr = changetype<usize>(this) + offsetof<VectorHeader>() +this.genericSize * <usize>index;
    return isReference<T>() ? changetype<T>(ptr) : load<T>(ptr)
  }
}

function ttt<T>(): i32 {
  return sizeof<T>() + 1;
}

export function add(a: i32, b: i32): i32 {
    // return familyof<Foo>();
    console.log(`ttt: ${ttt<i8>()}`)
    console.log(`ttt: ${ttt<i32>()}`)
    return 1;
}