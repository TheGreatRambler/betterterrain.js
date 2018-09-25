#pragma once
#include "fastnoise/fastnoise.h"
#include "algorithms/szudzik.hpp"
#include "algorithms/random.hpp"

class betterterrain {
	private:
		std::unordered_map myOptions; // the default options merged with the user passed options
		// create 'array' of hash maps to store the terrain data
		// 5 === number of elements in each array in vector
		// auto === type of element in each array in vector
		// std::array === type of element in the vector
		std::vector<std::array<auto, 5>> terrainData;
	
		void setValue(int x, int y) {
			
		}
	
		void setValue(int x, int y) {
			
		}
	public:
		betterterrain(std::unordered_map options) {
			using RandInstance = effolkronium::random_local; // starting rand instance
			RandInstance baseRand{ };
		
			std::unordered_map<std::string, auto> defaultOptions = {
        			{"seed", baseRand.get(0, 999999999999999999999)},
        			{"freq", 50},
        			{"biomes", new std::unordered_map<std::string, std::unordered_map<std::string, auto>>()},
				{"onlyheight", false}
    			};
		
			options.insert(defaultOptions.begin(), defaultOptions.end()); // set default options and merge into normal options
			myOptions = options; // set as the options
		}
}
