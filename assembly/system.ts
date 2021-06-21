class EntityManager {
    @overloadgeneric("foreach")
    protected foreach1<T1>(cb: (t1: T1) => void): void {}
    @overloadgeneric("foreach")
    protected foreach2<T1, T2>(cb: (t1: T1, t2: T2) => void): void {}
    @overloadgeneric("foreach")
    foreach3<T1, T2, T3>(cb: (t1: T1, t2: T2, t3: T3) => void): void {}
    @overloadgeneric("foreach")
    protected foreach4<T1, T2, T3, T4>(
        cb: (t1: T1, t2: T2, t3: T3, t4: T4) => void
    ): void {}

    abc<T>(a: T): T {
        return a;
        this.foreach(a => {
            
        })
    }
}

class Temp {
    readonly a: i32;
}

const Entities = new EntityManager();
const a = new Temp();
Entities.foreach((a: Temp, b: i32) => {
    // a.index = 123\
});

Entities.abc(110);
