export const fetchHandler = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`);
        const isJson = (response.headers.get('content-type') || '').includes('application/json');
        if (isJson) {
            const jsonData = await response.json();
            return [jsonData, null];
        } else {
            const textData = await response.text();
            return [textData, null];
        }
    }
    catch (error) {
        console.warn(error);
        return [null, error];
    }
};