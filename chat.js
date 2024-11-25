// Initilize
let messages = [];
const input = document.getElementById("inp");
const button = document.getElementById("Btn");
const msgList = {
    msg1: document.getElementById("msg1"),
    msg2: document.getElementById("msg2"),
    msg3: document.getElementById("msg3"),
    msg4: document.getElementById("msg4"),
    msg5: document.getElementById("msg5")
}

button.addEventListener("click", (event) => {
    fetch("http://192.168.10.149:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: input.value
        })
    });

    input.value = "";
});

function updateMessageArray() {
    fetch("http://192.168.10.149:3000", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => {
        return data.text();
    }).then(data => {
        messages = JSON.parse(data);
    });
}
updateMessageArray();

// Update chat
setInterval(() => {
updateMessageArray();
if (messages && messages.length >= 5) {
let temp = messages.length-5;
msgList.msg1.textContent = messages[temp];
msgList.msg2.textContent = messages[temp+1];
msgList.msg3.textContent = messages[temp+2];
msgList.msg4.textContent = messages[temp+3];
msgList.msg5.textContent = messages[temp+4];
}
}, 500);
