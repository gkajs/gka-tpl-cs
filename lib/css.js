var gkaUtils = require('gka-utils');

function getConfig(frame, i) {
    var {
        width,
        height,
        offX,
        offY,
        file,
        x,
        y,
    } = frame;

    file = './img/' + frame.file;

    return {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${offX}px, ${offY}px)`,
        'background-image': `url("${file}")`,
        'background-position': `${-x}px ${-y}px`,
    }
}

module.exports = function css(data, opts) {

    var frame = data.frames[0],
        frameConfig = getConfig(frame);

    var css = gkaUtils.css.getCSSText('.gka-wrap', {
        width: `${frame.sourceW}px`,
        height: `${frame.sourceH}px`,
    });

    css += gkaUtils.css.getKeyframesCSS(data, opts, {
        getConfig,
    });

    return css;
}