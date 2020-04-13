export default function validateCreateAccount(values) {
    let errors = {};

    // validate user name
    if(!values.name) {
        errors.name = "The Name is Required"
    }

    // validate email
    if(!values.email) {
        errors.email = "The Email is Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "invalid Email"
    }

    // validate password
    if(!values.password) {
        errors.password = "The password is Required"
    }else if( valuels.password.length < 6 ) {
        errors.password = "the password must be at least 6 characters"
    }

    return errors;
}