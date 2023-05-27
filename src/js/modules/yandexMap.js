const yandexMap = () => {
    setTimeout(function(){
        const elem = document.createElement('script');
        elem.type = 'text/javascript';
        elem.src = 'https://api-maps.yandex.ru/2.1/?loadByRequire=1apikey=08720910-7e8e-4680-becd-1334a7834bda&lang=ru_RU';
        document.querySelectorAll('body')[0].append(elem);
    }, 3000);
    function createCard() {
        let center = [45.01934673592315,41.896342848799236]
        ymaps.load(init)
        function init(){
            const myMap = new ymaps.Map("map", {
                center: center,
                zoom: 17
            });
            let placemark = new ymaps.Placemark(center, {
                balloonContentHeader: 'Ставрополь"',
                balloonContentBody: 'Перспективный'
            },)
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                //... отключаем перетаскивание карты
                myMap.behaviors.disable('drag');
            }
            myMap.controls.remove('geolocationControl'); // удаляем геолокацию
            myMap.controls.remove('searchControl'); // удаляем поиск
            myMap.controls.remove('trafficControl'); // удаляем контроль трафика
            myMap.controls.remove('typeSelector'); // удаляем тип
            myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
            myMap.controls.remove('rulerControl'); // удаляем контрол правил
            myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
            myMap.geoObjects.add(placemark)
            placemark.balloon.open()
        }
    }
    setTimeout(createCard, 4000);
}
export default yandexMap