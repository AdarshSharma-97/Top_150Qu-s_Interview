var strStr = function (haystack, needle) {
    const n = haystack.length;
    const m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        if (haystack.slice(i, i + m) === needle) {
            return i;
        }
    }

    return -1;
};