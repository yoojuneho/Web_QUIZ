document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://localhost:3000/web') // json-server의 기본 포트는 3000입니다.
        .then(response => response.json())
        .then(data => {
            // 데이터를 localStorage에 저장
            localStorage.setItem('webData', JSON.stringify(data));
            // 저장된 데이터를 화면에 출력
            displayData();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData() {
    const data = JSON.parse(localStorage.getItem('webData'));
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // 이전 출력 내용 초기화

    if (data) {
        data.forEach(item => {
            const p = document.createElement('p');
            p.textContent = `Class: ${item.class}`;
            outputDiv.appendChild(p);
        });
    }
}
