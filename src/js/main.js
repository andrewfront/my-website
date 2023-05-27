"use strict";
// import AOS from 'aos';
// import dynamic from './modules/dynamic'
// import search from './modules/search'
// import burger from './modules/burger'
// import slider from './modules/slider'
// import fixed from './modules/fixed'
// import cartSettings from './modules/cartSettings'
import slider from './modules/slider'
import scroll from './modules/scroll'
import forms from './modules/forms'
import inputMask from './modules/inputMask'
import validate from './modules/validate'
import validateText from './modules/validateText'
import yandexMap from './modules/yandexMap'
window.addEventListener('DOMContentLoaded', () => {
    slider()
    scroll()
    forms()
    inputMask()
    validate()
    validateText()
    yandexMap()
})