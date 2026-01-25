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
var _necessary = require("necessary");
var _index = require("../../index");
var _constants = require("../../constants");
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
var push = _necessary.arrayUtilities.push, _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log, files, fileContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log;
        this.files = files;
        this.fileContexts = fileContexts;
    }
    _create_class(ReleaseContext, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
            }
        },
        {
            key: "getFiles",
            value: function getFiles() {
                return this.files;
            }
        },
        {
            key: "getFileContexts",
            value: function getFileContexts() {
                return this.fileContexts;
            }
        },
        {
            key: "addFile",
            value: function addFile(file) {
                this.files.push(file);
            }
        },
        {
            key: "addFileContext",
            value: function addFileContext(fileContext) {
                this.fileContexts.push(fileContext);
            }
        },
        {
            key: "getProcedures",
            value: function getProcedures() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var procedures = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextProcedures = fileContext.getProcedures(includeRelease);
                    push(procedures, fileContextProcedures);
                });
                return procedures;
            }
        },
        {
            key: "findFile",
            value: function findFile(filePath) {
                var file = this.files.find(function(file) {
                    var filePathMatches = file.matchFilePath(filePath);
                    if (filePathMatches) {
                        return true;
                    }
                }) || null;
                return file;
            }
        },
        {
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                var procedures = this.getProcedures(), procedure = procedures.find(function(procedure) {
                    var nameMatches = procedure.matchName(name);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return procedure;
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var procedure = this.findProcedureByName(name), procedurePresent = procedure !== null;
                return procedurePresent;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = TRACE_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = DEBUG_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = INFO_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = WARNING_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = ERROR_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message, filePath, lineIndex) {
                this.log.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = null;
                return fileContext;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = -1;
                return depth;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                this.files.forEach(function(file) {
                    var context = _this, fileContext = _index.FileContext.fromFile(file, context);
                    fileContext.verify();
                    _this.fileContexts.push(fileContext);
                });
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var follow = true, logLevel = TRACE_LEVEL, log = _index.Log.fromFollowAndLogLevel(follow, logLevel), files = [], fileContexts = [], releaseContext = new ReleaseContext(log, files, fileContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBMb2csIEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgTEVWRUxTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgWyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMIF0gPSBMRVZFTFM7XG5cbmV4cG9ydCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgZmlsZXMsIGZpbGVDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRQcm9jZWR1cmVzID0gZmlsZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocHJvY2VkdXJlcywgZmlsZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlcy5maW5kKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSBmaWxlLm1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU1hdGNoZXMgPSBwcm9jZWR1cmUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTFxuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCkge1xuICAgIHRoaXMubG9nLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gbnVsbDtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGRlcHRoID0gLTE7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIGNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZm9sbG93ID0gdHJ1ZSxcbiAgICAgICAgICBsb2dMZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIGxvZyA9IExvZy5mcm9tRm9sbG93QW5kTG9nTGV2ZWwoZm9sbG93LCBsb2dMZXZlbCksXG4gICAgICAgICAgZmlsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIGZpbGVzLCBmaWxlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJMRVZFTFMiLCJUUkFDRV9MRVZFTCIsIkRFQlVHX0xFVkVMIiwiSU5GT19MRVZFTCIsIldBUk5JTkdfTEVWRUwiLCJFUlJPUl9MRVZFTCIsImxvZyIsImZpbGVzIiwiZmlsZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0RmlsZXMiLCJnZXRGaWxlQ29udGV4dHMiLCJhZGRGaWxlIiwiZmlsZSIsImFkZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJnZXRQcm9jZWR1cmVzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInByb2NlZHVyZXMiLCJmb3JFYWNoIiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dFByb2NlZHVyZXMiLCJmaW5kRmlsZSIsImZpbGVQYXRoIiwiZmluZCIsImZpbGVQYXRoTWF0Y2hlcyIsIm1hdGNoRmlsZVBhdGgiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwibmFtZSIsInByb2NlZHVyZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsInRyYWNlIiwibWVzc2FnZSIsImxpbmVJbmRleCIsImxldmVsIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsIndyaXRlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwidmVyaWZ5IiwiY29udGV4dCIsIkZpbGVDb250ZXh0IiwiZnJvbUZpbGUiLCJmcm9tTm90aGluZyIsImZvbGxvdyIsImxvZ0xldmVsIiwiTG9nIiwiZnJvbUZvbGxvd0FuZExvZ0xldmVsIiwicmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVhQTs7O2VBQUFBOzs7eUJBUmtCO3FCQUNFO3lCQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDcUVFLDJCQUFBQSxpQkFBTSxNQUEzRUMsY0FBcUVELFlBQXhERSxjQUF3REYs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