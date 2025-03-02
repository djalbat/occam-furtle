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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
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
var valueEveryNodeQuery = (0, _query.nodeQuery)("/value/every");
var _default = (0, _dom.domAssigned)((_Every = /*#__PURE__*/ function() {
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
                var value;
                var everyString = this.getString();
                context.trace("Evaluating the '".concat(everyString, "' every..."));
                value = this.variable.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes(), boolean = nodes.every(function(node) {
                    var value;
                    var Value = _dom.default.Value, Values = _dom.default.Values;
                    value = Value.fromNode(node, context);
                    var values = Values.fromValue(value, context);
                    value = _this.anonymousProcedure.call(values, context);
                    var valueType = value.getType();
                    if (valueType !== _types.BOOLEAN_TYPE) {
                        var valueString = value.asString(context), message = "The ".concat(valueString, " value's type is '").concat(valueType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = value.getBoolean();
                    return boolean;
                });
                var Value = _dom.default.Value;
                value = Value.fromBoolean(boolean, context);
                context.trace("...evaluated the '".concat(everyString, "' every."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var every = null;
                var valueEveryNode = valueEveryNodeQuery(valueNode);
                if (valueEveryNode !== null) {
                    var everyNode = valueEveryNode; ///
                    every = everyFromEveryNode(everyNode, context);
                }
                return every;
            }
        }
    ]);
    return Every;
}(), _define_property(_Every, "name", "Every"), _Every));
function everyFromEveryNode(everyNode, context) {
    var Every = _dom.default.Every, Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, anonymousProcedure = AnonymousProcedure.fromEveryNode(everyNode, context), variable = Variable.fromEveryNode(everyNode, context), string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context), every = new Every(string, variable, anonymousProcedure);
    return every;
}
function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
    var variableString = variable.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Every(".concat(variableString, ", ").concat(anonymousProcedureString, ") ");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXZlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHZhbHVlRXZlcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvZXZlcnlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEV2ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBldmVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBib29sZWFuID0gbm9kZXMuZXZlcnkoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgeyBWYWx1ZSwgVmFsdWVzIH0gPSBkb207XG5cbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IFZhbHVlcy5mcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodmFsdWVzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVUeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV2ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlRXZlcnlOb2RlID0gdmFsdWVFdmVyeU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlRXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBldmVyeU5vZGUgPSB2YWx1ZUV2ZXJ5Tm9kZTsgLy8vXG5cbiAgICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZXJ5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5LCBWYXJpYWJsZSwgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBkb20sXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IEFub255bW91c1Byb2NlZHVyZS5mcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gbmV3IEV2ZXJ5KHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBFdmVyeSgke3ZhcmlhYmxlU3RyaW5nfSwgJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9KSBgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidmFsdWVFdmVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiRXZlcnkiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWUiLCJldmVyeVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJldmVyeSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsIlZhbHVlcyIsImZyb21Ob2RlIiwidmFsdWVzIiwiZnJvbVZhbHVlIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJmcm9tQm9vbGVhbiIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUV2ZXJ5Tm9kZSIsImV2ZXJ5Tm9kZSIsImV2ZXJ5RnJvbUV2ZXJ5Tm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsImZyb21FdmVyeU5vZGUiLCJzdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJ2YXJpYWJsZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO2dFQUNNO3FCQUVJO3FCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUMsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0I7Z0NBRGpCSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFB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