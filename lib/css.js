
module.exports = function css(data, prefix, frameduration) {
    var frames = data.frames,
        filepath = `./img/${data.file}`;

    var len = frames.length,
        per = 100 / (len);  // len === 2，0% 50% 100% ，确保播放 0% 和 50%

    var keyframesStr = frames.reduce(function(str, frame, i, frames){

        var percent = (i * (per)).toFixed(2);
        percent = percent == 0? 0: percent; // fix 0.00 to 0;

        var x = frame.x === 0? 0: `-${frame.x}px`,
            y = frame.y === 0? 0: `-${frame.y}px`;

        str += `
    ${percent}% {
        width: ${frame.width}px;
        height: ${frame.height}px;
        transform: translate(${frame.offX}px, ${frame.offY}px);
        background-position: ${x} ${y};
    }`;
        if (i == len - 1) {
            str += `
    100% {
        width: ${frame.width}px;
        height: ${frame.height}px;
        transform: translate(${frame.offX}px, ${frame.offY}px);
        background-position: ${x} ${y};
    }
`;      }

        return str;
    }, "");


    var css = `.gka-base {
    
    /* background-size: contain;*/

    animation-timing-function: steps(1);
    animation-iteration-count: infinite;

    background-repeat: no-repeat;

    animation-fill-mode: forwards;

    /* Play once*/
    /* animation-iteration-count: 1; */
}

`;

    css += `.${prefix}animation {
    animation-name: ${prefix}keyframes;
    animation-duration: ${len * frameduration}s;

    background-image: url("${filepath}");
}

@-webkit-keyframes ${prefix}keyframes {${keyframesStr}}
`;

    return css;
}
