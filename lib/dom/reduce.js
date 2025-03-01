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
var _Reduce;
var variableNodeQuery = (0, _query.nodeQuery)("/reduce/variable"), parametersNodeQuery = (0, _query.nodeQuery)("/reduce/anonymousProcedure/parameters"), valueReduceNodeQuery = (0, _query.nodeQuery)("/value/reduce"), initialValueNodeQuery = (0, _query.nodeQuery)("/reduce/value"); ///
var _default = (0, _dom.domAssigned)((_Reduce = /*#__PURE__*/ function() {
    function Reduce(string, variable, initialValue, anonymousProcedure) {
        _class_call_check(this, Reduce);
        this.string = string;
        this.variable = variable;
        this.initialValue = initialValue;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Reduce, [
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
            key: "getInitialValue",
            value: function getInitialValue() {
                return this.initialValue;
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
                var reduceString = this.getString();
                context.trace("Evaluating the '".concat(reduceString, "' reduce..."));
                value = this.variable.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes(), initialValue = this.initialValue.evaluate(context);
                value = nodes.reduce(function(currentValue, node) {
                    var value;
                    var Value = _dom.default.Value, Values = _dom.default.Values;
                    value = currentValue; ///
                    var values = Values.fromValue(value, context);
                    value = Value.fromNode(node, context);
                    values.addValue(value);
                    value = _this.anonymousProcedure.call(values, context);
                    return value;
                }, initialValue);
                context.trace("...evaluated the '".concat(reduceString, "' reduce."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var reduce = null;
                var valueReduceNode = valueReduceNodeQuery(valueNode);
                if (valueReduceNode !== null) {
                    var Value = _dom.default.Value, Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, reduceNode = valueReduceNode, string = stringFromReduceNode(reduceNode, context), value = Value.fromReduceNode(reduceNode, context), variable = Variable.fromReduceNode(reduceNode, context), initialValue = value, anonymousProcedure = AnonymousProcedure.fromReduceNode(reduceNode, context);
                    reduce = new Reduce(string, variable, initialValue, anonymousProcedure);
                }
                return reduce;
            }
        }
    ]);
    return Reduce;
}(), _define_property(_Reduce, "name", "Reduce"), _Reduce));
function stringFromReduceNode(reduceNode, context) {
    var variableNode = variableNodeQuery(reduceNode), parametersNode = parametersNodeQuery(reduceNode), initialValueNode = initialValueNodeQuery(reduceNode), variableString = context.nodeAsString(variableNode), parametersString = context.nodeAsString(parametersNode), initialValueString = context.nodeAsString(initialValueNode), string = "Reduce(".concat(variableString, ", (").concat(parametersString, ") { ... }, ").concat(initialValueString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVkdWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWR1Y2UvdmFyaWFibGVcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHZhbHVlUmVkdWNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3JlZHVjZVwiKSxcbiAgICAgIGluaXRpYWxWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWR1Y2UvdmFsdWVcIik7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZWR1Y2Uge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsVmFsdWUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsVmFsdWU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHJlZHVjZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlcygpLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdmFsdWUgPSBub2Rlcy5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgbm9kZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IFZhbHVlLCBWYWx1ZXMgfSA9IGRvbTtcblxuICAgICAgdmFsdWUgPSBjdXJyZW50VmFsdWU7IC8vL1xuXG4gICAgICBjb25zdCB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWVzLmFkZFZhbHVlKHZhbHVlKTtcblxuICAgICAgdmFsdWUgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBpbml0aWFsVmFsdWUpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVJlZHVjZU5vZGUgPSB2YWx1ZVJlZHVjZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlUmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgcmVkdWNlTm9kZSA9IHZhbHVlUmVkdWNlTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gdmFsdWUsIC8vL1xuICAgICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gQW5vbnltb3VzUHJvY2VkdXJlLmZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZWR1Y2UgPSBuZXcgUmVkdWNlKHN0cmluZywgdmFyaWFibGUsIGluaXRpYWxWYWx1ZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShyZWR1Y2VOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICBpbml0aWFsVmFsdWVOb2RlID0gaW5pdGlhbFZhbHVlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIGluaXRpYWxWYWx1ZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGluaXRpYWxWYWx1ZU5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBgUmVkdWNlKCR7dmFyaWFibGVTdHJpbmd9LCAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfSwgJHtpbml0aWFsVmFsdWVTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwidmFsdWVSZWR1Y2VOb2RlUXVlcnkiLCJpbml0aWFsVmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJlZHVjZSIsInN0cmluZyIsInZhcmlhYmxlIiwiaW5pdGlhbFZhbHVlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRJbml0aWFsVmFsdWUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsInJlZHVjZVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsInJlZHVjZSIsImN1cnJlbnRWYWx1ZSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsIlZhbHVlcyIsInZhbHVlcyIsImZyb21WYWx1ZSIsImZyb21Ob2RlIiwiYWRkVmFsdWUiLCJjYWxsIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlUmVkdWNlTm9kZSIsIlZhcmlhYmxlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlTm9kZSIsInN0cmluZ0Zyb21SZWR1Y2VOb2RlIiwiZnJvbVJlZHVjZU5vZGUiLCJuYW1lIiwidmFyaWFibGVOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJpbml0aWFsVmFsdWVOb2RlIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwiaW5pdGlhbFZhbHVlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyREFaZ0I7Z0VBQ007cUJBRUk7cUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFD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