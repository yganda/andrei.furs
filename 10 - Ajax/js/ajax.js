(function () {
  var index = 0;
  function jLoad(url, str){
    var xhr = new XMLHttpRequest(), data;
    xhr.open('get', url, true);
    xhr.onload = function() {
      if (xhr.readyState == 4 && (~~(xhr.status / 100)) == 2) {
          data = JSON.parse(xhr.responseText);
          jShow(data, str);
      }
    }
    xhr.send(null);
  }

  function jShow (data, str) {
     var items = [];
     _.forEach(data, function(key, val) {
       items.push('<div class = "task">'+
                    '<input id="index' + index + '" type="checkbox">' +
                    '<label  for="index' + index + '">' + key + '</label>' +
                  '</div>');
       index++;
     });
     var area = document.getElementById(str);
     for (var i = 0; i < items.length; i++) {
        area.innerHTML += items[i];
     }
  }

  setTimeout(function(){jLoad('data/area1.json', 'area1')}, 1000);
  setTimeout(function(){jLoad('data/area2.json', 'area2')}, 2000);
  setTimeout(function(){jLoad('data/area3.json', 'area3')}, 3000);
  setTimeout(function(){jLoad('data/area4.json', 'area4')}, 4000);
})();
