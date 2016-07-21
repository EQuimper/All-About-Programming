var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

var showElement = function (icons) {
    var output = '<ul>',
    myList = document.querySelectorAll('.socialmediaicons');

    for (var icon in icons) {
        output += '<li><a href="' + socialMedia[icon] + '"><img src="images/' + icon + '.png" alt="icon for ' + icon + '"/></a></li>';
    }

    output += '</ul>';

    for (var i = 0; i < myList.length; i++) {
        myList[i].innerHTML = output;
    }

}(socialMedia);
