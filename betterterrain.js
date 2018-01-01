(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.betterterrain = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    var betterterrain = {};
    // noise from https://github.com/jwagner/simplex-noise.js
    // creates var betterterrain.rawnoise
    (function(){function E(c){c||(c=Math.random);this.p=U(c);this.perm=new Uint8Array(512);this.permMod12=new Uint8Array(512);for(c=0;512>c;c++)this.perm[c]=this.p[c&255],this.permMod12[c]=this.perm[c]%12}function U(c){var e,h=new Uint8Array(256);for(e=0;256>e;e++)h[e]=e;for(e=0;255>e;e++){var l=e+~~(c()*(256-e)),b=h[e];h[e]=h[l];h[l]=b}return h}var V=.5*(Math.sqrt(3)-1),C=(3-Math.sqrt(3))/6,W=1/3,x=1/6,X=(Math.sqrt(5)-1)/4,m=(5-Math.sqrt(5))/20;E.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,
0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(c,e){var h=this.permMod12,l=this.perm,b=this.grad3,a=0,f=0,B=0,p=(c+e)*V,t=Math.floor(c+
p),n=Math.floor(e+p);p=(t+n)*C;var d=c-(t-p),g=e-(n-p);if(d>g){var k=1;var q=0}else k=0,q=1;var r=d-k+C,m=g-q+C;p=d-1+2*C;var y=g-1+2*C;t&=255;n&=255;var w=.5-d*d-g*g;0<=w&&(a=3*h[t+l[n]],w*=w,a=w*w*(b[a]*d+b[a+1]*g));d=.5-r*r-m*m;0<=d&&(f=3*h[t+k+l[n+q]],d*=d,f=d*d*(b[f]*r+b[f+1]*m));r=.5-p*p-y*y;0<=r&&(h=3*h[t+1+l[n+1]],r*=r,B=r*r*(b[h]*p+b[h+1]*y));return 70*(a+f+B)},noise3D:function(c,e,h){var l=this.permMod12,b=this.perm,a=this.grad3,f=(c+e+h)*W,m=Math.floor(c+f),p=Math.floor(e+f),t=Math.floor(h+
f);f=(m+p+t)*x;var n=c-(m-f);var d=e-(p-f),g=h-(t-f),k,q;if(n>=d)if(d>=g){var r=1;var F=k=0;var y=q=1;var w=0}else n>=g?(r=1,F=k=0):(k=r=0,F=1),q=1,y=0,w=1;else d<g?(k=r=0,F=1,q=0,w=y=1):n<g?(r=0,k=1,q=F=0,w=y=1):(r=0,k=1,F=0,y=q=1,w=0);var v=n-r+x;var u=d-k+x,G=g-F+x;c=n-q+2*x;var z=d-y+2*x,A=g-w+2*x;h=n-1+3*x;e=d-1+3*x;f=g-1+3*x;m&=255;p&=255;t&=255;var D=.6-n*n-d*d-g*g;if(0>D)n=0;else{var H=3*l[m+b[p+b[t]]];D*=D;n=D*D*(a[H]*n+a[H+1]*d+a[H+2]*g)}d=.6-v*v-u*u-G*G;0>d?v=0:(r=3*l[m+r+b[p+k+b[t+F]]],
d*=d,v=d*d*(a[r]*v+a[r+1]*u+a[r+2]*G));u=.6-c*c-z*z-A*A;0>u?c=0:(q=3*l[m+q+b[p+y+b[t+w]]],u*=u,c=u*u*(a[q]*c+a[q+1]*z+a[q+2]*A));z=.6-h*h-e*e-f*f;0>z?a=0:(l=3*l[m+1+b[p+1+b[t+1]]],z*=z,a=z*z*(a[l]*h+a[l+1]*e+a[l+2]*f));return 32*(n+v+c+a)},noise4D:function(c,e,h,l){var b=this.perm,a=this.grad4,f=(c+e+h+l)*X,B=Math.floor(c+f),p=Math.floor(e+f),t=Math.floor(h+f),n=Math.floor(l+f);f=(B+p+t+n)*m;var d=c-(B-f);var g=e-(p-f);var k=h-(t-f),q=l-(n-f);l=h=f=e=0;d>g?e++:f++;d>k?e++:h++;d>q?e++:l++;g>k?f++:
h++;g>q?f++:l++;k>q?h++:l++;var r=3<=e?1:0;var x=3<=f?1:0;var y=3<=h?1:0;var w=3<=l?1:0;var v=2<=e?1:0;var u=2<=f?1:0;var G=2<=h?1:0;var z=2<=l?1:0;c=1<=e?1:0;var A=1<=f?1:0;var D=1<=h?1:0;var H=1<=l?1:0;var C=d-r+m,E=g-x+m,K=k-y+m,L=q-w+m,M=d-v+2*m,N=g-u+2*m,O=k-G+2*m,P=q-z+2*m,Q=d-c+3*m,R=g-A+3*m,S=k-D+3*m,T=q-H+3*m;l=d-1+4*m;h=g-1+4*m;f=k-1+4*m;e=q-1+4*m;B&=255;p&=255;t&=255;n&=255;var I=.6-d*d-g*g-k*k-q*q;if(0>I)d=0;else{var J=b[B+b[p+b[t+b[n]]]]%32*4;I*=I;d=I*I*(a[J]*d+a[J+1]*g+a[J+2]*k+a[J+
3]*q)}g=.6-C*C-E*E-K*K-L*L;0>g?g=0:(k=b[B+r+b[p+x+b[t+y+b[n+w]]]]%32*4,g*=g,g=g*g*(a[k]*C+a[k+1]*E+a[k+2]*K+a[k+3]*L));k=.6-M*M-N*N-O*O-P*P;0>k?v=0:(v=b[B+v+b[p+u+b[t+G+b[n+z]]]]%32*4,k*=k,v=k*k*(a[v]*M+a[v+1]*N+a[v+2]*O+a[v+3]*P));u=.6-Q*Q-R*R-S*S-T*T;0>u?c=0:(c=b[B+c+b[p+A+b[t+D+b[n+H]]]]%32*4,u*=u,c=u*u*(a[c]*Q+a[c+1]*R+a[c+2]*S+a[c+3]*T));A=.6-l*l-h*h-f*f-e*e;0>A?a=0:(b=b[B+1+b[p+1+b[t+1+b[n+1]]]]%32*4,A*=A,a=A*A*(a[b]*l+a[b+1]*h+a[b+2]*f+a[b+3]*e));return 27*(d+g+v+c+a)}};E._buildPermutationTable=
U;betterterrain.rawnoise=E})();
    
    betterterrain.createterrain = function(options) {
        if (typeof options.seed === "undefined") {
            // seed is in-between 0 and 1
            options.seed = Math.random();
        }
        this.terrainnoise = new betterterrain.rawnoise();
        this.dataarray = [];
    };
    
    betterterrain.createterrain.prototype._initxy = function(x, y) {
        this.dataarray[betterterrain.getindex(x, y)] = {};
    }
    
    betterterrain.getindex = function(x, y) {
        // Elegant Pairing Function (Szudzik)
        return (x >= y) ? (x * x + x + y) : (y * y + x);
    }
    
    betterterrain.createterrain.prototype.generateheightmap = function(x, y) {
        var height = 1 * noise(1 * nx, 1 * ny) +  0.5 * noise(2 * nx, 2 * ny) + 0.25 * noise(4 * nx, 4 * ny);
        this.dataarray[betterterrain.getindex(x, y)].h = height;
        return height;
    }
    
    return betterterrain;
}));
