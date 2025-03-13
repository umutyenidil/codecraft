export const cacheData = (url, data, expiryInMinutes = 1440) => {
    try {
        const expiryTimestamp = Date.now() + expiryInMinutes * 60 * 1000;

        const cacheObject = {
            data,
            expiry: expiryTimestamp
        };

        localStorage.setItem(url, JSON.stringify(cacheObject));
        return data;
    } catch (e) {
        return data;
    }
}

export const cachedData = (url) => {
    try {
        const cacheString = localStorage.getItem(url);

        if (!cacheString) return null;

        const { data, expiry } = JSON.parse(cacheString);

        if (Date.now() > expiry) {
            localStorage.removeItem(url);
            return null;
        }

        return data;
    } catch (e) {
        return null;
    }
}
