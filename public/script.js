alert("Script Loaded");
console.log("Portfolio Website Loaded Successfully");

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.querySelector('input[type="text"]').value,
        email: document.querySelector('input[type="email"]').value,
        message: document.querySelector('textarea').value
    };

    try {
    const response = await fetch(
        "https://portfolio-backend-69ax.onrender.com/api/contact",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    const result = await response.json();

    console.log(result);
    alert(result.message);

} catch (error) {
    console.error(error);
    alert("Failed to send message.");
}
});