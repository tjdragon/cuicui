
async function postJsonData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Error posting JSON data:', error);
        throw error;
    }
}

// Example usage:
const postDataUrl = 'http://localhost:3000/cuicui';
const data = { text: 'my tweet' };

postJsonData(postDataUrl, data).then(response => {
    console.log('Response:', response);
});

setTimeout(() => {
    console.log('Exiting...');
    process.exit(0);
}, 5000);
