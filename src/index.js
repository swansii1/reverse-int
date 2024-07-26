module.exports = function reverse (n) {
        let res = String(n)
        let result = res.split('').reverse().join('')
        
        return parseInt(result)
    };
