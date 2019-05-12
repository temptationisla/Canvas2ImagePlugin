//
//  Canvas2ImagePlugin.js
//  Canvas2ImagePlugin PhoneGap/Cordova plugin
//
//  Created by Tommy-Carlos Williams on 29/03/12.
//  Copyright (c) 2012 Tommy-Carlos Williams. All rights reserved.
//  MIT Licensed
//

module.exports = {

    saveImageDataToLibrary: function (success, failure, canvas) {
        var defaults = { canvas: null, fileName: "IMG_" + new Date().getTime(), album: 'Apps', success: function () { }, failure: function () { } };
        var settings = Object.assign({}, defaults);
        
        var imageData = canvas.replace(/data:image\/jpeg;base64,/, '');
        return cordova.exec(success, failure, "Canvas2ImagePlugin", "saveImageDataToLibrary", [imageData, settings.fileName, settings.album]);
    }
};

