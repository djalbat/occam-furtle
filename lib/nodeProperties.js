"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _exception = /*#__PURE__*/ _interop_require_default(require("./exception"));
var _nodeProperty = /*#__PURE__*/ _interop_require_default(require("./nodeProperty"));
var _types = require("./types");
var _parameterNames = require("./parameterNames");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var types = [
    _types.STRING_TYPE,
    _types.BOOLEAN_TYPE,
    _types.NODES_TYPE
], names = [
    _parameterNames.CONTENT_PARAMETER_NAME,
    _parameterNames.TERMINAL_PARAMETER_NAME,
    _parameterNames.CHILD_NODES_PARAMETER_NAME
];
var NodeProperties = /*#__PURE__*/ function() {
    function NodeProperties(string, array) {
        _class_call_check(this, NodeProperties);
        this.string = string;
        this.array = array;
    }
    _create_class(NodeProperties, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "someNodeProperty",
            value: function someNodeProperty(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var nodePropertiesString = this.getString(), namedParameterString = namedParameter.getString();
                context.trace("Matching the '".concat(namedParameterString, "' named parameter against the '").concat(nodePropertiesString, "' node properties..."));
                var namedParameterMatches = this.someNodeProperty(function(nodeProperty) {
                    var namedParameterMatchesNodeProperty = nodeProperty.matchNamedParameter(namedParameter, context);
                    if (namedParameterMatchesNodeProperty) {
                        return true;
                    }
                });
                if (!namedParameterMatches) {
                    var message = "The '".concat(namedParameterString, "' named parameter does not match any of the '").concat(nodePropertiesString, "' node properties."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(namedParameterString, "' named parameter against the '").concat(nodePropertiesString, "' node properties."));
            }
        },
        {
            key: "matchNamedParameters",
            value: function matchNamedParameters(namedParameters, context) {
                var _this = this;
                namedParameters.forEachNamedParameter(function(namedParameter) {
                    _this.matchNamedParameter(namedParameter, context);
                });
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var context = null, array = names.map(function(name, index) {
                    var type = types[index], nodeProperty = _nodeProperty.default.fromNameAndType(name, type, context);
                    return nodeProperty;
                }), string = stringFromArray(array, context), nodeProperties = new NodeProperties(string, array);
                return nodeProperties;
            }
        }
    ]);
    return NodeProperties;
}();
var nodeProperties = NodeProperties.fromNothing();
var _default = nodeProperties;
function stringFromArray(array, context) {
    var nodePropertiesString = array.reduce(function(nodePropertiesString, nodeProperty) {
        var nodePropertyString = nodeProperty.getString();
        nodePropertiesString = nodePropertiesString === null ? nodePropertyString : "".concat(nodePropertiesString, ", ").concat(nodePropertyString);
        return nodePropertiesString;
    }, null), string = nodePropertiesString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi9leGNlcHRpb25cIjtcbmltcG9ydCBOb2RlUHJvcGVydHkgZnJvbSBcIi4vbm9kZVByb3BlcnR5XCI7XG5cbmltcG9ydCB7IE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3QgdHlwZXMgPSBbXG4gICAgICAgIFNUUklOR19UWVBFLFxuICAgICAgICBCT09MRUFOX1RZUEUsXG4gICAgICAgIE5PREVTX1RZUEUsXG4gICAgICBdLFxuICAgICAgbmFtZXMgPSBbXG4gICAgICAgIENPTlRFTlRfUEFSQU1FVEVSX05BTUUsXG4gICAgICAgIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLFxuICAgICAgICBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRVxuICAgICAgXTtcblxuY2xhc3MgTm9kZVByb3BlcnRpZXMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgc29tZU5vZGVQcm9wZXJ0eShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUHJvcGVydGllc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bm9kZVByb3BlcnRpZXNTdHJpbmd9JyBub2RlIHByb3BlcnRpZXMuLi5gKTtcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9IHRoaXMuc29tZU5vZGVQcm9wZXJ0eSgobm9kZVByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlck1hdGNoZXNOb2RlUHJvcGVydHkgPSBub2RlUHJvcGVydHkubWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICAgIGlmIChuYW1lZFBhcmFtZXRlck1hdGNoZXNOb2RlUHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW5hbWVkUGFyYW1ldGVyTWF0Y2hlcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSAnJHtub2RlUHJvcGVydGllc1N0cmluZ30nIG5vZGUgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bm9kZVByb3BlcnRpZXNTdHJpbmd9JyBub2RlIHByb3BlcnRpZXMuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVycyhuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBuYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgdGhpcy5tYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBhcnJheSA9IG5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBub2RlUHJvcGVydHkgPSBOb2RlUHJvcGVydHkuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbm9kZVByb3BlcnR5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZVByb3BlcnRpZXMgPSBuZXcgTm9kZVByb3BlcnRpZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gbm9kZVByb3BlcnRpZXM7XG4gIH1cbn1cblxuY29uc3Qgbm9kZVByb3BlcnRpZXMgPSBOb2RlUHJvcGVydGllcy5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBub2RlUHJvcGVydGllcztcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVQcm9wZXJ0aWVzU3RyaW5nID0gYXJyYXkucmVkdWNlKChub2RlUHJvcGVydGllc1N0cmluZywgbm9kZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZVByb3BlcnR5U3RyaW5nID0gbm9kZVByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgICAgICAgbm9kZVByb3BlcnRpZXNTdHJpbmcgPSAobm9kZVByb3BlcnRpZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVByb3BlcnR5U3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke25vZGVQcm9wZXJ0aWVzU3RyaW5nfSwgJHtub2RlUHJvcGVydHlTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBub2RlUHJvcGVydGllc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IG5vZGVQcm9wZXJ0aWVzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlcyIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiTk9ERVNfVFlQRSIsIm5hbWVzIiwiQ09OVEVOVF9QQVJBTUVURVJfTkFNRSIsIlRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FIiwiQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUiLCJOb2RlUHJvcGVydGllcyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJzb21lTm9kZVByb3BlcnR5IiwiY2FsbGJhY2siLCJzb21lIiwibWF0Y2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiY29udGV4dCIsIm5vZGVQcm9wZXJ0aWVzU3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5vZGVQcm9wZXJ0eSIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlc05vZGVQcm9wZXJ0eSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJmcm9tTm90aGluZyIsIm1hcCIsIm5hbWUiLCJpbmRleCIsInR5cGUiLCJOb2RlUHJvcGVydHkiLCJmcm9tTmFtZUFuZFR5cGUiLCJzdHJpbmdGcm9tQXJyYXkiLCJub2RlUHJvcGVydGllcyIsInJlZHVjZSIsIm5vZGVQcm9wZXJ0eVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0ZBOzs7ZUFBQTs7O2dFQWhGc0I7bUVBQ0c7cUJBRTZCOzhCQUNzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RixJQUFNQSxRQUFRO0lBQ05DLGtCQUFXO0lBQ1hDLG1CQUFZO0lBQ1pDLGlCQUFVO0NBQ1gsRUFDREMsUUFBUTtJQUNOQyxzQ0FBc0I7SUFDdEJDLHVDQUF1QjtJQUN2QkMsMENBQTBCO0NBQzNCO0FBRVAsSUFBQSxBQUFNQywrQkFBTjthQUFNQSxlQUNRQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRHJCRjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBSFhGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDSixLQUFLLENBQUNLLElBQUksQ0FBQ0Q7WUFBVzs7O1lBRS9ERSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxjQUFjLEVBQUVDLE9BQU87Z0JBQ3pDLElBQU1DLHVCQUF1QixJQUFJLENBQUNSLFNBQVMsSUFDckNTLHVCQUF1QkgsZUFBZU4sU0FBUztnQkFFckRPLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGlCQUFzRUYsT0FBdERDLHNCQUFxQixtQ0FBc0QsT0FBckJELHNCQUFxQjtnQkFFMUcsSUFBTUcsd0JBQXdCLElBQUksQ0FBQ1QsZ0JBQWdCLENBQUMsU0FBQ1U7b0JBQ25ELElBQU1DLG9DQUFvQ0QsYUFBYVAsbUJBQW1CLENBQUNDLGdCQUFnQkM7b0JBRTNGLElBQUlNLG1DQUFtQzt3QkFDckMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJLENBQUNGLHVCQUF1QjtvQkFDMUIsSUFBTUcsVUFBVSxBQUFDLFFBQTJFTixPQUFwRUMsc0JBQXFCLGlEQUFvRSxPQUFyQkQsc0JBQXFCLHVCQUMzR08sWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFSLFFBQVFXLEtBQUssQ0FBQyxBQUFDLG1CQUF3RVYsT0FBdERDLHNCQUFxQixtQ0FBc0QsT0FBckJELHNCQUFxQjtZQUM5Rzs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGVBQWUsRUFBRWIsT0FBTzs7Z0JBQzNDYSxnQkFBZ0JDLHFCQUFxQixDQUFDLFNBQUNmO29CQUNyQyxNQUFLRCxtQkFBbUIsQ0FBQ0MsZ0JBQWdCQztnQkFDM0M7WUFDRjs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNZixVQUFVLE1BQ1ZSLFFBQVFOLE1BQU04QixHQUFHLENBQUMsU0FBQ0MsTUFBTUM7b0JBQ3ZCLElBQU1DLE9BQU9yQyxLQUFLLENBQUNvQyxNQUFNLEVBQ25CYixlQUFlZSxxQkFBWSxDQUFDQyxlQUFlLENBQUNKLE1BQU1FLE1BQU1uQjtvQkFFOUQsT0FBT0s7Z0JBQ1QsSUFDQWQsU0FBUytCLGdCQUFnQjlCLE9BQU9RLFVBQ2hDdUIsaUJBQWlCLElBdkRyQmpDLGVBdUR3Q0MsUUFBUUM7Z0JBRWxELE9BQU8rQjtZQUNUOzs7V0ExRElqQzs7QUE2RE4sSUFBTWlDLGlCQUFpQmpDLGVBQWV5QixXQUFXO0lBRWpELFdBQWVRO0FBRWYsU0FBU0QsZ0JBQWdCOUIsS0FBSyxFQUFFUSxPQUFPO0lBQ3JDLElBQU1DLHVCQUF1QlQsTUFBTWdDLE1BQU0sQ0FBQyxTQUFDdkIsc0JBQXNCSTtRQUN6RCxJQUFNb0IscUJBQXFCcEIsYUFBYVosU0FBUztRQUVqRFEsdUJBQXVCLEFBQUNBLHlCQUF5QixPQUN4QndCLHFCQUNDLEFBQUMsR0FBMkJBLE9BQXpCeEIsc0JBQXFCLE1BQXVCLE9BQW5Cd0I7UUFFdEQsT0FBT3hCO0lBQ1QsR0FBRyxPQUNIVixTQUFTVSxzQkFBdUIsR0FBRztJQUV6QyxPQUFPVjtBQUNUIn0=