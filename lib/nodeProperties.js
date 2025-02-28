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
var _parameters = require("./dom/parameters");
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
                var nodePropertiesString = this.string, namedParameterString = namedParameter.getString();
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
                }), string = (0, _parameters.stringFromArray)(array, context), nodeProperties = new NodeProperties(string, array);
                return nodeProperties;
            }
        }
    ]);
    return NodeProperties;
}();
var nodeProperties = NodeProperties.fromNothing();
var _default = nodeProperties;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi9leGNlcHRpb25cIjtcbmltcG9ydCBOb2RlUHJvcGVydHkgZnJvbSBcIi4vbm9kZVByb3BlcnR5XCI7XG5cbmltcG9ydCB7IHN0cmluZ0Zyb21BcnJheSB9IGZyb20gXCIuL2RvbS9wYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLCBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSB9IGZyb20gXCIuL3BhcmFtZXRlck5hbWVzXCI7XG5cbmNvbnN0IHR5cGVzID0gW1xuICAgICAgICBTVFJJTkdfVFlQRSxcbiAgICAgICAgQk9PTEVBTl9UWVBFLFxuICAgICAgICBOT0RFU19UWVBFLFxuICAgICAgXSxcbiAgICAgIG5hbWVzID0gW1xuICAgICAgICBDT05URU5UX1BBUkFNRVRFUl9OQU1FLFxuICAgICAgICBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSxcbiAgICAgICAgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUVcbiAgICAgIF07XG5cbmNsYXNzIE5vZGVQcm9wZXJ0aWVzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHNvbWVOb2RlUHJvcGVydHkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVByb3BlcnRpZXNTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtub2RlUHJvcGVydGllc1N0cmluZ30nIG5vZGUgcHJvcGVydGllcy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzID0gdGhpcy5zb21lTm9kZVByb3BlcnR5KChub2RlUHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlc05vZGVQcm9wZXJ0eSA9IG5vZGVQcm9wZXJ0eS5tYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyTWF0Y2hlc05vZGVQcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlICcke25vZGVQcm9wZXJ0aWVzU3RyaW5nfScgbm9kZSBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtub2RlUHJvcGVydGllc1N0cmluZ30nIG5vZGUgcHJvcGVydGllcy5gKTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXJzKG5hbWVkUGFyYW1ldGVycywgY29udGV4dCkge1xuICAgIG5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICB0aGlzLm1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsLFxuICAgICAgICAgIGFycmF5ID0gbmFtZXMubWFwKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIG5vZGVQcm9wZXJ0eSA9IE5vZGVQcm9wZXJ0eS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlUHJvcGVydHk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlUHJvcGVydGllcyA9IG5ldyBOb2RlUHJvcGVydGllcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBub2RlUHJvcGVydGllcztcbiAgfVxufVxuXG5jb25zdCBub2RlUHJvcGVydGllcyA9IE5vZGVQcm9wZXJ0aWVzLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVQcm9wZXJ0aWVzO1xuIl0sIm5hbWVzIjpbInR5cGVzIiwiU1RSSU5HX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJOT0RFU19UWVBFIiwibmFtZXMiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUiLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsIk5vZGVQcm9wZXJ0aWVzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsInNvbWVOb2RlUHJvcGVydHkiLCJjYWxsYmFjayIsInNvbWUiLCJtYXRjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJjb250ZXh0Iiwibm9kZVByb3BlcnRpZXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwibmFtZWRQYXJhbWV0ZXJNYXRjaGVzIiwibm9kZVByb3BlcnR5IiwibmFtZWRQYXJhbWV0ZXJNYXRjaGVzTm9kZVByb3BlcnR5IiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJtYXRjaE5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVycyIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsImZyb21Ob3RoaW5nIiwibWFwIiwibmFtZSIsImluZGV4IiwidHlwZSIsIk5vZGVQcm9wZXJ0eSIsImZyb21OYW1lQW5kVHlwZSIsInN0cmluZ0Zyb21BcnJheSIsIm5vZGVQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtRkE7OztlQUFBOzs7Z0VBakZzQjttRUFDRzswQkFFTztxQkFDc0I7OEJBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVGLElBQU1BLFFBQVE7SUFDTkMsa0JBQVc7SUFDWEMsbUJBQVk7SUFDWkMsaUJBQVU7Q0FDWCxFQUNEQyxRQUFRO0lBQ05DLHNDQUFzQjtJQUN0QkMsdUNBQXVCO0lBQ3ZCQywwQ0FBMEI7Q0FDM0I7QUFFUCxJQUFBLEFBQU1DLCtCQUFOO2FBQU1BLGVBQ1FDLE1BQU0sRUFBRUMsS0FBSztnQ0FEckJGO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFIWEY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDRDtZQUFXOzs7WUFFL0RFLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLGNBQWMsRUFBRUMsT0FBTztnQkFDekMsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ1YsTUFBTSxFQUNsQ1csdUJBQXVCSCxlQUFlTixTQUFTO2dCQUVyRE8sUUFBUUcsS0FBSyxDQUFDLEFBQUMsaUJBQXNFRixPQUF0REMsc0JBQXFCLG1DQUFzRCxPQUFyQkQsc0JBQXFCO2dCQUUxRyxJQUFNRyx3QkFBd0IsSUFBSSxDQUFDVCxnQkFBZ0IsQ0FBQyxTQUFDVTtvQkFDbkQsSUFBTUMsb0NBQW9DRCxhQUFhUCxtQkFBbUIsQ0FBQ0MsZ0JBQWdCQztvQkFFM0YsSUFBSU0sbUNBQW1DO3dCQUNyQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0YsdUJBQXVCO29CQUMxQixJQUFNRyxVQUFVLEFBQUMsUUFBMkVOLE9BQXBFQyxzQkFBcUIsaURBQW9FLE9BQXJCRCxzQkFBcUIsdUJBQzNHTyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQVIsUUFBUVcsS0FBSyxDQUFDLEFBQUMsbUJBQXdFVixPQUF0REMsc0JBQXFCLG1DQUFzRCxPQUFyQkQsc0JBQXFCO1lBQzlHOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsZUFBZSxFQUFFYixPQUFPOztnQkFDM0NhLGdCQUFnQkMscUJBQXFCLENBQUMsU0FBQ2Y7b0JBQ3JDLE1BQUtELG1CQUFtQixDQUFDQyxnQkFBZ0JDO2dCQUMzQztZQUNGOzs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1mLFVBQVUsTUFDVlIsUUFBUU4sTUFBTThCLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQztvQkFDdkIsSUFBTUMsT0FBT3JDLEtBQUssQ0FBQ29DLE1BQU0sRUFDbkJiLGVBQWVlLHFCQUFZLENBQUNDLGVBQWUsQ0FBQ0osTUFBTUUsTUFBTW5CO29CQUU5RCxPQUFPSztnQkFDVCxJQUNBZCxTQUFTK0IsSUFBQUEsMkJBQWUsRUFBQzlCLE9BQU9RLFVBQ2hDdUIsaUJBQWlCLElBdkRyQmpDLGVBdUR3Q0MsUUFBUUM7Z0JBRWxELE9BQU8rQjtZQUNUOzs7V0ExRElqQzs7QUE2RE4sSUFBTWlDLGlCQUFpQmpDLGVBQWV5QixXQUFXO0lBRWpELFdBQWVRIn0=