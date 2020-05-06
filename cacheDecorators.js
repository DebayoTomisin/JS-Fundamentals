// creates a cache Decorator to help save cache for computationally expensive applications

function cacheDecorator(func, hash){
    let cache = new Map();

    return function(){
        
        let key = hash(arguments);
        if (cache.has(key)){
            return cache.get(key);
        }

        let result = cache.call(this, ...arguments);
        return result;
    }
}

// hash function concatenates the arguments into a single value
function hash(){
    return [].join.call(arguments);
}


// Index Function

function pow(x, n){
    if (n == 1){
        return x;
    }
    else{
        return x * pow(x, n - 1);
    }
}
