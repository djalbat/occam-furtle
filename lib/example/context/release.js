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
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                var procedures = this.getProcedures(), name = reference.getName(), procedure = procedures.find(function(procedure) {
                    var nameMatches = procedure.matchName(name);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return procedure;
            }
        },
        {
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                var procedure = this.findProcedureByReference(reference), procedurePresent = procedure !== null;
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
                var releaseContext = this;
                this.files.forEach(function(file) {
                    var fileContext = _index.FileContext.fromFile(file, releaseContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVzLCBmaWxlQ29udGV4dHMpIHtcbiAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRQcm9jZWR1cmVzID0gZmlsZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocHJvY2VkdXJlcywgZmlsZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlcy5maW5kKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSBmaWxlLm1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgbmFtZSA9IHJlZmVyZW5jZS5nZXROYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgY29uc29sZS5sb2cobWVzc2FnZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyBjb25zb2xlLmxvZyhtZXNzYWdlKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXM7XG5cbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChmaWxlcywgZmlsZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlsZXMiLCJmaWxlQ29udGV4dHMiLCJnZXRGaWxlcyIsImdldEZpbGVDb250ZXh0cyIsImFkZEZpbGUiLCJmaWxlIiwiYWRkRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImdldFByb2NlZHVyZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwicHJvY2VkdXJlcyIsImZvckVhY2giLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0UHJvY2VkdXJlcyIsImZpbmRGaWxlIiwiZmlsZVBhdGgiLCJmaW5kIiwiZmlsZVBhdGhNYXRjaGVzIiwibWF0Y2hGaWxlUGF0aCIsImZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsIm5hbWUiLCJnZXROYW1lIiwicHJvY2VkdXJlIiwibmFtZU1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsInByb2NlZHVyZVByZXNlbnQiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwidmVyaWZ5IiwicmVsZWFzZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImZyb21GaWxlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9hQTs7O2VBQUFBOzs7cUJBTGU7eUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRUQsSUFBQSxBQUFNRCwrQkFBTjthQUFNQSxlQUNDRyxLQUFLLEVBQUVDLFlBQVk7Z0NBRHBCSjtRQUVULElBQUksQ0FBQ0csS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSFhKOztZQU1YSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSTtnQkFDVixJQUFJLENBQUNMLEtBQUssQ0FBQ0YsSUFBSSxDQUFDTztZQUNsQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxXQUFXO2dCQUN4QixJQUFJLENBQUNOLFlBQVksQ0FBQ0gsSUFBSSxDQUFDUztZQUN6Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBY0Msc0JBQUFBLGlFQUFzQjtnQkFDbEMsSUFBTUMsYUFBYSxFQUFFO2dCQUVyQixJQUFJLENBQUNULFlBQVksQ0FBQ1UsT0FBTyxDQUFDLFNBQUNKO29CQUN6QixJQUFNSyxpQkFBaUIsT0FDakJDLHdCQUF3Qk4sWUFBWUMsYUFBYSxDQUFDSTtvQkFFeERkLEtBQUtZLFlBQVlHO2dCQUNuQjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFFBQVE7Z0JBQ2YsSUFBTVYsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ2dCLElBQUksQ0FBQyxTQUFDWDtvQkFDNUIsSUFBTVksa0JBQWtCWixLQUFLYSxhQUFhLENBQUNIO29CQUUzQyxJQUFJRSxpQkFBaUI7d0JBQ25CLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPWjtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsU0FBUztnQkFDaEMsSUFBTVYsYUFBYSxJQUFJLENBQUNGLGFBQWEsSUFDL0JhLE9BQU9ELFVBQVVFLE9BQU8sSUFDeEJDLFlBQVliLFdBQVdNLElBQUksQ0FBQyxTQUFDTztvQkFDM0IsSUFBTUMsY0FBY0QsVUFBVUUsU0FBUyxDQUFDSjtvQkFFeEMsSUFBSUcsYUFBYTt3QkFDZixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJOLFNBQVM7Z0JBQ3JDLElBQU1HLFlBQVksSUFBSSxDQUFDSix3QkFBd0IsQ0FBQ0MsWUFDMUNPLG1CQUFvQkosY0FBYztnQkFFeEMsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV2Q0csS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1ILE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXZDSSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0osT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7WUFFdENLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTCxPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV6Q00sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1OLE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXZDTyxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQU1DLGlCQUFpQixJQUFJO2dCQUUzQixJQUFJLENBQUNyQyxLQUFLLENBQUNXLE9BQU8sQ0FBQyxTQUFDTjtvQkFDbEIsSUFBTUUsY0FBYytCLGtCQUFXLENBQUNDLFFBQVEsQ0FBQ2xDLE1BQU1nQztvQkFFL0M5QixZQUFZNkIsTUFBTTtvQkFFbEIsTUFBS25DLFlBQVksQ0FBQ0gsSUFBSSxDQUFDUztnQkFDekI7WUFDRjs7OztZQUVPaUMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXhDLFFBQVEsRUFBRSxFQUNWQyxlQUFlLEVBQUUsRUFDakJvQyxpQkFBaUIsSUE3RmR4QyxlQTZGaUNHLE9BQU9DO2dCQUVqRCxPQUFPb0M7WUFDVDs7O1dBaEdXeEMifQ==