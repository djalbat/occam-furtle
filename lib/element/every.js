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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _types = require("../types");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Every;
var _default = (0, _elements.define)((_Every = /*#__PURE__*/ function() {
    function Every(string, variable, anonymousProcedure) {
        _class_call_check(this, Every);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Every, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var expression;
                var everyString = this.getString();
                context.trace("Evaluating the '".concat(everyString, "' every..."));
                expression = this.variable.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.NODES_TYPE) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), boolean = nodes.every(function(node) {
                    var expression;
                    var Expression = _elements.default.Expression, Expressions = _elements.default.Expressions;
                    expression = Expression.fromNode(node, context);
                    var expressions = Expressions.fromExpression(expression, context);
                    expression = _this.anonymousProcedure.call(expressions, context);
                    var expressionType = expression.getType();
                    if (expressionType !== _types.BOOLEAN_TYPE) {
                        var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = expression.getBoolean();
                    return boolean;
                });
                var Expression = _elements.default.Expression;
                expression = Expression.fromBoolean(boolean, context);
                context.trace("...evaluated the '".concat(everyString, "' every."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var every = null;
                var everyNode = expressionNode.getEveryNode();
                if (everyNode !== null) {
                    every = everyFromEveryNode(everyNode, context);
                }
                return every;
            }
        }
    ]);
    return Every;
}(), _define_property(_Every, "name", "Every"), _Every));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEV2ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IGV2ZXJ5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2V2ZXJ5U3RyaW5nfScgZXZlcnkuLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBleHByZXNzaW9uLmdldE5vZGVzKCksXG4gICAgICAgICAgYm9vbGVhbiA9IG5vZGVzLmV2ZXJ5KChub2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgICAgICAgICAgY29uc3QgeyBFeHByZXNzaW9uLCBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke2V4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cztcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5LmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXZlcnlcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gICAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkV2ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJldmVyeVN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJib29sZWFuIiwiZXZlcnkiLCJub2RlIiwiRXhwcmVzc2lvbiIsImVsZW1lbnRzIiwiRXhwcmVzc2lvbnMiLCJmcm9tTm9kZSIsImV4cHJlc3Npb25zIiwiZnJvbUV4cHJlc3Npb24iLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJldmVyeU5vZGUiLCJnZXRFdmVyeU5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ0M7cUJBR21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QyxXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzthQUFNQyxNQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCO2dDQUR0Qkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyxjQUFjLElBQUksQ0FBQ04sU0FBUztnQkFFbENJLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUE4QixPQUFaRCxhQUFZO2dCQUU3Q0QsYUFBYSxJQUFJLENBQUNQLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDQztnQkFFcEMsSUFBTUksaUJBQWlCSCxXQUFXSSxPQUFPO2dCQUV6QyxJQUFJRCxtQkFBbUJFLGlCQUFVLEVBQUU7b0JBQ2pDLElBQU1DLG1CQUFtQk4sV0FBV08sUUFBUSxDQUFDUixVQUN2Q1MsVUFBVSxBQUFDLE9BQXdDTCxPQUFsQ0csa0JBQWlCLG1CQUFvREQsT0FBbkNGLGdCQUFlLHNCQUErQixPQUFYRSxpQkFBVSxFQUFDLE9BQ2pHSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxRQUFRWixXQUFXYSxRQUFRLElBQzNCQyxVQUFVRixNQUFNRyxLQUFLLENBQUMsU0FBQ0M7b0JBQ3JCLElBQUloQjtvQkFFSixJQUFRaUIsYUFBNEJDLGlCQUFRLENBQXBDRCxZQUFZRSxjQUFnQkQsaUJBQVEsQ0FBeEJDO29CQUVwQm5CLGFBQWFpQixXQUFXRyxRQUFRLENBQUNKLE1BQU1qQjtvQkFFdkMsSUFBTXNCLGNBQWNGLFlBQVlHLGNBQWMsQ0FBQ3RCLFlBQVlEO29CQUUzREMsYUFBYSxNQUFLTixrQkFBa0IsQ0FBQzZCLElBQUksQ0FBQ0YsYUFBYXRCO29CQUV2RCxJQUFNSSxpQkFBaUJILFdBQVdJLE9BQU87b0JBRXpDLElBQUlELG1CQUFtQnFCLG1CQUFZLEVBQUU7d0JBQ25DLElBQU1sQixtQkFBbUJOLFdBQVdPLFFBQVEsQ0FBQ1IsVUFDdkNTLFVBQVUsQUFBQyxPQUFnREwsT0FBMUNHLGtCQUFpQiwyQkFBdUVrQixPQUE5Q3JCLGdCQUFlLGlDQUE0QyxPQUFicUIsbUJBQVksRUFBQyxPQUN0SGYsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDt3QkFFeEMsTUFBTUM7b0JBQ1I7b0JBRUEsSUFBTUssVUFBVWQsV0FBV3lCLFVBQVU7b0JBRXJDLE9BQU9YO2dCQUNUO2dCQUVOLElBQU0sQUFBRUcsYUFBZUMsaUJBQVEsQ0FBdkJEO2dCQUVSakIsYUFBYWlCLFdBQVdTLFdBQVcsQ0FBQ1osU0FBU2Y7Z0JBRTdDQSxRQUFRRyxLQUFLLENBQUMsQUFBQyxxQkFBZ0MsT0FBWkQsYUFBWTtnQkFFL0MsT0FBT0Q7WUFDVDs7OztZQUlPMkIsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUU3QixPQUFPO2dCQUMvQyxJQUFJZ0IsUUFBUTtnQkFFWixJQUFNYyxZQUFZRCxlQUFlRSxZQUFZO2dCQUU3QyxJQUFJRCxjQUFjLE1BQU07b0JBQ3RCZCxRQUFRZ0IsbUJBQW1CRixXQUFXOUI7Z0JBQ3hDO2dCQUVBLE9BQU9nQjtZQUNUOzs7O0tBWkEseUJBQU9pQixRQUFPIn0=