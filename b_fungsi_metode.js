function pattern_count(text, pattern) {
    let count = 0;

    if (pattern.length === 0) {
        return 0;
    }

    for (let i = 0; i <= text.length - pattern.length; i++) {
        if (text.substring(i, i + pattern.length) === pattern) {
            count++;
        }
    }

    return count;
}

console.log(pattern_count("palindrom", "ind")); // Output: 1
console.log(pattern_count("ababab", "aba")); // Output: 2
console.log(pattern_count("hello", "")); // Output: 0
console.log(pattern_count("aaaaaa", "aa")); // Output: 5
console.log(pattern_count("hell", "hello")); // Output: 0
