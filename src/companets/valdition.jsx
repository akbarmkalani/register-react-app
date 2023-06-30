export const Valadition = data => {
    const errors = {};
 console.log("akbar",data);

    if (!data.name) {
        errors.name = 'Username is required'
    } else {
        delete errors.name
    }

    if (!data.email) {
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email address is invalid'
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password is required";

    } else if (data.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
         console.log(data.password);
    } else {
        delete errors.password
    }

if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm the password";
} else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Passwords do not match';
} else {
    delete errors.confirmPassword;
}


if (!data.accepted) {
    errors.accepted = "Accept our regulation"
} else {
    delete errors.accepted
}
return errors


}


