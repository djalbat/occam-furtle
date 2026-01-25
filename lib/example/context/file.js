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
var _context = require("../../utilities/context");
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
    function FileContext(context, node, tokens) {
        _class_call_check(this, FileContext);
        this.context = context;
        this.node = node;
        this.tokens = tokens;
        return (0, _context.chainContext)(this);
    }
    _create_class(FileContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
                this.context.trace(message, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.context.debug(message, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.context.info(message, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.context.warning(message, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.context.error(message, this.filePath);
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = this; ///
                return fileContext;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens, context) {
                var fileContext = new FileContext(context, node, tokens);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgY2hhaW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcygpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBsZXQgZGVwdGggPSB0aGlzLmNvbnRleHQuZ2V0RGVwdGgoKTtcblxuICAgIGRlcHRoKys7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQoY29udGV4dCwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwic3RyaW5nVXRpbGl0aWVzIiwibm9kZXNBc1N0cmluZyIsImNvbnRleHQiLCJub2RlIiwidG9rZW5zIiwiY2hhaW5Db250ZXh0IiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsInN0cmluZyIsIm5vZGVzIiwidHJhY2UiLCJtZXNzYWdlIiwiZmlsZVBhdGgiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJnZXRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztxQkFOVzt1QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsZUFBZ0NDLHNCQUFlLENBQS9DRCxjQUFjRSxnQkFBa0JELHNCQUFlLENBQWpDQztBQUVQLElBQUEsQUFBTUgsNEJBQU47YUFBTUEsWUFDUEksT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRGROO1FBRWpCLElBQUksQ0FBQ0ksT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUVkLE9BQU9DLElBQUFBLHFCQUFZLEVBQUMsSUFBSTs7a0JBTlBQOztZQVNuQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksRUFBRTtnQkFFcEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLEVBQUU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBYixLQUFBQTttQkFBQUEsU0FBQUEsY0FBYUksSUFBSTtnQkFDZixJQUFNVSxTQUFTZCxhQUFhSSxNQUFNLElBQUksQ0FBQ0MsTUFBTTtnQkFFN0MsT0FBT1M7WUFDVDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFjYSxLQUFLO2dCQUNqQixJQUFNRCxTQUFTWixjQUFjYSxPQUFPLElBQUksQ0FBQ1YsTUFBTTtnQkFFL0MsT0FBT1M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUFJLElBQUksQ0FBQ2QsT0FBTyxDQUFDYSxLQUFLLENBQUNDLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUU3REMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLE9BQU87Z0JBQUksSUFBSSxDQUFDZCxPQUFPLENBQUNnQixLQUFLLENBQUNGLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUU3REUsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtILE9BQU87Z0JBQUksSUFBSSxDQUFDZCxPQUFPLENBQUNpQixJQUFJLENBQUNILFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUUzREcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFKLE9BQU87Z0JBQUksSUFBSSxDQUFDZCxPQUFPLENBQUNrQixPQUFPLENBQUNKLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUVqRUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1MLE9BQU87Z0JBQUksSUFBSSxDQUFDZCxPQUFPLENBQUNtQixLQUFLLENBQUNMLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUU3REssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxFQUFFLEdBQUc7Z0JBRTdCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsUUFBUSxJQUFJLENBQUN2QixPQUFPLENBQUNzQixRQUFRO2dCQUVqQ0M7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0J2QixJQUFJLEVBQUVDLE1BQU0sRUFBRUYsT0FBTztnQkFDNUMsSUFBTXFCLGNBQWMsSUF0RUh6QixZQXNFbUJJLFNBQVNDLE1BQU1DO2dCQUVuRCxPQUFPbUI7WUFDVDs7O1dBekVtQnpCIn0=