import { fd_write } from 'wasi_snapshot_preview1';
import { proc_exit } from 'wasi_snapshot_preview1';
import { random_get } from 'wasi_snapshot_preview1';
import { now } from 'Date';

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 12, "PAAAAAAAAAAAAAAAAQAAACQAAABVAG4AcABhAGkAcgBlAGQAIABzAHUAcgByAG8AZwBhAHQAZQAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 76, "LAAAAAAAAAAAAAAAAQAAABwAAAB+AGwAaQBiAC8AcwB0AHIAaQBuAGcALgB0AHMA");
  base64DecodeToExistingUint8Array(bufferView, 124, "LAAAAAAAAAAAAAAAAQAAABwAAABJAG4AdgBhAGwAaQBkACAAbABlAG4AZwB0AGgA");
  base64DecodeToExistingUint8Array(bufferView, 172, "PAAAAAAAAAAAAAAAAQAAACYAAAB+AGwAaQBiAC8AcwB0AGEAdABpAGMAYQByAHIAYQB5AC4AdABzAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 236, "PAAAAAAAAAAAAAAAAQAAACgAAABBAGwAbABvAGMAYQB0AGkAbwBuACAAdABvAG8AIABsAGEAcgBnAGUAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 300, "PAAAAAAAAAAAAAAAAQAAACAAAAB+AGwAaQBiAC8AcgB0AC8AaQB0AGMAbQBzAC4AdABzAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 368, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 400, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 428, "PAAAAAAAAAAAAAAAAQAAACQAAABJAG4AZABlAHgAIABvAHUAdAAgAG8AZgAgAHIAYQBuAGcAZQAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 492, "LAAAAAAAAAAAAAAAAQAAABQAAAB+AGwAaQBiAC8AcgB0AC4AdABzAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 544, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 572, "PAAAAAAAAAAAAAAAAQAAAB4AAAB+AGwAaQBiAC8AcgB0AC8AdABsAHMAZgAuAHQAcwAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 636, "LAAAAAAAAAAAAAAAAQAAABgAAAB+AGwAaQBiAC8AbQBhAHQAaAAuAHQAcwAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 684, "HAAAAAAAAAAAAAAAAQAAAAwAAAAxADEAMQAwADEAMQA=");
  base64DecodeToExistingUint8Array(bufferView, 716, "HAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 748, "HAAAAAAAAAAAAAAABAAAAAwAAADgAgAAAAAAAOACAAA=");
  base64DecodeToExistingUint8Array(bufferView, 780, "fAAAAAAAAAAAAAAAAQAAAGQAAAB0AG8AUwB0AHIAaQBuAGcAKAApACAAcgBhAGQAaQB4ACAAYQByAGcAdQBtAGUAbgB0ACAAbQB1AHMAdAAgAGIAZQAgAGIAZQB0AHcAZQBlAG4AIAAyACAAYQBuAGQAIAAzADYAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 908, "PAAAAAAAAAAAAAAAAQAAACYAAAB+AGwAaQBiAC8AdQB0AGkAbAAvAG4AdQBtAGIAZQByAC4AdABzAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 972, "HAAAAAAAAAAAAAAAAQAAAAIAAAAwAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1004, "MAAwADAAMQAwADIAMAAzADAANAAwADUAMAA2ADAANwAwADgAMAA5ADEAMAAxADEAMQAyADEAMwAxADQAMQA1ADEANgAxADcAMQA4ADEAOQAyADAAMgAxADIAMgAyADMAMgA0ADIANQAyADYAMgA3ADIAOAAyADkAMwAwADMAMQAzADIAMwAzADMANAAzADUAMwA2ADMANwAzADgAMwA5ADQAMAA0ADEANAAyADQAMwA0ADQANAA1ADQANgA0ADcANAA4ADQAOQA1ADAANQAxADUAMgA1ADMANQA0ADUANQA1ADYANQA3ADUAOAA1ADkANgAwADYAMQA2ADIANgAzADYANAA2ADUANgA2ADYANwA2ADgANgA5ADcAMAA3ADEANwAyADcAMwA3ADQANwA1ADcANgA3ADcANwA4ADcAOQA4ADAAOAAxADgAMgA4ADMAOAA0ADgANQA4ADYAOAA3ADgAOAA4ADkAOQAwADkAMQA5ADIAOQAzADkANAA5ADUAOQA2ADkANwA5ADgAOQA5AA==");
  base64DecodeToExistingUint8Array(bufferView, 1404, "HAQAAAAAAAAAAAAAAQAAAAAEAAAwADAAMAAxADAAMgAwADMAMAA0ADAANQAwADYAMAA3ADAAOAAwADkAMABhADAAYgAwAGMAMABkADAAZQAwAGYAMQAwADEAMQAxADIAMQAzADEANAAxADUAMQA2ADEANwAxADgAMQA5ADEAYQAxAGIAMQBjADEAZAAxAGUAMQBmADIAMAAyADEAMgAyADIAMwAyADQAMgA1ADIANgAyADcAMgA4ADIAOQAyAGEAMgBiADIAYwAyAGQAMgBlADIAZgAzADAAMwAxADMAMgAzADMAMwA0ADMANQAzADYAMwA3ADMAOAAzADkAMwBhADMAYgAzAGMAMwBkADMAZQAzAGYANAAwADQAMQA0ADIANAAzADQANAA0ADUANAA2ADQANwA0ADgANAA5ADQAYQA0AGIANABjADQAZAA0AGUANABmADUAMAA1ADEANQAyADUAMwA1ADQANQA1ADUANgA1ADcANQA4ADUAOQA1AGEANQBiADUAYwA1AGQANQBlADUAZgA2ADAANgAxADYAMgA2ADMANgA0ADYANQA2ADYANgA3ADYAOAA2ADkANgBhADYAYgA2AGMANgBkADYAZQA2AGYANwAwADcAMQA3ADIANwAzADcANAA3ADUANwA2ADcANwA3ADgANwA5ADcAYQA3AGIANwBjADcAZAA3AGUANwBmADgAMAA4ADEAOAAyADgAMwA4ADQAOAA1ADgANgA4ADcAOAA4ADgAOQA4AGEAOABiADgAYwA4AGQAOABlADgAZgA5ADAAOQAxADkAMgA5ADMAOQA0ADkANQA5ADYAOQA3ADkAOAA5ADkAOQBhADkAYgA5AGMAOQBkADkAZQA5AGYAYQAwAGEAMQBhADIAYQAzAGEANABhADUAYQA2AGEANwBhADgAYQA5AGEAYQBhAGIAYQBjAGEAZABhAGUAYQBmAGIAMABiADEAYgAyAGIAMwBiADQAYgA1AGIANgBiADcAYgA4AGIAOQBiAGEAYgBiAGIAYwBiAGQAYgBlAGIAZgBjADAAYwAxAGMAMgBjADMAYwA0AGMANQBjADYAYwA3AGMAOABjADkAYwBhAGMAYgBjAGMAYwBkAGMAZQBjAGYAZAAwAGQAMQBkADIAZAAzAGQANABkADUAZAA2AGQANwBkADgAZAA5AGQAYQBkAGIAZABjAGQAZABkAGUAZABmAGUAMABlADEAZQAyAGUAMwBlADQAZQA1AGUANgBlADcAZQA4AGUAOQBlAGEAZQBiAGUAYwBlAGQAZQBlAGUAZgBmADAAZgAxAGYAMgBmADMAZgA0AGYANQBmADYAZgA3AGYAOABmADkAZgBhAGYAYgBmAGMAZgBkAGYAZQBmAGYAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 2460, "XAAAAAAAAAAAAAAAAQAAAEgAAAAwADEAMgAzADQANQA2ADcAOAA5AGEAYgBjAGQAZQBmAGcAaABpAGoAawBsAG0AbgBvAHAAcQByAHMAdAB1AHYAdwB4AHkAegAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 2560, "AAAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 2588, "LAAAAAAAAAAAAAAAAQAAAA4AAABTAFUAQwBDAEUAUwBTAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 2636, "HAAAAAAAAAAAAAAAAQAAAAwAAABUAE8ATwBCAEkARwA=");
  base64DecodeToExistingUint8Array(bufferView, 2668, "HAAAAAAAAAAAAAAAAQAAAAoAAABBAEMAQwBFAFMAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 2700, "LAAAAAAAAAAAAAAAAQAAABIAAABBAEQARABSAEkATgBVAFMARQAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 2748, "LAAAAAAAAAAAAAAAAQAAABgAAABBAEQARABSAE4ATwBUAEEAVgBBAEkATAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 2796, "LAAAAAAAAAAAAAAAAQAAABYAAABBAEYATgBPAFMAVQBQAFAATwBSAFQAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 2844, "HAAAAAAAAAAAAAAAAQAAAAoAAABBAEcAQQBJAE4AAAA=");
  base64DecodeToExistingUint8Array(bufferView, 2876, "LAAAAAAAAAAAAAAAAQAAAA4AAABBAEwAUgBFAEEARABZAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 2924, "HAAAAAAAAAAAAAAAAQAAAAgAAABCAEEARABGAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 2956, "HAAAAAAAAAAAAAAAAQAAAAwAAABCAEEARABNAFMARwA=");
  base64DecodeToExistingUint8Array(bufferView, 2988, "HAAAAAAAAAAAAAAAAQAAAAgAAABCAFUAUwBZAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3020, "LAAAAAAAAAAAAAAAAQAAABAAAABDAEEATgBDAEUATABFAEQAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3068, "HAAAAAAAAAAAAAAAAQAAAAoAAABDAEgASQBMAEQAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3100, "LAAAAAAAAAAAAAAAAQAAABYAAABDAE8ATgBOAEEAQgBPAFIAVABFAEQAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3148, "LAAAAAAAAAAAAAAAAQAAABYAAABDAE8ATgBOAFIARQBGAFUAUwBFAEQAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3196, "LAAAAAAAAAAAAAAAAQAAABIAAABDAE8ATgBOAFIARQBTAEUAVAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3244, "HAAAAAAAAAAAAAAAAQAAAAwAAABEAEUAQQBEAEwASwA=");
  base64DecodeToExistingUint8Array(bufferView, 3276, "LAAAAAAAAAAAAAAAAQAAABYAAABEAEUAUwBUAEEARABEAFIAUgBFAFEAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3324, "HAAAAAAAAAAAAAAAAQAAAAYAAABEAE8ATQAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3356, "HAAAAAAAAAAAAAAAAQAAAAoAAABEAFEAVQBPAFQAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3388, "HAAAAAAAAAAAAAAAAQAAAAoAAABFAFgASQBTAFQAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3420, "HAAAAAAAAAAAAAAAAQAAAAoAAABGAEEAVQBMAFQAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3452, "HAAAAAAAAAAAAAAAAQAAAAgAAABGAEIASQBHAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3484, "LAAAAAAAAAAAAAAAAQAAABYAAABIAE8AUwBUAFUATgBSAEUAQQBDAEgAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3532, "HAAAAAAAAAAAAAAAAQAAAAgAAABJAEQAUgBNAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3564, "HAAAAAAAAAAAAAAAAQAAAAoAAABJAEwAUwBFAFEAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3596, "LAAAAAAAAAAAAAAAAQAAABQAAABJAE4AUABSAE8ARwBSAEUAUwBTAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3644, "HAAAAAAAAAAAAAAAAQAAAAgAAABJAE4AVABSAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3676, "HAAAAAAAAAAAAAAAAQAAAAoAAABJAE4AVgBBAEwAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3708, "HAAAAAAAAAAAAAAAAQAAAAQAAABJAE8AAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3740, "HAAAAAAAAAAAAAAAAQAAAAwAAABJAFMAQwBPAE4ATgA=");
  base64DecodeToExistingUint8Array(bufferView, 3772, "HAAAAAAAAAAAAAAAAQAAAAoAAABJAFMARABJAFIAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3804, "HAAAAAAAAAAAAAAAAQAAAAgAAABMAE8ATwBQAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3836, "HAAAAAAAAAAAAAAAAQAAAAoAAABNAEYASQBMAEUAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3868, "HAAAAAAAAAAAAAAAAQAAAAoAAABNAEwASQBOAEsAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 3900, "LAAAAAAAAAAAAAAAAQAAAA4AAABNAFMARwBTAEkAWgBFAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3948, "LAAAAAAAAAAAAAAAAQAAABAAAABNAFUATABUAEkASABPAFAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 3996, "LAAAAAAAAAAAAAAAAQAAABYAAABOAEEATQBFAFQATwBPAEwATwBOAEcAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4044, "LAAAAAAAAAAAAAAAAQAAAA4AAABOAEUAVABEAE8AVwBOAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4092, "LAAAAAAAAAAAAAAAAQAAABAAAABOAEUAVABSAEUAUwBFAFQAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4140, "LAAAAAAAAAAAAAAAAQAAABQAAABOAEUAVABVAE4AUgBFAEEAQwBIAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4188, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAEYASQBMAEUAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4220, "HAAAAAAAAAAAAAAAAQAAAAwAAABOAE8AQgBVAEYAUwA=");
  base64DecodeToExistingUint8Array(bufferView, 4252, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8ARABFAFYAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4284, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8ARQBOAFQAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4316, "HAAAAAAAAAAAAAAAAQAAAAwAAABOAE8ARQBYAEUAQwA=");
  base64DecodeToExistingUint8Array(bufferView, 4348, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8ATABDAEsAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4380, "HAAAAAAAAAAAAAAAAQAAAAwAAABOAE8ATABJAE4ASwA=");
  base64DecodeToExistingUint8Array(bufferView, 4412, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8ATQBFAE0AAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4444, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8ATQBTAEcAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4476, "LAAAAAAAAAAAAAAAAQAAABQAAABOAE8AUABSAE8AVABPAE8AUABUAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4524, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8AUwBQAEMAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4556, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8AUwBZAFMAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4588, "LAAAAAAAAAAAAAAAAQAAAA4AAABOAE8AVABDAE8ATgBOAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4636, "HAAAAAAAAAAAAAAAAQAAAAwAAABOAE8AVABEAEkAUgA=");
  base64DecodeToExistingUint8Array(bufferView, 4668, "LAAAAAAAAAAAAAAAAQAAABAAAABOAE8AVABFAE0AUABUAFkAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4716, "LAAAAAAAAAAAAAAAAQAAABwAAABOAE8AVABSAEUAQwBPAFYARQBSAEEAQgBMAEUA");
  base64DecodeToExistingUint8Array(bufferView, 4764, "LAAAAAAAAAAAAAAAAQAAAA4AAABOAE8AVABTAE8AQwBLAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4812, "HAAAAAAAAAAAAAAAAQAAAAwAAABOAE8AVABTAFUAUAA=");
  base64DecodeToExistingUint8Array(bufferView, 4844, "HAAAAAAAAAAAAAAAAQAAAAoAAABOAE8AVABUAFkAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4876, "HAAAAAAAAAAAAAAAAQAAAAgAAABOAFgASQBPAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 4908, "LAAAAAAAAAAAAAAAAQAAABAAAABPAFYARQBSAEYATABPAFcAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 4956, "LAAAAAAAAAAAAAAAAQAAABIAAABPAFcATgBFAFIARABFAEEARAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 5004, "HAAAAAAAAAAAAAAAAQAAAAgAAABQAEUAUgBNAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5036, "HAAAAAAAAAAAAAAAAQAAAAgAAABQAEkAUABFAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5068, "HAAAAAAAAAAAAAAAAQAAAAoAAABQAFIATwBUAE8AAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5100, "LAAAAAAAAAAAAAAAAQAAABwAAABQAFIATwBUAE8ATgBPAFMAVQBQAFAATwBSAFQA");
  base64DecodeToExistingUint8Array(bufferView, 5148, "LAAAAAAAAAAAAAAAAQAAABIAAABQAFIATwBUAE8AVABZAFAARQAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 5196, "HAAAAAAAAAAAAAAAAQAAAAoAAABSAEEATgBHAEUAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5228, "HAAAAAAAAAAAAAAAAQAAAAgAAABSAE8ARgBTAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5260, "HAAAAAAAAAAAAAAAAQAAAAoAAABTAFAASQBQAEUAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5292, "HAAAAAAAAAAAAAAAAQAAAAgAAABTAFIAQwBIAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5324, "HAAAAAAAAAAAAAAAAQAAAAoAAABTAFQAQQBMAEUAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5356, "LAAAAAAAAAAAAAAAAQAAABAAAABUAEkATQBFAEQATwBVAFQAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 5404, "HAAAAAAAAAAAAAAAAQAAAAwAAABUAFgAVABCAFMAWQA=");
  base64DecodeToExistingUint8Array(bufferView, 5436, "HAAAAAAAAAAAAAAAAQAAAAgAAABYAEQARQBWAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5468, "LAAAAAAAAAAAAAAAAQAAABQAAABOAE8AVABDAEEAUABBAEIATABFAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 5516, "LAAAAAAAAAAAAAAAAQAAAA4AAABVAE4ASwBOAE8AVwBOAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 5564, "PAAAAAAAAAAAAAAAAQAAAB4AAAB+AGwAaQBiAC8AcAByAG8AYwBlAHMAcwAuAHQAcwAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 5628, "HAAAAAAAAAAAAAAAAQAAAAIAAAAKAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5660, "HAAAAAAAAAAAAAAABAAAAAwAAADgAgAAAAAAAOACAAA=");
  base64DecodeToExistingUint8Array(bufferView, 5696, "BQAAACAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAACQBAAAAAAAABEEAAAAAAAA=");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      
function asmFunc(env) {
 var buffer = new ArrayBuffer(65536);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var abort = env.abort;
 var nan = NaN;
 var infinity = Infinity;
 var $lib_bindings_wasi_snapshot_preview1_fd_write = env.fd_write;
 var $lib_bindings_wasi_snapshot_preview1_proc_exit = env.proc_exit;
 var $lib_bindings_wasi_snapshot_preview1_random_get = env.random_get;
 var $lib_bindings_Date_now = env.now;
 var $argumentsLength = 0;
 var $lib_rt_itcms_total = 0;
 var $lib_rt_itcms_threshold = 0;
 var $lib_rt_itcms_state = 0;
 var $lib_rt_itcms_visitCount = 0;
 var $lib_rt_itcms_pinSpace = 0;
 var $lib_rt_itcms_iter = 0;
 var $lib_rt_itcms_toSpace = 0;
 var $lib_rt_itcms_white = 0;
 var $lib_rt_itcms_fromSpace = 0;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_math_random_seeded = 0;
 var $lib_math_random_state0_64 = 0;
 var $lib_math_random_state1_64 = 0;
 var $lib_math_random_state0_32 = 0;
 var $lib_math_random_state1_32 = 0;
 var $lib_builtins_u32_MAX_VALUE = -1;
 var $lib_process_process_stdout = 1;
 var $lib_process_iobuf = 2560;
 var $lib_rt___rtti_base = 5696;
 var $lib_memory___data_end = 5740;
 var $lib_memory___stack_pointer = 22124;
 var $lib_memory___heap_base = 22124;
 var $started = 0;
 var __wasm_intrinsics_temp_i64 = 0;
 var $lib_math_random_state0_64$hi = 0;
 var $lib_math_random_state1_64$hi = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $lib_bindings_wasi_snapshot_preview1_iovec_set_buf($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function $lib_string_String_get_length($0) {
  $0 = $0 | 0;
  return (HEAP32[(($0 - 20 | 0) + 16 | 0) >> 2] | 0) >>> 1 | 0 | 0;
 }
 
 function $lib_string_String_UTF8_encodeUnsafe($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $6 = 0, $8 = 0, $10 = 0, $7 = 0, $9 = 0, $12 = 0, $13 = 0, $5 = 0, $55 = 0;
  $5 = $0 + ($1 << 1 | 0) | 0;
  $6 = $2;
  while_continue_0 : while (1) {
   $7 = $0 >>> 0 < $5 >>> 0;
   if ($7) {
    $8 = HEAPU16[$0 >> 1] | 0;
    if ($8 >>> 0 < 128 >>> 0) {
     HEAP8[$6 >> 0] = $8;
     $6 = $6 + 1 | 0;
    } else {
     if ($8 >>> 0 < 2048 >>> 0) {
      $9 = $8 >>> 6 | 0 | 192 | 0;
      $10 = $8 & 63 | 0 | 128 | 0;
      HEAP16[$6 >> 1] = $10 << 8 | 0 | $9 | 0;
      $6 = $6 + 2 | 0;
     } else {
      if (($8 & 63488 | 0 | 0) == (55296 | 0)) {
       if ($8 >>> 0 < 56320 >>> 0) {
        $55 = ($0 + 2 | 0) >>> 0 < $5 >>> 0
       } else {
        $55 = 0
       }
       if ($55) {
        $10 = HEAPU16[($0 + 2 | 0) >> 1] | 0;
        if (($10 & 64512 | 0 | 0) == (56320 | 0)) {
         $8 = 65536 + (($8 & 1023 | 0) << 10 | 0) | 0 | ($10 & 1023 | 0) | 0;
         $9 = $8 >>> 18 | 0 | 240 | 0;
         $12 = ($8 >>> 6 | 0) & 63 | 0 | 128 | 0;
         $13 = $8 & 63 | 0 | 128 | 0;
         HEAP32[$6 >> 2] = $13 << 24 | 0 | ($12 << 16 | 0) | 0 | ((($8 >>> 12 | 0) & 63 | 0 | 128 | 0) << 8 | 0) | 0 | $9 | 0;
         $6 = $6 + 4 | 0;
         $0 = $0 + 4 | 0;
         continue while_continue_0;
        }
       }
       if (($4 | 0) != (0 | 0)) {
        if (($4 | 0) == (2 | 0)) {
         $lib_wasi_index_abort(32 | 0, 96 | 0, 739 | 0, 49 | 0);
         abort();
        }
        $8 = 65533;
       }
      }
      $10 = $8 >>> 12 | 0 | 224 | 0;
      $13 = ($8 >>> 6 | 0) & 63 | 0 | 128 | 0;
      $12 = $8 & 63 | 0 | 128 | 0;
      HEAP16[$6 >> 1] = $13 << 8 | 0 | $10 | 0;
      HEAP8[($6 + 2 | 0) >> 0] = $12;
      $6 = $6 + 3 | 0;
     }
    }
    $0 = $0 + 2 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  if ($3) {
   $7 = $6;
   $6 = $6 + 1 | 0;
   HEAP8[$7 >> 0] = 0;
  }
  return $6 - $2 | 0 | 0;
 }
 
 function $lib_string_String_UTF8_encodeUnsafe_varargs($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $2of2 : {
   switch ($argumentsLength - 3 | 0 | 0) {
   default:
    abort();
   case 0:
    $3 = 0;
   case 1:
    $4 = 0;
    break;
   case 2:
    break $2of2;
   };
  }
  return $lib_string_String_UTF8_encodeUnsafe($0 | 0, $1 | 0, $2 | 0, $3 | 0, $4 | 0) | 0 | 0;
 }
 
 function $lib_util_number_decimalCount32($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 < 1e5 >>> 0) {
   if ($0 >>> 0 < 100 >>> 0) {
    return 1 + ($0 >>> 0 >= 10 >>> 0) | 0 | 0
   } else {
    return (3 + ($0 >>> 0 >= 1e4 >>> 0) | 0) + ($0 >>> 0 >= 1e3 >>> 0) | 0 | 0
   }
  } else {
   if ($0 >>> 0 < 1e7 >>> 0) {
    return 6 + ($0 >>> 0 >= 1e6 >>> 0) | 0 | 0
   } else {
    return (8 + ($0 >>> 0 >= 1e9 >>> 0) | 0) + ($0 >>> 0 >= 1e8 >>> 0) | 0 | 0
   }
  }
 }
 
 function $lib_bindings_wasi_snapshot_preview1_iovec_set_buf_len($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_wasi_index_abort($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $6 = 0, $7 = 0, $5 = 0, $17 = 0, $31 = 0;
  $lib_bindings_wasi_snapshot_preview1_iovec_set_buf(0 | 0, 12 | 0);
  $4 = 12;
  HEAP32[$4 >> 2] = 1919902305;
  HEAP32[($4 + 4 | 0) >> 2] = 2112116;
  $4 = $4 + 7 | 0;
  if (($0 | 0) != (0 | 0)) {
   $17 = $lib_string_String_get_length($0 | 0) | 0;
   $argumentsLength = 3;
   $4 = $4 + ($lib_string_String_UTF8_encodeUnsafe_varargs($0 | 0, $17 | 0, $4 | 0, 0 | 0, 0 | 0) | 0) | 0;
  }
  HEAP32[$4 >> 2] = 544106784;
  $4 = $4 + 4 | 0;
  if (($1 | 0) != (0 | 0)) {
   $31 = $lib_string_String_get_length($1 | 0) | 0;
   $argumentsLength = 3;
   $4 = $4 + ($lib_string_String_UTF8_encodeUnsafe_varargs($1 | 0, $31 | 0, $4 | 0, 0 | 0, 0 | 0) | 0) | 0;
  }
  $5 = $4;
  $4 = $4 + 1 | 0;
  HEAP8[$5 >> 0] = 40;
  $6 = $lib_util_number_decimalCount32($2 | 0) | 0;
  $4 = $4 + $6 | 0;
  do_continue_0 : while (1) {
   $5 = ($2 >>> 0) / (10 >>> 0) | 0;
   $4 = $4 - 1 | 0;
   HEAP8[$4 >> 0] = 48 + (($2 >>> 0) % (10 >>> 0) | 0) | 0;
   $2 = $5;
   $7 = $2;
   if ($2) {
    continue do_continue_0
   }
   break do_continue_0;
  };
  $4 = $4 + $6 | 0;
  $7 = $4;
  $4 = $4 + 1 | 0;
  HEAP8[$7 >> 0] = 58;
  $6 = $lib_util_number_decimalCount32($3 | 0) | 0;
  $4 = $4 + $6 | 0;
  do_continue_1 : while (1) {
   $7 = ($3 >>> 0) / (10 >>> 0) | 0;
   $4 = $4 - 1 | 0;
   HEAP8[$4 >> 0] = 48 + (($3 >>> 0) % (10 >>> 0) | 0) | 0;
   $3 = $7;
   if ($3) {
    continue do_continue_1
   }
   break do_continue_1;
  };
  $4 = $4 + $6 | 0;
  HEAP16[$4 >> 1] = 2601;
  $4 = $4 + 2 | 0;
  $lib_bindings_wasi_snapshot_preview1_iovec_set_buf_len(0 | 0, $4 - 12 | 0 | 0);
  $lib_bindings_wasi_snapshot_preview1_fd_write(2 | 0, 0 | 0, 1 | 0, 8 | 0) | 0;
  $lib_bindings_wasi_snapshot_preview1_proc_exit(255 | 0);
 }
 
 function $lib_rt_itcms_Object_set_nextWithColor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_itcms_Object_set_prev($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 8 | 0) >> 2] = $1;
 }
 
 function $lib_rt_itcms_initLazy($0) {
  $0 = $0 | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, $0 | 0);
  $lib_rt_itcms_Object_set_prev($0 | 0, $0 | 0);
  return $0 | 0;
 }
 
 function $lib_rt_itcms_Object_get_next($0) {
  $0 = $0 | 0;
  return (HEAP32[($0 + 4 | 0) >> 2] | 0) & (3 ^ -1 | 0) | 0 | 0;
 }
 
 function $lib_rt_itcms_Object_get_color($0) {
  $0 = $0 | 0;
  return (HEAP32[($0 + 4 | 0) >> 2] | 0) & 3 | 0 | 0;
 }
 
 function $lib_rt_itcms_visitRoots($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0;
  $lib_rt___visit_globals($0 | 0);
  $1 = $lib_rt_itcms_pinSpace;
  $2 = $lib_rt_itcms_Object_get_next($1 | 0) | 0;
  while_continue_0 : while (1) {
   if (($2 | 0) != ($1 | 0)) {
    if (!(($lib_rt_itcms_Object_get_color($2 | 0) | 0 | 0) == (3 | 0))) {
     $lib_wasi_index_abort(0 | 0, 320 | 0, 159 | 0, 16 | 0);
     abort();
    }
    $lib_rt___visit_members($2 + 20 | 0 | 0, $0 | 0);
    $2 = $lib_rt_itcms_Object_get_next($2 | 0) | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_rt_itcms_Object_set_color($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, (HEAP32[($0 + 4 | 0) >> 2] | 0) & (3 ^ -1 | 0) | 0 | $1 | 0 | 0);
 }
 
 function $lib_rt_itcms_Object_set_next($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, $1 | ((HEAP32[($0 + 4 | 0) >> 2] | 0) & 3 | 0) | 0 | 0);
 }
 
 function $lib_rt_itcms_Object_unlink($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $13 = 0;
  $1 = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
  if (($1 | 0) == (0 | 0)) {
   if ((HEAP32[($0 + 8 | 0) >> 2] | 0 | 0) == (0 | 0)) {
    $13 = $0 >>> 0 < $lib_memory___heap_base >>> 0
   } else {
    $13 = 0
   }
   if (!$13) {
    $lib_wasi_index_abort(0 | 0, 320 | 0, 127 | 0, 18 | 0);
    abort();
   }
   return;
  }
  $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  if (!$2) {
   $lib_wasi_index_abort(0 | 0, 320 | 0, 131 | 0, 16 | 0);
   abort();
  }
  $lib_rt_itcms_Object_set_prev($1 | 0, $2 | 0);
  $lib_rt_itcms_Object_set_next($2 | 0, $1 | 0);
 }
 
 function $lib_rt___typeinfo($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = $lib_rt___rtti_base;
  if ($0 >>> 0 > (HEAP32[$1 >> 2] | 0) >>> 0) {
   $lib_wasi_index_abort(448 | 0, 512 | 0, 22 | 0, 28 | 0);
   abort();
  }
  return HEAP32[(($1 + 4 | 0) + Math_imul($0, 8) | 0) >> 2] | 0 | 0;
 }
 
 function $lib_rt_itcms_Object_get_isPointerfree($0) {
  $0 = $0 | 0;
  var $1 = 0, $10 = 0;
  $1 = HEAP32[($0 + 12 | 0) >> 2] | 0;
  if ($1 >>> 0 <= 1 >>> 0) {
   $10 = 1
  } else {
   $10 = (($lib_rt___typeinfo($1 | 0) | 0) & 32 | 0 | 0) != (0 | 0)
  }
  return $10 | 0;
 }
 
 function $lib_rt_itcms_Object_linkTo($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, $1 | $2 | 0 | 0);
  $lib_rt_itcms_Object_set_prev($0 | 0, $3 | 0);
  $lib_rt_itcms_Object_set_next($3 | 0, $0 | 0);
  $lib_rt_itcms_Object_set_prev($1 | 0, $0 | 0);
 }
 
 function $lib_rt_itcms_Object_makeGray($0) {
  $0 = $0 | 0;
  var $1 = 0, $19 = 0, $10 = 0, $13 = 0, $14 = 0;
  if (($0 | 0) == ($lib_rt_itcms_iter | 0)) {
   $1 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   if (!$1) {
    $lib_wasi_index_abort(0 | 0, 320 | 0, 147 | 0, 30 | 0);
    abort();
   } else {
    $10 = $1
   }
   $lib_rt_itcms_iter = $10;
  }
  $lib_rt_itcms_Object_unlink($0 | 0);
  $13 = $0;
  $14 = $lib_rt_itcms_toSpace;
  if ($lib_rt_itcms_Object_get_isPointerfree($0 | 0) | 0) {
   $19 = !$lib_rt_itcms_white
  } else {
   $19 = 2
  }
  $lib_rt_itcms_Object_linkTo($13 | 0, $14 | 0, $19 | 0);
 }
 
 function $lib_rt_itcms___visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  if (!$0) {
   return
  }
  $2 = $0 - 20 | 0;
  if (($lib_rt_itcms_Object_get_color($2 | 0) | 0 | 0) == ($lib_rt_itcms_white | 0)) {
   $lib_rt_itcms_Object_makeGray($2 | 0);
   $lib_rt_itcms_visitCount = $lib_rt_itcms_visitCount + 1 | 0;
  }
 }
 
 function $lib_rt_itcms_visitStack($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = $lib_memory___stack_pointer;
  while_continue_0 : while (1) {
   if ($1 >>> 0 < $lib_memory___heap_base >>> 0) {
    $lib_rt_itcms___visit(HEAP32[$1 >> 2] | 0 | 0, $0 | 0);
    $1 = $1 + 4 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_rt_itcms_Object_get_size($0) {
  $0 = $0 | 0;
  return 4 + ((HEAP32[$0 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0 | 0;
 }
 
 function $lib_rt_tlsf_Root_set_flMap($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function $lib_rt_common_BLOCK_set_mmInfo($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function $lib_rt_tlsf_Block_set_prev($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_Block_set_next($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 8 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_removeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $6 = 0, $4 = 0, $7 = 0, $9 = 0, $5 = 0, $3 = 0, $8 = 0, $2 = 0, $50 = 0;
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 268 | 0, 14 | 0);
   abort();
  }
  $3 = $2 & (3 ^ -1 | 0) | 0;
  if (!($3 >>> 0 >= 12 >>> 0)) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 270 | 0, 14 | 0);
   abort();
  }
  if ($3 >>> 0 < 256 >>> 0) {
   $4 = 0;
   $5 = $3 >>> 4 | 0;
  } else {
   $6 = $3;
   $7 = 1073741820;
   $6 = $6 >>> 0 < $7 >>> 0 ? $6 : $7;
   $4 = 31 - Math_clz32($6) | 0;
   $5 = ($6 >>> ($4 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $4 = $4 - (8 - 1 | 0) | 0;
  }
  if ($4 >>> 0 < 23 >>> 0) {
   $50 = $5 >>> 0 < 16 >>> 0
  } else {
   $50 = 0
  }
  if (!$50) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 284 | 0, 14 | 0);
   abort();
  }
  $8 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $9 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  if ($8) {
   $lib_rt_tlsf_Block_set_next($8 | 0, $9 | 0)
  }
  if ($9) {
   $lib_rt_tlsf_Block_set_prev($9 | 0, $8 | 0)
  }
  $lib_rt_tlsf_GETHEAD_inlined_0 : {
   $6 = $4;
   $7 = $5;
  }
  if (($1 | 0) == (HEAP32[(($0 + ((($6 << 4 | 0) + $7 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0 | 0)) {
   $lib_rt_tlsf_SETHEAD_inlined_1 : {
    $6 = $5;
    $7 = $9;
    HEAP32[(($0 + ((($4 << 4 | 0) + $6 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $9;
   }
   if (!$9) {
    $lib_rt_tlsf_GETSL_inlined_0 : {
     $6 = $0;
     $7 = $4;
    }
    $6 = HEAP32[(($6 + ($7 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    $lib_rt_tlsf_SETSL_inlined_1 : {
     $7 = $0;
     $6 = $6 & ((1 << $5 | 0) ^ -1 | 0) | 0;
     HEAP32[(($0 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] = $6;
    }
    if (!$6) {
     $lib_rt_tlsf_Root_set_flMap($0 | 0, (HEAP32[$0 >> 2] | 0) & ((1 << $4 | 0) ^ -1 | 0) | 0 | 0)
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $8 = 0, $6 = 0, $2 = 0, $4 = 0, $7 = 0, $9 = 0, $5 = 0, $10 = 0, $11 = 0, $127 = 0;
  if (!$1) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 201 | 0, 14 | 0);
   abort();
  }
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 203 | 0, 14 | 0);
   abort();
  }
  $3 = $1;
  $4 = ($3 + 4 | 0) + ((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
  $5 = HEAP32[$4 >> 2] | 0;
  if ($5 & 1 | 0) {
   $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
   $2 = ($2 + 4 | 0) + ($5 & (3 ^ -1 | 0) | 0) | 0;
   $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $2 | 0);
   $3 = $1;
   $4 = ($3 + 4 | 0) + ((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
   $5 = HEAP32[$4 >> 2] | 0;
  }
  if ($2 & 2 | 0) {
   $3 = $1;
   $3 = HEAP32[($3 - 4 | 0) >> 2] | 0;
   $6 = HEAP32[$3 >> 2] | 0;
   if (!($6 & 1 | 0)) {
    $lib_wasi_index_abort(0 | 0, 592 | 0, 221 | 0, 16 | 0);
    abort();
   }
   $lib_rt_tlsf_removeBlock($0 | 0, $3 | 0);
   $1 = $3;
   $2 = ($6 + 4 | 0) + ($2 & (3 ^ -1 | 0) | 0) | 0;
   $lib_rt_common_BLOCK_set_mmInfo($3 | 0, $2 | 0);
  }
  $lib_rt_common_BLOCK_set_mmInfo($4 | 0, $5 | 2 | 0 | 0);
  $7 = $2 & (3 ^ -1 | 0) | 0;
  if (!($7 >>> 0 >= 12 >>> 0)) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 233 | 0, 14 | 0);
   abort();
  }
  if (!((($1 + 4 | 0) + $7 | 0 | 0) == ($4 | 0))) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 234 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($7 >>> 0 < 256 >>> 0) {
   $8 = 0;
   $9 = $7 >>> 4 | 0;
  } else {
   $3 = $7;
   $6 = 1073741820;
   $3 = $3 >>> 0 < $6 >>> 0 ? $3 : $6;
   $8 = 31 - Math_clz32($3) | 0;
   $9 = ($3 >>> ($8 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $8 = $8 - (8 - 1 | 0) | 0;
  }
  if ($8 >>> 0 < 23 >>> 0) {
   $127 = $9 >>> 0 < 16 >>> 0
  } else {
   $127 = 0
  }
  if (!$127) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 251 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETHEAD_inlined_1 : {
   $10 = $0;
   $3 = $8;
   $6 = $9;
  }
  $11 = HEAP32[(($10 + ((($3 << 4 | 0) + $6 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  $lib_rt_tlsf_Block_set_prev($1 | 0, 0 | 0);
  $lib_rt_tlsf_Block_set_next($1 | 0, $11 | 0);
  if ($11) {
   $lib_rt_tlsf_Block_set_prev($11 | 0, $1 | 0)
  }
  $lib_rt_tlsf_SETHEAD_inlined_2 : {
   $10 = $8;
   $3 = $9;
   $6 = $1;
   HEAP32[(($0 + ((($8 << 4 | 0) + $3 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $1;
  }
  $lib_rt_tlsf_Root_set_flMap($0 | 0, HEAP32[$0 >> 2] | 0 | (1 << $8 | 0) | 0 | 0);
  $lib_rt_tlsf_SETSL_inlined_2 : {
   $lib_rt_tlsf_GETSL_inlined_1 : {
    $3 = $0;
    $6 = $8;
   }
   $10 = HEAP32[(($3 + ($6 << 2 | 0) | 0) + 4 | 0) >> 2] | 0 | (1 << $9 | 0) | 0;
   HEAP32[(($0 + ($8 << 2 | 0) | 0) + 4 | 0) >> 2] = $10;
  }
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  if (!($1 >>> 0 <= $2 >>> 0)) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 377 | 0, 14 | 0);
   abort();
  }
  $1 = ((($1 + 4 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0) - 4 | 0;
  $2 = $2 & (15 ^ -1 | 0) | 0;
  $4 = HEAP32[($0 + 1568 | 0) >> 2] | 0;
  $5 = 0;
  if ($4) {
   if (!($1 >>> 0 >= ($4 + 4 | 0) >>> 0)) {
    $lib_wasi_index_abort(0 | 0, 592 | 0, 384 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($4 | 0)) {
    $1 = $1 - 16 | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  } else {
   if (!($1 >>> 0 >= ($0 + 1572 | 0) >>> 0)) {
    $lib_wasi_index_abort(0 | 0, 592 | 0, 397 | 0, 5 | 0);
    abort();
   }
  }
  $6 = $2 - $1 | 0;
  if ($6 >>> 0 < ((4 + 12 | 0) + 4 | 0) >>> 0) {
   return 0 | 0
  }
  $7 = $6 - Math_imul(2, 4) | 0;
  $8 = $1;
  $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $7 | 1 | 0 | ($5 & 2 | 0) | 0 | 0);
  $lib_rt_tlsf_Block_set_prev($1 | 0, 0 | 0);
  $lib_rt_tlsf_Block_set_next($1 | 0, 0 | 0);
  $4 = ($1 + 4 | 0) + $7 | 0;
  $lib_rt_common_BLOCK_set_mmInfo($4 | 0, 0 | 2 | 0 | 0);
  HEAP32[($0 + 1568 | 0) >> 2] = $4;
  $lib_rt_tlsf_insertBlock($0 | 0, $8 | 0);
  return 1 | 0;
 }
 
 function $lib_rt_tlsf_initialize() {
  var $3 = 0, $5 = 0, $8 = 0, $0 = 0, $4 = 0, $6 = 0, $1 = 0, $2 = 0, $32 = 0;
  $0 = ($lib_memory___heap_base + 15 | 0) & (15 ^ -1 | 0) | 0;
  $1 = __wasm_memory_size();
  $2 = ((($0 + 1572 | 0) + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
  if (($2 | 0) > ($1 | 0)) {
   $32 = (__wasm_memory_grow($2 - $1 | 0 | 0) | 0) < (0 | 0)
  } else {
   $32 = 0
  }
  if ($32) {
   abort()
  }
  $3 = $0;
  $lib_rt_tlsf_Root_set_flMap($3 | 0, 0 | 0);
  $lib_rt_tlsf_SETTAIL_inlined_0 : {
   $5 = $3;
   $4 = 0;
   HEAP32[($3 + 1568 | 0) >> 2] = $4;
  }
  $5 = 0;
  for_loop_0 : while (1) {
   $4 = $5 >>> 0 < 23 >>> 0;
   if ($4) {
    for_continue_0 : {
     $lib_rt_tlsf_SETSL_inlined_0 : {
      $8 = $3;
      $6 = 0;
      HEAP32[(($3 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] = $6;
     }
     $8 = 0;
     for_loop_1 : while (1) {
      if ($8 >>> 0 < 16 >>> 0) {
       $lib_rt_tlsf_SETHEAD_inlined_0 : {
        $6 = 0;
        HEAP32[(($3 + ((($5 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $6;
       }
       $8 = $8 + 1 | 0;
       continue for_loop_1;
      }
      break for_loop_1;
     };
    }
    $5 = $5 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $lib_rt_tlsf_addMemory($3 | 0, $0 + 1572 | 0 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
  $lib_rt_tlsf_ROOT = $3;
 }
 
 function $lib_rt_tlsf_checkUsedBlock($0) {
  $0 = $0 | 0;
  var $1 = 0, $9 = 0, $15 = 0;
  $1 = $0 - 4 | 0;
  if (($0 | 0) != (0 | 0)) {
   $9 = !($0 & 15 | 0)
  } else {
   $9 = 0
  }
  if ($9) {
   $15 = !((HEAP32[$1 >> 2] | 0) & 1 | 0)
  } else {
   $15 = 0
  }
  if (!$15) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 559 | 0, 3 | 0);
   abort();
  }
  return $1 | 0;
 }
 
 function $lib_rt_tlsf_freeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_common_BLOCK_set_mmInfo($1 | 0, HEAP32[$1 >> 2] | 0 | 1 | 0 | 0);
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
 }
 
 function $lib_rt_tlsf___free($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 < $lib_memory___heap_base >>> 0) {
   return
  }
  if (!$lib_rt_tlsf_ROOT) {
   $lib_rt_tlsf_initialize()
  }
  $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT | 0, $lib_rt_tlsf_checkUsedBlock($0 | 0) | 0 | 0);
 }
 
 function $lib_rt_itcms_free($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 < $lib_memory___heap_base >>> 0) {
   $lib_rt_itcms_Object_set_nextWithColor($0 | 0, 0 | 0);
   $lib_rt_itcms_Object_set_prev($0 | 0, 0 | 0);
  } else {
   $lib_rt_itcms_total = $lib_rt_itcms_total - ($lib_rt_itcms_Object_get_size($0 | 0) | 0) | 0;
   $lib_rt_tlsf___free($0 + 4 | 0 | 0);
  }
 }
 
 function $lib_rt_itcms_step() {
  var $0 = 0, $1 = 0, $2 = 0;
  break_0 : {
   case2_0 : {
    case1_0 : {
     case0_0 : {
      $1 = $lib_rt_itcms_state;
      if (($1 | 0) == (0 | 0)) {
       break case0_0
      }
      if (($1 | 0) == (1 | 0)) {
       break case1_0
      }
      if (($1 | 0) == (2 | 0)) {
       break case2_0
      }
      break break_0;
     }
     $lib_rt_itcms_state = 1;
     $lib_rt_itcms_visitCount = 0;
     $lib_rt_itcms_visitRoots(0 | 0);
     $lib_rt_itcms_iter = $lib_rt_itcms_toSpace;
     return Math_imul($lib_rt_itcms_visitCount, 1) | 0;
    }
    $1 = !$lib_rt_itcms_white;
    $0 = $lib_rt_itcms_Object_get_next($lib_rt_itcms_iter | 0) | 0;
    while_continue_1 : while (1) {
     $2 = ($0 | 0) != ($lib_rt_itcms_toSpace | 0);
     if ($2) {
      $lib_rt_itcms_iter = $0;
      if (($lib_rt_itcms_Object_get_color($0 | 0) | 0 | 0) != ($1 | 0)) {
       $lib_rt_itcms_Object_set_color($0 | 0, $1 | 0);
       $lib_rt_itcms_visitCount = 0;
       $lib_rt___visit_members($0 + 20 | 0 | 0, 0 | 0);
       return Math_imul($lib_rt_itcms_visitCount, 1) | 0;
      }
      $0 = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
      continue while_continue_1;
     }
     break while_continue_1;
    };
    $lib_rt_itcms_visitCount = 0;
    $lib_rt_itcms_visitRoots(0 | 0);
    $0 = $lib_rt_itcms_Object_get_next($lib_rt_itcms_iter | 0) | 0;
    if (($0 | 0) == ($lib_rt_itcms_toSpace | 0)) {
     $lib_rt_itcms_visitStack(0 | 0);
     $0 = $lib_rt_itcms_Object_get_next($lib_rt_itcms_iter | 0) | 0;
     while_continue_2 : while (1) {
      $2 = ($0 | 0) != ($lib_rt_itcms_toSpace | 0);
      if ($2) {
       if (($lib_rt_itcms_Object_get_color($0 | 0) | 0 | 0) != ($1 | 0)) {
        $lib_rt_itcms_Object_set_color($0 | 0, $1 | 0);
        $lib_rt___visit_members($0 + 20 | 0 | 0, 0 | 0);
       }
       $0 = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
       continue while_continue_2;
      }
      break while_continue_2;
     };
     $2 = $lib_rt_itcms_fromSpace;
     $lib_rt_itcms_fromSpace = $lib_rt_itcms_toSpace;
     $lib_rt_itcms_toSpace = $2;
     $lib_rt_itcms_white = $1;
     $lib_rt_itcms_iter = $lib_rt_itcms_Object_get_next($2 | 0) | 0;
     $lib_rt_itcms_state = 2;
    }
    return Math_imul($lib_rt_itcms_visitCount, 1) | 0;
   }
   $0 = $lib_rt_itcms_iter;
   if (($0 | 0) != ($lib_rt_itcms_toSpace | 0)) {
    $lib_rt_itcms_iter = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
    if (!(($lib_rt_itcms_Object_get_color($0 | 0) | 0 | 0) == (!$lib_rt_itcms_white | 0))) {
     $lib_wasi_index_abort(0 | 0, 320 | 0, 228 | 0, 20 | 0);
     abort();
    }
    $lib_rt_itcms_free($0 | 0);
    return 10 | 0;
   }
   $lib_rt_itcms_Object_set_nextWithColor($lib_rt_itcms_toSpace | 0, $lib_rt_itcms_toSpace | 0);
   $lib_rt_itcms_Object_set_prev($lib_rt_itcms_toSpace | 0, $lib_rt_itcms_toSpace | 0);
   $lib_rt_itcms_state = 0;
   break break_0;
  }
  return 0 | 0;
 }
 
 function $lib_rt_itcms_interrupt() {
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $0 = 0, $3 = 0;
  $0 = (Math_imul(1024, 200) >>> 0) / (100 >>> 0) | 0;
  do_continue_0 : while (1) {
   $0 = $0 - ($lib_rt_itcms_step() | 0) | 0;
   if (($lib_rt_itcms_state | 0) == (0 | 0)) {
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 0;
    i64toi32_i32$1 = __wasm_i64_mul($lib_rt_itcms_total | 0, i64toi32_i32$0 | 0, 200 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $3 = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$1 = __wasm_i64_udiv($3 | 0, i64toi32_i32$0 | 0, 100 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $lib_rt_itcms_threshold = i64toi32_i32$1 + 1024 | 0;
    return;
   }
   if (($0 | 0) > (0 | 0)) {
    continue do_continue_0
   }
   break do_continue_0;
  };
  $lib_rt_itcms_threshold = $lib_rt_itcms_total + Math_imul(1024, ($lib_rt_itcms_total - $lib_rt_itcms_threshold | 0) >>> 0 < 1024 >>> 0) | 0;
 }
 
 function $lib_rt_tlsf_computeSize($0) {
  $0 = $0 | 0;
  var $9 = 0;
  if ($0 >>> 0 <= 12 >>> 0) {
   $9 = 12
  } else {
   $9 = ((($0 + 4 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0) - 4 | 0
  }
  return $9 | 0;
 }
 
 function $lib_rt_tlsf_prepareSize($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > 1073741820 >>> 0) {
   $lib_wasi_index_abort(256 | 0, 592 | 0, 458 | 0, 29 | 0);
   abort();
  }
  return $lib_rt_tlsf_computeSize($0 | 0) | 0 | 0;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $6 = 0, $8 = 0, $5 = 0, $7 = 0, $3 = 0, $9 = 0, $24 = 0, $42 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $2 = 0;
   $3 = $1 >>> 4 | 0;
  } else {
   if ($1 >>> 0 < 536870910 >>> 0) {
    $24 = ($1 + (1 << (27 - Math_clz32($1) | 0) | 0) | 0) - 1 | 0
   } else {
    $24 = $1
   }
   $4 = $24;
   $2 = 31 - Math_clz32($4) | 0;
   $3 = ($4 >>> ($2 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $2 = $2 - (8 - 1 | 0) | 0;
  }
  if ($2 >>> 0 < 23 >>> 0) {
   $42 = $3 >>> 0 < 16 >>> 0
  } else {
   $42 = 0
  }
  if (!$42) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 330 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETSL_inlined_2 : {
   $5 = $0;
   $4 = $2;
  }
  $6 = (HEAP32[(($5 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0) & ((0 ^ -1 | 0) << $3 | 0) | 0;
  $7 = 0;
  if (!$6) {
   $5 = (HEAP32[$0 >> 2] | 0) & ((0 ^ -1 | 0) << ($2 + 1 | 0) | 0) | 0;
   if (!$5) {
    $7 = 0
   } else {
    $2 = __wasm_ctz_i32($5 | 0) | 0;
    $lib_rt_tlsf_GETSL_inlined_3 : {
     $8 = $0;
     $4 = $2;
    }
    $6 = HEAP32[(($8 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    if (!$6) {
     $lib_wasi_index_abort(0 | 0, 592 | 0, 343 | 0, 18 | 0);
     abort();
    }
    $lib_rt_tlsf_GETHEAD_inlined_2 : {
     $9 = $0;
     $8 = $2;
     $4 = __wasm_ctz_i32($6 | 0) | 0;
    }
    $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
   }
  } else {
   $lib_rt_tlsf_GETHEAD_inlined_3 : {
    $9 = $0;
    $8 = $2;
    $4 = __wasm_ctz_i32($6 | 0) | 0;
   }
   $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  }
  return $7 | 0;
 }
 
 function $lib_rt_tlsf_growMemory($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0;
  if ($1 >>> 0 < 536870910 >>> 0) {
   $1 = $1 + ((1 << (27 - Math_clz32($1) | 0) | 0) - 1 | 0) | 0
  }
  $2 = __wasm_memory_size();
  $1 = $1 + (4 << ((($2 << 16 | 0) - 4 | 0 | 0) != (HEAP32[($0 + 1568 | 0) >> 2] | 0 | 0)) | 0) | 0;
  $4 = (($1 + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
  if ((__wasm_memory_grow((($2 | 0) > ($4 | 0) ? $2 : $4) | 0) | 0) < (0 | 0)) {
   if ((__wasm_memory_grow($4 | 0) | 0) < (0 | 0)) {
    abort()
   }
  }
  $lib_rt_tlsf_addMemory($0 | 0, $2 << 16 | 0 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $49 = 0;
  $3 = HEAP32[$1 >> 2] | 0;
  if (!!(($2 + 4 | 0) & 15 | 0)) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 357 | 0, 14 | 0);
   abort();
  }
  $4 = ($3 & (3 ^ -1 | 0) | 0) - $2 | 0;
  if ($4 >>> 0 >= (4 + 12 | 0) >>> 0) {
   $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $2 | ($3 & 2 | 0) | 0 | 0);
   $5 = ($1 + 4 | 0) + $2 | 0;
   $lib_rt_common_BLOCK_set_mmInfo($5 | 0, $4 - 4 | 0 | 1 | 0 | 0);
   $lib_rt_tlsf_insertBlock($0 | 0, $5 | 0);
  } else {
   $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $3 & (1 ^ -1 | 0) | 0 | 0);
   $5 = $1;
   $49 = ($5 + 4 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
   $5 = $1;
   $lib_rt_common_BLOCK_set_mmInfo($49 | 0, (HEAP32[(($5 + 4 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0) >> 2] | 0) & (2 ^ -1 | 0) | 0 | 0);
  }
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = $lib_rt_tlsf_prepareSize($1 | 0) | 0;
  $3 = $lib_rt_tlsf_searchBlock($0 | 0, $2 | 0) | 0;
  if (!$3) {
   $lib_rt_tlsf_growMemory($0 | 0, $2 | 0);
   $3 = $lib_rt_tlsf_searchBlock($0 | 0, $2 | 0) | 0;
   if (!$3) {
    $lib_wasi_index_abort(0 | 0, 592 | 0, 496 | 0, 16 | 0);
    abort();
   }
  }
  if (!(((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) >>> 0 >= $2 >>> 0)) {
   $lib_wasi_index_abort(0 | 0, 592 | 0, 498 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_removeBlock($0 | 0, $3 | 0);
  $lib_rt_tlsf_prepareBlock($0 | 0, $3 | 0, $2 | 0);
  return $3 | 0;
 }
 
 function $lib_rt_tlsf___alloc($0) {
  $0 = $0 | 0;
  if (!$lib_rt_tlsf_ROOT) {
   $lib_rt_tlsf_initialize()
  }
  return ($lib_rt_tlsf_allocateBlock($lib_rt_tlsf_ROOT | 0, $0 | 0) | 0) + 4 | 0 | 0;
 }
 
 function $lib_rt_itcms_Object_set_rtId($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 12 | 0) >> 2] = $1;
 }
 
 function $lib_rt_itcms_Object_set_rtSize($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 16 | 0) >> 2] = $1;
 }
 
 function $lib_memory_memory_fill($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $8 = 0, $6 = 0, i64toi32_i32$2 = 0, $4 = 0, i64toi32_i32$0 = 0, $7 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $9 = 0, $19 = 0, $113 = 0, $113$hi = 0, $116$hi = 0, $9$hi = 0;
  $lib_util_memory_memset_inlined_0 : {
   $5 = $0;
   $4 = $1;
   $3 = $2;
   if (!$3) {
    break $lib_util_memory_memset_inlined_0
   }
   $6 = $5 + $3 | 0;
   HEAP8[$5 >> 0] = $4;
   HEAP8[($6 - 1 | 0) >> 0] = $4;
   if ($3 >>> 0 <= 2 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($5 + 1 | 0) >> 0] = $4;
   HEAP8[($5 + 2 | 0) >> 0] = $4;
   HEAP8[($6 - 2 | 0) >> 0] = $4;
   HEAP8[($6 - 3 | 0) >> 0] = $4;
   if ($3 >>> 0 <= 6 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($5 + 3 | 0) >> 0] = $4;
   HEAP8[($6 - 4 | 0) >> 0] = $4;
   if ($3 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   $7 = (0 - $5 | 0) & 3 | 0;
   $5 = $5 + $7 | 0;
   $3 = $3 - $7 | 0;
   $3 = $3 & -4 | 0;
   $8 = Math_imul((-1 >>> 0) / (255 >>> 0) | 0, $4 & 255 | 0);
   $6 = $5 + $3 | 0;
   HEAP32[$5 >> 2] = $8;
   HEAP32[($6 - 4 | 0) >> 2] = $8;
   if ($3 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($5 + 4 | 0) >> 2] = $8;
   HEAP32[($5 + 8 | 0) >> 2] = $8;
   HEAP32[($6 - 12 | 0) >> 2] = $8;
   HEAP32[($6 - 8 | 0) >> 2] = $8;
   if ($3 >>> 0 <= 24 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($5 + 12 | 0) >> 2] = $8;
   HEAP32[($5 + 16 | 0) >> 2] = $8;
   HEAP32[($5 + 20 | 0) >> 2] = $8;
   HEAP32[($5 + 24 | 0) >> 2] = $8;
   HEAP32[($6 - 28 | 0) >> 2] = $8;
   HEAP32[($6 - 24 | 0) >> 2] = $8;
   HEAP32[($6 - 20 | 0) >> 2] = $8;
   HEAP32[($6 - 16 | 0) >> 2] = $8;
   $7 = 24 + ($5 & 4 | 0) | 0;
   $5 = $5 + $7 | 0;
   $3 = $3 - $7 | 0;
   i64toi32_i32$0 = 0;
   $113 = $8;
   $113$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$2 = $8;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $19 = 0;
   } else {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $19 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $116$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $113$hi;
   i64toi32_i32$0 = $113;
   i64toi32_i32$2 = $116$hi;
   i64toi32_i32$3 = $19;
   i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
   $9 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
   $9$hi = i64toi32_i32$2;
   while_continue_0 : while (1) {
    if ($3 >>> 0 >= 32 >>> 0) {
     i64toi32_i32$2 = $9$hi;
     i64toi32_i32$0 = $5;
     HEAP32[$5 >> 2] = $9;
     HEAP32[($5 + 4 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 8 | 0) >> 2] = $9;
     HEAP32[($5 + 12 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 16 | 0) >> 2] = $9;
     HEAP32[($5 + 20 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 24 | 0) >> 2] = $9;
     HEAP32[($5 + 28 | 0) >> 2] = i64toi32_i32$2;
     $3 = $3 - 32 | 0;
     $5 = $5 + 32 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
  }
 }
 
 function $lib_rt_itcms___new($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  if ($0 >>> 0 >= 1073741804 >>> 0) {
   $lib_wasi_index_abort(256 | 0, 320 | 0, 260 | 0, 31 | 0);
   abort();
  }
  if ($lib_rt_itcms_total >>> 0 >= $lib_rt_itcms_threshold >>> 0) {
   $lib_rt_itcms_interrupt()
  }
  $2 = ($lib_rt_tlsf___alloc(16 + $0 | 0 | 0) | 0) - 4 | 0;
  $lib_rt_itcms_Object_set_rtId($2 | 0, $1 | 0);
  $lib_rt_itcms_Object_set_rtSize($2 | 0, $0 | 0);
  $lib_rt_itcms_Object_linkTo($2 | 0, $lib_rt_itcms_fromSpace | 0, $lib_rt_itcms_white | 0);
  $lib_rt_itcms_total = $lib_rt_itcms_total + ($lib_rt_itcms_Object_get_size($2 | 0) | 0) | 0;
  $3 = $2 + 20 | 0;
  $lib_memory_memory_fill($3 | 0, 0 | 0, $0 | 0);
  return $3 | 0;
 }
 
 function $lib_wasi_index_seed() {
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $0 = 0, $0$hi = 0, $1 = 0, $1$hi = 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $0 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$1;
  do_continue_0 : while (1) {
   $lib_bindings_wasi_snapshot_preview1_random_get(0 | 0, 8 | 0) | 0;
   i64toi32_i32$2 = 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $1 = i64toi32_i32$1;
   $1$hi = i64toi32_i32$0;
   i64toi32_i32$2 = i64toi32_i32$1;
   i64toi32_i32$1 = 0;
   if (!((i64toi32_i32$2 | 0) != (0 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$1 | 0) | 0)) {
    continue do_continue_0
   }
   break do_continue_0;
  };
  i64toi32_i32$2 = $0$hi;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$0 >> 2] = $0;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
  i64toi32_i32$2 = $1$hi;
  wasm2js_scratch_store_i32(0 | 0, $1 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$2 | 0);
  return +(+wasm2js_scratch_load_f64());
 }
 
 function $lib_math_murmurHash3($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $16 = 0, $17 = 0, $18 = 0, $1 = 0, $1$hi = 0, $3$hi = 0, $7 = 0, $7$hi = 0, $9$hi = 0, $13 = 0, $13$hi = 0, $15$hi = 0;
  i64toi32_i32$0 = $0$hi;
  $1 = $0;
  $1$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 33;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $16 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $16 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $3$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$0 = $1;
  i64toi32_i32$2 = $3$hi;
  i64toi32_i32$3 = $16;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $0 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$2;
  i64toi32_i32$0 = -11423785;
  i64toi32_i32$0 = __wasm_i64_mul($0 | 0, i64toi32_i32$2 | 0, -313160499 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$2;
  $7 = i64toi32_i32$0;
  $7$hi = i64toi32_i32$2;
  i64toi32_i32$1 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 33;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $17 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   $17 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $7$hi;
  i64toi32_i32$2 = $7;
  i64toi32_i32$1 = $9$hi;
  i64toi32_i32$3 = $17;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
  $0 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$2 = -993084930;
  i64toi32_i32$2 = __wasm_i64_mul($0 | 0, i64toi32_i32$1 | 0, 444984403 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$2;
  $0$hi = i64toi32_i32$1;
  $13 = i64toi32_i32$2;
  $13$hi = i64toi32_i32$1;
  i64toi32_i32$0 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 33;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $18 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $18 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $15$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $13$hi;
  i64toi32_i32$1 = $13;
  i64toi32_i32$0 = $15$hi;
  i64toi32_i32$3 = $18;
  i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
  $0 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$0;
  i64toi32_i32$1 = $0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $lib_math_splitMix32($0) {
  $0 = $0 | 0;
  $0 = $0 + 1831565813 | 0;
  $0 = Math_imul($0 ^ ($0 >>> 15 | 0) | 0, $0 | 1 | 0);
  $0 = $0 ^ ($0 + Math_imul($0 ^ ($0 >>> 7 | 0) | 0, $0 | 61 | 0) | 0) | 0;
  return $0 ^ ($0 >>> 14 | 0) | 0 | 0;
 }
 
 function $lib_math_NativeMath_seedRandom($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $15 = 0, $19 = 0, $23 = 0;
  $lib_math_random_seeded = 1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$0 = $lib_math_murmurHash3($0 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state0_64 = i64toi32_i32$0;
  $lib_math_random_state0_64$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $lib_math_random_state0_64$hi;
  i64toi32_i32$2 = $lib_math_random_state0_64;
  i64toi32_i32$0 = -1;
  i64toi32_i32$3 = -1;
  i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
  i64toi32_i32$0 = $lib_math_murmurHash3(i64toi32_i32$2 ^ i64toi32_i32$3 | 0 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state1_64 = i64toi32_i32$0;
  $lib_math_random_state1_64$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $0$hi;
  $lib_math_random_state0_32 = $lib_math_splitMix32($0 | 0) | 0;
  $lib_math_random_state1_32 = $lib_math_splitMix32($lib_math_random_state0_32 | 0) | 0;
  i64toi32_i32$2 = $lib_math_random_state0_64$hi;
  i64toi32_i32$1 = $lib_math_random_state0_64;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 0;
  if ((i64toi32_i32$1 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$0 | 0) | 0) {
   i64toi32_i32$1 = $lib_math_random_state1_64$hi;
   i64toi32_i32$3 = $lib_math_random_state1_64;
   i64toi32_i32$2 = 0;
   i64toi32_i32$0 = 0;
   $15 = (i64toi32_i32$3 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
  } else {
   $15 = 0
  }
  if ($15) {
   $19 = ($lib_math_random_state0_32 | 0) != (0 | 0)
  } else {
   $19 = 0
  }
  if ($19) {
   $23 = ($lib_math_random_state1_32 | 0) != (0 | 0)
  } else {
   $23 = 0
  }
  if (!$23) {
   $lib_wasi_index_abort(0 | 0, 656 | 0, 1421 | 0, 5 | 0);
   abort();
  }
 }
 
 function $lib_math_NativeMath_random() {
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $0 = 0, $0$hi = 0, $1$hi = 0, $1 = 0, $18 = 0, $19 = 0, $20 = 0, $22 = 0, $10 = 0, $10$hi = 0, $12$hi = 0, $14 = 0, $14$hi = 0, $16$hi = 0, $21 = 0, $21$hi = 0, $23$hi = 0;
  if (!$lib_math_random_seeded) {
   wasm2js_scratch_store_f64(+(+$lib_wasi_index_seed()));
   i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $lib_math_NativeMath_seedRandom(wasm2js_scratch_load_i32(0 | 0) | 0 | 0, i64toi32_i32$0 | 0);
  }
  i64toi32_i32$0 = $lib_math_random_state0_64$hi;
  $0 = $lib_math_random_state0_64;
  $0$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $lib_math_random_state1_64$hi;
  $1 = $lib_math_random_state1_64;
  $1$hi = i64toi32_i32$0;
  $lib_math_random_state0_64 = $1;
  $lib_math_random_state0_64$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $0$hi;
  $10 = $0;
  $10$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 23;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $18 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $18 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $10$hi;
  i64toi32_i32$0 = $10;
  i64toi32_i32$2 = $12$hi;
  i64toi32_i32$3 = $18;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $0 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$2;
  $14 = $0;
  $14$hi = i64toi32_i32$2;
  i64toi32_i32$1 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 17;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $19 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   $19 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $16$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$2 = $14;
  i64toi32_i32$1 = $16$hi;
  i64toi32_i32$3 = $19;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
  $0 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$1 = $0$hi;
  i64toi32_i32$0 = $0;
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$3 = $1;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $0 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$2;
  $21 = $0;
  $21$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$1 = i64toi32_i32$3;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 26;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $20 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   $20 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $21$hi;
  i64toi32_i32$2 = $21;
  i64toi32_i32$1 = $23$hi;
  i64toi32_i32$3 = $20;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
  $0 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$1;
  $lib_math_random_state1_64 = $0;
  $lib_math_random_state1_64$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$0 = $1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 12;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  i64toi32_i32$1 = $22;
  i64toi32_i32$0 = 1072693248;
  i64toi32_i32$3 = 0;
  i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$1 | i64toi32_i32$3 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$0 | 0);
  return +(+wasm2js_scratch_load_f64() - 1.0);
 }
 
 function $lib_staticarray_StaticArray_u32__get_length($0) {
  $0 = $0 | 0;
  return (HEAP32[(($0 - 20 | 0) + 16 | 0) >> 2] | 0) >>> 2 | 0 | 0;
 }
 
 function $lib_staticarray_StaticArray_u32____uset($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  HEAP32[($0 + ($1 << 2 | 0) | 0) >> 2] = $2;
 }
 
 function $lib_staticarray_StaticArray_u32____set($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  if ($1 >>> 0 >= ($lib_staticarray_StaticArray_u32__get_length($0 | 0) | 0) >>> 0) {
   $lib_wasi_index_abort(448 | 0, 192 | 0, 128 | 0, 41 | 0);
   abort();
  }
  $lib_staticarray_StaticArray_u32____uset($0 | 0, $1 | 0, $2 | 0);
 }
 
 function $lib_staticarray_StaticArray_u32____get($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if ($1 >>> 0 >= ($lib_staticarray_StaticArray_u32__get_length($0 | 0) | 0) >>> 0) {
   $lib_wasi_index_abort(448 | 0, 192 | 0, 113 | 0, 41 | 0);
   abort();
  }
  return HEAP32[($0 + ($1 << 2 | 0) | 0) >> 2] | 0 | 0;
 }
 
 function $lib_util_string_isSpace($0) {
  $0 = $0 | 0;
  var $1 = 0;
  if ($0 >>> 0 < 5760 >>> 0) {
   return ($0 | 128 | 0 | 0) == (160 | 0) | ($0 - 9 | 0) >>> 0 <= (13 - 9 | 0) >>> 0 | 0 | 0
  }
  if (($0 - 8192 | 0) >>> 0 <= (8202 - 8192 | 0) >>> 0) {
   return 1 | 0
  }
  break_0 : {
   case6_0 : {
    case5_0 : {
     case4_0 : {
      case3_0 : {
       case2_0 : {
        case1_0 : {
         case0_0 : {
          $1 = $0;
          if (($1 | 0) == (5760 | 0)) {
           break case0_0
          }
          if (($1 | 0) == (8232 | 0)) {
           break case1_0
          }
          if (($1 | 0) == (8233 | 0)) {
           break case2_0
          }
          if (($1 | 0) == (8239 | 0)) {
           break case3_0
          }
          if (($1 | 0) == (8287 | 0)) {
           break case4_0
          }
          if (($1 | 0) == (12288 | 0)) {
           break case5_0
          }
          if (($1 | 0) == (65279 | 0)) {
           break case6_0
          }
          break break_0;
         }
        }
       }
      }
     }
    }
   }
   return 1 | 0;
  }
  return 0 | 0;
 }
 
 function $lib_util_string_strtol_f64_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $4 = 0, $2 = 0, i64toi32_i32$4 = 0, $5 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $7 = 0.0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, $6 = 0.0, $28 = 0, $45 = 0, $53 = 0, $59 = 0, $69 = 0, $19 = 0;
  $2 = $lib_string_String_get_length($0 | 0) | 0;
  if (!$2) {
   return +(nan)
  }
  $3 = $0;
  $4 = HEAPU16[$3 >> 1] | 0;
  while_continue_0 : while (1) {
   $5 = $lib_util_string_isSpace($4 | 0) | 0;
   if ($5) {
    $3 = $3 + 2 | 0;
    $4 = HEAPU16[$3 >> 1] | 0;
    $2 = $2 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  $6 = 1.0;
  if (($4 | 0) == (45 | 0)) {
   $28 = 1
  } else {
   $28 = ($4 | 0) == (43 | 0)
  }
  if ($28) {
   $2 = $2 - 1 | 0;
   if (!$2) {
    return +(nan)
   }
   if (($4 | 0) == (45 | 0)) {
    $6 = -1.0
   }
   $3 = $3 + 2 | 0;
   $4 = HEAPU16[$3 >> 1] | 0;
  }
  if ($1) {
   if (($1 | 0) < (2 | 0)) {
    $45 = 1
   } else {
    $45 = ($1 | 0) > (36 | 0)
   }
   if ($45) {
    return +(nan)
   }
   if (($1 | 0) == (16 | 0)) {
    if (($2 | 0) > (2 | 0)) {
     $53 = ($4 | 0) == (48 | 0)
    } else {
     $53 = 0
    }
    if ($53) {
     $59 = (HEAPU16[($3 + 2 | 0) >> 1] | 0 | 32 | 0 | 0) == (120 | 0)
    } else {
     $59 = 0
    }
    if ($59) {
     $3 = $3 + 4 | 0;
     $2 = $2 - 2 | 0;
    }
   }
  } else {
   if (($4 | 0) == (48 | 0)) {
    $69 = ($2 | 0) > (2 | 0)
   } else {
    $69 = 0
   }
   if ($69) {
    break_1 : {
     case2_1 : {
      case1_1 : {
       case0_1 : {
        $5 = HEAPU16[($3 + 2 | 0) >> 1] | 0 | 32 | 0;
        if (($5 | 0) == (98 | 0)) {
         break case0_1
        }
        if (($5 | 0) == (111 | 0)) {
         break case1_1
        }
        if (($5 | 0) == (120 | 0)) {
         break case2_1
        }
        break break_1;
       }
       $3 = $3 + 4 | 0;
       $2 = $2 - 2 | 0;
       $1 = 2;
       break break_1;
      }
      $3 = $3 + 4 | 0;
      $2 = $2 - 2 | 0;
      $1 = 8;
      break break_1;
     }
     $3 = $3 + 4 | 0;
     $2 = $2 - 2 | 0;
     $1 = 16;
     break break_1;
    }
   }
   if (!$1) {
    $1 = 10
   }
  }
  $7 = 0.0;
  while_break_2 : {
   while_continue_2 : while (1) {
    $5 = $2;
    $2 = $2 - 1 | 0;
    if ($5) {
     $4 = HEAPU16[$3 >> 1] | 0;
     if (($4 - 48 | 0) >>> 0 < 10 >>> 0) {
      $4 = $4 - 48 | 0
     } else {
      if (($4 - 65 | 0) >>> 0 <= (90 - 65 | 0) >>> 0) {
       $4 = $4 - (65 - 10 | 0) | 0
      } else {
       if (($4 - 97 | 0) >>> 0 <= (122 - 97 | 0) >>> 0) {
        $4 = $4 - (97 - 10 | 0) | 0
       }
      }
     }
     if ($4 >>> 0 >= $1 >>> 0) {
      wasm2js_scratch_store_f64(+$7);
      i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
      i64toi32_i32$2 = wasm2js_scratch_load_i32(0 | 0) | 0;
      i64toi32_i32$1 = 0;
      i64toi32_i32$3 = 1;
      i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
       $19 = 0;
      } else {
       i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
       $19 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
      }
      i64toi32_i32$0 = $19;
      i64toi32_i32$2 = 0;
      i64toi32_i32$3 = 2;
      i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
      i64toi32_i32$5 = (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$2 | 0;
      i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
      i64toi32_i32$1 = i64toi32_i32$4;
      i64toi32_i32$0 = -2097153;
      i64toi32_i32$3 = -2;
      if (!(i64toi32_i32$5 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$4 >>> 0 <= i64toi32_i32$3 >>> 0 | 0) | 0)) {
       return +(nan)
      }
      break while_break_2;
     }
     $7 = $7 * +($1 | 0) + +($4 >>> 0);
     $3 = $3 + 2 | 0;
     continue while_continue_2;
    }
    break while_continue_2;
   };
  }
  return +($6 * $7);
 }
 
 function $lib_string_parseInt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return +(+$lib_util_string_strtol_f64_($0 | 0, $1 | 0));
 }
 
 function $lib_util_number_utoa32_dec_lut($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, $11 = 0, i64toi32_i32$3 = 0, $3 = 0, $5 = 0, $20 = 0, $8 = 0, $8$hi = 0, $9$hi = 0, $37 = 0, $38 = 0, $38$hi = 0, $40$hi = 0, $41 = 0, $10 = 0;
  while_continue_0 : while (1) {
   $3 = $1 >>> 0 >= 1e4 >>> 0;
   if ($3) {
    $5 = ($1 >>> 0) % (1e4 >>> 0) | 0;
    $1 = ($1 >>> 0) / (1e4 >>> 0) | 0;
    i64toi32_i32$2 = 1004 + ((($5 >>> 0) / (100 >>> 0) | 0) << 2 | 0) | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = 0;
    $8 = i64toi32_i32$0;
    $8$hi = i64toi32_i32$1;
    i64toi32_i32$2 = 1004 + ((($5 >>> 0) % (100 >>> 0) | 0) << 2 | 0) | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = 0;
    $9$hi = i64toi32_i32$0;
    $2 = $2 - 4 | 0;
    $37 = $0 + ($2 << 1 | 0) | 0;
    i64toi32_i32$0 = $8$hi;
    $38 = $8;
    $38$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $9$hi;
    i64toi32_i32$2 = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 32;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
     $20 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
     $20 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    }
    $40$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $38$hi;
    i64toi32_i32$0 = $38;
    i64toi32_i32$2 = $40$hi;
    i64toi32_i32$3 = $20;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    $41 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
    i64toi32_i32$0 = $37;
    HEAP32[i64toi32_i32$0 >> 2] = $41;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  if ($1 >>> 0 >= 100 >>> 0) {
   $3 = ($1 >>> 0) / (100 >>> 0) | 0;
   $10 = ($1 >>> 0) % (100 >>> 0) | 0;
   $1 = $3;
   $2 = $2 - 2 | 0;
   $11 = HEAP32[(1004 + ($10 << 2 | 0) | 0) >> 2] | 0;
   HEAP32[($0 + ($2 << 1 | 0) | 0) >> 2] = $11;
  }
  if ($1 >>> 0 >= 10 >>> 0) {
   $2 = $2 - 2 | 0;
   $11 = HEAP32[(1004 + ($1 << 2 | 0) | 0) >> 2] | 0;
   HEAP32[($0 + ($2 << 1 | 0) | 0) >> 2] = $11;
  } else {
   $2 = $2 - 1 | 0;
   $11 = 48 + $1 | 0;
   HEAP16[($0 + ($2 << 1 | 0) | 0) >> 1] = $11;
  }
 }
 
 function $lib_util_number_decimalCount64High($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $13 = 0, $24 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 232830;
  i64toi32_i32$3 = -1530494976;
  if (i64toi32_i32$0 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$3 = $0;
   i64toi32_i32$0 = 232;
   i64toi32_i32$1 = -727379968;
   if (i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0 | 0) | 0) {
    i64toi32_i32$3 = $0$hi;
    i64toi32_i32$1 = $0;
    i64toi32_i32$2 = 23;
    i64toi32_i32$0 = 1215752192;
    $7 = 10 + (i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$0 >>> 0 | 0) | 0) | 0;
    i64toi32_i32$1 = i64toi32_i32$3;
    i64toi32_i32$1 = i64toi32_i32$3;
    i64toi32_i32$0 = $0;
    i64toi32_i32$3 = 2;
    i64toi32_i32$2 = 1410065408;
    return $7 + (i64toi32_i32$1 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$0 >>> 0 >= i64toi32_i32$2 >>> 0 | 0) | 0) | 0 | 0;
   } else {
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = 23283;
    i64toi32_i32$3 = 276447232;
    $13 = 13 + (i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$3 = $0;
    i64toi32_i32$0 = 2328;
    i64toi32_i32$1 = 1316134912;
    return $13 + (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$3 >>> 0 >= i64toi32_i32$1 >>> 0 | 0) | 0) | 0 | 0;
   }
  } else {
   i64toi32_i32$3 = $0$hi;
   i64toi32_i32$1 = $0;
   i64toi32_i32$2 = 23283064;
   i64toi32_i32$0 = 1569325056;
   if (i64toi32_i32$3 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$1 >>> 0 < i64toi32_i32$0 >>> 0 | 0) | 0) {
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$0 = $0;
    i64toi32_i32$3 = 2328306;
    i64toi32_i32$2 = 1874919424;
    return 16 + (i64toi32_i32$1 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$0 >>> 0 >= i64toi32_i32$2 >>> 0 | 0) | 0) | 0 | 0;
   } else {
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = -1966660860;
    i64toi32_i32$3 = -1981284352;
    $24 = 18 + (i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$2 = i64toi32_i32$0;
    i64toi32_i32$3 = $0;
    i64toi32_i32$0 = 232830643;
    i64toi32_i32$1 = -1486618624;
    return $24 + (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$3 >>> 0 >= i64toi32_i32$1 >>> 0 | 0) | 0) | 0 | 0;
   }
  }
 }
 
 function $lib_util_number_utoa64_dec_lut($0, $1, $1$hi, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $12 = 0, $12$hi = 0, $13$hi = 0, $4 = 0, $4$hi = 0, $5 = 0, $6 = 0, $7 = 0, $31 = 0, $32 = 0, $21 = 0, $21$hi = 0, $8 = 0, $9 = 0, $50 = 0, $51 = 0, $51$hi = 0, $53$hi = 0, $54 = 0, $68 = 0, $69 = 0, $69$hi = 0, $71$hi = 0, $72 = 0;
  while_continue_0 : while (1) {
   i64toi32_i32$0 = $1$hi;
   i64toi32_i32$2 = $1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 1e8;
   if (i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_udiv($1 | 0, i64toi32_i32$2 | 0, 1e8 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $4 = i64toi32_i32$0;
    $4$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_mul($4 | 0, i64toi32_i32$2 | 0, 1e8 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $21 = i64toi32_i32$0;
    $21$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$3 = $1;
    i64toi32_i32$0 = $21$hi;
    i64toi32_i32$1 = $21;
    i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
    $5 = i64toi32_i32$3 - i64toi32_i32$1 | 0;
    i64toi32_i32$5 = $4$hi;
    $1 = $4;
    $1$hi = i64toi32_i32$5;
    $6 = ($5 >>> 0) / (1e4 >>> 0) | 0;
    $7 = ($5 >>> 0) % (1e4 >>> 0) | 0;
    $8 = ($6 >>> 0) / (100 >>> 0) | 0;
    $9 = ($6 >>> 0) % (100 >>> 0) | 0;
    i64toi32_i32$2 = 1004 + ((($7 >>> 0) / (100 >>> 0) | 0) << 2 | 0) | 0;
    i64toi32_i32$5 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$3 = 0;
    $12 = i64toi32_i32$5;
    $12$hi = i64toi32_i32$3;
    i64toi32_i32$2 = 1004 + ((($7 >>> 0) % (100 >>> 0) | 0) << 2 | 0) | 0;
    i64toi32_i32$3 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$5 = 0;
    $13$hi = i64toi32_i32$5;
    $2 = $2 - 4 | 0;
    $50 = $0 + ($2 << 1 | 0) | 0;
    i64toi32_i32$5 = $12$hi;
    $51 = $12;
    $51$hi = i64toi32_i32$5;
    i64toi32_i32$5 = $13$hi;
    i64toi32_i32$2 = i64toi32_i32$3;
    i64toi32_i32$3 = 0;
    i64toi32_i32$1 = 32;
    i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$0 | 0;
     $31 = 0;
    } else {
     i64toi32_i32$3 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$0 | 0) | 0;
     $31 = i64toi32_i32$2 << i64toi32_i32$0 | 0;
    }
    $53$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $51$hi;
    i64toi32_i32$5 = $51;
    i64toi32_i32$2 = $53$hi;
    i64toi32_i32$1 = $31;
    i64toi32_i32$2 = i64toi32_i32$3 | i64toi32_i32$2 | 0;
    $54 = i64toi32_i32$5 | i64toi32_i32$1 | 0;
    i64toi32_i32$5 = $50;
    HEAP32[i64toi32_i32$5 >> 2] = $54;
    HEAP32[(i64toi32_i32$5 + 4 | 0) >> 2] = i64toi32_i32$2;
    i64toi32_i32$3 = 1004 + ($8 << 2 | 0) | 0;
    i64toi32_i32$2 = HEAP32[i64toi32_i32$3 >> 2] | 0;
    i64toi32_i32$5 = 0;
    $12 = i64toi32_i32$2;
    $12$hi = i64toi32_i32$5;
    i64toi32_i32$3 = 1004 + ($9 << 2 | 0) | 0;
    i64toi32_i32$5 = HEAP32[i64toi32_i32$3 >> 2] | 0;
    i64toi32_i32$2 = 0;
    $13$hi = i64toi32_i32$2;
    $2 = $2 - 4 | 0;
    $68 = $0 + ($2 << 1 | 0) | 0;
    i64toi32_i32$2 = $12$hi;
    $69 = $12;
    $69$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $13$hi;
    i64toi32_i32$3 = i64toi32_i32$5;
    i64toi32_i32$5 = 0;
    i64toi32_i32$1 = 32;
    i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$3 << i64toi32_i32$0 | 0;
     $32 = 0;
    } else {
     i64toi32_i32$5 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
     $32 = i64toi32_i32$3 << i64toi32_i32$0 | 0;
    }
    $71$hi = i64toi32_i32$5;
    i64toi32_i32$5 = $69$hi;
    i64toi32_i32$2 = $69;
    i64toi32_i32$3 = $71$hi;
    i64toi32_i32$1 = $32;
    i64toi32_i32$3 = i64toi32_i32$5 | i64toi32_i32$3 | 0;
    $72 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
    i64toi32_i32$2 = $68;
    HEAP32[i64toi32_i32$2 >> 2] = $72;
    HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$3;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  i64toi32_i32$3 = $1$hi;
  $lib_util_number_utoa32_dec_lut($0 | 0, $1 | 0, $2 | 0);
 }
 
 function $lib_util_number_utoa_hex_lut($0, $1, $1$hi, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, $9 = 0, i64toi32_i32$2 = 0;
  while_continue_0 : while (1) {
   if ($2 >>> 0 >= 2 >>> 0) {
    $2 = $2 - 2 | 0;
    i64toi32_i32$0 = $1$hi;
    HEAP32[($0 + ($2 << 1 | 0) | 0) >> 2] = HEAP32[(1424 + (($1 & 255 | 0) << 2 | 0) | 0) >> 2] | 0;
    i64toi32_i32$2 = $1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 8;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $9 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $9 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $1 = $9;
    $1$hi = i64toi32_i32$1;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  if ($2 & 1 | 0) {
   i64toi32_i32$1 = $1$hi;
   HEAP16[$0 >> 1] = HEAPU16[(1424 + ($1 << 6 | 0) | 0) >> 1] | 0;
  }
 }
 
 function $lib_util_number_ulog_base($0, $0$hi, $1) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, $4$hi = 0, $2 = 0, $4 = 0, $5 = 0, $13 = 0, $3$hi = 0, $3 = 0;
  $2 = $1;
  if ((__wasm_popcnt_i32($2 | 0) | 0 | 0) == (1 | 0)) {
   i64toi32_i32$0 = $0$hi;
   i64toi32_i32$1 = $0;
   i64toi32_i32$3 = Math_clz32(i64toi32_i32$0);
   i64toi32_i32$2 = 0;
   if ((i64toi32_i32$3 | 0) == (32 | 0)) {
    $13 = Math_clz32(i64toi32_i32$1) + 32 | 0
   } else {
    $13 = i64toi32_i32$3
   }
   return (((63 - $13 | 0) >>> 0) / ((31 - Math_clz32($1) | 0) >>> 0) | 0) + 1 | 0 | 0;
  }
  i64toi32_i32$0 = $1;
  i64toi32_i32$2 = i64toi32_i32$0 >> 31 | 0;
  $3 = i64toi32_i32$0;
  $3$hi = i64toi32_i32$2;
  $4 = i64toi32_i32$0;
  $4$hi = i64toi32_i32$2;
  $5 = 1;
  while_continue_0 : while (1) {
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$1 = $0;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$3 = $4;
   $2 = i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0;
   if ($2) {
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$1 = $4$hi;
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$2 = __wasm_i64_udiv($0 | 0, i64toi32_i32$1 | 0, $4 | 0, i64toi32_i32$2 | 0) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $0 = i64toi32_i32$2;
    $0$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $4$hi;
    i64toi32_i32$2 = i64toi32_i32$1;
    i64toi32_i32$2 = __wasm_i64_mul($4 | 0, i64toi32_i32$1 | 0, $4 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $4 = i64toi32_i32$2;
    $4$hi = i64toi32_i32$1;
    $5 = $5 << 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  while_continue_1 : while (1) {
   i64toi32_i32$1 = $0$hi;
   i64toi32_i32$3 = $0;
   i64toi32_i32$2 = 0;
   i64toi32_i32$0 = 1;
   $2 = i64toi32_i32$1 >>> 0 > i64toi32_i32$2 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$3 >>> 0 >= i64toi32_i32$0 >>> 0 | 0) | 0;
   if ($2) {
    i64toi32_i32$3 = $0$hi;
    i64toi32_i32$3 = $3$hi;
    i64toi32_i32$3 = $0$hi;
    i64toi32_i32$1 = $3$hi;
    i64toi32_i32$1 = __wasm_i64_udiv($0 | 0, i64toi32_i32$3 | 0, $3 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
    $0 = i64toi32_i32$1;
    $0$hi = i64toi32_i32$3;
    $5 = $5 + 1 | 0;
    continue while_continue_1;
   }
   break while_continue_1;
  };
  return $5 - 1 | 0 | 0;
 }
 
 function $lib_util_number_utoa64_any_core($0, $1, $1$hi, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, $6$hi = 0, $4$hi = 0, $6 = 0, $4 = 0, i64toi32_i32$6 = 0, $7 = 0, $5$hi = 0, $22 = 0, $5 = 0, $48 = 0, $52 = 0, $52$hi = 0;
  i64toi32_i32$1 = $3;
  i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
  $4 = i64toi32_i32$1;
  $4$hi = i64toi32_i32$0;
  if ((i64toi32_i32$1 & (i64toi32_i32$1 - 1 | 0) | 0 | 0) == (0 | 0)) {
   i64toi32_i32$1 = (__wasm_ctz_i32($3 | 0) | 0) & 7 | 0;
   i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
   $5 = i64toi32_i32$1;
   $5$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$2 = $4;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 1;
   i64toi32_i32$4 = i64toi32_i32$2 - i64toi32_i32$3 | 0;
   i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0;
   i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
   i64toi32_i32$5 = i64toi32_i32$0 - i64toi32_i32$5 | 0;
   $6 = i64toi32_i32$4;
   $6$hi = i64toi32_i32$5;
   do_continue_0 : while (1) {
    $2 = $2 - 1 | 0;
    i64toi32_i32$5 = $1$hi;
    i64toi32_i32$5 = $6$hi;
    i64toi32_i32$5 = $1$hi;
    i64toi32_i32$0 = $1;
    i64toi32_i32$2 = $6$hi;
    i64toi32_i32$3 = $6;
    i64toi32_i32$2 = i64toi32_i32$5 & i64toi32_i32$2 | 0;
    HEAP16[($0 + ($2 << 1 | 0) | 0) >> 1] = HEAPU16[(2480 + ((i64toi32_i32$0 & i64toi32_i32$3 | 0) << 1 | 0) | 0) >> 1] | 0;
    i64toi32_i32$2 = i64toi32_i32$5;
    i64toi32_i32$2 = $5$hi;
    i64toi32_i32$2 = i64toi32_i32$5;
    i64toi32_i32$5 = i64toi32_i32$0;
    i64toi32_i32$0 = $5$hi;
    i64toi32_i32$3 = $5;
    i64toi32_i32$1 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = 0;
     $22 = i64toi32_i32$2 >>> i64toi32_i32$1 | 0;
    } else {
     i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$1 | 0;
     $22 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
    }
    $1 = $22;
    $1$hi = i64toi32_i32$0;
    i64toi32_i32$2 = $1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$3 = 0;
    $7 = (i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$5 | 0) | 0;
    if ($7) {
     continue do_continue_0
    }
    break do_continue_0;
   };
  } else {
   do_continue_1 : while (1) {
    $2 = $2 - 1 | 0;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$0 = $4$hi;
    i64toi32_i32$0 = __wasm_i64_udiv($1 | 0, i64toi32_i32$2 | 0, $4 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $6 = i64toi32_i32$0;
    $6$hi = i64toi32_i32$2;
    $48 = $0 + ($2 << 1 | 0) | 0;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$2 = $6$hi;
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$2 = $6$hi;
    i64toi32_i32$0 = $4$hi;
    i64toi32_i32$0 = __wasm_i64_mul($6 | 0, i64toi32_i32$2 | 0, $4 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $52 = i64toi32_i32$0;
    $52$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$3 = $1;
    i64toi32_i32$0 = $52$hi;
    i64toi32_i32$5 = $52;
    i64toi32_i32$1 = i64toi32_i32$3 - i64toi32_i32$5 | 0;
    i64toi32_i32$6 = i64toi32_i32$3 >>> 0 < i64toi32_i32$5 >>> 0;
    i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
    i64toi32_i32$4 = i64toi32_i32$2 - i64toi32_i32$4 | 0;
    HEAP16[$48 >> 1] = HEAPU16[(2480 + (i64toi32_i32$1 << 1 | 0) | 0) >> 1] | 0;
    i64toi32_i32$4 = $6$hi;
    $1 = $6;
    $1$hi = i64toi32_i32$4;
    i64toi32_i32$2 = $1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$5 = 0;
    $7 = (i64toi32_i32$2 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$4 | 0) != (i64toi32_i32$3 | 0) | 0;
    if ($7) {
     continue do_continue_1
    }
    break do_continue_1;
   }
  }
 }
 
 function $lib_number_I64_toString($0, $0$hi, $1) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $0$hi;
  return $lib_util_number_itoa64($0 | 0, i64toi32_i32$0 | 0, $1 | 0) | 0 | 0;
 }
 
 function $lib_rt_itcms___link($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $31 = 0;
  if (!$1) {
   return
  }
  if (!$0) {
   $lib_wasi_index_abort(0 | 0, 320 | 0, 294 | 0, 14 | 0);
   abort();
  }
  $3 = $1 - 20 | 0;
  if (($lib_rt_itcms_Object_get_color($3 | 0) | 0 | 0) == ($lib_rt_itcms_white | 0)) {
   $4 = $0 - 20 | 0;
   $5 = $lib_rt_itcms_Object_get_color($4 | 0) | 0;
   if (($5 | 0) == (!$lib_rt_itcms_white | 0)) {
    if ($2) {
     $lib_rt_itcms_Object_makeGray($4 | 0)
    } else {
     $lib_rt_itcms_Object_makeGray($3 | 0)
    }
   } else {
    if (($5 | 0) == (3 | 0)) {
     $31 = ($lib_rt_itcms_state | 0) == (1 | 0)
    } else {
     $31 = 0
    }
    if ($31) {
     $lib_rt_itcms_Object_makeGray($3 | 0)
    }
   }
  }
 }
 
 function $lib_staticarray_StaticArray__lib_string_String____uset($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  HEAP32[($0 + ($1 << 2 | 0) | 0) >> 2] = $2;
  $lib_rt_itcms___link($0 | 0, $2 | 0, 1 | 0);
 }
 
 function $lib_staticarray_StaticArray__lib_string_String__get_length($0) {
  $0 = $0 | 0;
  return (HEAP32[(($0 - 20 | 0) + 16 | 0) >> 2] | 0) >>> 2 | 0 | 0;
 }
 
 function $lib_util_memory_memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $6 = 0, $10 = 0, $18 = 0, $97 = 0, $122 = 0, $135 = 0, $148 = 0, $213 = 0, $226 = 0, $291 = 0, $356 = 0, $369 = 0, $382 = 0, $395 = 0, $408 = 0, $421 = 0, $434 = 0, $447 = 0, $460 = 0, $473 = 0, $486 = 0, $499 = 0, $512 = 0, $525 = 0, $538 = 0, $551 = 0, $566 = 0, $579 = 0, $592 = 0, $605 = 0, $618 = 0, $631 = 0, $644 = 0, $657 = 0, $672 = 0, $685 = 0, $698 = 0, $711 = 0, $726 = 0, $739 = 0, $754 = 0;
  while_continue_0 : while (1) {
   if ($2) {
    $10 = $1 & 3 | 0
   } else {
    $10 = 0
   }
   $5 = $10;
   if ($5) {
    $6 = $0;
    $0 = $0 + 1 | 0;
    $18 = $6;
    $6 = $1;
    $1 = $1 + 1 | 0;
    HEAP8[$18 >> 0] = HEAPU8[$6 >> 0] | 0;
    $2 = $2 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  if (($0 & 3 | 0 | 0) == (0 | 0)) {
   while_continue_1 : while (1) {
    $5 = $2 >>> 0 >= 16 >>> 0;
    if ($5) {
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
     HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
     HEAP32[($0 + 8 | 0) >> 2] = HEAP32[($1 + 8 | 0) >> 2] | 0;
     HEAP32[($0 + 12 | 0) >> 2] = HEAP32[($1 + 12 | 0) >> 2] | 0;
     $1 = $1 + 16 | 0;
     $0 = $0 + 16 | 0;
     $2 = $2 - 16 | 0;
     continue while_continue_1;
    }
    break while_continue_1;
   };
   if ($2 & 8 | 0) {
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
    HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
    $0 = $0 + 8 | 0;
    $1 = $1 + 8 | 0;
   }
   if ($2 & 4 | 0) {
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
    $0 = $0 + 4 | 0;
    $1 = $1 + 4 | 0;
   }
   if ($2 & 2 | 0) {
    HEAP16[$0 >> 1] = HEAPU16[$1 >> 1] | 0;
    $0 = $0 + 2 | 0;
    $1 = $1 + 2 | 0;
   }
   if ($2 & 1 | 0) {
    $5 = $0;
    $0 = $5 + 1 | 0;
    $97 = $5;
    $5 = $1;
    $1 = $5 + 1 | 0;
    HEAP8[$97 >> 0] = HEAPU8[$5 >> 0] | 0;
   }
   return;
  }
  if ($2 >>> 0 >= 32 >>> 0) {
   break_2 : {
    case2_2 : {
     case1_2 : {
      case0_2 : {
       $5 = $0 & 3 | 0;
       if (($5 | 0) == (1 | 0)) {
        break case0_2
       }
       if (($5 | 0) == (2 | 0)) {
        break case1_2
       }
       if (($5 | 0) == (3 | 0)) {
        break case2_2
       }
       break break_2;
      }
      $3 = HEAP32[$1 >> 2] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $122 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$122 >> 0] = HEAPU8[$5 >> 0] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $135 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$135 >> 0] = HEAPU8[$5 >> 0] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $148 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$148 >> 0] = HEAPU8[$5 >> 0] | 0;
      $2 = $2 - 3 | 0;
      while_continue_3 : while (1) {
       $5 = $2 >>> 0 >= 17 >>> 0;
       if ($5) {
        $4 = HEAP32[($1 + 1 | 0) >> 2] | 0;
        HEAP32[$0 >> 2] = $3 >>> 24 | 0 | ($4 << 8 | 0) | 0;
        $3 = HEAP32[($1 + 5 | 0) >> 2] | 0;
        HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 24 | 0 | ($3 << 8 | 0) | 0;
        $4 = HEAP32[($1 + 9 | 0) >> 2] | 0;
        HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 24 | 0 | ($4 << 8 | 0) | 0;
        $3 = HEAP32[($1 + 13 | 0) >> 2] | 0;
        HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 24 | 0 | ($3 << 8 | 0) | 0;
        $1 = $1 + 16 | 0;
        $0 = $0 + 16 | 0;
        $2 = $2 - 16 | 0;
        continue while_continue_3;
       }
       break while_continue_3;
      };
      break break_2;
     }
     $3 = HEAP32[$1 >> 2] | 0;
     $5 = $0;
     $0 = $5 + 1 | 0;
     $213 = $5;
     $5 = $1;
     $1 = $5 + 1 | 0;
     HEAP8[$213 >> 0] = HEAPU8[$5 >> 0] | 0;
     $5 = $0;
     $0 = $5 + 1 | 0;
     $226 = $5;
     $5 = $1;
     $1 = $5 + 1 | 0;
     HEAP8[$226 >> 0] = HEAPU8[$5 >> 0] | 0;
     $2 = $2 - 2 | 0;
     while_continue_4 : while (1) {
      $5 = $2 >>> 0 >= 18 >>> 0;
      if ($5) {
       $4 = HEAP32[($1 + 2 | 0) >> 2] | 0;
       HEAP32[$0 >> 2] = $3 >>> 16 | 0 | ($4 << 16 | 0) | 0;
       $3 = HEAP32[($1 + 6 | 0) >> 2] | 0;
       HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 16 | 0 | ($3 << 16 | 0) | 0;
       $4 = HEAP32[($1 + 10 | 0) >> 2] | 0;
       HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 16 | 0 | ($4 << 16 | 0) | 0;
       $3 = HEAP32[($1 + 14 | 0) >> 2] | 0;
       HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 16 | 0 | ($3 << 16 | 0) | 0;
       $1 = $1 + 16 | 0;
       $0 = $0 + 16 | 0;
       $2 = $2 - 16 | 0;
       continue while_continue_4;
      }
      break while_continue_4;
     };
     break break_2;
    }
    $3 = HEAP32[$1 >> 2] | 0;
    $5 = $0;
    $0 = $5 + 1 | 0;
    $291 = $5;
    $5 = $1;
    $1 = $5 + 1 | 0;
    HEAP8[$291 >> 0] = HEAPU8[$5 >> 0] | 0;
    $2 = $2 - 1 | 0;
    while_continue_5 : while (1) {
     $5 = $2 >>> 0 >= 19 >>> 0;
     if ($5) {
      $4 = HEAP32[($1 + 3 | 0) >> 2] | 0;
      HEAP32[$0 >> 2] = $3 >>> 8 | 0 | ($4 << 24 | 0) | 0;
      $3 = HEAP32[($1 + 7 | 0) >> 2] | 0;
      HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 8 | 0 | ($3 << 24 | 0) | 0;
      $4 = HEAP32[($1 + 11 | 0) >> 2] | 0;
      HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 8 | 0 | ($4 << 24 | 0) | 0;
      $3 = HEAP32[($1 + 15 | 0) >> 2] | 0;
      HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 8 | 0 | ($3 << 24 | 0) | 0;
      $1 = $1 + 16 | 0;
      $0 = $0 + 16 | 0;
      $2 = $2 - 16 | 0;
      continue while_continue_5;
     }
     break while_continue_5;
    };
    break break_2;
   }
  }
  if ($2 & 16 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $356 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$356 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $369 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$369 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $382 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$382 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $395 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$395 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $408 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$408 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $421 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$421 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $434 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$434 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $447 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$447 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $460 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$460 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $473 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$473 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $486 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$486 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $499 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$499 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $512 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$512 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $525 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$525 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $538 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$538 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $551 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$551 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 8 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $566 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$566 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $579 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$579 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $592 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$592 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $605 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$605 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $618 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$618 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $631 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$631 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $644 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$644 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $657 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$657 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 4 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $672 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$672 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $685 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$685 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $698 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$698 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $711 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$711 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 2 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $726 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$726 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $739 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$739 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 1 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $754 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$754 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
 }
 
 function $lib_memory_memory_copy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $4 = 0, $6 = 0, $7 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $48 = 0, $61 = 0, $75 = 0, $118 = 0;
  $lib_util_memory_memmove_inlined_0 : {
   $5 = $0;
   $4 = $1;
   $3 = $2;
   if (($5 | 0) == ($4 | 0)) {
    break $lib_util_memory_memmove_inlined_0
   }
   if ((($4 - $5 | 0) - $3 | 0) >>> 0 <= (0 - ($3 << 1 | 0) | 0) >>> 0) {
    $lib_util_memory_memcpy($5 | 0, $4 | 0, $3 | 0);
    break $lib_util_memory_memmove_inlined_0;
   }
   if ($5 >>> 0 < $4 >>> 0) {
    if (($4 & 7 | 0 | 0) == ($5 & 7 | 0 | 0)) {
     while_continue_0 : while (1) {
      $6 = $5 & 7 | 0;
      if ($6) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       $7 = $5;
       $5 = $5 + 1 | 0;
       $48 = $7;
       $7 = $4;
       $4 = $4 + 1 | 0;
       HEAP8[$48 >> 0] = HEAPU8[$7 >> 0] | 0;
       continue while_continue_0;
      }
      break while_continue_0;
     };
     while_continue_1 : while (1) {
      $6 = $3 >>> 0 >= 8 >>> 0;
      if ($6) {
       i64toi32_i32$2 = $4;
       i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       $61 = i64toi32_i32$0;
       i64toi32_i32$0 = $5;
       HEAP32[$5 >> 2] = $61;
       HEAP32[($5 + 4 | 0) >> 2] = i64toi32_i32$1;
       $3 = $3 - 8 | 0;
       $5 = $5 + 8 | 0;
       $4 = $4 + 8 | 0;
       continue while_continue_1;
      }
      break while_continue_1;
     };
    }
    while_continue_2 : while (1) {
     $6 = $3;
     if ($3) {
      $7 = $5;
      $5 = $5 + 1 | 0;
      $75 = $7;
      $7 = $4;
      $4 = $4 + 1 | 0;
      HEAP8[$75 >> 0] = HEAPU8[$7 >> 0] | 0;
      $3 = $3 - 1 | 0;
      continue while_continue_2;
     }
     break while_continue_2;
    };
   } else {
    if (($4 & 7 | 0 | 0) == ($5 & 7 | 0 | 0)) {
     while_continue_3 : while (1) {
      $6 = ($5 + $3 | 0) & 7 | 0;
      if ($6) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       HEAP8[($5 + $3 | 0) >> 0] = HEAPU8[($4 + $3 | 0) >> 0] | 0;
       continue while_continue_3;
      }
      break while_continue_3;
     };
     while_continue_4 : while (1) {
      $6 = $3 >>> 0 >= 8 >>> 0;
      if ($6) {
       $3 = $3 - 8 | 0;
       i64toi32_i32$2 = $4 + $3 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $118 = i64toi32_i32$1;
       i64toi32_i32$1 = $5 + $3 | 0;
       HEAP32[i64toi32_i32$1 >> 2] = $118;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       continue while_continue_4;
      }
      break while_continue_4;
     };
    }
    while_continue_5 : while (1) {
     $6 = $3;
     if ($3) {
      $3 = $3 - 1 | 0;
      HEAP8[($5 + $3 | 0) >> 0] = HEAPU8[($4 + $3 | 0) >> 0] | 0;
      continue while_continue_5;
     }
     break while_continue_5;
    };
   }
  }
 }
 
 function $lib_staticarray_StaticArray__lib_string_String__join($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $lib_util_string_joinStringArray($0 | 0, $lib_staticarray_StaticArray__lib_string_String__get_length($0 | 0) | 0 | 0, $1 | 0) | 0 | 0;
 }
 
 function $lib_bindings_wasi_snapshot_preview1_errnoToString($0) {
  $0 = $0 | 0;
  var $1 = 0;
  break_0 : {
   case76_0 : {
    case75_0 : {
     case74_0 : {
      case73_0 : {
       case72_0 : {
        case71_0 : {
         case70_0 : {
          case69_0 : {
           case68_0 : {
            case67_0 : {
             case66_0 : {
              case65_0 : {
               case64_0 : {
                case63_0 : {
                 case62_0 : {
                  case61_0 : {
                   case60_0 : {
                    case59_0 : {
                     case58_0 : {
                      case57_0 : {
                       case56_0 : {
                        case55_0 : {
                         case54_0 : {
                          case53_0 : {
                           case52_0 : {
                            case51_0 : {
                             case50_0 : {
                              case49_0 : {
                               case48_0 : {
                                case47_0 : {
                                 case46_0 : {
                                  case45_0 : {
                                   case44_0 : {
                                    case43_0 : {
                                     case42_0 : {
                                      case41_0 : {
                                       case40_0 : {
                                        case39_0 : {
                                         case38_0 : {
                                          case37_0 : {
                                           case36_0 : {
                                            case35_0 : {
                                             case34_0 : {
                                              case33_0 : {
                                               case32_0 : {
                                                case31_0 : {
                                                 case30_0 : {
                                                  case29_0 : {
                                                   case28_0 : {
                                                    case27_0 : {
                                                     case26_0 : {
                                                      case25_0 : {
                                                       case24_0 : {
                                                        case23_0 : {
                                                         case22_0 : {
                                                          case21_0 : {
                                                           case20_0 : {
                                                            case19_0 : {
                                                             case18_0 : {
                                                              case17_0 : {
                                                               case16_0 : {
                                                                case15_0 : {
                                                                 case14_0 : {
                                                                  case13_0 : {
                                                                   case12_0 : {
                                                                    case11_0 : {
                                                                     case10_0 : {
                                                                      case9_0 : {
                                                                       case8_0 : {
                                                                        case7_0 : {
                                                                         case6_0 : {
                                                                          case5_0 : {
                                                                           case4_0 : {
                                                                            case3_0 : {
                                                                             case2_0 : {
                                                                              case1_0 : {
                                                                               case0_0 : {
                                                                                $1 = $0 & 65535 | 0;
                                                                                if (($1 | 0) == (0 | 0)) {
                                                                                 break case0_0
                                                                                }
                                                                                if (($1 | 0) == (1 | 0)) {
                                                                                 break case1_0
                                                                                }
                                                                                if (($1 | 0) == (2 | 0)) {
                                                                                 break case2_0
                                                                                }
                                                                                if (($1 | 0) == (3 | 0)) {
                                                                                 break case3_0
                                                                                }
                                                                                if (($1 | 0) == (4 | 0)) {
                                                                                 break case4_0
                                                                                }
                                                                                if (($1 | 0) == (5 | 0)) {
                                                                                 break case5_0
                                                                                }
                                                                                if (($1 | 0) == (6 | 0)) {
                                                                                 break case6_0
                                                                                }
                                                                                if (($1 | 0) == (7 | 0)) {
                                                                                 break case7_0
                                                                                }
                                                                                if (($1 | 0) == (8 | 0)) {
                                                                                 break case8_0
                                                                                }
                                                                                if (($1 | 0) == (9 | 0)) {
                                                                                 break case9_0
                                                                                }
                                                                                if (($1 | 0) == (10 | 0)) {
                                                                                 break case10_0
                                                                                }
                                                                                if (($1 | 0) == (11 | 0)) {
                                                                                 break case11_0
                                                                                }
                                                                                if (($1 | 0) == (12 | 0)) {
                                                                                 break case12_0
                                                                                }
                                                                                if (($1 | 0) == (13 | 0)) {
                                                                                 break case13_0
                                                                                }
                                                                                if (($1 | 0) == (14 | 0)) {
                                                                                 break case14_0
                                                                                }
                                                                                if (($1 | 0) == (15 | 0)) {
                                                                                 break case15_0
                                                                                }
                                                                                if (($1 | 0) == (16 | 0)) {
                                                                                 break case16_0
                                                                                }
                                                                                if (($1 | 0) == (17 | 0)) {
                                                                                 break case17_0
                                                                                }
                                                                                if (($1 | 0) == (18 | 0)) {
                                                                                 break case18_0
                                                                                }
                                                                                if (($1 | 0) == (19 | 0)) {
                                                                                 break case19_0
                                                                                }
                                                                                if (($1 | 0) == (20 | 0)) {
                                                                                 break case20_0
                                                                                }
                                                                                if (($1 | 0) == (21 | 0)) {
                                                                                 break case21_0
                                                                                }
                                                                                if (($1 | 0) == (22 | 0)) {
                                                                                 break case22_0
                                                                                }
                                                                                if (($1 | 0) == (23 | 0)) {
                                                                                 break case23_0
                                                                                }
                                                                                if (($1 | 0) == (24 | 0)) {
                                                                                 break case24_0
                                                                                }
                                                                                if (($1 | 0) == (25 | 0)) {
                                                                                 break case25_0
                                                                                }
                                                                                if (($1 | 0) == (26 | 0)) {
                                                                                 break case26_0
                                                                                }
                                                                                if (($1 | 0) == (27 | 0)) {
                                                                                 break case27_0
                                                                                }
                                                                                if (($1 | 0) == (28 | 0)) {
                                                                                 break case28_0
                                                                                }
                                                                                if (($1 | 0) == (29 | 0)) {
                                                                                 break case29_0
                                                                                }
                                                                                if (($1 | 0) == (30 | 0)) {
                                                                                 break case30_0
                                                                                }
                                                                                if (($1 | 0) == (31 | 0)) {
                                                                                 break case31_0
                                                                                }
                                                                                if (($1 | 0) == (32 | 0)) {
                                                                                 break case32_0
                                                                                }
                                                                                if (($1 | 0) == (33 | 0)) {
                                                                                 break case33_0
                                                                                }
                                                                                if (($1 | 0) == (34 | 0)) {
                                                                                 break case34_0
                                                                                }
                                                                                if (($1 | 0) == (35 | 0)) {
                                                                                 break case35_0
                                                                                }
                                                                                if (($1 | 0) == (36 | 0)) {
                                                                                 break case36_0
                                                                                }
                                                                                if (($1 | 0) == (37 | 0)) {
                                                                                 break case37_0
                                                                                }
                                                                                if (($1 | 0) == (38 | 0)) {
                                                                                 break case38_0
                                                                                }
                                                                                if (($1 | 0) == (39 | 0)) {
                                                                                 break case39_0
                                                                                }
                                                                                if (($1 | 0) == (40 | 0)) {
                                                                                 break case40_0
                                                                                }
                                                                                if (($1 | 0) == (41 | 0)) {
                                                                                 break case41_0
                                                                                }
                                                                                if (($1 | 0) == (42 | 0)) {
                                                                                 break case42_0
                                                                                }
                                                                                if (($1 | 0) == (43 | 0)) {
                                                                                 break case43_0
                                                                                }
                                                                                if (($1 | 0) == (44 | 0)) {
                                                                                 break case44_0
                                                                                }
                                                                                if (($1 | 0) == (45 | 0)) {
                                                                                 break case45_0
                                                                                }
                                                                                if (($1 | 0) == (46 | 0)) {
                                                                                 break case46_0
                                                                                }
                                                                                if (($1 | 0) == (47 | 0)) {
                                                                                 break case47_0
                                                                                }
                                                                                if (($1 | 0) == (48 | 0)) {
                                                                                 break case48_0
                                                                                }
                                                                                if (($1 | 0) == (49 | 0)) {
                                                                                 break case49_0
                                                                                }
                                                                                if (($1 | 0) == (50 | 0)) {
                                                                                 break case50_0
                                                                                }
                                                                                if (($1 | 0) == (51 | 0)) {
                                                                                 break case51_0
                                                                                }
                                                                                if (($1 | 0) == (52 | 0)) {
                                                                                 break case52_0
                                                                                }
                                                                                if (($1 | 0) == (53 | 0)) {
                                                                                 break case53_0
                                                                                }
                                                                                if (($1 | 0) == (54 | 0)) {
                                                                                 break case54_0
                                                                                }
                                                                                if (($1 | 0) == (55 | 0)) {
                                                                                 break case55_0
                                                                                }
                                                                                if (($1 | 0) == (56 | 0)) {
                                                                                 break case56_0
                                                                                }
                                                                                if (($1 | 0) == (57 | 0)) {
                                                                                 break case57_0
                                                                                }
                                                                                if (($1 | 0) == (58 | 0)) {
                                                                                 break case58_0
                                                                                }
                                                                                if (($1 | 0) == (59 | 0)) {
                                                                                 break case59_0
                                                                                }
                                                                                if (($1 | 0) == (60 | 0)) {
                                                                                 break case60_0
                                                                                }
                                                                                if (($1 | 0) == (61 | 0)) {
                                                                                 break case61_0
                                                                                }
                                                                                if (($1 | 0) == (62 | 0)) {
                                                                                 break case62_0
                                                                                }
                                                                                if (($1 | 0) == (63 | 0)) {
                                                                                 break case63_0
                                                                                }
                                                                                if (($1 | 0) == (64 | 0)) {
                                                                                 break case64_0
                                                                                }
                                                                                if (($1 | 0) == (65 | 0)) {
                                                                                 break case65_0
                                                                                }
                                                                                if (($1 | 0) == (66 | 0)) {
                                                                                 break case66_0
                                                                                }
                                                                                if (($1 | 0) == (67 | 0)) {
                                                                                 break case67_0
                                                                                }
                                                                                if (($1 | 0) == (68 | 0)) {
                                                                                 break case68_0
                                                                                }
                                                                                if (($1 | 0) == (69 | 0)) {
                                                                                 break case69_0
                                                                                }
                                                                                if (($1 | 0) == (70 | 0)) {
                                                                                 break case70_0
                                                                                }
                                                                                if (($1 | 0) == (71 | 0)) {
                                                                                 break case71_0
                                                                                }
                                                                                if (($1 | 0) == (72 | 0)) {
                                                                                 break case72_0
                                                                                }
                                                                                if (($1 | 0) == (73 | 0)) {
                                                                                 break case73_0
                                                                                }
                                                                                if (($1 | 0) == (74 | 0)) {
                                                                                 break case74_0
                                                                                }
                                                                                if (($1 | 0) == (75 | 0)) {
                                                                                 break case75_0
                                                                                }
                                                                                if (($1 | 0) == (76 | 0)) {
                                                                                 break case76_0
                                                                                }
                                                                                break break_0;
                                                                               }
                                                                               return 2608 | 0;
                                                                              }
                                                                              return 2656 | 0;
                                                                             }
                                                                             return 2688 | 0;
                                                                            }
                                                                            return 2720 | 0;
                                                                           }
                                                                           return 2768 | 0;
                                                                          }
                                                                          return 2816 | 0;
                                                                         }
                                                                         return 2864 | 0;
                                                                        }
                                                                        return 2896 | 0;
                                                                       }
                                                                       return 2944 | 0;
                                                                      }
                                                                      return 2976 | 0;
                                                                     }
                                                                     return 3008 | 0;
                                                                    }
                                                                    return 3040 | 0;
                                                                   }
                                                                   return 3088 | 0;
                                                                  }
                                                                  return 3120 | 0;
                                                                 }
                                                                 return 3168 | 0;
                                                                }
                                                                return 3216 | 0;
                                                               }
                                                               return 3264 | 0;
                                                              }
                                                              return 3296 | 0;
                                                             }
                                                             return 3344 | 0;
                                                            }
                                                            return 3376 | 0;
                                                           }
                                                           return 3408 | 0;
                                                          }
                                                          return 3440 | 0;
                                                         }
                                                         return 3472 | 0;
                                                        }
                                                        return 3504 | 0;
                                                       }
                                                       return 3552 | 0;
                                                      }
                                                      return 3584 | 0;
                                                     }
                                                     return 3616 | 0;
                                                    }
                                                    return 3664 | 0;
                                                   }
                                                   return 3696 | 0;
                                                  }
                                                  return 3728 | 0;
                                                 }
                                                 return 3760 | 0;
                                                }
                                                return 3792 | 0;
                                               }
                                               return 3824 | 0;
                                              }
                                              return 3856 | 0;
                                             }
                                             return 3888 | 0;
                                            }
                                            return 3920 | 0;
                                           }
                                           return 3968 | 0;
                                          }
                                          return 4016 | 0;
                                         }
                                         return 4064 | 0;
                                        }
                                        return 4112 | 0;
                                       }
                                       return 4160 | 0;
                                      }
                                      return 4208 | 0;
                                     }
                                     return 4240 | 0;
                                    }
                                    return 4272 | 0;
                                   }
                                   return 4304 | 0;
                                  }
                                  return 4336 | 0;
                                 }
                                 return 4368 | 0;
                                }
                                return 4400 | 0;
                               }
                               return 4432 | 0;
                              }
                              return 4464 | 0;
                             }
                             return 4496 | 0;
                            }
                            return 4544 | 0;
                           }
                           return 4576 | 0;
                          }
                          return 4608 | 0;
                         }
                         return 4656 | 0;
                        }
                        return 4688 | 0;
                       }
                       return 4736 | 0;
                      }
                      return 4784 | 0;
                     }
                     return 4832 | 0;
                    }
                    return 4864 | 0;
                   }
                   return 4896 | 0;
                  }
                  return 4928 | 0;
                 }
                 return 4976 | 0;
                }
                return 5024 | 0;
               }
               return 5056 | 0;
              }
              return 5088 | 0;
             }
             return 5120 | 0;
            }
            return 5168 | 0;
           }
           return 5216 | 0;
          }
          return 5248 | 0;
         }
         return 5280 | 0;
        }
        return 5312 | 0;
       }
       return 5344 | 0;
      }
      return 5376 | 0;
     }
     return 5424 | 0;
    }
    return 5456 | 0;
   }
   return 5488 | 0;
  }
  return 5536 | 0;
 }
 
 function $lib_string_String_UTF8_byteLength($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $6 = 0, $3 = 0, $40 = 0;
  $2 = $0;
  $3 = $2 + (HEAP32[(($2 - 20 | 0) + 16 | 0) >> 2] | 0) | 0;
  $4 = ($1 | 0) != (0 | 0);
  while_break_0 : {
   while_continue_0 : while (1) {
    if ($2 >>> 0 < $3 >>> 0) {
     $6 = HEAPU16[$2 >> 1] | 0;
     if ($6 >>> 0 < 128 >>> 0) {
      if ($1 & !$6 | 0) {
       break while_break_0
      }
      $4 = $4 + 1 | 0;
     } else {
      if ($6 >>> 0 < 2048 >>> 0) {
       $4 = $4 + 2 | 0
      } else {
       if (($6 & 64512 | 0 | 0) == (55296 | 0)) {
        $40 = ($2 + 2 | 0) >>> 0 < $3 >>> 0
       } else {
        $40 = 0
       }
       if ($40) {
        if (((HEAPU16[($2 + 2 | 0) >> 1] | 0) & 64512 | 0 | 0) == (56320 | 0)) {
         $4 = $4 + 4 | 0;
         $2 = $2 + 4 | 0;
         continue while_continue_0;
        }
       }
       $4 = $4 + 3 | 0;
      }
     }
     $2 = $2 + 2 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
  }
  return $4 | 0;
 }
 
 function $lib_process_writeString($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $5 = 0, $2 = 0, $3 = 0, $4 = 0, $7 = 0, $8 = 0, $6 = 0, $9 = 0, $79 = 0;
  $2 = -1;
  $3 = -1;
  $4 = -1;
  break_0 : {
   case4_0 : {
    case3_0 : {
     case2_0 : {
      case1_0 : {
       case0_0 : {
        $5 = $lib_string_String_get_length($1 | 0) | 0;
        if (($5 | 0) == (4 | 0)) {
         break case0_0
        }
        if (($5 | 0) == (3 | 0)) {
         break case1_0
        }
        if (($5 | 0) == (2 | 0)) {
         break case2_0
        }
        if (($5 | 0) == (1 | 0)) {
         break case3_0
        }
        if (($5 | 0) == (0 | 0)) {
         break case4_0
        }
        break break_0;
       }
       $4 = HEAPU16[($1 + 6 | 0) >> 1] | 0;
       if (($4 | 0) >= (128 | 0)) {
        break break_0
       }
      }
      $3 = HEAPU16[($1 + 4 | 0) >> 1] | 0;
      if (($3 | 0) >= (128 | 0)) {
       break break_0
      }
     }
     $2 = HEAPU16[($1 + 2 | 0) >> 1] | 0;
     if (($2 | 0) >= (128 | 0)) {
      break break_0
     }
    }
    $5 = HEAPU16[$1 >> 1] | 0;
    if (($5 | 0) >= (128 | 0)) {
     break break_0
    }
    HEAP32[$lib_process_iobuf >> 2] = $lib_process_iobuf + Math_imul(2, 4) | 0;
    HEAP32[($lib_process_iobuf + 4 | 0) >> 2] = ((1 + (($2 | 0) != (-1 | 0)) | 0) + (($3 | 0) != (-1 | 0)) | 0) + (($4 | 0) != (-1 | 0)) | 0;
    HEAP32[($lib_process_iobuf + 8 | 0) >> 2] = $5 | ($2 << 8 | 0) | 0 | ($3 << 16 | 0) | 0 | ($4 << 24 | 0) | 0;
    $6 = $lib_bindings_wasi_snapshot_preview1_fd_write($0 | 0, $lib_process_iobuf | 0, 1 | 0, $lib_process_iobuf + Math_imul(3, 4) | 0 | 0) | 0;
    if ($6 & 65535 | 0) {
     $lib_wasi_index_abort($lib_bindings_wasi_snapshot_preview1_errnoToString($6 | 0) | 0 | 0, 5584 | 0, 178 | 0, 16 | 0);
     abort();
    }
   }
   return;
  }
  $7 = $lib_string_String_UTF8_byteLength($1 | 0, 0 | 0) | 0;
  $8 = $lib_rt_tlsf___alloc($7 | 0) | 0;
  $79 = $lib_string_String_get_length($1 | 0) | 0;
  $argumentsLength = 3;
  if (!(($lib_string_String_UTF8_encodeUnsafe_varargs($1 | 0, $79 | 0, $8 | 0, 0 | 0, 0 | 0) | 0 | 0) == ($7 | 0))) {
   $lib_wasi_index_abort(0 | 0, 5584 | 0, 184 | 0, 3 | 0);
   abort();
  }
  HEAP32[$lib_process_iobuf >> 2] = $8;
  HEAP32[($lib_process_iobuf + 4 | 0) >> 2] = $7;
  $9 = $lib_bindings_wasi_snapshot_preview1_fd_write($0 | 0, $lib_process_iobuf | 0, 1 | 0, $lib_process_iobuf + Math_imul(2, 4) | 0 | 0) | 0;
  $lib_rt_tlsf___free($8 | 0);
  if ($9 & 65535 | 0) {
   $lib_wasi_index_abort($lib_bindings_wasi_snapshot_preview1_errnoToString($9 | 0) | 0 | 0, 5584 | 0, 189 | 0, 12 | 0);
   abort();
  }
 }
 
 function $lib_process_WritableStream_write__lib_string_String_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_process_writeString($0 | 0, $1 | 0);
 }
 
 function $lib_rt___visit_globals($0) {
  $0 = $0 | 0;
  $lib_rt_itcms___visit(448 | 0, $0 | 0);
  $lib_rt_itcms___visit(144 | 0, $0 | 0);
  $lib_rt_itcms___visit(256 | 0, $0 | 0);
  $lib_rt_itcms___visit(32 | 0, $0 | 0);
  $lib_rt_itcms___visit(1424 | 0, $0 | 0);
  $lib_rt_itcms___visit(2480 | 0, $0 | 0);
 }
 
 function $lib_arraybuffer_ArrayBufferView_visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[$0 >> 2] | 0;
  if ($2) {
   $lib_rt_itcms___visit($2 | 0, $1 | 0)
  }
 }
 
 function $lib_staticarray_StaticArray__lib_string_String____visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $5 = 0, $3 = 0;
  $2 = $0;
  $3 = $2 + (HEAP32[(($2 - 20 | 0) + 16 | 0) >> 2] | 0) | 0;
  while_continue_0 : while (1) {
   if ($2 >>> 0 < $3 >>> 0) {
    $5 = HEAP32[$2 >> 2] | 0;
    if ($5) {
     $lib_rt_itcms___visit($5 | 0, $1 | 0)
    }
    $2 = $2 + 4 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_staticarray_StaticArray__lib_string_String__visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_staticarray_StaticArray__lib_string_String____visit($0 | 0, $1 | 0);
 }
 
 function $lib_rt___visit_members($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  invalid : {
   switch (HEAP32[($0 - 8 | 0) >> 2] | 0 | 0) {
   case 0:
    return;
   case 1:
    return;
   case 2:
    $lib_arraybuffer_ArrayBufferView_visit($0 | 0, $1 | 0);
    return;
   case 3:
    return;
   case 4:
    $lib_staticarray_StaticArray__lib_string_String__visit($0 | 0, $1 | 0);
    return;
   default:
    break invalid;
   };
  }
  abort();
 }
 
 function $start() {
  if ($started) {
   return
  }
  $started = 1;
  $lib_rt_itcms_threshold = ((__wasm_memory_size() << 16 | 0) - $lib_memory___heap_base | 0) >>> 1 | 0;
  $lib_rt_itcms_pinSpace = $lib_rt_itcms_initLazy(368 | 0) | 0;
  $lib_rt_itcms_toSpace = $lib_rt_itcms_initLazy(400 | 0) | 0;
  $lib_rt_itcms_fromSpace = $lib_rt_itcms_initLazy(544 | 0) | 0;
 }
 
 function $stack_check() {
  if (($lib_memory___stack_pointer | 0) < ($lib_memory___data_end | 0)) {
   $lib_wasi_index_abort(22144 | 0, 22192 | 0, 1 | 0, 1 | 0);
   abort();
  }
 }
 
 function $lib_console_console_log($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $1 = $lib_process_process_stdout;
  $lib_process_WritableStream_write__lib_string_String_($1 | 0, $0 | 0);
  $2 = 5648;
  HEAP32[$lib_memory___stack_pointer >> 2] = $2;
  $lib_process_WritableStream_write__lib_string_String_($1 | 0, $2 | 0);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
 }
 
 function assembly_index_add($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $7 = 0, i64toi32_i32$2 = 0.0, i64toi32_i32$0 = 0, $3 = 0, i64toi32_i32$6 = 0, i64toi32_i32$1 = 0, $4 = 0, $5$hi = 0, i64toi32_i32$4 = 0, i64toi32_i32$5 = 0, $2 = 0, $5 = 0, i64toi32_i32$3 = 0, i64toi32_i32$7 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $13 = 0, $37 = 0, $52 = 0, $56$hi = 0, $69 = 0, $98 = 0, $102$hi = 0, $115 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 20 | 0;
  $stack_check();
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($lib_memory___stack_pointer + 16 | 0) >> 2] = 0;
  $13 = $lib_memory___stack_pointer;
  $2 = $lib_staticarray_StaticArray_u32__constructor(0 | 0, 1e6 | 0) | 0;
  HEAP32[$13 >> 2] = $2;
  $3 = 0;
  for_loop_0 : while (1) {
   $4 = ($3 | 0) < (1e6 | 0);
   if ($4) {
    $lib_staticarray_StaticArray_u32____set($2 | 0, $3 | 0, ~~(+$lib_math_NativeMath_random() * +($lib_builtins_u32_MAX_VALUE >>> 0)) >>> 0 | 0);
    $3 = $3 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  i64toi32_i32$0 = 0;
  $5 = 0;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$2 = +$lib_bindings_Date_now();
  if (Math_abs(i64toi32_i32$2) >= 1.0) {
   if (i64toi32_i32$2 > 0.0) {
    $24 = ~~Math_min(Math_floor(i64toi32_i32$2 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
   } else {
    $24 = ~~Math_ceil((i64toi32_i32$2 - +(~~i64toi32_i32$2 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
   $25 = $24;
  } else {
   $25 = 0
  }
  i64toi32_i32$0 = $25;
  $5 = ~~i64toi32_i32$2 >>> 0;
  $5$hi = i64toi32_i32$0;
  $3 = 0;
  for_loop_1 : while (1) {
   $4 = ($3 | 0) < (1e6 | 0);
   if ($4) {
    for_continue_1 : {
     $37 = $lib_staticarray_StaticArray_u32____get($2 | 0, $3 | 0) | 0;
     $7 = 704;
     HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $7;
     ~~+$lib_string_parseInt($7 | 0, 2 | 0) >>> 0;
    }
    $3 = $3 + 1 | 0;
    continue for_loop_1;
   }
   break for_loop_1;
  };
  $7 = 768;
  HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = $7;
  $52 = $7;
  i64toi32_i32$2 = +$lib_bindings_Date_now();
  if (Math_abs(i64toi32_i32$2) >= 1.0) {
   if (i64toi32_i32$2 > 0.0) {
    $26 = ~~Math_min(Math_floor(i64toi32_i32$2 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
   } else {
    $26 = ~~Math_ceil((i64toi32_i32$2 - +(~~i64toi32_i32$2 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
   $27 = $26;
  } else {
   $27 = 0
  }
  i64toi32_i32$0 = $27;
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $5$hi;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$3 = ~~i64toi32_i32$2 >>> 0;
  i64toi32_i32$1 = $5$hi;
  i64toi32_i32$4 = $5;
  i64toi32_i32$5 = i64toi32_i32$3 - i64toi32_i32$4 | 0;
  i64toi32_i32$7 = i64toi32_i32$3 >>> 0 < i64toi32_i32$4 >>> 0;
  i64toi32_i32$6 = i64toi32_i32$7 + i64toi32_i32$1 | 0;
  i64toi32_i32$6 = i64toi32_i32$0 - i64toi32_i32$6 | 0;
  $7 = $lib_number_I64_toString(i64toi32_i32$5 | 0, i64toi32_i32$6 | 0, 10 | 0) | 0;
  HEAP32[($lib_memory___stack_pointer + 12 | 0) >> 2] = $7;
  $lib_staticarray_StaticArray__lib_string_String____uset($52 | 0, 1 | 0, $7 | 0);
  $7 = 768;
  HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = $7;
  $69 = $7;
  $7 = 736;
  HEAP32[($lib_memory___stack_pointer + 16 | 0) >> 2] = $7;
  $7 = $lib_staticarray_StaticArray__lib_string_String__join($69 | 0, $7 | 0) | 0;
  HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $7;
  $lib_console_console_log($7 | 0);
  i64toi32_i32$2 = +$lib_bindings_Date_now();
  if (Math_abs(i64toi32_i32$2) >= 1.0) {
   if (i64toi32_i32$2 > 0.0) {
    $28 = ~~Math_min(Math_floor(i64toi32_i32$2 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
   } else {
    $28 = ~~Math_ceil((i64toi32_i32$2 - +(~~i64toi32_i32$2 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
   $29 = $28;
  } else {
   $29 = 0
  }
  i64toi32_i32$6 = $29;
  $5 = ~~i64toi32_i32$2 >>> 0;
  $5$hi = i64toi32_i32$6;
  $3 = $2;
  $4 = 0;
  for_loop_2 : while (1) {
   if (($4 | 0) < ((1e6 | 0) / (4 | 0) | 0 | 0)) {
    $4 = $4 + 1 | 0;
    continue for_loop_2;
   }
   break for_loop_2;
  };
  $7 = 5680;
  HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = $7;
  $98 = $7;
  i64toi32_i32$2 = +$lib_bindings_Date_now();
  if (Math_abs(i64toi32_i32$2) >= 1.0) {
   if (i64toi32_i32$2 > 0.0) {
    $30 = ~~Math_min(Math_floor(i64toi32_i32$2 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
   } else {
    $30 = ~~Math_ceil((i64toi32_i32$2 - +(~~i64toi32_i32$2 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
   $31 = $30;
  } else {
   $31 = 0
  }
  i64toi32_i32$6 = $31;
  $102$hi = i64toi32_i32$6;
  i64toi32_i32$6 = $5$hi;
  i64toi32_i32$6 = $102$hi;
  i64toi32_i32$0 = ~~i64toi32_i32$2 >>> 0;
  i64toi32_i32$3 = $5$hi;
  i64toi32_i32$4 = $5;
  i64toi32_i32$1 = i64toi32_i32$0 - i64toi32_i32$4 | 0;
  i64toi32_i32$7 = i64toi32_i32$0 >>> 0 < i64toi32_i32$4 >>> 0;
  i64toi32_i32$5 = i64toi32_i32$7 + $5$hi | 0;
  i64toi32_i32$5 = i64toi32_i32$6 - i64toi32_i32$5 | 0;
  $7 = $lib_number_I64_toString(i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, 10 | 0) | 0;
  HEAP32[($lib_memory___stack_pointer + 12 | 0) >> 2] = $7;
  $lib_staticarray_StaticArray__lib_string_String____uset($98 | 0, 1 | 0, $7 | 0);
  $7 = 5680;
  HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = $7;
  $115 = $7;
  $7 = 736;
  HEAP32[($lib_memory___stack_pointer + 16 | 0) >> 2] = $7;
  $7 = $lib_staticarray_StaticArray__lib_string_String__join($115 | 0, $7 | 0) | 0;
  HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $7;
  $lib_console_console_log($7 | 0);
  $7 = 1;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 20 | 0;
  return $7 | 0;
 }
 
 function $lib_staticarray_StaticArray_u32__constructor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $13 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  if ($1 >>> 0 > (1073741820 >>> 2 | 0) >>> 0) {
   $lib_wasi_index_abort(144 | 0, 192 | 0, 88 | 0, 60 | 0);
   abort();
  }
  $2 = $1 << 2 | 0;
  $13 = $lib_memory___stack_pointer;
  $3 = $lib_rt_itcms___new($2 | 0, 3 | 0) | 0;
  HEAP32[$13 >> 2] = $3;
  $lib_memory_memory_fill($3 | 0, 0 | 0, $2 | 0);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $3 | 0;
 }
 
 function $lib_util_number_itoa64($0, $0$hi, $1) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $3 = 0, $5 = 0, i64toi32_i32$5 = 0, i64toi32_i32$4 = 0, $2 = 0, i64toi32_i32$3 = 0, $18 = 0, $17 = 0, $19 = 0, $36$hi = 0, $44 = 0, $60 = 0, $82 = 0, $99 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  if (($1 | 0) < (2 | 0)) {
   $18 = 1
  } else {
   $18 = ($1 | 0) > (36 | 0)
  }
  if ($18) {
   $lib_wasi_index_abort(800 | 0, 928 | 0, 431 | 0, 5 | 0);
   abort();
  }
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 0;
  if (!(($0 | 0) != (i64toi32_i32$3 | 0) | ($0$hi | 0) != (i64toi32_i32$1 | 0) | 0)) {
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   return 992 | 0;
  }
  i64toi32_i32$2 = $0$hi;
  i64toi32_i32$2 = $0$hi;
  i64toi32_i32$3 = $0;
  i64toi32_i32$1 = 63;
  i64toi32_i32$4 = i64toi32_i32$1 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
   $17 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0
  } else {
   $17 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0
  }
  $2 = $17;
  if ($2) {
   i64toi32_i32$2 = 0;
   i64toi32_i32$3 = $0$hi;
   i64toi32_i32$1 = $0;
   i64toi32_i32$4 = i64toi32_i32$2 - $0 | 0;
   i64toi32_i32$5 = (i64toi32_i32$2 >>> 0 < $0 >>> 0) + $0$hi | 0;
   i64toi32_i32$5 = 0 - i64toi32_i32$5 | 0;
   $0 = i64toi32_i32$4;
   $0$hi = i64toi32_i32$5;
  }
  if (($1 | 0) == (10 | 0)) {
   i64toi32_i32$5 = $0$hi;
   i64toi32_i32$5 = 0;
   $36$hi = i64toi32_i32$5;
   i64toi32_i32$5 = $0$hi;
   i64toi32_i32$2 = $36$hi;
   i64toi32_i32$1 = $lib_builtins_u32_MAX_VALUE;
   if ($0$hi >>> 0 < i64toi32_i32$2 >>> 0 | (($0$hi | 0) == (i64toi32_i32$2 | 0) & $0 >>> 0 <= i64toi32_i32$1 >>> 0 | 0) | 0) {
    $5 = ($lib_util_number_decimalCount32($0 | 0) | 0) + $2 | 0;
    $44 = $lib_memory___stack_pointer;
    $3 = $lib_rt_itcms___new($5 << 1 | 0 | 0, 1 | 0) | 0;
    HEAP32[$44 >> 2] = $3;
    $lib_util_number_utoa32_dec_lut($3 | 0, $0 | 0, $5 | 0);
   } else {
    $5 = ($lib_util_number_decimalCount64High($0 | 0, $0$hi | 0) | 0) + $2 | 0;
    $60 = $lib_memory___stack_pointer;
    $3 = $lib_rt_itcms___new($5 << 1 | 0 | 0, 1 | 0) | 0;
    HEAP32[$60 >> 2] = $3;
    $lib_util_number_utoa64_dec_lut($3 | 0, $0 | 0, $0$hi | 0, $5 | 0);
   }
  } else {
   if (($1 | 0) == (16 | 0)) {
    i64toi32_i32$5 = $0;
    i64toi32_i32$2 = Math_clz32($0$hi);
    i64toi32_i32$1 = 0;
    if ((i64toi32_i32$2 | 0) == (32 | 0)) {
     $19 = Math_clz32(i64toi32_i32$5) + 32 | 0
    } else {
     $19 = i64toi32_i32$2
    }
    $5 = (((63 - $19 | 0) >> 2 | 0) + 1 | 0) + $2 | 0;
    $82 = $lib_memory___stack_pointer;
    $3 = $lib_rt_itcms___new($5 << 1 | 0 | 0, 1 | 0) | 0;
    HEAP32[$82 >> 2] = $3;
    $lib_util_number_utoa64_hex_core_inlined_0 : {
     i64toi32_i32$1 = $0$hi;
     i64toi32_i32$1 = $0$hi;
     i64toi32_i32$1 = $0$hi;
     i64toi32_i32$1 = $0$hi;
     $lib_util_number_utoa_hex_lut($3 | 0, $0 | 0, $0$hi | 0, $5 | 0);
    }
   } else {
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$1 = $0$hi;
    $5 = ($lib_util_number_ulog_base($0 | 0, $0$hi | 0, $1 | 0) | 0) + $2 | 0;
    $99 = $lib_memory___stack_pointer;
    $3 = $lib_rt_itcms___new($5 << 1 | 0 | 0, 1 | 0) | 0;
    HEAP32[$99 >> 2] = $3;
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$1 = $0$hi;
    $lib_util_number_utoa64_any_core($3 | 0, $0 | 0, $0$hi | 0, $5 | 0, $1 | 0);
   }
  }
  if ($2) {
   HEAP16[$3 >> 1] = 45
  }
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $3 | 0;
 }
 
 function $lib_util_string_joinStringArray($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $6 = 0, $8 = 0, $10 = 0, $3 = 0, $12 = 0, $9 = 0, $5 = 0, $7 = 0, i64toi32_i32$1 = 0, $34 = 0, $11 = 0, $60 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 12 | 0;
  $stack_check();
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = 0;
  HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = 0;
  $3 = $1 - 1 | 0;
  if (($3 | 0) < (0 | 0)) {
   $12 = 736;
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 12 | 0;
   return $12 | 0;
  }
  if (!$3) {
   $4 = HEAP32[$0 >> 2] | 0;
   HEAP32[$lib_memory___stack_pointer >> 2] = $4;
   if ($4) {
    $34 = $4
   } else {
    $34 = 736
   }
   $12 = $34;
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 12 | 0;
   return $12 | 0;
  }
  $5 = 0;
  $4 = 0;
  for_loop_0 : while (1) {
   $7 = ($4 | 0) < ($1 | 0);
   if ($7) {
    for_continue_0 : {
     $6 = HEAP32[($0 + ($4 << 2 | 0) | 0) >> 2] | 0;
     HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $6;
     if (($6 | 0) != (0 | 0)) {
      $5 = $5 + ($lib_string_String_get_length($6 | 0) | 0) | 0
     }
    }
    $4 = $4 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $8 = 0;
  $9 = $lib_string_String_get_length($2 | 0) | 0;
  $60 = $lib_memory___stack_pointer;
  $10 = $lib_rt_itcms___new(($5 + Math_imul($9, $3) | 0) << 1 | 0 | 0, 1 | 0) | 0;
  HEAP32[($60 + 8 | 0) >> 2] = $10;
  $4 = 0;
  for_loop_1 : while (1) {
   $7 = ($4 | 0) < ($3 | 0);
   if ($7) {
    for_continue_1 : {
     $6 = HEAP32[($0 + ($4 << 2 | 0) | 0) >> 2] | 0;
     HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $6;
     if (($6 | 0) != (0 | 0)) {
      $11 = $lib_string_String_get_length($6 | 0) | 0;
      $lib_memory_memory_copy($10 + ($8 << 1 | 0) | 0 | 0, $6 | 0, $11 << 1 | 0 | 0);
      $8 = $8 + $11 | 0;
     }
     if ($9) {
      $lib_memory_memory_copy($10 + ($8 << 1 | 0) | 0 | 0, $2 | 0, $9 << 1 | 0 | 0);
      $8 = $8 + $9 | 0;
     }
    }
    $4 = $4 + 1 | 0;
    continue for_loop_1;
   }
   break for_loop_1;
  };
  $6 = HEAP32[($0 + ($3 << 2 | 0) | 0) >> 2] | 0;
  HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $6;
  if (($6 | 0) != (0 | 0)) {
   $lib_memory_memory_copy($10 + ($8 << 1 | 0) | 0 | 0, $6 | 0, ($lib_string_String_get_length($6 | 0) | 0) << 1 | 0 | 0)
  }
  $12 = $10;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 12 | 0;
  return $10 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21 = 0, $22 = 0, var$6 = 0, $24 = 0, $17 = 0, $18 = 0, $23 = 0, $29 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17 = Math_imul(var$4, var$5);
  $18 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23 = $17 + Math_imul($18, $21) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29 = $23 + Math_imul($22, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, var$8$hi = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, var$7$hi = 0, $51 = 0, $63$hi = 0, $65 = 0, $65$hi = 0, $70 = 0, $119 = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $39 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $39 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $39;
             if (var$2) {
              block : {
               i64toi32_i32$1 = var$1$hi;
               var$3 = var$1;
               if (!var$3) {
                break label$11
               }
               i64toi32_i32$1 = var$1$hi;
               i64toi32_i32$0 = var$1;
               i64toi32_i32$2 = 0;
               i64toi32_i32$3 = 32;
               i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
               if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
                i64toi32_i32$2 = 0;
                $40 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               } else {
                i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
                $40 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
               }
               var$4 = $40;
               if (!var$4) {
                break label$9
               }
               var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
               if (var$2 >>> 0 <= 31 >>> 0) {
                break label$8
               }
               break label$2;
              }
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = var$1$hi;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $41 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $41 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $41;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $42 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $42 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $42;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            $70 = (__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> $70 | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $43 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $43 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $43;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      $119 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = $119;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $44 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $44 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $44;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $45 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $45 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $45;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $46 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $46 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $46;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      block3 : {
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$1 = var$1;
       i64toi32_i32$3 = -1;
       i64toi32_i32$0 = -1;
       i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
       i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
        i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
       }
       var$8 = i64toi32_i32$4;
       var$8$hi = i64toi32_i32$5;
       label$15 : while (1) {
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$2 = var$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
         $47 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
         $47 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        }
        $140 = $47;
        $140$hi = i64toi32_i32$1;
        i64toi32_i32$1 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = 0;
         $48 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
         $48 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
        }
        $142$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $140$hi;
        i64toi32_i32$1 = $140;
        i64toi32_i32$5 = $142$hi;
        i64toi32_i32$0 = $48;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
        var$5$hi = i64toi32_i32$5;
        $144 = var$5;
        $144$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$2 = var$8;
        i64toi32_i32$1 = var$5$hi;
        i64toi32_i32$0 = var$5;
        i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        i64toi32_i32$5 = i64toi32_i32$3;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
         $49 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
         $49 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
        }
        var$6 = $49;
        var$6$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$1$hi;
        i64toi32_i32$2 = var$6$hi;
        i64toi32_i32$4 = var$6;
        i64toi32_i32$5 = var$1$hi;
        i64toi32_i32$0 = var$1;
        i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
        $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
        $151$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $144$hi;
        i64toi32_i32$2 = $144;
        i64toi32_i32$4 = $151$hi;
        i64toi32_i32$0 = $151;
        i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
        i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
        var$5 = i64toi32_i32$1;
        var$5$hi = i64toi32_i32$3;
        i64toi32_i32$3 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
         $50 = 0;
        } else {
         i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $50 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        }
        $154$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$7$hi;
        i64toi32_i32$2 = $154$hi;
        i64toi32_i32$3 = $50;
        i64toi32_i32$5 = var$7$hi;
        i64toi32_i32$0 = var$7;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
        var$0$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$6$hi;
        i64toi32_i32$2 = var$6;
        i64toi32_i32$3 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
        var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
        var$6$hi = i64toi32_i32$3;
        var$7 = var$6;
        var$7$hi = i64toi32_i32$3;
        var$2 = var$2 + -1 | 0;
        if (var$2) {
         continue label$15
        }
        break label$15;
       };
       break label$13;
      }
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $51 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $51 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $51;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_popcnt_i32(var$0) {
  var$0 = var$0 | 0;
  var var$1 = 0, $5 = 0;
  label$1 : {
   label$2 : while (1) {
    $5 = var$1;
    if (!var$0) {
     break label$1
    }
    var$0 = var$0 & (var$0 - 1 | 0) | 0;
    var$1 = var$1 + 1 | 0;
    continue label$2;
   };
  }
  return $5 | 0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(env);
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "add": assembly_index_add, 
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "_start": $start
 };
}

var retasmFunc = asmFunc(  { abort: function() { throw new Error('abort'); },
    fd_write,
    proc_exit,
    random_get,
    now
  });
export var add = retasmFunc.add;
export var memory = retasmFunc.memory;
export var _start = retasmFunc._start;
