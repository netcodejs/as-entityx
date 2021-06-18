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

@uniqueid
class Coo {

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


export function add(a: i32, b: i32): i32 {
    // let ent = new Entity();
    // let ent1 = new Entity();
    // ent.id = 123;
    // ent1.id = 456;
    // ent1.dispose();
    // return uniqueidof<Coo>();
    const arr = new StaticArray<u32>(1000000)
    const arrResult = new StaticArray<bool>(1000000)
    const arrResult1 = new StaticArray<bool>(1000000)
    for (let i = 0; i < 1000000; i++) {
      arr[i] = <u32>(Math.random() * <f64>u32.MAX_VALUE)
    }

    let now: i64 = 0;
    now = Date.now()
    const mask = <u32>parseInt("111011", 2)
    for (let i = 0; i < 1000000; i++) {
      arrResult[i] = (arr[i] ^ mask) > 0
    }
    console.log(`${Date.now() - now}`)

    // now = Date.now()
    
    // const arrPtr = changetype<usize>(arr)
    // for (let i = 0; i < 1000000 / sizeof<u32>(); i++) {
      // const i = 0;
      // var r = i32x4.all_true(v128.xor(v128.load32_zero(arrPtr + i * sizeof<u32>()), i32x4.splat(59)))
      // arrResult1[i] = i32x4.extract_lane(r, 0) > 0
      // arrResult1[i + 1] = (i32x4.extract_lane(r, 1) > 0)
      // arrResult1[i + 2] = (i32x4.extract_lane(r, 2) > 0)
      // arrResult1[i + 3] = (i32x4.extract_lane(r, 3) > 0)
    // }
    // console.log(`${Date.now() - now}`)
    return 1;
}