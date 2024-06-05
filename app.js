const API_ENDPOINT = 'http://java-time-host-api:8080';


document.getElementById('fetchButton').addEventListener('click', () => {
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
    fetch(`${API_ENDPOINT}/history`)
        .then(response => response.json())
        .then(data => {
            let historyHTML = '<ul>';
            data.slice(0, 30).forEach(item => {
                const dateTime = new Date(item.dateTime);
                const formattedTime = dateTime.toLocaleTimeString();
                historyHTML += `<li>Time: ${formattedTime}, Host: ${item.hostname}</li>`;
            });
            historyHTML += '</ul>';
            document.getElementById('historyResult').innerHTML = historyHTML;
        })
        .catch(error => {
            console.error('Error fetching history data:', error);
            document.getElementById('historyResult').innerText = 'Error fetching history data.';
        });
});
