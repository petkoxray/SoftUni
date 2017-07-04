function gcd(a, b) {
    return gcd(a, b);

    function gcd(a, b) {
        if (b === 0) return a;
         return gcd(b, a % b);
    }
}