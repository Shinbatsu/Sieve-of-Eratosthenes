let Primes = (function () {
  //Sieve limitation
  let N = 1e9, 

  //Creation Sieve
  sieve = new Uint32Array(N / 2); 
  for (let i = 3; i * i < N; i += 2)
    if (!sieve[i >> 1]) 
        for (let j = i * i, k = i << 1; j < N; j += k) 
            sieve[j >> 1] = 1;
  return {
    *stream() {
      yield 2;
      for (let i = 3; i < N; i += 2) 
        if (!sieve[i >> 1])
            yield i;
    },
  };
})();
