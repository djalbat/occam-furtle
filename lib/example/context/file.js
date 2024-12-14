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
var nodeAsString = _index.stringUtilities.nodeAsString;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(node, tokens) {
        _class_call_check(this, FileContext);
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(FileContext, [
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
            key: "nodeAsString",
            value: function nodeAsString1(node) {
                var string = nodeAsString(node, this.tokens);
                return string;
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
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var fileContext = new FileContext(node, tokens);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XG5cbmNvbnN0IHsgbm9kZUFzU3RyaW5nIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBuYW1lID0gcmVmZXJlbmNlLmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU1hdGNoZXMgPSBwcm9jZWR1cmUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyBjb25zb2xlLmxvZyhtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgY29uc29sZS5sb2cobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgY29uc29sZS5sb2cobWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgY29uc29sZS5sb2cobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IGNvbnNvbGUubG9nKG1lc3NhZ2UpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsIm5vZGVBc1N0cmluZyIsInN0cmluZ1V0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicHJvY2VkdXJlcyIsImdldFByb2NlZHVyZXMiLCJuYW1lIiwiZ2V0TmFtZSIsInByb2NlZHVyZSIsImZpbmQiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsInN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tTm9kZUFuZFRva2VucyIsImZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBTSxBQUFFQyxlQUFpQkMsc0JBQWUsQ0FBaENEO0FBRU8sSUFBQSxBQUFNRCw0QkFBTjthQUFNQSxZQUNQRyxJQUFJLEVBQUVDLE1BQU07Z0NBRExKO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksRUFBRTtnQkFFcEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUJDLFNBQVM7Z0JBQ2hDLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxPQUFPSCxVQUFVSSxPQUFPLElBQ3hCQyxZQUFZSixXQUFXSyxJQUFJLENBQUMsU0FBQ0Q7b0JBQzNCLElBQU1FLGNBQWNGLFVBQVVHLFNBQVMsQ0FBQ0w7b0JBRXhDLElBQUlJLGFBQWE7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU9GO1lBQ1Q7OztZQUVBZCxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYUUsSUFBSTtnQkFDZixJQUFNZ0IsU0FBU2xCLGFBQWFFLE1BQU0sSUFBSSxDQUFDQyxNQUFNO2dCQUU3QyxPQUFPZTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXZDRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUgsT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7WUFFdkNJLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLSixPQUFPO2dCQUFJQyxRQUFRQyxHQUFHLENBQUNGO1lBQVU7OztZQUV0Q0ssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFMLE9BQU87Z0JBQUlDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFBVTs7O1lBRXpDTSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTU4sT0FBTztnQkFBSUMsUUFBUUMsR0FBRyxDQUFDRjtZQUFVOzs7O1lBRWhDTyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0J6QixJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU15QixjQUFjLElBbkRIN0IsWUFtRG1CRyxNQUFNQztnQkFFMUMsT0FBT3lCO1lBQ1Q7OztXQXREbUI3QiJ9