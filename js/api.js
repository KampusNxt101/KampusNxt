async function submitForm(data) {
    try {
        const params = new URLSearchParams();

        Object.keys(data).forEach(key => {
            params.append(key, data[key]);
        });

        const response = await fetch(API_URL, {
            method: "POST",
            body: params
        });

        return await response.json();

    } catch (error) {
        console.error(error);
        throw error;
    }
}
