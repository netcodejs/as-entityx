import { IComponent } from "./component";
import { utils } from "./utils";

class EntityManager {
    @overloadgeneric("foreach")
    protected foreach1<T1>(cb: (t1: T1) => void): void {
        // utils.using(utils.bitmask1<T1>(), (bitset) => {
        //     this.foreach(bitset, cb);
        // });
        
    }
    // @overloadgeneric("foreach")
    // protected foreach2<T1, T2>(cb: (t1: T1, t2: T2) => void): void {
    //     utils.using(utils.bitmask2<T1, T2>(), (bitset) => {
    //         this.foreach(bitset, cb);
    //     });
    // }
    // @overloadgeneric("foreach")
    // foreach3<T1, T2, T3>(cb: (t1: T1, t2: T2, t3: T3) => void): void {
    //     utils.using(utils.bitmask3<T1, T2, T3>(), (bitset) => {
    //         this.foreach(bitset, cb);
    //     });
    // }
    // @overloadgeneric("foreach")
    // protected foreach4<T1, T2, T3, T4>(
    //     cb: (t1: T1, t2: T2, t3: T3, t4: T4) => void
    // ): void {
    //     utils.using(utils.bitmask4<T1, T2, T3, T4>(), (bitset) => {
    //         this.foreach(bitset, cb);
    //     });
    // }

    public foreach(bitset: utils.Bitset, cb: any): void {
        utils.using(new utils.Bitset(8), (set) => {
            set[3] = true;
            console.log(`${set.bitsize}, ${set[1]}, ${set[3]}, ${set[7]}`);
        });
    }
}

// EntityManager.foreach();
