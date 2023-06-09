export const postOrganizationRequest = async (form, type) => {
    const formData = new FormData(form);
    formData.append('type', type)


    try {
        let url

        if (type === 'legal') {
            url = 'https://localhost:7083/api/organizations/legal'
        } else {
            url = 'https://localhost:7083/api/organizations/individual'
        }

        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': '*/*',
            }
        });

        return response
    } catch (error) {
        console.error('Error:', error);
        return error
    }
}
