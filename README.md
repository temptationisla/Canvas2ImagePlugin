Canvas2ImagePlugin
============
This is the fork to https://github.com/tate-u/Canvas2ImagePlugin which is the fork to https://github.com/devgeeks/Canvas2ImagePlugin


This plugin allows you to save the contents of an HTML canvas tag from base64 to the iOS Photo Library, Android Gallery or WindowsPhone 8 Photo Album from your app.

See an example project using it here: [https://github.com/devgeeks/Canvas2ImageDemo](https://github.com/devgeeks/Canvas2ImageDemo) - note: this app does not work in wp8.

Installation
------------

### For Cordova 3.0.x:

1. To add this plugin just type: `cordova plugin add https://github.com/temptationisla/Canvas2ImagePlugin.git` or `phonegap local plugin add https://github.com/temptationisla/Canvas2ImagePlugin.git`


Usage:
------

Call the `window.canvas2ImagePlugin.saveImageDataToLibrary()` method using success and error callbacks and base64 of the canvas to save:

### Example
```html
<canvas id="myCanvas" width="165px" height="145px"></canvas>
```

```javascript
function onDeviceReady()
{
	var canvas = document.getElementById('myCanvas')
	window.canvas2ImagePlugin.saveImageDataToLibrary(
        function(msg){
            console.log(msg);
        },
        function(err){
            console.log(err);
        },
        canvas.toDataURL("image/jpeg")
    );
}
```

# Note
This plugin now just saves JPEG-Files. PNG's no longer supported.


## License

The MIT License

Copyright (c) 2011 Tommy-Carlos Williams (http://github.com/devgeeks)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
