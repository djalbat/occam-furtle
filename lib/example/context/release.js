"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReleaseContext", {
    enumerable: true,
    get: function() {
        return ReleaseContext;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(file) {
        _class_call_check(this, ReleaseContext);
        this.file = file;
    }
    _create_class(ReleaseContext, [
        {
            key: "getFile",
            value: function getFile() {
                return this.file;
            }
        },
        {
            key: "findFile",
            value: function findFile(filePath) {
                var file = this.getFile(); ///
                return file;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                console.log(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                console.log(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                console.log(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                console.log(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                console.log(message);
            }
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(file) {
                var releaseContext = new ReleaseContext(file);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gIH1cblxuICBnZXRGaWxlKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGU7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmdldEZpbGUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyBjb25zb2xlLmxvZyhtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyBjb25zb2xlLmxvZyhtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyBjb25zb2xlLmxvZyhtZXNzYWdlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgY29uc29sZS5sb2cobWVzc2FnZSk7IH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGZpbGUpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImZpbmRGaWxlIiwiZmlsZVBhdGgiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZnJvbUZpbGUiLCJyZWxlYXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWFBOzs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLCtCQUFOO2FBQU1BLGVBQ0NDLElBQUk7Z0NBRExEO1FBRVQsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFGSEQ7O1lBS1hFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxRQUFRO2dCQUNmLElBQU1ILE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQUssR0FBRztnQkFFakMsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV2Q0csS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1ILE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXZDSSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0osT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7WUFFdENLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTCxPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV6Q00sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1OLE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7OztZQUVoQ08sS0FBQUE7bUJBQVAsU0FBT0EsU0FBU1osSUFBSTtnQkFDbEIsSUFBTWEsaUJBQWlCLElBMUJkZCxlQTBCaUNDO2dCQUUxQyxPQUFPYTtZQUNUOzs7V0E3QldkIn0=