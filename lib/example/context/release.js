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
                    var filePathMatches = file.matchFilePath();
                });
                return file;
            }
        },
        {
            key: "addFileContext",
            value: function addFileContext(fileContext) {
                this.fileContexts.push(fileContext);
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
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVzLCBmaWxlQ29udGV4dHMpIHtcbiAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFByb2NlZHVyZXMgPSBmaWxlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCBmaWxlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzLmZpbmQoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoTWF0Y2hlcyA9IGZpbGUubWF0Y2hGaWxlUGF0aCgpXG4gICAgfSlcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgY29uc29sZS5sb2cobWVzc2FnZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyBjb25zb2xlLmxvZyhtZXNzYWdlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlsZXMiLCJmaWxlQ29udGV4dHMiLCJnZXRGaWxlcyIsImdldEZpbGVDb250ZXh0cyIsImdldFByb2NlZHVyZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwicHJvY2VkdXJlcyIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRQcm9jZWR1cmVzIiwiZmluZEZpbGUiLCJmaWxlUGF0aCIsImZpbGUiLCJmaW5kIiwiZmlsZVBhdGhNYXRjaGVzIiwibWF0Y2hGaWxlUGF0aCIsImFkZEZpbGVDb250ZXh0IiwidHJhY2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWFBOzs7ZUFBQUE7Ozt5QkFKa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRUQsSUFBQSxBQUFNRCwrQkFBTjthQUFNQSxlQUNDRyxLQUFLLEVBQUVDLFlBQVk7Z0NBRHBCSjtRQUVULElBQUksQ0FBQ0csS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSFhKOztZQU1YSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWNDLHNCQUFBQSxpRUFBc0I7Z0JBQ2xDLElBQU1DLGFBQWEsRUFBRTtnQkFFckIsSUFBSSxDQUFDTCxZQUFZLENBQUNNLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsSUFBTUMsaUJBQWlCLE9BQ2pCQyx3QkFBd0JGLFlBQVlKLGFBQWEsQ0FBQ0s7b0JBRXhEWCxLQUFLUSxZQUFZSTtnQkFDbkI7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxRQUFRO2dCQUNmLElBQU1DLE9BQU8sSUFBSSxDQUFDYixLQUFLLENBQUNjLElBQUksQ0FBQyxTQUFDRDtvQkFDNUIsSUFBTUUsa0JBQWtCRixLQUFLRyxhQUFhO2dCQUM1QztnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVULFdBQVc7Z0JBQ3hCLElBQUksQ0FBQ1AsWUFBWSxDQUFDSCxJQUFJLENBQUNVO1lBQ3pCOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXZDRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUgsT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7WUFFdkNJLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLSixPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV0Q0ssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFMLE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXpDTSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTU4sT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7V0EvQzVCdEIifQ==