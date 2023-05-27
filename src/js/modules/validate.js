import JustValidate from 'just-validate';
const formSubmitBtn = document.querySelector('.aside-submit_btn')
const formCheckbox = document.querySelector('.formCheckbox')
console.log(formCheckbox);
const validate = () => {
    const validation = new JustValidate('#aside-form');
    validation
        .addField('#name', [
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Не менее 2х символов',
            },
            {
                rule: 'required',
                errorMessage: 'Введите имя',
            },
            {
                rule: 'maxLength',
                value: 10,
                errorMessage: 'Не более 10ти символов',
            },
        ],
        {
            errorsContainer: '.aside-name-container',
        },
        )
        .addField('#tel', [
            {
                rule: 'required',
                errorMessage: 'Введите телефон',
            },
        ],
        {
            errorsContainer: '.aside-tel-container',
        },
        )
        .addField('#checkbox-validation',[
            {
                rule: 'required',
                errorMessage: 'Поставьте галочку если согласны',
            },
        ],
        {
            errorsContainer: '.aside-checkbox-container',
        },
        )
        formCheckbox.addEventListener('change', (e) => {
            if (formCheckbox.checked) {
                formSubmitBtn.style.backgroundColor = '#F43F5E'
            } else {
                formSubmitBtn.style.backgroundColor = '#F871B1'
            }
        })
}
export default validate