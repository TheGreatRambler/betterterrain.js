(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.betterterrain = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {

    var betterterrainhf = {};
    // noise from https://github.com/jwagner/simplex-noise.js
    // creates var rawnoise
    (function(){function E(c){c||(c=Math.random);this.p=U(c);this.perm=new Uint8Array(512);this.permMod12=new Uint8Array(512);for(c=0;512>c;c++)this.perm[c]=this.p[c&255],this.permMod12[c]=this.perm[c]%12}function U(c){var e,h=new Uint8Array(256);for(e=0;256>e;e++)h[e]=e;for(e=0;255>e;e++){var l=e+~~(c()*(256-e)),b=h[e];h[e]=h[l];h[l]=b}return h}var V=.5*(Math.sqrt(3)-1),C=(3-Math.sqrt(3))/6,W=1/3,x=1/6,X=(Math.sqrt(5)-1)/4,m=(5-Math.sqrt(5))/20;E.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,
0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(c,e){var h=this.permMod12,l=this.perm,b=this.grad3,a=0,f=0,B=0,p=(c+e)*V,t=Math.floor(c+
p),n=Math.floor(e+p);p=(t+n)*C;var d=c-(t-p),g=e-(n-p);if(d>g)var k=1,q=0;else k=0,q=1;var r=d-k+C,m=g-q+C;p=d-1+2*C;var y=g-1+2*C;t&=255;n&=255;var w=.5-d*d-g*g;0<=w&&(a=3*h[t+l[n]],w*=w,a=w*w*(b[a]*d+b[a+1]*g));d=.5-r*r-m*m;0<=d&&(f=3*h[t+k+l[n+q]],d*=d,f=d*d*(b[f]*r+b[f+1]*m));r=.5-p*p-y*y;0<=r&&(h=3*h[t+1+l[n+1]],r*=r,B=r*r*(b[h]*p+b[h+1]*y));return 70*(a+f+B)},noise3D:function(c,e,h){var l=this.permMod12,b=this.perm,a=this.grad3,f=(c+e+h)*W,m=Math.floor(c+f),p=Math.floor(e+f),t=Math.floor(h+
f);f=(m+p+t)*x;var n=c-(m-f),d=e-(p-f),g=h-(t-f),k,q;if(n>=d)if(d>=g)var r=1,F=k=0,y=q=1,w=0;else n>=g?(r=1,F=k=0):(k=r=0,F=1),q=1,y=0,w=1;else d<g?(k=r=0,F=1,q=0,w=y=1):n<g?(r=0,k=1,q=F=0,w=y=1):(r=0,k=1,F=0,y=q=1,w=0);var v=n-r+x,u=d-k+x,G=g-F+x;c=n-q+2*x;var z=d-y+2*x,A=g-w+2*x;h=n-1+3*x;e=d-1+3*x;f=g-1+3*x;m&=255;p&=255;t&=255;var D=.6-n*n-d*d-g*g;if(0>D)n=0;else{var H=3*l[m+b[p+b[t]]];D*=D;n=D*D*(a[H]*n+a[H+1]*d+a[H+2]*g)}d=.6-v*v-u*u-G*G;0>d?v=0:(r=3*l[m+r+b[p+k+b[t+F]]],d*=d,v=d*d*(a[r]*v+
a[r+1]*u+a[r+2]*G));u=.6-c*c-z*z-A*A;0>u?c=0:(q=3*l[m+q+b[p+y+b[t+w]]],u*=u,c=u*u*(a[q]*c+a[q+1]*z+a[q+2]*A));z=.6-h*h-e*e-f*f;0>z?a=0:(l=3*l[m+1+b[p+1+b[t+1]]],z*=z,a=z*z*(a[l]*h+a[l+1]*e+a[l+2]*f));return 32*(n+v+c+a)},noise4D:function(c,e,h,l){var b=this.perm,a=this.grad4,f=(c+e+h+l)*X,B=Math.floor(c+f),p=Math.floor(e+f),t=Math.floor(h+f),n=Math.floor(l+f);f=(B+p+t+n)*m;var d=c-(B-f),g=e-(p-f),k=h-(t-f),q=l-(n-f);l=h=f=e=0;d>g?e++:f++;d>k?e++:h++;d>q?e++:l++;g>k?f++:h++;g>q?f++:l++;k>q?h++:l++;
var r=3<=e?1:0,x=3<=f?1:0,y=3<=h?1:0,w=3<=l?1:0,v=2<=e?1:0,u=2<=f?1:0,G=2<=h?1:0,z=2<=l?1:0;c=1<=e?1:0;var A=1<=f?1:0,D=1<=h?1:0,H=1<=l?1:0,C=d-r+m,E=g-x+m,K=k-y+m,L=q-w+m,M=d-v+2*m,N=g-u+2*m,O=k-G+2*m,P=q-z+2*m,Q=d-c+3*m,R=g-A+3*m,S=k-D+3*m,T=q-H+3*m;l=d-1+4*m;h=g-1+4*m;f=k-1+4*m;e=q-1+4*m;B&=255;p&=255;t&=255;n&=255;var I=.6-d*d-g*g-k*k-q*q;if(0>I)d=0;else{var J=b[B+b[p+b[t+b[n]]]]%32*4;I*=I;d=I*I*(a[J]*d+a[J+1]*g+a[J+2]*k+a[J+3]*q)}g=.6-C*C-E*E-K*K-L*L;0>g?g=0:(k=b[B+r+b[p+x+b[t+y+b[n+w]]]]%32*
4,g*=g,g=g*g*(a[k]*C+a[k+1]*E+a[k+2]*K+a[k+3]*L));k=.6-M*M-N*N-O*O-P*P;0>k?v=0:(v=b[B+v+b[p+u+b[t+G+b[n+z]]]]%32*4,k*=k,v=k*k*(a[v]*M+a[v+1]*N+a[v+2]*O+a[v+3]*P));u=.6-Q*Q-R*R-S*S-T*T;0>u?c=0:(c=b[B+c+b[p+A+b[t+D+b[n+H]]]]%32*4,u*=u,c=u*u*(a[c]*Q+a[c+1]*R+a[c+2]*S+a[c+3]*T));A=.6-l*l-h*h-f*f-e*e;0>A?a=0:(b=b[B+1+b[p+1+b[t+1+b[n+1]]]]%32*4,A*=A,a=A*A*(a[b]*l+a[b+1]*h+a[b+2]*f+a[b+3]*e));return 27*(d+g+v+c+a)}};E._buildPermutationTable=U;betterterrainhf.rawnoise=E})();

    // alea random number generator from https://github.com/davidbau/seedrandom
    // creates var alea
    (function(){function e(){var b=4022871197;return function(a){a=a.toString();for(var c=0;c<a.length;c++){b+=a.charCodeAt(c);var d=.02519603282416938*b;b=d>>>0;d-=b;d*=b;b=d>>>0;d-=b;b+=4294967296*d}return 2.3283064365386963E-10*(b>>>0)}}betterterrainhf.alea=function(b){var a=this,c=e();a.next=function(){var b=2091639*a.s0+2.3283064365386963E-10*a.c;a.s0=a.s1;a.s1=a.s2;return a.s2=b-(a.c=b|0)};a.c=1;a.s0=c(" ");a.s1=c(" ");a.s2=c(" ");a.s0-=c(b);0>a.s0&&(a.s0+=1);a.s1-=c(b);0>a.s1&&(a.s1+=1);a.s2-=
c(b);0>a.s2&&(a.s2+=1);c=null}})();

    var betterterrain = function(options) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options.seed === "undefined") {
            // seed is a number
            options.seed = Math.random();
        }
        if (typeof options.freq === "undefined") {
            options.freq = 10;
        }
        if (typeof options.defaultcolor === "undefined") {
            options.defaultcolor = "#FFFFFF";
        }
        if (typeof options.defaultbiomechance === "undefined") {
            options.defaultbiomechance = 80;
        }
        if (typeof options.biomes === "undefined") {
            options.onlyheight = true;
        }
        if (typeof options.onlyheight === "undefined") {
            options.onlyheight = false;
        }
        if (typeof options.biomemap === "undefined") {
            options.onlyheight = true;
        }
        if (typeof options.initialripple === "undefined") {
            options.initialripple = 1;
        }
        if (typeof options.continentmult === "undefined") {
            options.continentmult = 2;
        }
        if (typeof options.continentfreq === "undefined") {
            options.continentfreq = 10;
        }
        if (typeof options.moisturefreq === "undefined") {
            options.moisturefreq = 2;
        }
        if (typeof options.exponent === "undefined") {
            options.exponent = 2;
        }
        if (typeof options.invert === "undefined") {
            options.invert = true;
        }
        if (typeof options.moistureweight === "undefined") {
            options.moistureweight = 1;
        }

        this.rng = new betterterrainhf.alea(options.seed);

        // you have to pass in functions
        this.terrainnoise = new betterterrainhf.rawnoise((new betterterrainhf.alea(this.rng.next())).next);
        this.continentnoise = new betterterrainhf.rawnoise((new betterterrainhf.alea(this.rng.next())).next);
        this.moisturenoise = new betterterrainhf.rawnoise((new betterterrainhf.alea(this.rng.next())).next);
        this.dataarray = [];
        this.options = options;
    }
    
    betterterrain.prototype.getchancefunc = function(x, y) {
        var specificnum = betterterrainhf.getindex(x, y);
        var seedchoice = (specificnum + this.options.seed) / 1000000;
        var randnumgen = new betterterrainhf.alea(seedchoice);
        return randnumgen.next;
    }

    betterterrainhf.getindex = function(x, y) {
        // Elegant Pairing Function (Szudzik)
        var xx = x >= 0 ? x * 2 : x * -2 - 1;
        var yy = y >= 0 ? y * 2 : y * -2 - 1;
        return (xx >= yy) ? (xx * xx + xx + yy) : (yy * yy + xx);
    };

    betterterrain.prototype.initxy = function(x, y) {
        this.dataarray[betterterrainhf.getindex(x, y)] = {};
    };

    betterterrain.prototype.generatebiomes = function(x, y) {
        if (typeof this.dataarray[betterterrainhf.getindex(x, y)].b === "undefined") {
            var rawmoisture = (this.dataarray[betterterrainhf.getindex(x, y)].m + 1) / 2;
            var moisture = (rawmoisture > 1 || rawmoisture < -1) ? 1 : rawmoisture;
            var rawheight = (this.dataarray[betterterrainhf.getindex(x, y)].h + 1) / 2;
            var height = (rawheight > 1 || rawheight < -1) ? 1 : rawheight;
            var xindex = Math.floor(this.options.biomemap[0].length * moisture);
            var yindex = this.options.biomemap.length - Math.floor(this.options.biomemap.length * height) - 1;
            var chosentile = this.options.biomemap[yindex][xindex];
            if (typeof this.options.biomes[chosentile] !== "undefined") {
                if (typeof this.options.biomes[chosentile].childtiles !== "undefined") {
                    var chancefunc = this.getchancefunc(x, y);
                    var tile = this.options.biomes[chosentile].childtiles;
                    for (var f = 0; f < tile.length; f++) {
                        var result = tile[f].chance / 100;
                        var boolchoice = chancefunc() <= result;
                        if (boolchoice) {
                            chosentile = tile[f].name;
                            break;
                        }
                    }
                }
                if (typeof this.options.biomes[chosentile].color !== "undefined") {
                    this.dataarray[betterterrainhf.getindex(x, y)].c = this.options.biomes[chosentile].color;
                } else {
                    this.dataarray[betterterrainhf.getindex(x, y)].c = this.options.defaultcolor;
                }
            }
            
            this.dataarray[betterterrainhf.getindex(x, y)].b = chosentile;
        }
    };

    betterterrain.prototype.generatemoisture = function(x, y) {
        if (typeof this.dataarray[betterterrainhf.getindex(x, y)].m === "undefined") {
            
            var moisturefreq = frequency * this.options.moisturefreq;
            var moistureoctave1 = this.terrainnoise.noise2D(x / frequency, y / frequency);
            var moistureoctave2 = 0.5 * this.terrainnoise.noise2D(2 * x / frequency, 2 * y / frequency);
            var moistureoctave3 = 0.25 * this.terrainnoise.noise2D(4 * x / frequency, 4 * y / frequency);
            var moistureresult = (moistureoctave1 + moistureoctave2 + moistureoctave3) * this.options.moistureweight / this.getprobablemoisture();
            
            this.dataarray[betterterrainhf.getindex(x, y)].m = moistureresult;
        }
    };

    betterterrain.prototype.generateheightmap = function(x, y) {
        if (typeof this.dataarray[betterterrainhf.getindex(x, y)].h === "undefined") {
            var frequency = this.options.freq;

            var initialfreq = frequency;
            var octave1 = 1 * this.terrainnoise.noise2D(x / initialfreq, y / initialfreq);
            var octave2 = 0.5 * this.terrainnoise.noise2D(2 * x / initialfreq, 2 * y / initialfreq);
            var octave3 = 0.25 * this.terrainnoise.noise2D(4 * x / initialfreq, 4 * y / initialfreq);
            var initialresult = (octave1 + octave2 + octave3) * this.options.initialripple;

            
            var ripplefreq1 = frequency * this.options.continentfreq;
            var rippleoctave1 = 1 * this.continentnoise.noise2D(x / ripplefreq1, y / ripplefreq1);
            var rippleoctave2 = 0.5 * this.continentnoise.noise2D( 2 * x / ripplefreq1, 2 * y / ripplefreq1);
            var rippleoctave3 = 0.25 * this.continentnoise.noise2D(4 * x / ripplefreq1, 4 * y / ripplefreq1);
            var ribbleresult1 = (rippleoctave1 + rippleoctave2 + rippleoctave3) * this.options.continentmult;

            var height = initialresult + ribbleresult1;
            var heighttwo = height >= 0 ? Math.pow(height, this.options.exponent) : (this.options.exponent % 2 === 0 || this.options.exponent % 1 !== 0) ? -1 * Math.pow(height, this.options.exponent) : Math.pow(height, this.options.exponent);
            this.dataarray[betterterrainhf.getindex(x, y)].h = (heighttwo / this.getprobableheight()) * (this.invert ? -1 : 1);
        }
    };
    
    betterterrain.prototype.getmaxheight = function() {
        var height1 = 1.75 * this.options.initialripple;
        var height2 = 1.75 * this.options.continentmult;
        return Math.pow(height1 + height2, this.options.exponent);
    };
    
    betterterrain.prototype.getprobableheight = function() {
        var height1 = 1.75 * this.options.initialripple;
        var height2 = 1.75 * this.options.continentmult;
        return Math.pow(height1 + height2, this.options.exponent) * ((this.options.exponent + 1) / (this.options.exponent + 2));
    };
    
    betterterrain.prototype.getprobablemoisture = function() {
        var moisture1 = 1.75 * this.options.moistureweight;
        return moisture1;
    };

    betterterrain.prototype.getdata = function(x, y) {
        this.initxy(x, y);
        this.generateheightmap(x, y);
        if (!this.options.onlyheight) {
            this.generatemoisture(x, y);
            this.generatebiomes(x, y);
        }
        var result = this.dataarray[betterterrainhf.getindex(x, y)];
        return result;
    };

    return betterterrain;
}));
