'use strict';

/**
 * Модуль отрисовки меток
 */

(function () {
  /**
   * Размер маркера по Y
   * @const {number}
   */
  var PIN_Y = 46;
  var mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin');
  var pinsFragment = document.createDocumentFragment();
  var map = document.querySelector('.map');
  var pinsContainer = map.querySelector('.map__pins');
  
  /**
   * Строковые координаты маркера (со смещением по Y)
   * @param {number} x
   * @returns {string}
   */
  var pinStrX = function (x) {
    return x + 'px';
  };
  var pinStrY = function (y) {
    return (y - PIN_Y) + 'px';
  };
  
  /**
   * Функция формирования маркера
   * @param {Object} elementData
   * @param {number} i
   * @returns {render}
   */

  var render = function (elementData, i) {
    var mapPin = mapPinTemplate.cloneNode(true);
    mapPin.querySelector('img').src = elementData.author.avatar;
    mapPin.style.left = pinStrX(elementData.location.x);
    mapPin.style.top = pinStrY(elementData.location.y);
    mapPin.dataset.numPin = i;
    this.appendChild(mapPin);
    return this;
  };

  window.map = {
    /**
     * Функция добавления маркеров на страницу
     */
    appendPins: function () {
      /**
       * Очищаем контейнер с маркерами от предыдущего результата
       * @type {NodeList}
       */
      var childs = pinsContainer.querySelectorAll('.map__pin');
      [].forEach.call(childs, function (element) {
        if (!element.classList.contains('map__pin--main')) {
          pinsContainer.removeChild(element);
        }
      });
      /**
       * Заполняем фрагмент в соответствии с отфильтрованным массивом
       */
      window.mapFilters.filteredData.forEach(render, pinsFragment);
      /**
       * Добавляем фрагмент на страницу
       */
      pinsContainer.appendChild(pinsFragment);
    }
  };

})();
