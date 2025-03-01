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
var variableNodeQuery = (0, _query.nodeQuery)("/every/variable"), valueEveryNodeQuery = (0, _query.nodeQuery)("/value/every"), parametersNodeQuery = (0, _query.nodeQuery)("/every/anonymousProcedure/parameters");
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
                    var Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, everyNode = valueEveryNode, string = stringFromEveryNode(everyNode, context), variable = Variable.fromEveryNode(everyNode, context), anonymousProcedure = AnonymousProcedure.fromEveryNode(everyNode, context);
                    every = new Every(string, variable, anonymousProcedure);
                }
                return every;
            }
        }
    ]);
    return Every;
}(), _define_property(_Every, "name", "Every"), _Every));
function stringFromEveryNode(everyNode, context) {
    var variableNode = variableNodeQuery(everyNode), parametersNode = parametersNodeQuery(everyNode), variableString = context.nodeAsString(variableNode), parametersString = context.nodeAsString(parametersNode), string = "Every(".concat(variableString, ", (").concat(parametersString, ") { ... })");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXZlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V2ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgdmFsdWVFdmVyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9ldmVyeVwiKSxcbiAgICAgIHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXZlcnkvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEV2ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBldmVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBib29sZWFuID0gbm9kZXMuZXZlcnkoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgeyBWYWx1ZSwgVmFsdWVzIH0gPSBkb207XG5cbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IFZhbHVlcy5mcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodmFsdWVzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVUeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV2ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlRXZlcnlOb2RlID0gdmFsdWVFdmVyeU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlRXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgICAgIGV2ZXJ5Tm9kZSA9IHZhbHVlRXZlcnlOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gQW5vbnltb3VzUHJvY2VkdXJlLmZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcblxuICAgICAgZXZlcnkgPSBuZXcgRXZlcnkoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShldmVyeU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkoZXZlcnlOb2RlKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICBzdHJpbmcgPSBgRXZlcnkoJHt2YXJpYWJsZVN0cmluZ30sICgke3BhcmFtZXRlcnNTdHJpbmd9KSB7IC4uLiB9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZUV2ZXJ5Tm9kZVF1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiRXZlcnkiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWUiLCJldmVyeVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJldmVyeSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsIlZhbHVlcyIsImZyb21Ob2RlIiwidmFsdWVzIiwiZnJvbVZhbHVlIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJmcm9tQm9vbGVhbiIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUV2ZXJ5Tm9kZSIsIlZhcmlhYmxlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnlOb2RlIiwic3RyaW5nRnJvbUV2ZXJ5Tm9kZSIsImZyb21FdmVyeU5vZGUiLCJuYW1lIiwidmFyaWFibGVOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxQkFFSTtxQkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkMsc0JBQXNCRCxJQUFBQSxnQkFBUyxFQUFDLGlCQUNoQ0Usc0JBQXNCRixJQUFBQSxnQkFBUyxFQUFDO0lBRXRDLFdBQWVHLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCO2dDQURqQkg7UUFF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