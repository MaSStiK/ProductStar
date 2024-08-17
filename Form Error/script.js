class EmptyField extends Error {
    constructor(field) {
        super(`${field} cannot be empty`)
        this.name = "EmptyField"
    }
}

class FieldMinLength extends Error {
    constructor(field) {
        super(`${field} cannot be less than 4 characters`)
        this.name = "FieldMinLength"
    }
}

class FieldMaxLength extends Error {
    constructor(field) {
        super(`${field} cannot be more than 64 characters`)
        this.name = "FieldMaxLength"
    }
}

class EmptyForm extends Error {
    constructor(message) {
        super(message)
        this.name = "EmptyForm"
    }
}

const formLogin = document.querySelector("#form-login")
const formPassword = document.querySelector("#form-password")
const formSubmit = document.querySelector("#form-submit")

formLogin.addEventListener("blur", () => {
    try {
        if (!formLogin.value.length) throw new EmptyField("Login")
        if (formLogin.value.length < 4) throw new FieldMinLength("Login")
        if (formLogin.value.length > 64) throw new FieldMaxLength("Login")
    } catch(error) {
        console.log(`${error.name}: ${error.message}`);
    }
})

formPassword.addEventListener("blur", () => {
    try {
        if (!formPassword.value.length) throw new EmptyField("Password")
        if (formPassword.value.length < 4) throw new FieldMinLength("Password")
        if (formPassword.value.length > 64) throw new FieldMaxLength("Password")
    } catch(error) {
        console.log(`${error.name}: ${error.message}`);
    }
})

formSubmit.addEventListener("click", () => {
    try {
        if (!formLogin.value.length || !formPassword.value.length) throw new EmptyForm("Form cannot be empty")

        console.log("submit");
    } catch(error) {
        console.log(`${error.name}: ${error.message}`);
    }
})