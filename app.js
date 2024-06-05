document.getElementById('fetchButton').addEventListener('click', () => {
    const API_ENDPOINT = document.getElementById('apiEndpoint').value;
    fetch(`${API_ENDPOINT}/time`)
        .then(response => response.json())
        .then(data => {
            const dateTime = new Date(data.dateTime);
            const formattedTime = dateTime.toLocaleTimeString();
            const hostname = data.hostname;
            document.getElementById('result').innerText = `Time: ${formattedTime}, Hostname: ${hostname}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerText = 'Error fetching data.';
        });
});

document.getElementById('fetchHistoryButton').addEventListener('click', () => {
    const API_ENDPOINT = document.getElementById('apiEndpoint').value;
    fetch(`${API_ENDPOINT}/history`)
        .then(response => response.json())
        .then(data => {
            let historyHTML = '<ul>';
            data.slice(0, 100).forEach(item => {
                const dateTime = new Date(item.dateTime);
                const formattedTime = dateTime.toLocaleTimeString();
                historyHTML += `<li>Time: ${formattedTime}, Hostname: ${item.hostname}</li>`;
            });
            historyHTML += '</ul>';
            document.getElementById('historyResult').innerHTML = historyHTML;
        })
        .catch(error => {
            console.error('Error fetching history data:', error);
            document.getElementById('historyResult').innerText = 'Error fetching history data.';
        });
});
