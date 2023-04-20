export const postRequisitesRequest = async (requisites, inn) => {
    try {
        const url = `https://localhost:7083/api/requisites/${inn}`

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(requisites),
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });

        return response
    } catch (error) {
        console.error('Error:', error);
        return error
    }
}
