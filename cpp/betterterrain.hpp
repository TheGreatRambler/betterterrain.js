#pragma once
#include "fastnoise/fastnoise.h"
#include "algorithms/szudzik.hpp"
#include "algorithms/random.hpp"

class betterterrain {
	public:
	betterterrain(std::unordered_map options) {
		using RandInstance = effolkronium::random_local;
		RandInstance baseRand{ };
		
		std::unordered_map<std::string, auto> defaultOptions = {
        		{"seed", baseRand.get(0, 999999999999999999999)},
        		{"freq", 50},
        		{"biomes", new std::unordered_map<std::string, std::unordered_map<std::string, auto>>()},
			{"onlyheight", false}
    		};
		
		options.insert(defaultOptions.begin(), defaultOptions.end()); // set default options and merge into normal options
	}
}
