var path = require('path');
var fs = require('fs-extra');



// possible db engine
// https://github.com/pouchdb/pouchdb


// fs.copySync(path.resolve(__dirname,'./init/xxx.json'), 'xxx.json');



var btn_download = $(".btn.download");

$(document).keyup(function(e) { 
    switch(e.keyCode) {
        case 27:
        hide_overlay();
            break;
    }
});

btn_download.click(function(e) {
    show_overlay();
});


$(function() {
    // $('body').vegas({
    //     slides: [
    //         { src: '../assets/images/pic_1.jpg' },
    //         { src: '../assets/images/pic_2.jpg' },
    //     ]
    // });
});




function show_overlay() {
    $("#overlay-bg").show();
    $("#overlay-bg").animate({
        opacity: 1
    },200);
    $("#overlay").show();
    $("#overlay").animate({
        opacity: 1
    },200);
}

function hide_overlay() {
    $("#overlay-bg").animate({
        opacity: 0
    },200);
    $("#overlay").animate({
        opacity: 0
    },200, function() {
        $("#overlay-bg").hide();
        $("#overlay").hide();
    });
}