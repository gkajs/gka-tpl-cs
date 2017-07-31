
module.exports = function html(names, prefix) {

var  str = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,maximum-scale=1">
    <title>gka-preview</title>
    <link href="./gka.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div id="gka" class="gka-base"></div>

    <div style="position: fixed; bottom: 10px;">
        Powered By <a target="_blank" href="https://github.com/gkajs/gka">gka</a> .
        Template By <a target="_blank" href="https://github.com/gkajs/gka-tpl-sprites">gka-tpl-sprites</a>
    </div>
    <script>
    function loadImage(names, cb, prefix){
        var n = 0, img;
        names.forEach(function(name) {
            img = new Image();
            img.onload = function() {
                (++n === names.length) && cb && cb();
            };
            img.src = (prefix || '') + name;
        });
    }

    var imgNames = ${names};

    loadImage(imgNames, function() {
        document.getElementById('gka').className += " ${prefix}animation"
    }, "img/")
    </script>
</body>
</html>
`;

    return str;
}
