package szudzik;

public class Szudzik {
  public static int pair(int xval, int yval) {
	int x, y; // allow for negative and positive
	if (xval >= 0) {
		x = xval * 2;
	} else {
		x = xval * -2 - 1;
	}
	
	if (yval >= 0) {
		y = yval * 2;
	} else {
		y = yval * -2 - 1;
	}
	
	// actual algorithm
	if (x >= y) {
		return x * x + x + y;
	} else {
		return y * y + x;
	}
  }
}
