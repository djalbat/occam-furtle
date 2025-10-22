"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
var _index = require("../../index");
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
var nodeAsString = _index.stringUtilities.nodeAsString, nodesAsString = _index.stringUtilities.nodesAsString;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, node, tokens) {
        _class_call_check(this, FileContext);
        this.releaseContext = releaseContext;
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(FileContext, [
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.releaseContext;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var variables = [];
                return variables;
            }
        },
        {
            key: "getProcedures",
            value: function getProcedures() {
                var procedures = [];
                return procedures;
            }
        },
        {
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                return this.releaseContext.findProcedureByName(name);
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                return this.releaseContext.isProcedurePresentByName(name);
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString1(node) {
                var string = nodeAsString(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString1(nodes) {
                var string = nodesAsString(nodes, this.tokens);
                return string;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.releaseContext.trace(message, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.releaseContext.debug(message, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.releaseContext.info(message, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.releaseContext.warning(message, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.releaseContext.error(message, this.filePath);
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens, releaseContext) {
                var fileContext = new FileContext(releaseContext, node, tokens);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcygpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpOyB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJzdHJpbmdVdGlsaXRpZXMiLCJub2Rlc0FzU3RyaW5nIiwicmVsZWFzZUNvbnRleHQiLCJub2RlIiwidG9rZW5zIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwibmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsInN0cmluZyIsIm5vZGVzIiwidHJhY2UiLCJtZXNzYWdlIiwiZmlsZVBhdGgiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tTm9kZUFuZFRva2VucyIsImZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBUUMsZUFBZ0NDLHNCQUFlLENBQS9DRCxjQUFjRSxnQkFBa0JELHNCQUFlLENBQWpDQztBQUVQLElBQUEsQUFBTUgsNEJBQU47YUFBTUEsWUFDUEksY0FBYyxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRHJCTjtRQUVqQixJQUFJLENBQUNJLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR047O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGNBQWM7WUFDNUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxFQUFFO2dCQUVwQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsRUFBRTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLElBQUk7Z0JBQUksT0FBTyxJQUFJLENBQUNYLGNBQWMsQ0FBQ1UsbUJBQW1CLENBQUNDO1lBQU87OztZQUVsRkMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkQsSUFBSTtnQkFBSSxPQUFPLElBQUksQ0FBQ1gsY0FBYyxDQUFDWSx3QkFBd0IsQ0FBQ0Q7WUFBTzs7O1lBRTVGZCxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYUksSUFBSTtnQkFDZixJQUFNWSxTQUFTaEIsYUFBYUksTUFBTSxJQUFJLENBQUNDLE1BQU07Z0JBRTdDLE9BQU9XO1lBQ1Q7OztZQUVBZCxLQUFBQTttQkFBQUEsU0FBQUEsZUFBY2UsS0FBSztnQkFDakIsSUFBTUQsU0FBU2QsY0FBY2UsT0FBTyxJQUFJLENBQUNaLE1BQU07Z0JBRS9DLE9BQU9XO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFBSSxJQUFJLENBQUNoQixjQUFjLENBQUNlLEtBQUssQ0FBQ0MsU0FBUyxJQUFJLENBQUNDLFFBQVE7WUFBRzs7O1lBRXBFQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUYsT0FBTztnQkFBSSxJQUFJLENBQUNoQixjQUFjLENBQUNrQixLQUFLLENBQUNGLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUVwRUUsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtILE9BQU87Z0JBQUksSUFBSSxDQUFDaEIsY0FBYyxDQUFDbUIsSUFBSSxDQUFDSCxTQUFTLElBQUksQ0FBQ0MsUUFBUTtZQUFHOzs7WUFFbEVHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSixPQUFPO2dCQUFJLElBQUksQ0FBQ2hCLGNBQWMsQ0FBQ29CLE9BQU8sQ0FBQ0osU0FBUyxJQUFJLENBQUNDLFFBQVE7WUFBRzs7O1lBRXhFSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUwsT0FBTztnQkFBSSxJQUFJLENBQUNoQixjQUFjLENBQUNxQixLQUFLLENBQUNMLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7Ozs7WUFFN0RLLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQnJCLElBQUksRUFBRUMsTUFBTSxFQUFFRixjQUFjO2dCQUNuRCxJQUFNdUIsY0FBYyxJQTFESDNCLFlBMERtQkksZ0JBQWdCQyxNQUFNQztnQkFFMUQsT0FBT3FCO1lBQ1Q7OztXQTdEbUIzQiJ9