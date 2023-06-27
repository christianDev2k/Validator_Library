const form = new Validator('#formAccount');
form.onSubmit = (formData) => {
    console.log(formData);
}