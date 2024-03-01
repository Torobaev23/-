const cards = document.querySelector('.items');
const btn = document.querySelector('#btn');

const request = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        renderUsers(data);
    } catch (e) {
        alert('Возникла ошибка');
    }
};

const renderUsers = (data) => {
    cards.innerHTML = '';

    data.forEach((user) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'personCard');
        cards.append(card);
        card.innerHTML = `
            <h1>Имя пользователя:</h1>
            <p>${user.name}</p>
            <h2>Email:</h2>
            <p>${user.email}</p>
            <h3>Номер телефона:</h3>
            <p>${user.phone}</p>
        `;

    });
};

btn.addEventListener('click', () => {
    request();
});

request();


