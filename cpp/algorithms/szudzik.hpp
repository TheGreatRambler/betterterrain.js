#pragma once
#include <math.h>

int szudzikPair(int x, int y) {
  if (x >= y) {
    return (x * x) + x + y;
  } else {
    return (y * y) + x;
  }
}

int szudzikUnpair(int z) {
  int sqrtz = floor(sqrt(z));
  int sqz = sqrtz * sqrtz;
  if ((z - sqz) >= sqrtz) {
    return new int[2] {sqrtz, z - sqz - sqrtz};
  } else {
    return new int[2] {z - sqz, sqrtz};
  }
}
