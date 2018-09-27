import java.util.HashMap;
import java.util.Random;

import fastnoise.FastNoise;

public class Betterterrain {
  private Random defaultRandom = new Random(); 
  private long seed = this.defaultRandom.nextLong();
  private Map<String, Object> biomes;
  private bool onlyheight = false;
  private int chunkSize = 32;
  private String biomemap[]; // similar to a multi-dimensional array, but faster
  
  public Betterterrain() {
    
  }
}
