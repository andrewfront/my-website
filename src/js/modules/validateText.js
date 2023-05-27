import JustValidate from 'just-validate';
const validateText = () => {
    const validation = new JustValidate('.reviews-form', {
        tooltip : {
            position: 'bottom'
        }
    });
    validation
    .addField('#feedback', [
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Не менее 2х символов',
        },
        {
            rule: 'required',
            errorMessage: 'Заполните поле',
        },
        {
            rule: 'maxLength',
            value: 500,
            errorMessage: 'Не более 500 символов',
        },
    ],
    // {
    //     errorsContainer: '.aside-name-container',
    // },
    )
}
export default validateText