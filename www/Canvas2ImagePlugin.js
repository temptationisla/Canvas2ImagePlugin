//
//  Canvas2ImagePlugin.js
//  Canvas2ImagePlugin PhoneGap/Cordova plugin
//
//  Created by Tommy-Carlos Williams on 29/03/12.
//  Copyright (c) 2012 Tommy-Carlos Williams. All rights reserved.
//  MIT Licensed
//

module.exports = {

    saveImageDataToLibrary: function (options) {

        var defaults = { canvas: null, fileName: "IMG_" + new Date().getTime(), album: 'Apps', success: function () { }, failure: function () { } };
        var settings = Object.assign({}, defaults, options);
        // success required
        if (typeof settings.success != "function") {
            console.log("Canvas2ImagePlugin Error: success is not a function.");
        }
        else if (typeof settings.failure != "function") {
            console.log("Canvas2ImagePlugin Error: failure is not a function.");
        } else if (!settings.canvas) {
            console.log("Canvas2ImagePlugin Error: no canvas is assigned.");
        }
        else {
            var canvas = (typeof settings.canvas === "string") ? document.getElementById(settings.canvas) : settings.canvas;
            var imageData = canvas.toDataURL('image/jpeg').replace(/data:image\/jpeg;base64,/, '');
            return cordova.exec(settings.success, settings.failure, "Canvas2ImagePlugin", "saveImageDataToLibrary", [imageData, settings.fileName, settings.album]);
        }
    }
};

