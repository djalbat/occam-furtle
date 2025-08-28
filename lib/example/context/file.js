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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcygpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucywgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwic3RyaW5nVXRpbGl0aWVzIiwibm9kZXNBc1N0cmluZyIsInJlbGVhc2VDb250ZXh0Iiwibm9kZSIsInRva2VucyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJzdHJpbmciLCJub2RlcyIsInRyYWNlIiwibWVzc2FnZSIsImZpbGVQYXRoIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSlc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQVFDLGVBQWdDQyxzQkFBZSxDQUEvQ0QsY0FBY0UsZ0JBQWtCRCxzQkFBZSxDQUFqQ0M7QUFFUCxJQUFBLEFBQU1ILDRCQUFOO2FBQU1BLFlBQ1BJLGNBQWMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNO2dDQURyQk47UUFFakIsSUFBSSxDQUFDSSxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSkdOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxjQUFjO1lBQzVCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksRUFBRTtnQkFFcEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLEVBQUU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCQyxTQUFTO2dCQUFJLE9BQU8sSUFBSSxDQUFDWCxjQUFjLENBQUNVLHdCQUF3QixDQUFDQztZQUFZOzs7WUFFdEdDLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJELFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUNYLGNBQWMsQ0FBQ1ksNkJBQTZCLENBQUNEO1lBQVk7OztZQUVoSGQsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWFJLElBQUk7Z0JBQ2YsSUFBTVksU0FBU2hCLGFBQWFJLE1BQU0sSUFBSSxDQUFDQyxNQUFNO2dCQUU3QyxPQUFPVztZQUNUOzs7WUFFQWQsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWNlLEtBQUs7Z0JBQ2pCLElBQU1ELFNBQVNkLGNBQWNlLE9BQU8sSUFBSSxDQUFDWixNQUFNO2dCQUUvQyxPQUFPVztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQUksSUFBSSxDQUFDaEIsY0FBYyxDQUFDZSxLQUFLLENBQUNDLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUVwRUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1GLE9BQU87Z0JBQUksSUFBSSxDQUFDaEIsY0FBYyxDQUFDa0IsS0FBSyxDQUFDRixTQUFTLElBQUksQ0FBQ0MsUUFBUTtZQUFHOzs7WUFFcEVFLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLSCxPQUFPO2dCQUFJLElBQUksQ0FBQ2hCLGNBQWMsQ0FBQ21CLElBQUksQ0FBQ0gsU0FBUyxJQUFJLENBQUNDLFFBQVE7WUFBRzs7O1lBRWxFRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosT0FBTztnQkFBSSxJQUFJLENBQUNoQixjQUFjLENBQUNvQixPQUFPLENBQUNKLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQUc7OztZQUV4RUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1MLE9BQU87Z0JBQUksSUFBSSxDQUFDaEIsY0FBYyxDQUFDcUIsS0FBSyxDQUFDTCxTQUFTLElBQUksQ0FBQ0MsUUFBUTtZQUFHOzs7O1lBRTdESyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JyQixJQUFJLEVBQUVDLE1BQU0sRUFBRUYsY0FBYztnQkFDbkQsSUFBTXVCLGNBQWMsSUExREgzQixZQTBEbUJJLGdCQUFnQkMsTUFBTUM7Z0JBRTFELE9BQU9xQjtZQUNUOzs7V0E3RG1CM0IifQ==