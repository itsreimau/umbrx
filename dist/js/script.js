document.addEventListener("DOMContentLoaded", () => {
    const botForm = document.getElementById("botForm");
    const responseMessage = document.getElementById("responseMessage");

    botForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const botname = document.getElementById("botname").value.trim();
        const fullname = document.getElementById("fullname").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        responseMessage.textContent = "";
        responseMessage.className = "";

        if (!botname || !fullname || !username || !password) {
            showError("⚠️ Harap isi semua kolom!");
            return;
        }

        try {
            const response = await fetch("https://inside.bidat93338.serv00.net/bot/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    botname,
                    fullname,
                    username,
                    password
                }),
            });

            const data = await response.json();
            data.error ? showError(`❌ ${data.message}`) : showSuccess(`✅ ${data.message}`);
            botForm.reset();
        } catch (error) {
            showError("❌ Terjadi kesalahan. Coba lagi nanti.");
        }
    });

    function showError(msg) {
        responseMessage.textContent = msg;
        responseMessage.classList.add("text-red-500");
    }

    function showSuccess(msg) {
        responseMessage.textContent = msg;
        responseMessage.classList.add("text-green-500");
    }
});