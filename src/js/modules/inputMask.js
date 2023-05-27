import Inputmask from "inputmask";
const inputMask = () => {
    const phoneMask = document.querySelector('#tel')
    const im = new Inputmask("+7 (999) 999 99 99", { showMaskOnHover: false });
    im.mask(phoneMask);
}
export default inputMask