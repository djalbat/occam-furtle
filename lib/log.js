"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Log;
    }
});
var _necessary = require("necessary");
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
var TRACE_LEVEL = _necessary.levels.TRACE_LEVEL, DEBUG_LEVEL = _necessary.levels.DEBUG_LEVEL, INFO_LEVEL = _necessary.levels.INFO_LEVEL, WARNING_LEVEL = _necessary.levels.WARNING_LEVEL, ERROR_LEVEL = _necessary.levels.ERROR_LEVEL;
var Log = /*#__PURE__*/ function() {
    function Log(logLevel) {
        _class_call_check(this, Log);
        this.logLevel = logLevel;
    }
    _create_class(Log, [
        {
            key: "getLogLevel",
            value: function getLogLevel() {
                return this.logLevel;
            }
        },
        {
            key: "trace",
            value: function trace(message, filePath) {
                var level = TRACE_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message, filePath) {
                var level = DEBUG_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "info",
            value: function info(message, filePath) {
                var level = INFO_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message, filePath) {
                var level = WARNING_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "error",
            value: function error(message, filePath) {
                var level = ERROR_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "write",
            value: function write(level, message, filePath) {
                var _$levels = [
                    TRACE_LEVEL,
                    DEBUG_LEVEL,
                    INFO_LEVEL,
                    WARNING_LEVEL,
                    ERROR_LEVEL
                ], levelIndex = _$levels.indexOf(level), logLevelIndex = _$levels.indexOf(this.logLevel);
                if (levelIndex < logLevelIndex) {
                    return;
                }
                message = formatMessage(level, message, filePath); ///
                console.log(message);
            }
        }
    ], [
        {
            key: "fromLogLevel",
            value: function fromLogLevel(follow, logLevel) {
                var log = new Log(logLevel);
                return log;
            }
        }
    ]);
    return Log;
}();
function formatMessage(level, message) {
    var filePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var upperCaseLevel = level.toUpperCase();
    message = filePath !== null ? "".concat(upperCaseLevel, ": ").concat(filePath, " - ").concat(message) : "".concat(upperCaseLevel, ": ").concat(message);
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMIH0gPSBsZXZlbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZyB7XG4gIGNvbnN0cnVjdG9yKGxvZ0xldmVsKSB7XG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0TG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nTGV2ZWw7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIHdyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVscyA9IFtcbiAgICAgICAgICAgIFRSQUNFX0xFVkVMLFxuICAgICAgICAgICAgREVCVUdfTEVWRUwsXG4gICAgICAgICAgICBJTkZPX0xFVkVMLFxuICAgICAgICAgICAgV0FSTklOR19MRVZFTCxcbiAgICAgICAgICAgIEVSUk9SX0xFVkVMXG4gICAgICAgICAgXSxcbiAgICAgICAgICBsZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobGV2ZWwpLFxuICAgICAgICAgIGxvZ0xldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZih0aGlzLmxvZ0xldmVsKTtcblxuICAgIGlmIChsZXZlbEluZGV4IDwgbG9nTGV2ZWxJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7ICAvLy9cblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dMZXZlbChmb2xsb3csIGxvZ0xldmVsKSB7XG4gICAgY29uc3QgbG9nID0gbmV3IExvZyhsb2dMZXZlbCk7XG5cbiAgICByZXR1cm4gbG9nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2UobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkge1xuICBjb25zdCB1cHBlckNhc2VMZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG5cbiAgbWVzc2FnZSA9IChmaWxlUGF0aCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAtICR7bWVzc2FnZX1gOlxuICAgICAgICAgICAgICBgJHt1cHBlckNhc2VMZXZlbH06ICR7bWVzc2FnZX1gO1xuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuIl0sIm5hbWVzIjpbIkxvZyIsIlRSQUNFX0xFVkVMIiwibGV2ZWxzIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwibG9nTGV2ZWwiLCJnZXRMb2dMZXZlbCIsInRyYWNlIiwibWVzc2FnZSIsImZpbGVQYXRoIiwibGV2ZWwiLCJ3cml0ZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImxldmVsSW5kZXgiLCJpbmRleE9mIiwibG9nTGV2ZWxJbmRleCIsImZvcm1hdE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZnJvbUxvZ0xldmVsIiwiZm9sbG93IiwidXBwZXJDYXNlTGV2ZWwiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQVFDLGNBQXFFQyxpQkFBTSxDQUEzRUQsYUFBYUUsY0FBd0RELGlCQUFNLENBQTlEQyxhQUFhQyxhQUEyQ0YsaUJBQU0sQ0FBakRFLFlBQVlDLGdCQUErQkgsaUJBQU0sQ0FBckNHLGVBQWVDLGNBQWdCSixpQkFBTSxDQUF0Qkk7QUFFOUMsSUFBQSxBQUFNTixvQkFBTjthQUFNQSxJQUNQTyxRQUFRO2dDQUREUDtRQUVqQixJQUFJLENBQUNPLFFBQVEsR0FBR0E7O2tCQUZDUDs7WUFLbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPLEVBQUVDLFFBQVE7Z0JBQ3JCLElBQU1DLFFBQVFYO2dCQUVkLElBQUksQ0FBQ1ksS0FBSyxDQUFDRCxPQUFPRixTQUFTQztZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixPQUFPLEVBQUVDLFFBQVE7Z0JBQ3JCLElBQU1DLFFBQVFUO2dCQUVkLElBQUksQ0FBQ1UsS0FBSyxDQUFDRCxPQUFPRixTQUFTQztZQUM3Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLTCxPQUFPLEVBQUVDLFFBQVE7Z0JBQ3BCLElBQU1DLFFBQVFSO2dCQUVkLElBQUksQ0FBQ1MsS0FBSyxDQUFDRCxPQUFPRixTQUFTQztZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTixPQUFPLEVBQUVDLFFBQVE7Z0JBQ3ZCLElBQU1DLFFBQVFQO2dCQUVkLElBQUksQ0FBQ1EsS0FBSyxDQUFDRCxPQUFPRixTQUFTQztZQUM3Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNUCxPQUFPLEVBQUVDLFFBQVE7Z0JBQ3JCLElBQU1DLFFBQVFOO2dCQUVkLElBQUksQ0FBQ08sS0FBSyxDQUFDRCxPQUFPRixTQUFTQztZQUM3Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNRCxLQUFLLEVBQUVGLE9BQU8sRUFBRUMsUUFBUTtnQkFDNUIsSUFBTVQsV0FBUztvQkFDUEQ7b0JBQ0FFO29CQUNBQztvQkFDQUM7b0JBQ0FDO2lCQUNELEVBQ0RZLGFBQWFoQixTQUFPaUIsT0FBTyxDQUFDUCxRQUM1QlEsZ0JBQWdCbEIsU0FBT2lCLE9BQU8sQ0FBQyxJQUFJLENBQUNaLFFBQVE7Z0JBRWxELElBQUlXLGFBQWFFLGVBQWU7b0JBQzlCO2dCQUNGO2dCQUVBVixVQUFVVyxjQUFjVCxPQUFPRixTQUFTQyxXQUFZLEdBQUc7Z0JBRXZEVyxRQUFRQyxHQUFHLENBQUNiO1lBQ2Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsTUFBTSxFQUFFbEIsUUFBUTtnQkFDbEMsSUFBTWdCLE1BQU0sSUE1REt2QixJQTRER087Z0JBRXBCLE9BQU9nQjtZQUNUOzs7V0EvRG1CdkI7O0FBa0VyQixTQUFTcUIsY0FBY1QsS0FBSyxFQUFFRixPQUFPO1FBQUVDLFdBQUFBLGlFQUFXO0lBQ2hELElBQU1lLGlCQUFpQmQsTUFBTWUsV0FBVztJQUV4Q2pCLFVBQVUsQUFBQ0MsYUFBYSxPQUNkLEFBQUMsR0FBcUJBLE9BQW5CZSxnQkFBZSxNQUFrQmhCLE9BQWRDLFVBQVMsT0FBYSxPQUFSRCxXQUNsQyxBQUFDLEdBQXFCQSxPQUFuQmdCLGdCQUFlLE1BQVksT0FBUmhCO0lBRWxDLE9BQU9BO0FBQ1QifQ==