// The entry file of your WebAssembly module.
import "wasi"
import { Entity } from "./entity";

@uniqueid @unmanaged
class Foo {
  index: i32;
  version: i32;
  @inline static get offset(): usize {
    return offsetof<Foo>();
  }
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
  // @ts-ignore: decro
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


export function add(a: i32, b: i32): i32 {
    let ent = new Entity();
    let ent1 = new Entity();
    ent.id = 123;
    ent1.id = 456;
    ent1.dispose();
    return uniqueidof<Foo>();
}
