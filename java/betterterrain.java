import java.util.HashMap;
import java.util.Random;

import fastnoise.FastNoise;

public class Betterterrain {
	private Random defaultRandom = new Random(); 
	private long seed = this.defaultRandom.nextLong();
	private Map<String, Object> biomes;
	private Map<String, Object> data[]; // the terrain data
	private bool onlyheight = false;
	private int chunkSize = 32;
	private String biomemap[]; // similar to a multi-dimensional array, but faster
	private Map<String, Object> structures;
	private int chunksize = 32;
	private boolean defaultstucturesoverlap = false;
	private int defaultrequireddistanceseparated = 2;
	private int clearmemoryamount = 50000;
	
	public Betterterrain() {
		
	}
}
