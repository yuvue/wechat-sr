module.exports = {
    get host() {
        return "smtp.163.com";
    },
    get user() {
        return "iveoname@163.com";
    },
    get pass() {
        return "zai123";
    },
    get code() {
        return Math.random()
            .toString(16)
            .slice(2, 6)
            .toUpperCase();
    },
    get expire() {
        return new Date().getTime() + 60 * 1000;
    }
};
