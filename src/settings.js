var path = require('path');
var fs = require('fs-extra');

// Data Persistant
const Store = require('electron-store');
const store = new Store();


var btn_update = $("#btn-update");
var btn_test = $("#btn-test");
var message = $("#message");



start_application();




btn_update.click(function() {
    update_settings();
});

btn_test.click(function() {
    test_copy();
});



function start_application() {
    var source = store.get('source', '');
    var dest = store.get('dest', '');
    
    $("#txt-source").val(source);
    $("#txt-dest").val(dest);
}

/**
 * Update/Save the settings like file source and dest
 */
function update_settings() {
    var source = $("#txt-source").val();
    var dest = $("#txt-dest").val();


    store.set('source', source);
    store.set('dest', dest);
}


/**
 * Test the paths by copying a test file from source to destination
 */
function test_copy() {
    var source = store.get('source', '');
    var dest = store.get('dest', '');
    
    
    // fs.copySync('D:\\LocalLibrary\\anime\\onepiece', '')
    fs.copySync(source + '/test.txt', dest + '/test.txt');

    copyFile(source + '/test.txt', dest + '/test.txt');

    for (var i=1; i<=3; i++) {
        var filename = '/' + i + '.mp4';
        // fs.copySync(source + filename, dest + filename);
        copyFile(source + filename, dest + filename);
    }

    message.html('Copy completed');
}



function copyFile(source, target) {
    var rd = fs.createReadStream(source);
    var wr = fs.createWriteStream(target);
    return new Promise(function(resolve, reject) {
      rd.on('error', reject);
      wr.on('error', reject);
      wr.on('finish', resolve);
      rd.pipe(wr);
    }).catch(function(error) {
      rd.destroy();
      wr.end();
      throw error;
    });
  }