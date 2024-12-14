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
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = this;
                return fileContext;
            }
        },
        {
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                return this.releaseContext.findProcedureByReference(reference);
            }
        },
        {
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                return this.releaseContext.isProcedurePresentByReference(reference);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcygpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcztcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucywgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwic3RyaW5nVXRpbGl0aWVzIiwibm9kZXNBc1N0cmluZyIsInJlbGVhc2VDb250ZXh0Iiwibm9kZSIsInRva2VucyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwic3RyaW5nIiwibm9kZXMiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJmaWxlUGF0aCIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBUUMsZUFBZ0NDLHNCQUFlLENBQS9DRCxjQUFjRSxnQkFBa0JELHNCQUFlLENBQWpDQztBQUVQLElBQUEsQUFBTUgsNEJBQU47YUFBTUEsWUFDUEksY0FBYyxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRHJCTjtRQUVqQixJQUFJLENBQUNJLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR047O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGNBQWM7WUFDNUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxFQUFFO2dCQUVwQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsRUFBRTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjLElBQUk7Z0JBRXhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCQyxTQUFTO2dCQUFJLE9BQU8sSUFBSSxDQUFDYixjQUFjLENBQUNZLHdCQUF3QixDQUFDQztZQUFZOzs7WUFFdEdDLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJELFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUNiLGNBQWMsQ0FBQ2MsNkJBQTZCLENBQUNEO1lBQVk7OztZQUVoSGhCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFhSSxJQUFJO2dCQUNmLElBQU1jLFNBQVNsQixhQUFhSSxNQUFNLElBQUksQ0FBQ0MsTUFBTTtnQkFFN0MsT0FBT2E7WUFDVDs7O1lBRUFoQixLQUFBQTttQkFBQUEsU0FBQUEsZUFBY2lCLEtBQUs7Z0JBQ2pCLElBQU1ELFNBQVNoQixjQUFjaUIsT0FBTyxJQUFJLENBQUNkLE1BQU07Z0JBRS9DLE9BQU9hO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFBSSxJQUFJLENBQUNsQixjQUFjLENBQUNpQixLQUFLLENBQUNDLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUVwRUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLE9BQU87Z0JBQUksSUFBSSxDQUFDbEIsY0FBYyxDQUFDb0IsS0FBSyxDQUFDRixTQUFTLElBQUksQ0FBQ0MsUUFBUTtZQUFHOzs7WUFFcEVFLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLSCxPQUFPO2dCQUFJLElBQUksQ0FBQ2xCLGNBQWMsQ0FBQ3FCLElBQUksQ0FBQ0gsU0FBUyxJQUFJLENBQUNDLFFBQVE7WUFBRzs7O1lBRWxFRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosT0FBTztnQkFBSSxJQUFJLENBQUNsQixjQUFjLENBQUNzQixPQUFPLENBQUNKLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUV4RUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1MLE9BQU87Z0JBQUksSUFBSSxDQUFDbEIsY0FBYyxDQUFDdUIsS0FBSyxDQUFDTCxTQUFTLElBQUksQ0FBQ0MsUUFBUTtZQUFHOzs7O1lBRTdESyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0J2QixJQUFJLEVBQUVDLE1BQU0sRUFBRUYsY0FBYztnQkFDbkQsSUFBTVcsY0FBYyxJQWhFSGYsWUFnRW1CSSxnQkFBZ0JDLE1BQU1DO2dCQUUxRCxPQUFPUztZQUNUOzs7V0FuRW1CZiJ9