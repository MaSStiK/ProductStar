const form = document.forms.namedItem("contact-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    let formValidated = validateForm(data)

    if (!formValidated) return

    alert("Форма отправлена")

    fetch('http://localhost:3000/', {
        method: 'POST',
        body: data,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(() => {
        form.reset();
    });
});

function validateForm(data) {
    const name = data.get("name")
    const email = data.get("email")
    const phone = data.get("phone")
    const cv = data.get("cv")
    let success = true

    if (!name) {
        setInputInvalid("name")
        success = false
    }

    if (!email) {
        setInputInvalid("email")
        success = false
    }

    if (!phone) {
        setInputInvalid("phone")
        success = false
    }

    if (!cv) {
        setInputInvalid("cv")
        success = false
    }

    return success
}

function setInputInvalid(inputName) {
    const input = document.getElementById(`form-${inputName}`)
    const error = document.getElementById(`form-${inputName}-error`)
    error.classList.add("show")

    input.setCustomValidity("Вы не заполнили это поле")
    input.addEventListener("change", () => {
        error.classList.remove("show")
        input.setCustomValidity("")
    })
}