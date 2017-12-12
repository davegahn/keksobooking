'use strict';

(function () {

  var renderPoints = function (obj, idx) {
    var pointsTemplate = document.querySelector('template').content.querySelector('.map__pin');
    var mapPoint = pointsTemplate.cloneNode(true);
    mapPoint.classList.add('map__pin');
    mapPoint.setAttribute('data-pin', idx);
    mapPoint.style.left = obj.location.x + 'px';
    mapPoint.style.top = obj.location.y + 'px';
    mapPoint.style.transform = 'translate(-50%, -100%)';
    mapPoint.querySelector('img').src = obj.author.avatar;

    return mapPoint;
  };

  window.fillPoints = function (elem) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.announces.length; i++) {
      fragment.appendChild(renderPoints(window.announces[i], i));
    }
    elem.appendChild(fragment);
  };

})();
