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
var _constants = require("./constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
var Log = /*#__PURE__*/ function() {
    function Log(messages, logLevel, follow) {
        _class_call_check(this, Log);
        this.messages = messages;
        this.logLevel = logLevel;
        this.follow = follow;
    }
    _create_class(Log, [
        {
            key: "getMessages",
            value: function getMessages() {
                return this.messages;
            }
        },
        {
            key: "getLogLevel",
            value: function getLogLevel() {
                return this.logLevel;
            }
        },
        {
            key: "getFollow",
            value: function getFollow() {
                return this.follow;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = TRACE_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = DEBUG_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = INFO_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = WARNING_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = ERROR_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "write",
            value: function write(level, message, filePath) {
                var lineIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                var levelIndex = _constants.LEVELS.indexOf(level), logLevelIndex = _constants.LEVELS.indexOf(this.logLevel);
                if (levelIndex < logLevelIndex) {
                    return;
                }
                message = formatMessage(level, message, filePath, lineIndex); ///
                this.follow ? console.log(message) : this.messages.push(message);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var messages = null, logLevel = TRACE_LEVEL, follow = true, log = new Log(messages, logLevel, follow);
                return log;
            }
        },
        {
            key: "fromFollowAndLogLevel",
            value: function fromFollowAndLogLevel(follow, logLevel) {
                var messages = follow ? null : [], log = new Log(messages, logLevel, follow);
                return log;
            }
        }
    ]);
    return Log;
}();
function formatMessage(level, message, filePath, lineIndex) {
    var formattedMessage = _constants.EMPTY_STRING;
    var leftPaddedLevel = leftPadLevel(level), upperCaseLeftPaddedLevel = leftPaddedLevel.toUpperCase();
    formattedMessage += "".concat(upperCaseLeftPaddedLevel, ":");
    if (filePath !== null) {
        formattedMessage += " ".concat(filePath);
    }
    if (lineIndex !== null) {
        var leftPaddedLineIndex = leftPadLineIndex(lineIndex);
        formattedMessage += " [".concat(leftPaddedLineIndex, "]");
    }
    formattedMessage += " - ".concat(message);
    message = formattedMessage; ///
    return message;
}
function leftPadLineIndex(lineIndex) {
    lineIndex = "".concat(lineIndex);
    var maximumLength = _constants.LINE_INDEX_MAXIMUM_LENGTH, leftPaddedLineIndex = leftPad(lineIndex, maximumLength);
    return leftPaddedLineIndex;
}
function leftPadLevel(level) {
    var maximumLength = _constants.LEVEL_MAXIMUM_LENGTH, leftPaddedLevel = leftPad(level, maximumLength);
    return leftPaddedLevel;
}
function leftPad(string, maximumLength) {
    var stringLength = string.length, length = maximumLength - stringLength, indent = _constants.SINGLE_SPACE.repeat(length), leftPaddedString = "".concat(indent).concat(string);
    return leftPaddedString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IExFVkVMUywgU0lOR0xFX1NQQUNFLCBFTVBUWV9TVFJJTkcsIExFVkVMX01BWElNVU1fTEVOR1RILCBMSU5FX0lOREVYX01BWElNVU1fTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCBdID0gTEVWRUxTO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YobGV2ZWwpLFxuICAgICAgICAgIGxvZ0xldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZih0aGlzLmxvZ0xldmVsKTtcblxuICAgIGlmIChsZXZlbEluZGV4IDwgbG9nTGV2ZWxJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTsgIC8vL1xuXG4gICAgdGhpcy5mb2xsb3cgP1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSkgOlxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBudWxsLFxuICAgICAgICAgIGxvZ0xldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgZm9sbG93ID0gdHJ1ZSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvbGxvd0FuZExvZ0xldmVsKGZvbGxvdywgbG9nTGV2ZWwpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGZvbGxvdyA/XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KSB7XG4gIGxldCBmb3JtYXR0ZWRNZXNzYWdlID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IGxlZnRQYWRkZWRMZXZlbCA9IGxlZnRQYWRMZXZlbChsZXZlbCksXG4gICAgICAgIHVwcGVyQ2FzZUxlZnRQYWRkZWRMZXZlbCA9IGxlZnRQYWRkZWRMZXZlbC50b1VwcGVyQ2FzZSgpO1xuXG4gIGZvcm1hdHRlZE1lc3NhZ2UgKz0gYCR7dXBwZXJDYXNlTGVmdFBhZGRlZExldmVsfTpgO1xuXG4gIGlmIChmaWxlUGF0aCAhPT0gbnVsbCkge1xuICAgIGZvcm1hdHRlZE1lc3NhZ2UgKz0gYCAke2ZpbGVQYXRofWA7XG4gIH1cblxuICBpZiAobGluZUluZGV4ICE9PSBudWxsKSB7XG4gICAgY29uc3QgbGVmdFBhZGRlZExpbmVJbmRleCA9IGxlZnRQYWRMaW5lSW5kZXgobGluZUluZGV4KTtcblxuICAgIGZvcm1hdHRlZE1lc3NhZ2UgKz0gYCBbJHtsZWZ0UGFkZGVkTGluZUluZGV4fV1gO1xuICB9XG5cbiAgZm9ybWF0dGVkTWVzc2FnZSArPSBgIC0gJHttZXNzYWdlfWA7XG5cbiAgbWVzc2FnZSA9IGZvcm1hdHRlZE1lc3NhZ2U7IC8vL1xuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkTGluZUluZGV4KGxpbmVJbmRleCkge1xuICBsaW5lSW5kZXggPSBgJHtsaW5lSW5kZXh9YDtcblxuICBjb25zdCBtYXhpbXVtTGVuZ3RoID0gTElORV9JTkRFWF9NQVhJTVVNX0xFTkdUSCxcbiAgICAgICAgbGVmdFBhZGRlZExpbmVJbmRleCA9IGxlZnRQYWQobGluZUluZGV4LCBtYXhpbXVtTGVuZ3RoKTtcblxuICByZXR1cm4gbGVmdFBhZGRlZExpbmVJbmRleDtcbn1cblxuZnVuY3Rpb24gbGVmdFBhZExldmVsKGxldmVsKSB7XG4gIGNvbnN0IG1heGltdW1MZW5ndGggPSBMRVZFTF9NQVhJTVVNX0xFTkdUSCxcbiAgICAgICAgbGVmdFBhZGRlZExldmVsID0gbGVmdFBhZChsZXZlbCwgbWF4aW11bUxlbmd0aCk7XG5cbiAgcmV0dXJuIGxlZnRQYWRkZWRMZXZlbDtcbn1cblxuZnVuY3Rpb24gbGVmdFBhZChzdHJpbmcsIG1heGltdW1MZW5ndGgpIHtcbiAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgbGVuZ3RoID0gbWF4aW11bUxlbmd0aCAtIHN0cmluZ0xlbmd0aCxcbiAgICAgICAgaW5kZW50ID0gU0lOR0xFX1NQQUNFLnJlcGVhdChsZW5ndGgpLFxuICAgICAgICBsZWZ0UGFkZGVkU3RyaW5nID0gYCR7aW5kZW50fSR7c3RyaW5nfWA7XG5cbiAgcmV0dXJuIGxlZnRQYWRkZWRTdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJMb2ciLCJMRVZFTFMiLCJUUkFDRV9MRVZFTCIsIkRFQlVHX0xFVkVMIiwiSU5GT19MRVZFTCIsIldBUk5JTkdfTEVWRUwiLCJFUlJPUl9MRVZFTCIsIm1lc3NhZ2VzIiwibG9nTGV2ZWwiLCJmb2xsb3ciLCJnZXRNZXNzYWdlcyIsImdldExvZ0xldmVsIiwiZ2V0Rm9sbG93IiwidHJhY2UiLCJtZXNzYWdlIiwiZmlsZVBhdGgiLCJsZXZlbCIsIndyaXRlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwibGluZUluZGV4IiwibGV2ZWxJbmRleCIsImluZGV4T2YiLCJsb2dMZXZlbEluZGV4IiwiZm9ybWF0TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZnJvbU5vdGhpbmciLCJmcm9tRm9sbG93QW5kTG9nTGV2ZWwiLCJmb3JtYXR0ZWRNZXNzYWdlIiwiRU1QVFlfU1RSSU5HIiwibGVmdFBhZGRlZExldmVsIiwibGVmdFBhZExldmVsIiwidXBwZXJDYXNlTGVmdFBhZGRlZExldmVsIiwidG9VcHBlckNhc2UiLCJsZWZ0UGFkZGVkTGluZUluZGV4IiwibGVmdFBhZExpbmVJbmRleCIsIm1heGltdW1MZW5ndGgiLCJMSU5FX0lOREVYX01BWElNVU1fTEVOR1RIIiwibGVmdFBhZCIsIkxFVkVMX01BWElNVU1fTEVOR1RIIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZW50IiwiU0lOR0xFX1NQQUNFIiwicmVwZWF0IiwibGVmdFBhZGRlZFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSitFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEcsSUFBNkVDLDJCQUFBQSxpQkFBTSxNQUEzRUMsY0FBcUVELFlBQXhERSxjQUF3REYsWUFBM0NHLGFBQTJDSCxZQUEvQkksZ0JBQStCSixZQUFoQkssY0FBZ0JMO0FBRTlELElBQUEsQUFBTUQsb0JBQU47YUFBTUEsSUFDUE8sUUFBUSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07Z0NBRG5CVDtRQUVqQixJQUFJLENBQUNPLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSkdUOztZQU9uQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNB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