@final @unmanaged
export class Entity {
    id: i32;
    version: i32;

    @operator("==")
    static __equal(left: Entity, right: Entity): bool {
        return left.id == right.id && left.version == right.version;
    }

    // @ts-ignore: decorator
    @inline()
    constructor(offset: usize = heap.alloc(sizeof<Entity>())) {
        return changetype<Entity>(offset);
    }

    @inline dispose(): void {
        heap.free(changetype<usize>(this))
    }
}
