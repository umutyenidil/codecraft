import {cacheData, cachedData} from "./cache.js";

export const fetcher = ({url, onData, onCacheData, onError, onPending}) => {
    onPending(true);

    setTimeout(() => {
        const cachedUsers = cachedData(url);

        if (cachedUsers) {
            onCacheData(cachedUsers);
            onPending(false);
        } else {
            fetch(url)
                .then(response => response.json())
                .then(data => cacheData(url, data))
                .then(users => onData(users))
                .catch(error => onError(error))
                .finally(() => onPending(false));
        }
    }, 2000);
};

