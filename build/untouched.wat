(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i64_i32_=>_none (func (param i32 i64 i32)))
 (type $i64_i32_=>_i32 (func (param i64 i32) (result i32)))
 (type $i32_i64_i32_i32_=>_none (func (param i32 i64 i32 i32)))
 (import "wasi_snapshot_preview1" "fd_write" (func $~lib/bindings/wasi_snapshot_preview1/fd_write (param i32 i32 i32 i32) (result i32)))
 (import "wasi_snapshot_preview1" "proc_exit" (func $~lib/bindings/wasi_snapshot_preview1/proc_exit (param i32)))
 (global $assembly/macro/MAX_FAMILY_ID i32 (i32.const 128))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/ASC_LOW_MEMORY_LIMIT i32 (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/ASC_SHRINK_LEVEL i32 (i32.const 0))
 (global $~lib/process/process.stdout i32 (i32.const 1))
 (global $~lib/process/iobuf i32 (i32.const 2400))
 (global $assembly/index/Coo i32 (i32.const 3))
 (global $~lib/rt/__rtti_base i32 (i32.const 5536))
 (global $~lib/memory/__data_end i32 (i32.const 5580))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 21964))
 (global $~lib/memory/__heap_base i32 (i32.const 21964))
 (global $~started (mut i32) (i32.const 0))
 (memory $0 1)
 (data (i32.const 12) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00$\00\00\00U\00n\00p\00a\00i\00r\00e\00d\00 \00s\00u\00r\00r\00o\00g\00a\00t\00e\00\00\00\00\00\00\00\00\00")
 (data (i32.const 76) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00~\00l\00i\00b\00/\00s\00t\00r\00i\00n\00g\00.\00t\00s\00")
 (data (i32.const 124) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 188) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00\00\00\00\00")
 (data (i32.const 252) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 320) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 352) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 380) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00\00\00\00\00\00\00\00\00")
 (data (i32.const 444) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s\00\00\00\00\00\00\00\00\00")
 (data (i32.const 496) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 524) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00t\00t\00t\00:\00 \00\00\00")
 (data (i32.const 556) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 588) "\1c\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\0c\00\00\00 \02\00\00\00\00\00\00@\02\00\00")
 (data (i32.const 620) "|\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006\00\00\00\00\00\00\00\00\00")
 (data (i32.const 748) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data (i32.const 812) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\000\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 844) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\00")
 (data (i32.const 1244) "\1c\04\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2300) "\\\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\00\00\00\00\00")
 (data (i32.const 2400) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2428) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00S\00U\00C\00C\00E\00S\00S\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2476) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00T\00O\00O\00B\00I\00G\00")
 (data (i32.const 2508) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00A\00C\00C\00E\00S\00\00\00")
 (data (i32.const 2540) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00A\00D\00D\00R\00I\00N\00U\00S\00E\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2588) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\18\00\00\00A\00D\00D\00R\00N\00O\00T\00A\00V\00A\00I\00L\00\00\00\00\00")
 (data (i32.const 2636) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00A\00F\00N\00O\00S\00U\00P\00P\00O\00R\00T\00\00\00\00\00\00\00")
 (data (i32.const 2684) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00A\00G\00A\00I\00N\00\00\00")
 (data (i32.const 2716) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00A\00L\00R\00E\00A\00D\00Y\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2764) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00B\00A\00D\00F\00\00\00\00\00")
 (data (i32.const 2796) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00B\00A\00D\00M\00S\00G\00")
 (data (i32.const 2828) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00B\00U\00S\00Y\00\00\00\00\00")
 (data (i32.const 2860) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00C\00A\00N\00C\00E\00L\00E\00D\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2908) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00C\00H\00I\00L\00D\00\00\00")
 (data (i32.const 2940) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00C\00O\00N\00N\00A\00B\00O\00R\00T\00E\00D\00\00\00\00\00\00\00")
 (data (i32.const 2988) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00C\00O\00N\00N\00R\00E\00F\00U\00S\00E\00D\00\00\00\00\00\00\00")
 (data (i32.const 3036) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00C\00O\00N\00N\00R\00E\00S\00E\00T\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3084) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00D\00E\00A\00D\00L\00K\00")
 (data (i32.const 3116) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00D\00E\00S\00T\00A\00D\00D\00R\00R\00E\00Q\00\00\00\00\00\00\00")
 (data (i32.const 3164) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00D\00O\00M\00\00\00\00\00\00\00")
 (data (i32.const 3196) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00D\00Q\00U\00O\00T\00\00\00")
 (data (i32.const 3228) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00E\00X\00I\00S\00T\00\00\00")
 (data (i32.const 3260) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00F\00A\00U\00L\00T\00\00\00")
 (data (i32.const 3292) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00F\00B\00I\00G\00\00\00\00\00")
 (data (i32.const 3324) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00H\00O\00S\00T\00U\00N\00R\00E\00A\00C\00H\00\00\00\00\00\00\00")
 (data (i32.const 3372) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00I\00D\00R\00M\00\00\00\00\00")
 (data (i32.const 3404) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00I\00L\00S\00E\00Q\00\00\00")
 (data (i32.const 3436) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00I\00N\00P\00R\00O\00G\00R\00E\00S\00S\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3484) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00I\00N\00T\00R\00\00\00\00\00")
 (data (i32.const 3516) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00I\00N\00V\00A\00L\00\00\00")
 (data (i32.const 3548) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00I\00O\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3580) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00I\00S\00C\00O\00N\00N\00")
 (data (i32.const 3612) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00I\00S\00D\00I\00R\00\00\00")
 (data (i32.const 3644) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00L\00O\00O\00P\00\00\00\00\00")
 (data (i32.const 3676) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00M\00F\00I\00L\00E\00\00\00")
 (data (i32.const 3708) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00M\00L\00I\00N\00K\00\00\00")
 (data (i32.const 3740) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00M\00S\00G\00S\00I\00Z\00E\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3788) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00M\00U\00L\00T\00I\00H\00O\00P\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3836) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00N\00A\00M\00E\00T\00O\00O\00L\00O\00N\00G\00\00\00\00\00\00\00")
 (data (i32.const 3884) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00N\00E\00T\00D\00O\00W\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3932) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00N\00E\00T\00R\00E\00S\00E\00T\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 3980) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00N\00E\00T\00U\00N\00R\00E\00A\00C\00H\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4028) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00F\00I\00L\00E\00\00\00")
 (data (i32.const 4060) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00B\00U\00F\00S\00")
 (data (i32.const 4092) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00D\00E\00V\00\00\00")
 (data (i32.const 4124) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00E\00N\00T\00\00\00")
 (data (i32.const 4156) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00E\00X\00E\00C\00")
 (data (i32.const 4188) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00L\00C\00K\00\00\00")
 (data (i32.const 4220) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00L\00I\00N\00K\00")
 (data (i32.const 4252) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00M\00E\00M\00\00\00")
 (data (i32.const 4284) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00M\00S\00G\00\00\00")
 (data (i32.const 4316) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00N\00O\00P\00R\00O\00T\00O\00O\00P\00T\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4364) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00S\00P\00C\00\00\00")
 (data (i32.const 4396) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00S\00Y\00S\00\00\00")
 (data (i32.const 4428) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00N\00O\00T\00C\00O\00N\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4476) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00T\00D\00I\00R\00")
 (data (i32.const 4508) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00N\00O\00T\00E\00M\00P\00T\00Y\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4556) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00N\00O\00T\00R\00E\00C\00O\00V\00E\00R\00A\00B\00L\00E\00")
 (data (i32.const 4604) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00N\00O\00T\00S\00O\00C\00K\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4652) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00N\00O\00T\00S\00U\00P\00")
 (data (i32.const 4684) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00N\00O\00T\00T\00Y\00\00\00")
 (data (i32.const 4716) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00N\00X\00I\00O\00\00\00\00\00")
 (data (i32.const 4748) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00O\00V\00E\00R\00F\00L\00O\00W\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4796) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00O\00W\00N\00E\00R\00D\00E\00A\00D\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 4844) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00P\00E\00R\00M\00\00\00\00\00")
 (data (i32.const 4876) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00P\00I\00P\00E\00\00\00\00\00")
 (data (i32.const 4908) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00P\00R\00O\00T\00O\00\00\00")
 (data (i32.const 4940) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00P\00R\00O\00T\00O\00N\00O\00S\00U\00P\00P\00O\00R\00T\00")
 (data (i32.const 4988) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\12\00\00\00P\00R\00O\00T\00O\00T\00Y\00P\00E\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5036) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00R\00A\00N\00G\00E\00\00\00")
 (data (i32.const 5068) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00R\00O\00F\00S\00\00\00\00\00")
 (data (i32.const 5100) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00S\00P\00I\00P\00E\00\00\00")
 (data (i32.const 5132) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00S\00R\00C\00H\00\00\00\00\00")
 (data (i32.const 5164) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00S\00T\00A\00L\00E\00\00\00")
 (data (i32.const 5196) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\10\00\00\00T\00I\00M\00E\00D\00O\00U\00T\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5244) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00T\00X\00T\00B\00S\00Y\00")
 (data (i32.const 5276) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00X\00D\00E\00V\00\00\00\00\00")
 (data (i32.const 5308) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00N\00O\00T\00C\00A\00P\00A\00B\00L\00E\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5356) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00U\00N\00K\00N\00O\00W\00N\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5404) "<\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00p\00r\00o\00c\00e\00s\00s\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5468) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00\n\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 5500) "\1c\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\0c\00\00\00 \02\00\00\00\00\00\00@\02\00\00")
 (data (i32.const 5536) "\05\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00\00\00\00\00\00\00\00\00 \00\00\00\00\00\00\00\04A\00\00\00\00\00\00")
 (table $0 1 funcref)
 (elem $0 (i32.const 1))
 (export "Foo#get:index" (func $assembly/index/Foo#get:index))
 (export "Foo#set:index" (func $assembly/index/Foo#set:index))
 (export "Foo#get:version" (func $assembly/index/Foo#get:version))
 (export "Foo#set:version" (func $assembly/index/Foo#set:version))
 (export "Foo#constructor" (func $assembly/index/Foo#constructor))
 (export "Foo.get:offset" (func $assembly/index/Foo.get:offset))
 (export "Coo" (global $assembly/index/Coo))
 (export "add" (func $assembly/index/add))
 (export "memory" (memory $0))
 (export "_start" (func $~start))
 (export "Coo#constructor" (func $export:assembly/index/Coo#constructor))
 (func $assembly/index/Foo.get:offset (result i32)
  i32.const 8
 )
 (func $~lib/rt/tlsf/Root#set:flMap (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
 )
 (func $~lib/string/String.UTF8.encodeUnsafe (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $5
  local.get $2
  local.set $6
  loop $while-continue|0
   local.get $0
   local.get $5
   i32.lt_u
   local.set $7
   local.get $7
   if
    local.get $0
    i32.load16_u
    local.set $8
    local.get $8
    i32.const 128
    i32.lt_u
    if
     local.get $6
     local.get $8
     i32.store8
     local.get $6
     i32.const 1
     i32.add
     local.set $6
    else
     local.get $8
     i32.const 2048
     i32.lt_u
     if
      local.get $8
      i32.const 6
      i32.shr_u
      i32.const 192
      i32.or
      local.set $9
      local.get $8
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $10
      local.get $6
      local.get $10
      i32.const 8
      i32.shl
      local.get $9
      i32.or
      i32.store16
      local.get $6
      i32.const 2
      i32.add
      local.set $6
     else
      local.get $8
      i32.const 63488
      i32.and
      i32.const 55296
      i32.eq
      if
       local.get $8
       i32.const 56320
       i32.lt_u
       if (result i32)
        local.get $0
        i32.const 2
        i32.add
        local.get $5
        i32.lt_u
       else
        i32.const 0
       end
       if
        local.get $0
        i32.load16_u offset=2
        local.set $10
        local.get $10
        i32.const 64512
        i32.and
        i32.const 56320
        i32.eq
        if
         i32.const 65536
         local.get $8
         i32.const 1023
         i32.and
         i32.const 10
         i32.shl
         i32.add
         local.get $10
         i32.const 1023
         i32.and
         i32.or
         local.set $8
         local.get $8
         i32.const 18
         i32.shr_u
         i32.const 240
         i32.or
         local.set $9
         local.get $8
         i32.const 12
         i32.shr_u
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $11
         local.get $8
         i32.const 6
         i32.shr_u
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $12
         local.get $8
         i32.const 63
         i32.and
         i32.const 128
         i32.or
         local.set $13
         local.get $6
         local.get $13
         i32.const 24
         i32.shl
         local.get $12
         i32.const 16
         i32.shl
         i32.or
         local.get $11
         i32.const 8
         i32.shl
         i32.or
         local.get $9
         i32.or
         i32.store
         local.get $6
         i32.const 4
         i32.add
         local.set $6
         local.get $0
         i32.const 4
         i32.add
         local.set $0
         br $while-continue|0
        end
       end
       local.get $4
       i32.const 0
       i32.ne
       if
        local.get $4
        i32.const 2
        i32.eq
        if
         i32.const 32
         i32.const 96
         i32.const 739
         i32.const 49
         call $~lib/wasi/index/abort
         unreachable
        end
        i32.const 65533
        local.set $8
       end
      end
      local.get $8
      i32.const 12
      i32.shr_u
      i32.const 224
      i32.or
      local.set $10
      local.get $8
      i32.const 6
      i32.shr_u
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $13
      local.get $8
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      local.set $12
      local.get $6
      local.get $13
      i32.const 8
      i32.shl
      local.get $10
      i32.or
      i32.store16
      local.get $6
      local.get $12
      i32.store8 offset=2
      local.get $6
      i32.const 3
      i32.add
      local.set $6
     end
    end
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    br $while-continue|0
   end
  end
  local.get $3
  if
   local.get $6
   local.tee $7
   i32.const 1
   i32.add
   local.set $6
   local.get $7
   i32.const 0
   i32.store8
  end
  local.get $6
  local.get $2
  i32.sub
 )
 (func $~lib/string/String.UTF8.encodeUnsafe@varargs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      i32.const 3
      i32.sub
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $3
   end
   i32.const 0
   local.set $4
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  local.get $4
  call $~lib/string/String.UTF8.encodeUnsafe
 )
 (func $~lib/util/number/decimalCount32 (param $0 i32) (result i32)
  local.get $0
  i32.const 100000
  i32.lt_u
  if
   local.get $0
   i32.const 100
   i32.lt_u
   if
    i32.const 1
    local.get $0
    i32.const 10
    i32.ge_u
    i32.add
    return
   else
    i32.const 3
    local.get $0
    i32.const 10000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 1000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  else
   local.get $0
   i32.const 10000000
   i32.lt_u
   if
    i32.const 6
    local.get $0
    i32.const 1000000
    i32.ge_u
    i32.add
    return
   else
    i32.const 8
    local.get $0
    i32.const 1000000000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 100000000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf_len (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/wasi/index/abort (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i32.const 0
  i32.const 12
  call $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf
  i32.const 12
  local.set $4
  local.get $4
  i64.const 9071471065260641
  i64.store
  local.get $4
  i32.const 7
  i32.add
  local.set $4
  local.get $0
  i32.const 0
  i32.ne
  if
   local.get $4
   local.get $0
   local.get $0
   call $~lib/string/String#get:length
   local.get $4
   i32.const 0
   i32.const 3
   global.set $~argumentsLength
   i32.const 0
   call $~lib/string/String.UTF8.encodeUnsafe@varargs
   i32.add
   local.set $4
  end
  local.get $4
  i32.const 544106784
  i32.store
  local.get $4
  i32.const 4
  i32.add
  local.set $4
  local.get $1
  i32.const 0
  i32.ne
  if
   local.get $4
   local.get $1
   local.get $1
   call $~lib/string/String#get:length
   local.get $4
   i32.const 0
   i32.const 3
   global.set $~argumentsLength
   i32.const 0
   call $~lib/string/String.UTF8.encodeUnsafe@varargs
   i32.add
   local.set $4
  end
  local.get $4
  local.tee $5
  i32.const 1
  i32.add
  local.set $4
  local.get $5
  i32.const 40
  i32.store8
  local.get $2
  call $~lib/util/number/decimalCount32
  local.set $6
  local.get $4
  local.get $6
  i32.add
  local.set $4
  loop $do-continue|0
   local.get $2
   i32.const 10
   i32.div_u
   local.set $5
   local.get $4
   i32.const 1
   i32.sub
   local.tee $4
   i32.const 48
   local.get $2
   i32.const 10
   i32.rem_u
   i32.add
   i32.store8
   local.get $5
   local.set $2
   local.get $2
   local.set $7
   local.get $7
   br_if $do-continue|0
  end
  local.get $4
  local.get $6
  i32.add
  local.set $4
  local.get $4
  local.tee $7
  i32.const 1
  i32.add
  local.set $4
  local.get $7
  i32.const 58
  i32.store8
  local.get $3
  call $~lib/util/number/decimalCount32
  local.set $6
  local.get $4
  local.get $6
  i32.add
  local.set $4
  loop $do-continue|1
   local.get $3
   i32.const 10
   i32.div_u
   local.set $7
   local.get $4
   i32.const 1
   i32.sub
   local.tee $4
   i32.const 48
   local.get $3
   i32.const 10
   i32.rem_u
   i32.add
   i32.store8
   local.get $7
   local.set $3
   local.get $3
   local.set $8
   local.get $8
   br_if $do-continue|1
  end
  local.get $4
  local.get $6
  i32.add
  local.set $4
  local.get $4
  i32.const 2601
  i32.store16
  local.get $4
  i32.const 2
  i32.add
  local.set $4
  i32.const 0
  local.get $4
  i32.const 12
  i32.sub
  call $~lib/bindings/wasi_snapshot_preview1/iovec#set:buf_len
  i32.const 2
  i32.const 0
  i32.const 1
  i32.const 8
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  drop
  i32.const 255
  call $~lib/bindings/wasi_snapshot_preview1/proc_exit
 )
 (func $~lib/rt/common/BLOCK#set:mmInfo (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/tlsf/Block#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/Block#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $1
  i32.load
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 268
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  i32.const 1
  drop
  local.get $3
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 270
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $4
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $5
  else
   local.get $3
   local.tee $6
   i32.const 1073741820
   local.tee $7
   local.get $6
   local.get $7
   i32.lt_u
   select
   local.set $6
   i32.const 31
   local.get $6
   i32.clz
   i32.sub
   local.set $4
   local.get $6
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $5
   local.get $4
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $4
  end
  i32.const 1
  drop
  local.get $4
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $5
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 284
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.load offset=4
  local.set $8
  local.get $1
  i32.load offset=8
  local.set $9
  local.get $8
  if
   local.get $8
   local.get $9
   call $~lib/rt/tlsf/Block#set:next
  end
  local.get $9
  if
   local.get $9
   local.get $8
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $1
  local.get $0
  local.set $10
  local.get $4
  local.set $6
  local.get $5
  local.set $7
  local.get $10
  local.get $6
  i32.const 4
  i32.shl
  local.get $7
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.set $11
   local.get $4
   local.set $10
   local.get $5
   local.set $6
   local.get $9
   local.set $7
   local.get $11
   local.get $10
   i32.const 4
   i32.shl
   local.get $6
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $7
   i32.store offset=96
   local.get $9
   i32.eqz
   if
    local.get $0
    local.set $6
    local.get $4
    local.set $7
    local.get $6
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    local.get $0
    local.set $7
    local.get $4
    local.set $11
    local.get $6
    i32.const 1
    local.get $5
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.tee $6
    local.set $10
    local.get $7
    local.get $11
    i32.const 2
    i32.shl
    i32.add
    local.get $10
    i32.store offset=4
    local.get $6
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $4
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     call $~lib/rt/tlsf/Root#set:flMap
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  i32.const 1
  drop
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 201
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.load
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 203
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  local.set $3
  local.get $3
  i32.const 4
  i32.add
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
  local.set $4
  local.get $4
  i32.load
  local.set $5
  local.get $5
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   local.get $5
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.add
   local.get $3
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $4
   local.get $4
   i32.load
   local.set $5
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.sub
   i32.load
   local.set $3
   local.get $3
   i32.load
   local.set $6
   i32.const 1
   drop
   local.get $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 221
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   local.get $3
   call $~lib/rt/tlsf/removeBlock
   local.get $3
   local.set $1
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
  local.get $4
  local.get $5
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $7
  i32.const 1
  drop
  local.get $7
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 233
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  i32.const 1
  drop
  local.get $1
  i32.const 4
  i32.add
  local.get $7
  i32.add
  local.get $4
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 234
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $7
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $8
   local.get $7
   i32.const 4
   i32.shr_u
   local.set $9
  else
   local.get $7
   local.tee $3
   i32.const 1073741820
   local.tee $6
   local.get $3
   local.get $6
   i32.lt_u
   select
   local.set $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.set $8
   local.get $3
   local.get $8
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $9
   local.get $8
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $8
  end
  i32.const 1
  drop
  local.get $8
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $9
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 251
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.set $10
  local.get $8
  local.set $3
  local.get $9
  local.set $6
  local.get $10
  local.get $3
  i32.const 4
  i32.shl
  local.get $6
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $11
  local.get $1
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $1
  local.get $11
  call $~lib/rt/tlsf/Block#set:next
  local.get $11
  if
   local.get $11
   local.get $1
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $0
  local.set $12
  local.get $8
  local.set $10
  local.get $9
  local.set $3
  local.get $1
  local.set $6
  local.get $12
  local.get $10
  i32.const 4
  i32.shl
  local.get $3
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $6
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $8
  i32.shl
  i32.or
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $0
  local.set $13
  local.get $8
  local.set $12
  local.get $0
  local.set $3
  local.get $8
  local.set $6
  local.get $3
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 1
  local.get $9
  i32.shl
  i32.or
  local.set $10
  local.get $13
  local.get $12
  i32.const 2
  i32.shl
  i32.add
  local.get $10
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  i32.const 1
  drop
  local.get $1
  local.get $2
  i32.le_u
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 377
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $2
  local.get $0
  local.set $3
  local.get $3
  i32.load offset=1568
  local.set $4
  i32.const 0
  local.set $5
  local.get $4
  if
   i32.const 1
   drop
   local.get $1
   local.get $4
   i32.const 4
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 384
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $4
   i32.eq
   if
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
    local.get $4
    i32.load
    local.set $5
   else
    nop
   end
  else
   i32.const 1
   drop
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 397
    i32.const 5
    call $~lib/wasi/index/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.sub
  local.set $6
  local.get $6
  i32.const 4
  i32.const 12
  i32.add
  i32.const 4
  i32.add
  i32.lt_u
  if
   i32.const 0
   return
  end
  local.get $6
  i32.const 2
  i32.const 4
  i32.mul
  i32.sub
  local.set $7
  local.get $1
  local.set $8
  local.get $8
  local.get $7
  i32.const 1
  i32.or
  local.get $5
  i32.const 2
  i32.and
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $8
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $8
  i32.const 0
  call $~lib/rt/tlsf/Block#set:next
  local.get $1
  i32.const 4
  i32.add
  local.get $7
  i32.add
  local.set $4
  local.get $4
  i32.const 0
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.set $9
  local.get $4
  local.set $3
  local.get $9
  local.get $3
  i32.store offset=1568
  local.get $0
  local.get $8
  call $~lib/rt/tlsf/insertBlock
  i32.const 1
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  i32.const 0
  drop
  global.get $~lib/memory/__heap_base
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $0
  memory.size
  local.set $1
  local.get $0
  i32.const 1572
  i32.add
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $2
  local.get $2
  local.get $1
  i32.gt_s
  if (result i32)
   local.get $2
   local.get $1
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  local.get $0
  local.set $3
  local.get $3
  i32.const 0
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $3
  local.set $5
  i32.const 0
  local.set $4
  local.get $5
  local.get $4
  i32.store offset=1568
  i32.const 0
  local.set $5
  loop $for-loop|0
   local.get $5
   i32.const 23
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $3
    local.set $8
    local.get $5
    local.set $7
    i32.const 0
    local.set $6
    local.get $8
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    local.get $6
    i32.store offset=4
    i32.const 0
    local.set $8
    loop $for-loop|1
     local.get $8
     i32.const 16
     i32.lt_u
     local.set $7
     local.get $7
     if
      local.get $3
      local.set $11
      local.get $5
      local.set $10
      local.get $8
      local.set $9
      i32.const 0
      local.set $6
      local.get $11
      local.get $10
      i32.const 4
      i32.shl
      local.get $9
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $6
      i32.store offset=96
      local.get $8
      i32.const 1
      i32.add
      local.set $8
      br $for-loop|1
     end
    end
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $0
  i32.const 1572
  i32.add
  local.set $12
  i32.const 0
  drop
  local.get $3
  local.get $12
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  drop
  local.get $3
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/computeSize (param $0 i32) (result i32)
  local.get $0
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $0
   i32.const 4
   i32.add
   i32.const 15
   i32.add
   i32.const 15
   i32.const -1
   i32.xor
   i32.and
   i32.const 4
   i32.sub
  end
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 208
   i32.const 144
   i32.const 458
   i32.const 29
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  call $~lib/rt/tlsf/computeSize
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $2
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $1
   i32.const 536870910
   i32.lt_u
   if (result i32)
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
   else
    local.get $1
   end
   local.set $4
   i32.const 31
   local.get $4
   i32.clz
   i32.sub
   local.set $2
   local.get $4
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $3
   local.get $2
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $2
  end
  i32.const 1
  drop
  local.get $2
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 330
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 0
  i32.const -1
  i32.xor
  local.get $3
  i32.shl
  i32.and
  local.set $6
  i32.const 0
  local.set $7
  local.get $6
  i32.eqz
  if
   local.get $0
   i32.load
   i32.const 0
   i32.const -1
   i32.xor
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $5
   local.get $5
   i32.eqz
   if
    i32.const 0
    local.set $7
   else
    local.get $5
    i32.ctz
    local.set $2
    local.get $0
    local.set $8
    local.get $2
    local.set $4
    local.get $8
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    i32.const 1
    drop
    local.get $6
    i32.eqz
    if
     i32.const 0
     i32.const 144
     i32.const 343
     i32.const 18
     call $~lib/wasi/index/abort
     unreachable
    end
    local.get $0
    local.set $9
    local.get $2
    local.set $8
    local.get $6
    i32.ctz
    local.set $4
    local.get $9
    local.get $8
    i32.const 4
    i32.shl
    local.get $4
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    local.set $7
   end
  else
   local.get $0
   local.set $9
   local.get $2
   local.set $8
   local.get $6
   i32.ctz
   local.set $4
   local.get $9
   local.get $8
   i32.const 4
   i32.shl
   local.get $4
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   local.set $7
  end
  local.get $7
 )
 (func $~lib/rt/tlsf/growMemory (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i32.const 0
  drop
  local.get $1
  i32.const 536870910
  i32.lt_u
  if
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.set $1
  end
  memory.size
  local.set $2
  local.get $1
  i32.const 4
  local.get $2
  i32.const 16
  i32.shl
  i32.const 4
  i32.sub
  local.get $0
  local.set $3
  local.get $3
  i32.load offset=1568
  i32.ne
  i32.shl
  i32.add
  local.set $1
  local.get $1
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $4
  local.get $2
  local.tee $3
  local.get $4
  local.tee $5
  local.get $3
  local.get $5
  i32.gt_s
  select
  local.set $6
  local.get $6
  memory.grow
  i32.const 0
  i32.lt_s
  if
   local.get $4
   memory.grow
   i32.const 0
   i32.lt_s
   if
    unreachable
   end
  end
  memory.size
  local.set $7
  local.get $0
  local.get $2
  i32.const 16
  i32.shl
  local.get $7
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  drop
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.set $3
  i32.const 1
  drop
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 357
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.sub
  local.set $4
  local.get $4
  i32.const 4
  i32.const 12
  i32.add
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   i32.const 4
   i32.add
   local.get $2
   i32.add
   local.set $5
   local.get $5
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $0
   local.get $5
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const 1
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   local.set $5
   local.get $5
   i32.const 4
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.get $1
   local.set $5
   local.get $5
   i32.const 4
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   i32.load
   i32.const 2
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.set $2
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/searchBlock
  local.set $3
  local.get $3
  i32.eqz
  if
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/growMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.set $3
   i32.const 1
   drop
   local.get $3
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 496
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
  end
  i32.const 1
  drop
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 498
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $3
  local.get $2
  call $~lib/rt/tlsf/prepareBlock
  i32.const 0
  drop
  local.get $3
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (result i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
 )
 (func $assembly/index/Foo#set:index (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/index/Foo#set:version (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $assembly/index/Foo#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 8
   call $~lib/rt/tlsf/__alloc
   local.set $0
  end
  local.get $0
  i32.const 0
  call $assembly/index/Foo#set:index
  local.get $0
  i32.const 0
  call $assembly/index/Foo#set:version
  local.get $0
 )
 (func $assembly/index/Foo#get:index (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $assembly/index/Foo#get:version (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/rt/itcms/Object#set:nextWithColor (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/itcms/initLazy (param $0 i32) (result i32)
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
  local.get $0
 )
 (func $~lib/rt/itcms/Object#get:next (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
 )
 (func $~lib/rt/itcms/Object#get:color (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
 )
 (func $~lib/rt/itcms/visitRoots (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/__visit_globals
  global.get $~lib/rt/itcms/pinSpace
  local.set $1
  local.get $1
  call $~lib/rt/itcms/Object#get:next
  local.set $2
  loop $while-continue|0
   local.get $2
   local.get $1
   i32.ne
   local.set $3
   local.get $3
   if
    i32.const 1
    drop
    local.get $2
    call $~lib/rt/itcms/Object#get:color
    i32.const 3
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 272
     i32.const 159
     i32.const 16
     call $~lib/wasi/index/abort
     unreachable
    end
    local.get $2
    i32.const 20
    i32.add
    local.get $0
    call $~lib/rt/__visit_members
    local.get $2
    call $~lib/rt/itcms/Object#get:next
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#set:color (param $0 i32) (param $1 i32)
  local.get $0
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $1
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:next
  local.set $1
  local.get $1
  i32.const 0
  i32.eq
  if
   i32.const 1
   drop
   local.get $0
   i32.load offset=8
   i32.const 0
   i32.eq
   if (result i32)
    local.get $0
    global.get $~lib/memory/__heap_base
    i32.lt_u
   else
    i32.const 0
   end
   i32.eqz
   if
    i32.const 0
    i32.const 272
    i32.const 127
    i32.const 18
    call $~lib/wasi/index/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.eqz
  if
   i32.const 0
   i32.const 272
   i32.const 131
   i32.const 16
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  local.get $2
  call $~lib/rt/itcms/Object#set:prev
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:next
 )
 (func $~lib/rt/__typeinfo (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/rt/__rtti_base
  local.set $1
  local.get $0
  local.get $1
  i32.load
  i32.gt_u
  if
   i32.const 400
   i32.const 464
   i32.const 22
   i32.const 28
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $0
  i32.const 8
  i32.mul
  i32.add
  i32.load
 )
 (func $~lib/rt/itcms/Object#get:isPointerfree (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=12
  local.set $1
  local.get $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   call $~lib/rt/__typeinfo
   i32.const 32
   i32.and
   i32.const 0
   i32.ne
  end
 )
 (func $~lib/rt/itcms/Object#linkTo (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.load offset=8
  local.set $3
  local.get $0
  local.get $1
  local.get $2
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $3
  call $~lib/rt/itcms/Object#set:prev
  local.get $3
  local.get $0
  call $~lib/rt/itcms/Object#set:next
  local.get $1
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if (result i32)
    i32.const 0
    i32.const 272
    i32.const 147
    i32.const 30
    call $~lib/wasi/index/abort
    unreachable
   else
    local.get $1
   end
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  local.get $0
  global.get $~lib/rt/itcms/toSpace
  local.get $0
  call $~lib/rt/itcms/Object#get:isPointerfree
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  call $~lib/rt/itcms/Object#linkTo
 )
 (func $~lib/rt/itcms/__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.set $2
  i32.const 0
  drop
  local.get $2
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $2
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/itcms/visitStack (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  local.set $1
  loop $while-continue|0
   local.get $1
   global.get $~lib/memory/__heap_base
   i32.lt_u
   local.set $2
   local.get $2
   if
    local.get $1
    i32.load
    local.get $0
    call $~lib/rt/itcms/__visit
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#get:size (param $0 i32) (result i32)
  i32.const 4
  local.get $0
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 0
  i32.ne
  if (result i32)
   local.get $0
   i32.const 15
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 559
   i32.const 3
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/__free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   return
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/checkUsedBlock
  call $~lib/rt/tlsf/freeBlock
 )
 (func $~lib/rt/itcms/free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:nextWithColor
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:prev
  else
   global.get $~lib/rt/itcms/total
   local.get $0
   call $~lib/rt/itcms/Object#get:size
   i32.sub
   global.set $~lib/rt/itcms/total
   i32.const 0
   drop
   local.get $0
   i32.const 4
   i32.add
   call $~lib/rt/tlsf/__free
  end
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      local.set $1
      local.get $1
      i32.const 0
      i32.eq
      br_if $case0|0
      local.get $1
      i32.const 1
      i32.eq
      br_if $case1|0
      local.get $1
      i32.const 2
      i32.eq
      br_if $case2|0
      br $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     i32.const 0
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     i32.const 1
     i32.mul
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $1
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     local.set $2
     local.get $2
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $0
      call $~lib/rt/itcms/Object#get:color
      local.get $1
      i32.ne
      if
       local.get $0
       local.get $1
       call $~lib/rt/itcms/Object#set:color
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       i32.const 0
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       i32.const 1
       i32.mul
       return
      end
      local.get $0
      call $~lib/rt/itcms/Object#get:next
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    i32.const 0
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    local.get $0
    global.get $~lib/rt/itcms/toSpace
    i32.eq
    if
     i32.const 0
     call $~lib/rt/itcms/visitStack
     global.get $~lib/rt/itcms/iter
     call $~lib/rt/itcms/Object#get:next
     local.set $0
     loop $while-continue|2
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      local.set $2
      local.get $2
      if
       local.get $0
       call $~lib/rt/itcms/Object#get:color
       local.get $1
       i32.ne
       if
        local.get $0
        local.get $1
        call $~lib/rt/itcms/Object#set:color
        local.get $0
        i32.const 20
        i32.add
        i32.const 0
        call $~lib/rt/__visit_members
       end
       local.get $0
       call $~lib/rt/itcms/Object#get:next
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $2
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $2
     global.set $~lib/rt/itcms/toSpace
     local.get $1
     global.set $~lib/rt/itcms/white
     local.get $2
     call $~lib/rt/itcms/Object#get:next
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    i32.const 1
    i32.mul
    return
   end
   global.get $~lib/rt/itcms/iter
   local.set $0
   local.get $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    call $~lib/rt/itcms/Object#get:next
    global.set $~lib/rt/itcms/iter
    i32.const 1
    drop
    local.get $0
    call $~lib/rt/itcms/Object#get:color
    global.get $~lib/rt/itcms/white
    i32.eqz
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 272
     i32.const 228
     i32.const 20
     call $~lib/wasi/index/abort
     unreachable
    end
    local.get $0
    call $~lib/rt/itcms/free
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:nextWithColor
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:prev
   i32.const 0
   global.set $~lib/rt/itcms/state
   br $break|0
  end
  i32.const 0
 )
 (func $~lib/rt/itcms/interrupt
  (local $0 i32)
  (local $1 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1024
  i32.const 200
  i32.mul
  i32.const 100
  i32.div_u
  local.set $0
  loop $do-continue|0
   local.get $0
   call $~lib/rt/itcms/step
   i32.sub
   local.set $0
   global.get $~lib/rt/itcms/state
   i32.const 0
   i32.eq
   if
    i32.const 0
    drop
    global.get $~lib/rt/itcms/total
    i64.extend_i32_u
    i64.const 200
    i64.mul
    i64.const 100
    i64.div_u
    i32.wrap_i64
    i32.const 1024
    i32.add
    global.set $~lib/rt/itcms/threshold
    i32.const 0
    drop
    return
   end
   local.get $0
   i32.const 0
   i32.gt_s
   local.set $1
   local.get $1
   br_if $do-continue|0
  end
  i32.const 0
  drop
  global.get $~lib/rt/itcms/total
  i32.const 1024
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.sub
  i32.const 1024
  i32.lt_u
  i32.mul
  i32.add
  global.set $~lib/rt/itcms/threshold
  i32.const 0
  drop
 )
 (func $~lib/rt/itcms/Object#set:rtId (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/rt/itcms/Object#set:rtSize (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i64)
  (local $10 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   i32.const 0
   i32.const 1
   i32.gt_s
   drop
   local.get $3
   i32.eqz
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $3
   i32.add
   local.set $6
   local.get $5
   local.get $4
   i32.store8
   local.get $6
   i32.const 1
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 2
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8 offset=1
   local.get $5
   local.get $4
   i32.store8 offset=2
   local.get $6
   i32.const 2
   i32.sub
   local.get $4
   i32.store8
   local.get $6
   i32.const 3
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 6
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8 offset=3
   local.get $6
   i32.const 4
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   i32.const 0
   local.get $5
   i32.sub
   i32.const 3
   i32.and
   local.set $7
   local.get $5
   local.get $7
   i32.add
   local.set $5
   local.get $3
   local.get $7
   i32.sub
   local.set $3
   local.get $3
   i32.const -4
   i32.and
   local.set $3
   i32.const -1
   i32.const 255
   i32.div_u
   local.get $4
   i32.const 255
   i32.and
   i32.mul
   local.set $8
   local.get $5
   local.get $3
   i32.add
   local.set $6
   local.get $5
   local.get $8
   i32.store
   local.get $6
   i32.const 4
   i32.sub
   local.get $8
   i32.store
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $8
   i32.store offset=4
   local.get $5
   local.get $8
   i32.store offset=8
   local.get $6
   i32.const 12
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 8
   i32.sub
   local.get $8
   i32.store
   local.get $3
   i32.const 24
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $8
   i32.store offset=12
   local.get $5
   local.get $8
   i32.store offset=16
   local.get $5
   local.get $8
   i32.store offset=20
   local.get $5
   local.get $8
   i32.store offset=24
   local.get $6
   i32.const 28
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 24
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 20
   i32.sub
   local.get $8
   i32.store
   local.get $6
   i32.const 16
   i32.sub
   local.get $8
   i32.store
   i32.const 24
   local.get $5
   i32.const 4
   i32.and
   i32.add
   local.set $7
   local.get $5
   local.get $7
   i32.add
   local.set $5
   local.get $3
   local.get $7
   i32.sub
   local.set $3
   local.get $8
   i64.extend_i32_u
   local.get $8
   i64.extend_i32_u
   i64.const 32
   i64.shl
   i64.or
   local.set $9
   loop $while-continue|0
    local.get $3
    i32.const 32
    i32.ge_u
    local.set $10
    local.get $10
    if
     local.get $5
     local.get $9
     i64.store
     local.get $5
     local.get $9
     i64.store offset=8
     local.get $5
     local.get $9
     i64.store offset=16
     local.get $5
     local.get $9
     i64.store offset=24
     local.get $3
     i32.const 32
     i32.sub
     local.set $3
     local.get $5
     i32.const 32
     i32.add
     local.set $5
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 208
   i32.const 272
   i32.const 260
   i32.const 31
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   call $~lib/rt/itcms/interrupt
  end
  i32.const 16
  local.get $0
  i32.add
  call $~lib/rt/tlsf/__alloc
  i32.const 4
  i32.sub
  local.set $2
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:rtId
  local.get $2
  local.get $0
  call $~lib/rt/itcms/Object#set:rtSize
  local.get $2
  global.get $~lib/rt/itcms/fromSpace
  global.get $~lib/rt/itcms/white
  call $~lib/rt/itcms/Object#linkTo
  global.get $~lib/rt/itcms/total
  local.get $2
  call $~lib/rt/itcms/Object#get:size
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.set $3
  local.get $3
  i32.const 0
  local.get $0
  call $~lib/memory/memory.fill
  local.get $3
 )
 (func $assembly/index/ttt<i8> (result i32)
  i32.const 1
  i32.const 1
  i32.add
 )
 (func $~lib/util/number/utoa32_dec_lut (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (local $11 i32)
  loop $while-continue|0
   local.get $1
   i32.const 10000
   i32.ge_u
   local.set $3
   local.get $3
   if
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $4
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 100
    i32.div_u
    local.set $6
    local.get $5
    i32.const 100
    i32.rem_u
    local.set $7
    i32.const 844
    local.get $6
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $8
    i32.const 844
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $9
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $8
    local.get $9
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $while-continue|0
   end
  end
  local.get $1
  i32.const 100
  i32.ge_u
  if
   local.get $1
   i32.const 100
   i32.div_u
   local.set $3
   local.get $1
   i32.const 100
   i32.rem_u
   local.set $10
   local.get $3
   local.set $1
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 844
   local.get $10
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store
  end
  local.get $1
  i32.const 10
  i32.ge_u
  if
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 844
   local.get $1
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store
  else
   local.get $2
   i32.const 1
   i32.sub
   local.set $2
   i32.const 48
   local.get $1
   i32.add
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store16
  end
 )
 (func $~lib/util/number/utoa_hex_lut (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  loop $while-continue|0
   local.get $2
   i32.const 2
   i32.ge_u
   local.set $3
   local.get $3
   if
    local.get $2
    i32.const 2
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 1264
    local.get $1
    i32.wrap_i64
    i32.const 255
    i32.and
    i32.const 2
    i32.shl
    i32.add
    i32.load
    i32.store
    local.get $1
    i64.const 8
    i64.shr_u
    local.set $1
    br $while-continue|0
   end
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   i32.const 1264
   local.get $1
   i32.wrap_i64
   i32.const 6
   i32.shl
   i32.add
   i32.load16_u
   i32.store16
  end
 )
 (func $~lib/util/number/ulog_base (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i32)
  local.get $1
  local.set $2
  local.get $2
  i32.popcnt
  i32.const 1
  i32.eq
  if
   i32.const 63
   local.get $0
   i64.clz
   i32.wrap_i64
   i32.sub
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   i32.div_u
   i32.const 1
   i32.add
   return
  end
  local.get $1
  i64.extend_i32_s
  local.set $3
  local.get $3
  local.set $4
  i32.const 1
  local.set $5
  loop $while-continue|0
   local.get $0
   local.get $4
   i64.ge_u
   local.set $2
   local.get $2
   if
    local.get $0
    local.get $4
    i64.div_u
    local.set $0
    local.get $4
    local.get $4
    i64.mul
    local.set $4
    local.get $5
    i32.const 1
    i32.shl
    local.set $5
    br $while-continue|0
   end
  end
  loop $while-continue|1
   local.get $0
   i64.const 1
   i64.ge_u
   local.set $2
   local.get $2
   if
    local.get $0
    local.get $3
    i64.div_u
    local.set $0
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $while-continue|1
   end
  end
  local.get $5
  i32.const 1
  i32.sub
 )
 (func $~lib/util/number/utoa64_any_core (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i32)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  (local $7 i32)
  local.get $3
  i64.extend_i32_s
  local.set $4
  local.get $3
  local.get $3
  i32.const 1
  i32.sub
  i32.and
  i32.const 0
  i32.eq
  if
   local.get $3
   i32.ctz
   i32.const 7
   i32.and
   i64.extend_i32_s
   local.set $5
   local.get $4
   i64.const 1
   i64.sub
   local.set $6
   loop $do-continue|0
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 2320
    local.get $1
    local.get $6
    i64.and
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $1
    local.get $5
    i64.shr_u
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    local.set $7
    local.get $7
    br_if $do-continue|0
   end
  else
   loop $do-continue|1
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $1
    local.get $4
    i64.div_u
    local.set $6
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 2320
    local.get $1
    local.get $6
    local.get $4
    i64.mul
    i64.sub
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $6
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    local.set $7
    local.get $7
    br_if $do-continue|1
   end
  end
 )
 (func $~lib/number/I32#toString (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/itoa32
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  i32.const 1
  drop
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 272
   i32.const 294
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 20
  i32.sub
  local.set $3
  local.get $3
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.set $4
   local.get $4
   call $~lib/rt/itcms/Object#get:color
   local.set $5
   local.get $5
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $2
    if
     local.get $4
     call $~lib/rt/itcms/Object#makeGray
    else
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   else
    local.get $5
    i32.const 3
    i32.eq
    if (result i32)
     global.get $~lib/rt/itcms/state
     i32.const 1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  i32.const 1
  drop
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
 )
 (func $~lib/util/memory/memcpy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  loop $while-continue|0
   local.get $2
   if (result i32)
    local.get $1
    i32.const 3
    i32.and
   else
    i32.const 0
   end
   local.set $5
   local.get $5
   if
    local.get $0
    local.tee $6
    i32.const 1
    i32.add
    local.set $0
    local.get $6
    local.get $1
    local.tee $6
    i32.const 1
    i32.add
    local.set $1
    local.get $6
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.const 3
  i32.and
  i32.const 0
  i32.eq
  if
   loop $while-continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    local.set $5
    local.get $5
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     i32.const 4
     i32.add
     local.get $1
     i32.const 4
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 8
     i32.add
     local.get $1
     i32.const 8
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 12
     i32.add
     local.get $1
     i32.const 12
     i32.add
     i32.load
     i32.store
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $while-continue|1
    end
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.get $1
    i32.const 4
    i32.add
    i32.load
    i32.store
    local.get $0
    i32.const 8
    i32.add
    local.set $0
    local.get $1
    i32.const 8
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.set $0
    local.get $1
    i32.const 4
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    local.get $1
    i32.const 2
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       local.set $5
       local.get $5
       i32.const 1
       i32.eq
       br_if $case0|2
       local.get $5
       i32.const 2
       i32.eq
       br_if $case1|2
       local.get $5
       i32.const 3
       i32.eq
       br_if $case2|2
       br $break|2
      end
      local.get $1
      i32.load
      local.set $3
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      loop $while-continue|3
       local.get $2
       i32.const 17
       i32.ge_u
       local.set $5
       local.get $5
       if
        local.get $1
        i32.const 1
        i32.add
        i32.load
        local.set $4
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 5
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 4
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 9
        i32.add
        i32.load
        local.set $4
        local.get $0
        i32.const 8
        i32.add
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 13
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 12
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $while-continue|3
       end
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $3
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $while-continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      local.set $5
      local.get $5
      if
       local.get $1
       i32.const 2
       i32.add
       i32.load
       local.set $4
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 6
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 4
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 10
       i32.add
       i32.load
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 14
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 12
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $while-continue|4
      end
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $3
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    loop $while-continue|5
     local.get $2
     i32.const 19
     i32.ge_u
     local.set $5
     local.get $5
     if
      local.get $1
      i32.const 3
      i32.add
      i32.load
      local.set $4
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 7
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 4
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 11
      i32.add
      i32.load
      local.set $4
      local.get $0
      i32.const 8
      i32.add
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 15
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 12
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $while-continue|5
     end
    end
    br $break|2
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $5
   local.get $4
   i32.eq
   if
    br $~lib/util/memory/memmove|inlined.0
   end
   i32.const 0
   i32.const 1
   i32.lt_s
   drop
   local.get $4
   local.get $5
   i32.sub
   local.get $3
   i32.sub
   i32.const 0
   local.get $3
   i32.const 1
   i32.shl
   i32.sub
   i32.le_u
   if
    local.get $5
    local.get $4
    local.get $3
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $5
   local.get $4
   i32.lt_u
   if
    i32.const 0
    i32.const 2
    i32.lt_s
    drop
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $5
      i32.const 7
      i32.and
      local.set $6
      local.get $6
      if
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $3
       i32.const 1
       i32.sub
       local.set $3
       local.get $5
       local.tee $7
       i32.const 1
       i32.add
       local.set $5
       local.get $7
       local.get $4
       local.tee $7
       i32.const 1
       i32.add
       local.set $4
       local.get $7
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $3
      i32.const 8
      i32.ge_u
      local.set $6
      local.get $6
      if
       local.get $5
       local.get $4
       i64.load
       i64.store
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       i32.const 8
       i32.add
       local.set $5
       local.get $4
       i32.const 8
       i32.add
       local.set $4
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $3
     local.set $6
     local.get $6
     if
      local.get $5
      local.tee $7
      i32.const 1
      i32.add
      local.set $5
      local.get $7
      local.get $4
      local.tee $7
      i32.const 1
      i32.add
      local.set $4
      local.get $7
      i32.load8_u
      i32.store8
      local.get $3
      i32.const 1
      i32.sub
      local.set $3
      br $while-continue|2
     end
    end
   else
    i32.const 0
    i32.const 2
    i32.lt_s
    drop
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $5
      local.get $3
      i32.add
      i32.const 7
      i32.and
      local.set $6
      local.get $6
      if
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $5
       local.get $3
       i32.const 1
       i32.sub
       local.tee $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $3
      i32.const 8
      i32.ge_u
      local.set $6
      local.get $6
      if
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       local.get $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $3
     local.set $6
     local.get $6
     if
      local.get $5
      local.get $3
      i32.const 1
      i32.sub
      local.tee $3
      i32.add
      local.get $4
      local.get $3
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#join (param $0 i32) (param $1 i32) (result i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 0
  i32.const 1
  i32.lt_s
  drop
  i32.const 1
  drop
  local.get $0
  local.get $0
  call $~lib/staticarray/StaticArray<~lib/string/String>#get:length
  local.get $1
  call $~lib/util/string/joinStringArray
  return
 )
 (func $~lib/bindings/wasi_snapshot_preview1/errnoToString (param $0 i32) (result i32)
  (local $1 i32)
  block $break|0
   block $case76|0
    block $case75|0
     block $case74|0
      block $case73|0
       block $case72|0
        block $case71|0
         block $case70|0
          block $case69|0
           block $case68|0
            block $case67|0
             block $case66|0
              block $case65|0
               block $case64|0
                block $case63|0
                 block $case62|0
                  block $case61|0
                   block $case60|0
                    block $case59|0
                     block $case58|0
                      block $case57|0
                       block $case56|0
                        block $case55|0
                         block $case54|0
                          block $case53|0
                           block $case52|0
                            block $case51|0
                             block $case50|0
                              block $case49|0
                               block $case48|0
                                block $case47|0
                                 block $case46|0
                                  block $case45|0
                                   block $case44|0
                                    block $case43|0
                                     block $case42|0
                                      block $case41|0
                                       block $case40|0
                                        block $case39|0
                                         block $case38|0
                                          block $case37|0
                                           block $case36|0
                                            block $case35|0
                                             block $case34|0
                                              block $case33|0
                                               block $case32|0
                                                block $case31|0
                                                 block $case30|0
                                                  block $case29|0
                                                   block $case28|0
                                                    block $case27|0
                                                     block $case26|0
                                                      block $case25|0
                                                       block $case24|0
                                                        block $case23|0
                                                         block $case22|0
                                                          block $case21|0
                                                           block $case20|0
                                                            block $case19|0
                                                             block $case18|0
                                                              block $case17|0
                                                               block $case16|0
                                                                block $case15|0
                                                                 block $case14|0
                                                                  block $case13|0
                                                                   block $case12|0
                                                                    block $case11|0
                                                                     block $case10|0
                                                                      block $case9|0
                                                                       block $case8|0
                                                                        block $case7|0
                                                                         block $case6|0
                                                                          block $case5|0
                                                                           block $case4|0
                                                                            block $case3|0
                                                                             block $case2|0
                                                                              block $case1|0
                                                                               block $case0|0
                                                                                local.get $0
                                                                                i32.const 65535
                                                                                i32.and
                                                                                local.set $1
                                                                                local.get $1
                                                                                i32.const 0
                                                                                i32.eq
                                                                                br_if $case0|0
                                                                                local.get $1
                                                                                i32.const 1
                                                                                i32.eq
                                                                                br_if $case1|0
                                                                                local.get $1
                                                                                i32.const 2
                                                                                i32.eq
                                                                                br_if $case2|0
                                                                                local.get $1
                                                                                i32.const 3
                                                                                i32.eq
                                                                                br_if $case3|0
                                                                                local.get $1
                                                                                i32.const 4
                                                                                i32.eq
                                                                                br_if $case4|0
                                                                                local.get $1
                                                                                i32.const 5
                                                                                i32.eq
                                                                                br_if $case5|0
                                                                                local.get $1
                                                                                i32.const 6
                                                                                i32.eq
                                                                                br_if $case6|0
                                                                                local.get $1
                                                                                i32.const 7
                                                                                i32.eq
                                                                                br_if $case7|0
                                                                                local.get $1
                                                                                i32.const 8
                                                                                i32.eq
                                                                                br_if $case8|0
                                                                                local.get $1
                                                                                i32.const 9
                                                                                i32.eq
                                                                                br_if $case9|0
                                                                                local.get $1
                                                                                i32.const 10
                                                                                i32.eq
                                                                                br_if $case10|0
                                                                                local.get $1
                                                                                i32.const 11
                                                                                i32.eq
                                                                                br_if $case11|0
                                                                                local.get $1
                                                                                i32.const 12
                                                                                i32.eq
                                                                                br_if $case12|0
                                                                                local.get $1
                                                                                i32.const 13
                                                                                i32.eq
                                                                                br_if $case13|0
                                                                                local.get $1
                                                                                i32.const 14
                                                                                i32.eq
                                                                                br_if $case14|0
                                                                                local.get $1
                                                                                i32.const 15
                                                                                i32.eq
                                                                                br_if $case15|0
                                                                                local.get $1
                                                                                i32.const 16
                                                                                i32.eq
                                                                                br_if $case16|0
                                                                                local.get $1
                                                                                i32.const 17
                                                                                i32.eq
                                                                                br_if $case17|0
                                                                                local.get $1
                                                                                i32.const 18
                                                                                i32.eq
                                                                                br_if $case18|0
                                                                                local.get $1
                                                                                i32.const 19
                                                                                i32.eq
                                                                                br_if $case19|0
                                                                                local.get $1
                                                                                i32.const 20
                                                                                i32.eq
                                                                                br_if $case20|0
                                                                                local.get $1
                                                                                i32.const 21
                                                                                i32.eq
                                                                                br_if $case21|0
                                                                                local.get $1
                                                                                i32.const 22
                                                                                i32.eq
                                                                                br_if $case22|0
                                                                                local.get $1
                                                                                i32.const 23
                                                                                i32.eq
                                                                                br_if $case23|0
                                                                                local.get $1
                                                                                i32.const 24
                                                                                i32.eq
                                                                                br_if $case24|0
                                                                                local.get $1
                                                                                i32.const 25
                                                                                i32.eq
                                                                                br_if $case25|0
                                                                                local.get $1
                                                                                i32.const 26
                                                                                i32.eq
                                                                                br_if $case26|0
                                                                                local.get $1
                                                                                i32.const 27
                                                                                i32.eq
                                                                                br_if $case27|0
                                                                                local.get $1
                                                                                i32.const 28
                                                                                i32.eq
                                                                                br_if $case28|0
                                                                                local.get $1
                                                                                i32.const 29
                                                                                i32.eq
                                                                                br_if $case29|0
                                                                                local.get $1
                                                                                i32.const 30
                                                                                i32.eq
                                                                                br_if $case30|0
                                                                                local.get $1
                                                                                i32.const 31
                                                                                i32.eq
                                                                                br_if $case31|0
                                                                                local.get $1
                                                                                i32.const 32
                                                                                i32.eq
                                                                                br_if $case32|0
                                                                                local.get $1
                                                                                i32.const 33
                                                                                i32.eq
                                                                                br_if $case33|0
                                                                                local.get $1
                                                                                i32.const 34
                                                                                i32.eq
                                                                                br_if $case34|0
                                                                                local.get $1
                                                                                i32.const 35
                                                                                i32.eq
                                                                                br_if $case35|0
                                                                                local.get $1
                                                                                i32.const 36
                                                                                i32.eq
                                                                                br_if $case36|0
                                                                                local.get $1
                                                                                i32.const 37
                                                                                i32.eq
                                                                                br_if $case37|0
                                                                                local.get $1
                                                                                i32.const 38
                                                                                i32.eq
                                                                                br_if $case38|0
                                                                                local.get $1
                                                                                i32.const 39
                                                                                i32.eq
                                                                                br_if $case39|0
                                                                                local.get $1
                                                                                i32.const 40
                                                                                i32.eq
                                                                                br_if $case40|0
                                                                                local.get $1
                                                                                i32.const 41
                                                                                i32.eq
                                                                                br_if $case41|0
                                                                                local.get $1
                                                                                i32.const 42
                                                                                i32.eq
                                                                                br_if $case42|0
                                                                                local.get $1
                                                                                i32.const 43
                                                                                i32.eq
                                                                                br_if $case43|0
                                                                                local.get $1
                                                                                i32.const 44
                                                                                i32.eq
                                                                                br_if $case44|0
                                                                                local.get $1
                                                                                i32.const 45
                                                                                i32.eq
                                                                                br_if $case45|0
                                                                                local.get $1
                                                                                i32.const 46
                                                                                i32.eq
                                                                                br_if $case46|0
                                                                                local.get $1
                                                                                i32.const 47
                                                                                i32.eq
                                                                                br_if $case47|0
                                                                                local.get $1
                                                                                i32.const 48
                                                                                i32.eq
                                                                                br_if $case48|0
                                                                                local.get $1
                                                                                i32.const 49
                                                                                i32.eq
                                                                                br_if $case49|0
                                                                                local.get $1
                                                                                i32.const 50
                                                                                i32.eq
                                                                                br_if $case50|0
                                                                                local.get $1
                                                                                i32.const 51
                                                                                i32.eq
                                                                                br_if $case51|0
                                                                                local.get $1
                                                                                i32.const 52
                                                                                i32.eq
                                                                                br_if $case52|0
                                                                                local.get $1
                                                                                i32.const 53
                                                                                i32.eq
                                                                                br_if $case53|0
                                                                                local.get $1
                                                                                i32.const 54
                                                                                i32.eq
                                                                                br_if $case54|0
                                                                                local.get $1
                                                                                i32.const 55
                                                                                i32.eq
                                                                                br_if $case55|0
                                                                                local.get $1
                                                                                i32.const 56
                                                                                i32.eq
                                                                                br_if $case56|0
                                                                                local.get $1
                                                                                i32.const 57
                                                                                i32.eq
                                                                                br_if $case57|0
                                                                                local.get $1
                                                                                i32.const 58
                                                                                i32.eq
                                                                                br_if $case58|0
                                                                                local.get $1
                                                                                i32.const 59
                                                                                i32.eq
                                                                                br_if $case59|0
                                                                                local.get $1
                                                                                i32.const 60
                                                                                i32.eq
                                                                                br_if $case60|0
                                                                                local.get $1
                                                                                i32.const 61
                                                                                i32.eq
                                                                                br_if $case61|0
                                                                                local.get $1
                                                                                i32.const 62
                                                                                i32.eq
                                                                                br_if $case62|0
                                                                                local.get $1
                                                                                i32.const 63
                                                                                i32.eq
                                                                                br_if $case63|0
                                                                                local.get $1
                                                                                i32.const 64
                                                                                i32.eq
                                                                                br_if $case64|0
                                                                                local.get $1
                                                                                i32.const 65
                                                                                i32.eq
                                                                                br_if $case65|0
                                                                                local.get $1
                                                                                i32.const 66
                                                                                i32.eq
                                                                                br_if $case66|0
                                                                                local.get $1
                                                                                i32.const 67
                                                                                i32.eq
                                                                                br_if $case67|0
                                                                                local.get $1
                                                                                i32.const 68
                                                                                i32.eq
                                                                                br_if $case68|0
                                                                                local.get $1
                                                                                i32.const 69
                                                                                i32.eq
                                                                                br_if $case69|0
                                                                                local.get $1
                                                                                i32.const 70
                                                                                i32.eq
                                                                                br_if $case70|0
                                                                                local.get $1
                                                                                i32.const 71
                                                                                i32.eq
                                                                                br_if $case71|0
                                                                                local.get $1
                                                                                i32.const 72
                                                                                i32.eq
                                                                                br_if $case72|0
                                                                                local.get $1
                                                                                i32.const 73
                                                                                i32.eq
                                                                                br_if $case73|0
                                                                                local.get $1
                                                                                i32.const 74
                                                                                i32.eq
                                                                                br_if $case74|0
                                                                                local.get $1
                                                                                i32.const 75
                                                                                i32.eq
                                                                                br_if $case75|0
                                                                                local.get $1
                                                                                i32.const 76
                                                                                i32.eq
                                                                                br_if $case76|0
                                                                                br $break|0
                                                                               end
                                                                               i32.const 2448
                                                                               return
                                                                              end
                                                                              i32.const 2496
                                                                              return
                                                                             end
                                                                             i32.const 2528
                                                                             return
                                                                            end
                                                                            i32.const 2560
                                                                            return
                                                                           end
                                                                           i32.const 2608
                                                                           return
                                                                          end
                                                                          i32.const 2656
                                                                          return
                                                                         end
                                                                         i32.const 2704
                                                                         return
                                                                        end
                                                                        i32.const 2736
                                                                        return
                                                                       end
                                                                       i32.const 2784
                                                                       return
                                                                      end
                                                                      i32.const 2816
                                                                      return
                                                                     end
                                                                     i32.const 2848
                                                                     return
                                                                    end
                                                                    i32.const 2880
                                                                    return
                                                                   end
                                                                   i32.const 2928
                                                                   return
                                                                  end
                                                                  i32.const 2960
                                                                  return
                                                                 end
                                                                 i32.const 3008
                                                                 return
                                                                end
                                                                i32.const 3056
                                                                return
                                                               end
                                                               i32.const 3104
                                                               return
                                                              end
                                                              i32.const 3136
                                                              return
                                                             end
                                                             i32.const 3184
                                                             return
                                                            end
                                                            i32.const 3216
                                                            return
                                                           end
                                                           i32.const 3248
                                                           return
                                                          end
                                                          i32.const 3280
                                                          return
                                                         end
                                                         i32.const 3312
                                                         return
                                                        end
                                                        i32.const 3344
                                                        return
                                                       end
                                                       i32.const 3392
                                                       return
                                                      end
                                                      i32.const 3424
                                                      return
                                                     end
                                                     i32.const 3456
                                                     return
                                                    end
                                                    i32.const 3504
                                                    return
                                                   end
                                                   i32.const 3536
                                                   return
                                                  end
                                                  i32.const 3568
                                                  return
                                                 end
                                                 i32.const 3600
                                                 return
                                                end
                                                i32.const 3632
                                                return
                                               end
                                               i32.const 3664
                                               return
                                              end
                                              i32.const 3696
                                              return
                                             end
                                             i32.const 3728
                                             return
                                            end
                                            i32.const 3760
                                            return
                                           end
                                           i32.const 3808
                                           return
                                          end
                                          i32.const 3856
                                          return
                                         end
                                         i32.const 3904
                                         return
                                        end
                                        i32.const 3952
                                        return
                                       end
                                       i32.const 4000
                                       return
                                      end
                                      i32.const 4048
                                      return
                                     end
                                     i32.const 4080
                                     return
                                    end
                                    i32.const 4112
                                    return
                                   end
                                   i32.const 4144
                                   return
                                  end
                                  i32.const 4176
                                  return
                                 end
                                 i32.const 4208
                                 return
                                end
                                i32.const 4240
                                return
                               end
                               i32.const 4272
                               return
                              end
                              i32.const 4304
                              return
                             end
                             i32.const 4336
                             return
                            end
                            i32.const 4384
                            return
                           end
                           i32.const 4416
                           return
                          end
                          i32.const 4448
                          return
                         end
                         i32.const 4496
                         return
                        end
                        i32.const 4528
                        return
                       end
                       i32.const 4576
                       return
                      end
                      i32.const 4624
                      return
                     end
                     i32.const 4672
                     return
                    end
                    i32.const 4704
                    return
                   end
                   i32.const 4736
                   return
                  end
                  i32.const 4768
                  return
                 end
                 i32.const 4816
                 return
                end
                i32.const 4864
                return
               end
               i32.const 4896
               return
              end
              i32.const 4928
              return
             end
             i32.const 4960
             return
            end
            i32.const 5008
            return
           end
           i32.const 5056
           return
          end
          i32.const 5088
          return
         end
         i32.const 5120
         return
        end
        i32.const 5152
        return
       end
       i32.const 5184
       return
      end
      i32.const 5216
      return
     end
     i32.const 5264
     return
    end
    i32.const 5296
    return
   end
   i32.const 5328
   return
  end
  i32.const 5376
 )
 (func $~lib/string/String.UTF8.byteLength (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.add
  local.set $3
  local.get $1
  i32.const 0
  i32.ne
  local.set $4
  block $while-break|0
   loop $while-continue|0
    local.get $2
    local.get $3
    i32.lt_u
    local.set $5
    local.get $5
    if
     local.get $2
     i32.load16_u
     local.set $6
     local.get $6
     i32.const 128
     i32.lt_u
     if
      local.get $1
      local.get $6
      i32.eqz
      i32.and
      if
       br $while-break|0
      end
      local.get $4
      i32.const 1
      i32.add
      local.set $4
     else
      local.get $6
      i32.const 2048
      i32.lt_u
      if
       local.get $4
       i32.const 2
       i32.add
       local.set $4
      else
       local.get $6
       i32.const 64512
       i32.and
       i32.const 55296
       i32.eq
       if (result i32)
        local.get $2
        i32.const 2
        i32.add
        local.get $3
        i32.lt_u
       else
        i32.const 0
       end
       if
        local.get $2
        i32.load16_u offset=2
        i32.const 64512
        i32.and
        i32.const 56320
        i32.eq
        if
         local.get $4
         i32.const 4
         i32.add
         local.set $4
         local.get $2
         i32.const 4
         i32.add
         local.set $2
         br $while-continue|0
        end
       end
       local.get $4
       i32.const 3
       i32.add
       local.set $4
      end
     end
     local.get $2
     i32.const 2
     i32.add
     local.set $2
     br $while-continue|0
    end
   end
  end
  local.get $4
 )
 (func $~lib/process/writeString (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  i32.const -1
  local.set $2
  i32.const -1
  local.set $3
  i32.const -1
  local.set $4
  block $break|0
   block $case4|0
    block $case3|0
     block $case2|0
      block $case1|0
       block $case0|0
        local.get $1
        call $~lib/string/String#get:length
        local.set $5
        local.get $5
        i32.const 4
        i32.eq
        br_if $case0|0
        local.get $5
        i32.const 3
        i32.eq
        br_if $case1|0
        local.get $5
        i32.const 2
        i32.eq
        br_if $case2|0
        local.get $5
        i32.const 1
        i32.eq
        br_if $case3|0
        local.get $5
        i32.const 0
        i32.eq
        br_if $case4|0
        br $break|0
       end
       local.get $1
       i32.load16_u offset=6
       local.set $4
       local.get $4
       i32.const 128
       i32.ge_s
       if
        br $break|0
       end
      end
      local.get $1
      i32.load16_u offset=4
      local.set $3
      local.get $3
      i32.const 128
      i32.ge_s
      if
       br $break|0
      end
     end
     local.get $1
     i32.load16_u offset=2
     local.set $2
     local.get $2
     i32.const 128
     i32.ge_s
     if
      br $break|0
     end
    end
    local.get $1
    i32.load16_u
    local.set $5
    local.get $5
    i32.const 128
    i32.ge_s
    if
     br $break|0
    end
    global.get $~lib/process/iobuf
    global.get $~lib/process/iobuf
    i32.const 2
    i32.const 4
    i32.mul
    i32.add
    i32.store
    global.get $~lib/process/iobuf
    i32.const 1
    local.get $2
    i32.const -1
    i32.ne
    i32.add
    local.get $3
    i32.const -1
    i32.ne
    i32.add
    local.get $4
    i32.const -1
    i32.ne
    i32.add
    i32.store offset=4
    global.get $~lib/process/iobuf
    local.get $5
    local.get $2
    i32.const 8
    i32.shl
    i32.or
    local.get $3
    i32.const 16
    i32.shl
    i32.or
    local.get $4
    i32.const 24
    i32.shl
    i32.or
    i32.store offset=8
    local.get $0
    global.get $~lib/process/iobuf
    i32.const 1
    global.get $~lib/process/iobuf
    i32.const 3
    i32.const 4
    i32.mul
    i32.add
    call $~lib/bindings/wasi_snapshot_preview1/fd_write
    local.set $6
    local.get $6
    i32.const 65535
    i32.and
    if
     local.get $6
     call $~lib/bindings/wasi_snapshot_preview1/errnoToString
     i32.const 5424
     i32.const 178
     i32.const 16
     call $~lib/wasi/index/abort
     unreachable
    end
   end
   return
  end
  local.get $1
  i32.const 0
  call $~lib/string/String.UTF8.byteLength
  local.set $7
  local.get $7
  call $~lib/rt/tlsf/__alloc
  local.set $8
  local.get $1
  local.get $1
  call $~lib/string/String#get:length
  local.get $8
  i32.const 0
  i32.const 3
  global.set $~argumentsLength
  i32.const 0
  call $~lib/string/String.UTF8.encodeUnsafe@varargs
  local.get $7
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 5424
   i32.const 184
   i32.const 3
   call $~lib/wasi/index/abort
   unreachable
  end
  global.get $~lib/process/iobuf
  local.get $8
  i32.store
  global.get $~lib/process/iobuf
  local.get $7
  i32.store offset=4
  local.get $0
  global.get $~lib/process/iobuf
  i32.const 1
  global.get $~lib/process/iobuf
  i32.const 2
  i32.const 4
  i32.mul
  i32.add
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  local.set $9
  local.get $8
  call $~lib/rt/tlsf/__free
  local.get $9
  i32.const 65535
  i32.and
  if
   local.get $9
   call $~lib/bindings/wasi_snapshot_preview1/errnoToString
   i32.const 5424
   i32.const 189
   i32.const 12
   call $~lib/wasi/index/abort
   unreachable
  end
 )
 (func $~lib/process/WritableStream#write<~lib/string/String> (param $0 i32) (param $1 i32)
  i32.const 1
  drop
  local.get $0
  local.get $1
  call $~lib/process/writeString
 )
 (func $assembly/index/ttt<i32> (result i32)
  i32.const 4
  i32.const 1
  i32.add
 )
 (func $~lib/rt/__visit_globals (param $0 i32)
  (local $1 i32)
  i32.const 400
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 208
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 32
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1264
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 2320
  local.get $0
  call $~lib/rt/itcms/__visit
 )
 (func $~lib/arraybuffer/ArrayBufferView~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 1
  drop
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   local.set $4
   local.get $4
   if
    local.get $2
    i32.load
    local.set $5
    local.get $5
    if
     local.get $5
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/staticarray/StaticArray<~lib/string/String>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/staticarray/StaticArray<~lib/string/String>#__visit
 )
 (func $~lib/rt/__visit_members (param $0 i32) (param $1 i32)
  block $invalid
   block $~lib/staticarray/StaticArray<~lib/string/String>
    block $assembly/index/Coo
     block $~lib/arraybuffer/ArrayBufferView
      block $~lib/string/String
       block $~lib/arraybuffer/ArrayBuffer
        local.get $0
        i32.const 8
        i32.sub
        i32.load
        br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $assembly/index/Coo $~lib/staticarray/StaticArray<~lib/string/String> $invalid
       end
       return
      end
      return
     end
     local.get $0
     local.get $1
     call $~lib/arraybuffer/ArrayBufferView~visit
     return
    end
    return
   end
   local.get $0
   local.get $1
   call $~lib/staticarray/StaticArray<~lib/string/String>~visit
   return
  end
  unreachable
 )
 (func $~start
  global.get $~started
  if
   return
  end
  i32.const 1
  global.set $~started
  memory.size
  i32.const 16
  i32.shl
  global.get $~lib/memory/__heap_base
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 320
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/pinSpace
  i32.const 352
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/toSpace
  i32.const 496
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/fromSpace
 )
 (func $~stack_check
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__data_end
  i32.lt_s
  if
   i32.const 21984
   i32.const 22032
   i32.const 1
   i32.const 1
   call $~lib/wasi/index/abort
   unreachable
  end
 )
 (func $~lib/console/console.log (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/process/process.stdout
  local.set $1
  local.get $1
  local.get $0
  call $~lib/process/WritableStream#write<~lib/string/String>
  local.get $1
  i32.const 5488
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/process/WritableStream#write<~lib/string/String>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/add (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  i32.const 608
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  i32.const 1
  call $assembly/index/ttt<i8>
  i32.const 10
  call $~lib/number/I32#toString
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $2
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 608
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  i32.const 576
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=12
  local.get $2
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/console/console.log
  i32.const 5520
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  i32.const 1
  call $assembly/index/ttt<i32>
  i32.const 10
  call $~lib/number/I32#toString
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $2
  call $~lib/staticarray/StaticArray<~lib/string/String>#__uset
  i32.const 5520
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  i32.const 576
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=12
  local.get $2
  call $~lib/staticarray/StaticArray<~lib/string/String>#join
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/console/console.log
  i32.const 1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $assembly/index/Coo#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 3
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/util/number/itoa32 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 640
   i32.const 768
   i32.const 373
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.eqz
  if
   i32.const 832
   local.set $8
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $8
   return
  end
  local.get $0
  i32.const 31
  i32.shr_u
  local.set $2
  local.get $2
  if
   i32.const 0
   local.get $0
   i32.sub
   local.set $0
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   call $~lib/util/number/decimalCount32
   local.get $2
   i32.add
   local.set $4
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store
   local.get $3
   local.set $7
   local.get $0
   local.set $6
   local.get $4
   local.set $5
   i32.const 0
   i32.const 1
   i32.ge_s
   drop
   local.get $7
   local.get $6
   local.get $5
   call $~lib/util/number/utoa32_dec_lut
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 31
    local.get $0
    i32.clz
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.get $2
    i32.add
    local.set $4
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.set $7
    local.get $0
    local.set $6
    local.get $4
    local.set $5
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $7
    local.get $6
    i64.extend_i32_u
    local.get $5
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    local.set $4
    local.get $4
    i64.extend_i32_u
    local.get $1
    call $~lib/util/number/ulog_base
    local.get $2
    i32.add
    local.set $7
    global.get $~lib/memory/__stack_pointer
    local.get $7
    i32.const 1
    i32.shl
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $4
    i64.extend_i32_u
    local.get $7
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  if
   local.get $3
   i32.const 45
   i32.store16
  end
  local.get $3
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
 )
 (func $~lib/util/string/joinStringArray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 1
  i32.sub
  local.set $3
  local.get $3
  i32.const 0
  i32.lt_s
  if
   i32.const 576
   local.set $12
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $12
   return
  end
  local.get $3
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load
   local.tee $4
   i32.store
   local.get $4
   if (result i32)
    local.get $4
   else
    i32.const 576
   end
   local.set $12
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $12
   return
  end
  i32.const 0
  local.set $5
  i32.const 0
  local.set $4
  loop $for-loop|0
   local.get $4
   local.get $1
   i32.lt_s
   local.set $7
   local.get $7
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $6
    i32.store offset=4
    local.get $6
    i32.const 0
    i32.ne
    if
     local.get $5
     local.get $6
     call $~lib/string/String#get:length
     i32.add
     local.set $5
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  i32.const 0
  local.set $8
  local.get $2
  call $~lib/string/String#get:length
  local.set $9
  global.get $~lib/memory/__stack_pointer
  local.get $5
  local.get $9
  local.get $3
  i32.mul
  i32.add
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $10
  i32.store offset=8
  i32.const 0
  local.set $4
  loop $for-loop|1
   local.get $4
   local.get $3
   i32.lt_s
   local.set $7
   local.get $7
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $6
    i32.store offset=4
    local.get $6
    i32.const 0
    i32.ne
    if
     local.get $6
     call $~lib/string/String#get:length
     local.set $11
     local.get $10
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     local.get $6
     local.get $11
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $8
     local.get $11
     i32.add
     local.set $8
    end
    local.get $9
    if
     local.get $10
     local.get $8
     i32.const 1
     i32.shl
     i32.add
     local.get $2
     local.get $9
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $8
     local.get $9
     i32.add
     local.set $8
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|1
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $3
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $6
  i32.store offset=4
  local.get $6
  i32.const 0
  i32.ne
  if
   local.get $10
   local.get $8
   i32.const 1
   i32.shl
   i32.add
   local.get $6
   local.get $6
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   call $~lib/memory/memory.copy
  end
  local.get $10
  local.set $12
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $12
 )
 (func $export:assembly/index/Coo#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/index/Coo#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
)
