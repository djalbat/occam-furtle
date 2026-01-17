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
var _index = require("../../index");
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
var push = _necessary.arrayUtilities.push;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(files, fileContexts) {
        _class_call_check(this, ReleaseContext);
        this.files = files;
        this.fileContexts = fileContexts;
    }
    _create_class(ReleaseContext, [
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
                var files = [], fileContexts = [], releaseContext = new ReleaseContext(files, fileContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVzLCBmaWxlQ29udGV4dHMpIHtcbiAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRQcm9jZWR1cmVzID0gZmlsZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocHJvY2VkdXJlcywgZmlsZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlcy5maW5kKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSBmaWxlLm1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU1hdGNoZXMgPSBwcm9jZWR1cmUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgY29uc29sZS5sb2cobWVzc2FnZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyBjb25zb2xlLmxvZyhtZXNzYWdlKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgY29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnZlcmlmeSgpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBmaWxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGZpbGVzLCBmaWxlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWxlcyIsImZpbGVDb250ZXh0cyIsImdldEZpbGVzIiwiZ2V0RmlsZUNvbnRleHRzIiwiYWRkRmlsZSIsImZpbGUiLCJhZGRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZ2V0UHJvY2VkdXJlcyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJwcm9jZWR1cmVzIiwiZm9yRWFjaCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRQcm9jZWR1cmVzIiwiZmluZEZpbGUiLCJmaWxlUGF0aCIsImZpbmQiLCJmaWxlUGF0aE1hdGNoZXMiLCJtYXRjaEZpbGVQYXRoIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwidmVyaWZ5IiwiY29udGV4dCIsIkZpbGVDb250ZXh0IiwiZnJvbUZpbGUiLCJmcm9tTm90aGluZyIsInJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPYUE7OztlQUFBQTs7O3FCQUxlO3lCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVELElBQUEsQUFBTUQsK0JBQU47YUFBTUEsZUFDQ0csS0FBSyxFQUFFQyxZQUFZO2dDQURwQko7UUFFVCxJQUFJLENBQUNHLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUhYSjs7WUFNWEssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUk7Z0JBQ1YsSUFBSSxDQUFDTCxLQUFLLENBQUNGLElBQUksQ0FBQ087WUFDbEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsV0FBVztnQkFDeEIsSUFBSSxDQUFDTixZQUFZLENBQUNILElBQUksQ0FBQ1M7WUFDekI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWNDLHNCQUFBQSxpRUFBc0I7Z0JBQ2xDLElBQU1DLGFBQWEsRUFBRTtnQkFFckIsSUFBSSxDQUFDVCxZQUFZLENBQUNVLE9BQU8sQ0FBQyxTQUFDSjtvQkFDekIsSUFBTUssaUJBQWlCLE9BQ2pCQyx3QkFBd0JOLFlBQVlDLGFBQWEsQ0FBQ0k7b0JBRXhEZCxLQUFLWSxZQUFZRztnQkFDbkI7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxRQUFRO2dCQUNmLElBQU1WLE9BQU8sSUFBSSxDQUFDTCxLQUFLLENBQUNnQixJQUFJLENBQUMsU0FBQ1g7b0JBQzVCLElBQU1ZLGtCQUFrQlosS0FBS2EsYUFBYSxDQUFDSDtvQkFFM0MsSUFBSUUsaUJBQWlCO3dCQUNuQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT1o7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLElBQUk7Z0JBQ3RCLElBQU1WLGFBQWEsSUFBSSxDQUFDRixhQUFhLElBQy9CYSxZQUFZWCxXQUFXTSxJQUFJLENBQUMsU0FBQ0s7b0JBQzNCLElBQU1DLGNBQWNELFVBQVVFLFNBQVMsQ0FBQ0g7b0JBRXhDLElBQUlFLGFBQWE7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCSixJQUFJO2dCQUMzQixJQUFNQyxZQUFZLElBQUksQ0FBQ0YsbUJBQW1CLENBQUNDLE9BQ3JDSyxtQkFBb0JKLGNBQWM7Z0JBRXhDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7WUFFdkNHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSCxPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV2Q0ksS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtKLE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXRDSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUwsT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7WUFFekNNLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNTixPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV2Q08sS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJLENBQUNsQyxLQUFLLENBQUNXLE9BQU8sQ0FBQyxTQUFDTjtvQkFDbEIsSUFBTThCLGlCQUNBNUIsY0FBYzZCLGtCQUFXLENBQUNDLFFBQVEsQ0FBQ2hDLE1BQU04QjtvQkFFL0M1QixZQUFZMkIsTUFBTTtvQkFFbEIsTUFBS2pDLFlBQVksQ0FBQ0gsSUFBSSxDQUFDUztnQkFDekI7WUFDRjs7OztZQUVPK0IsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXRDLFFBQVEsRUFBRSxFQUNWQyxlQUFlLEVBQUUsRUFDakJzQyxpQkFBaUIsSUEzRmQxQyxlQTJGaUNHLE9BQU9DO2dCQUVqRCxPQUFPc0M7WUFDVDs7O1dBOUZXMUMifQ==