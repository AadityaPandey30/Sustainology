module.exports = {
    log: (message, level = 'info') => {
        if (process.env.NODE_ENV !== 'production' || level === 'error') {
            console[level](message);
        }
    },
};
