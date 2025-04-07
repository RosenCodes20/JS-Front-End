function attachEvents() {
    let send = document.getElementById('submit');

    let refresh = document.getElementById('refresh');

    let author = document.querySelector('[name="author"]');
    let content = document.querySelector('[name="content"]');

    let url = 'http://localhost:3030/jsonstore/messenger'
    let messages = document.getElementById('messages');

    send.addEventListener('click', handleCLickingSendButton);
    refresh.addEventListener('click', handleCLickingRefreshButton)

    async function handleCLickingSendButton(e) {
        e.preventDefault();

        let object = {
            'author': author.value,
            'content': content.value,
        }

        let options = {
            method: "post",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(object),
        };

        let res = await fetch(url, options);

        author.value = '';
        content.value = '';
    }

    async function handleCLickingRefreshButton(e) {
        e.preventDefault();

        let res = await fetch(url);

        let data = await res.json();

        let entries = Object.entries(data);
        let messagesArr = [];
        for (let [key, value] of entries) {
            messagesArr.push(`${value.author}: ${value.content}`);
        }
        messages.textContent = messagesArr.join('\n');
    }
}

attachEvents();