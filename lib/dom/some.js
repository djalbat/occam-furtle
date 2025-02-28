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
var _Some;
var variableNodeQuery = (0, _query.nodeQuery)("/some/variable"), valueSomeNodeQuery = (0, _query.nodeQuery)("/value/some"), parametersNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure/parameters");
var _default = (0, _dom.domAssigned)((_Some = /*#__PURE__*/ function() {
    function Some(string, variable, anonymousProcedure) {
        _class_call_check(this, Some);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Some, [
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
                var someString = this.getString();
                context.trace("Evaluating the '".concat(someString, "' some..."));
                var value = this.variable.evaluate(context), valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes();
                nodes.some(function(node) {
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
                context.trace("...evaluated the '".concat(someString, "' some."));
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var some = null;
                var valueSomeNode = valueSomeNodeQuery(valueNode);
                if (valueSomeNode !== null) {
                    var Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, someNode = valueSomeNode, string = stringFromSomeNode(someNode, context), variable = Variable.fromSomeNode(someNode, context), anonymousProcedure = AnonymousProcedure.fromSomeNode(someNode, context);
                    some = new Some(string, variable, anonymousProcedure);
                }
                return some;
            }
        }
    ]);
    return Some;
}(), _define_property(_Some, "name", "Some"), _Some));
function stringFromSomeNode(someNode, context) {
    var variableNode = variableNodeQuery(someNode), parametersNode = parametersNodeQuery(someNode), variableString = context.nodeAsString(variableNode), parametersString = context.nodeAsString(parametersNode), string = "Some(".concat(variableString, ", (").concat(parametersString, ") { ... })");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc29tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlU29tZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9zb21lXCIpLFxuICAgICAgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zb21lL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTb21lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzb21lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGVzKCk7XG5cbiAgICBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICBsZXQgdmFsdWU7XG5cbiAgICAgIGNvbnN0IHsgVmFsdWUsIFZhbHVlcyB9ID0gZG9tO1xuXG4gICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWUgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgdHlwZSBpcyAnJHt2YWx1ZVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgIHJldHVybiBib29sZWFuO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTb21lXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNvbWUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVTb21lTm9kZSA9IHZhbHVlU29tZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlU29tZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgc29tZU5vZGUgPSB2YWx1ZVNvbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGBTb21lKCR7dmFyaWFibGVTdHJpbmd9LCAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVTb21lTm9kZVF1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU29tZSIsInN0cmluZyIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJzb21lU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJzb21lIiwibm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFsdWVzIiwiZnJvbU5vZGUiLCJ2YWx1ZXMiLCJmcm9tVmFsdWUiLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwidmFsdWVTb21lTm9kZSIsIlZhcmlhYmxlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZU5vZGUiLCJzdHJpbmdGcm9tU29tZU5vZGUiLCJmcm9tU29tZU5vZGUiLCJuYW1lIiwidmFyaWFibGVOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxQkFFSTtxQkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkUsc0JBQXNCRixJQUFBQSxnQkFBUyxFQUFDO0lBRXRDLFdBQWVHLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCO2dDQURqQkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztnQkFDZCxJQUFNQyxhQUFhLElBQUksQ0FBQ0wsU0FBUztnQkFFakNJLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYRCxZQUFXO2dCQUU1QyxJQUFNRSxRQUFRLElBQUksQ0FBQ1QsUUFBUSxDQUFDSyxRQUFRLENBQUNDLFVBQy9CSSxZQUFZRCxNQUFNRSxPQUFPO2dCQUUvQixJQUFJRCxjQUFjRSxpQkFBVSxFQUFFO29CQUM1QixJQUFNQyxjQUFjSixNQUFNSyxRQUFRLENBQUNSLFVBQzdCUyxVQUFVLEFBQUMsT0FBOEJMLE9BQXhCRyxhQUFZLGNBQTBDRCxPQUE5QkYsV0FBVSxzQkFBK0IsT0FBWEUsaUJBQVUsRUFBQyxPQUNsRkksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsUUFBUVYsTUFBTVcsUUFBUTtnQkFFNUJELE1BQU1FLElBQUksQ0FBQyxTQUFDQztvQkFDVixJQUFJYjtvQkFFSixJQUFRYyxRQUFrQkMsWUFBRyxDQUFyQkQsT0FBT0UsU0FBV0QsWUFBRyxDQUFkQztvQkFFZmhCLFFBQVFjLE1BQU1HLFFBQVEsQ0FBQ0osTUFBTWhCO29CQUU3QixJQUFNcUIsU0FBU0YsT0FBT0csU0FBUyxDQUFDbkIsT0FBT0g7b0JBRXZDRyxRQUFRLE1BQUtSLGtCQUFrQixDQUFDNEIsSUFBSSxDQUFDRixRQUFRckI7b0JBRTdDLElBQU1JLFlBQVlELE1BQU1FLE9BQU87b0JBRS9CLElBQUlELGNBQWNvQixtQkFBWSxFQUFFO3dCQUM5QixJQUFNakIsY0FBY0osTUFBTUssUUFBUSxDQUFDUixVQUM3QlMsVUFBVSxBQUFDLE9BQXNDTCxPQUFoQ0csYUFBWSxzQkFBNkRpQixPQUF6Q3BCLFdBQVUsaUNBQTRDLE9BQWJvQixtQkFBWSxFQUFDLE9BQ3ZHZCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO3dCQUV4QyxNQUFNQztvQkFDUjtvQkFFQSxJQUFNZSxVQUFVdEIsTUFBTXVCLFVBQVU7b0JBRWhDLE9BQU9EO2dCQUNUO2dCQUVBekIsUUFBUUUsS0FBSyxDQUFDLEFBQUMscUJBQStCLE9BQVhELFlBQVc7WUFDaEQ7Ozs7WUFJTzBCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRTVCLE9BQU87Z0JBQ3JDLElBQUllLE9BQU87Z0JBRVgsSUFBTWMsZ0JBQWdCeEMsbUJBQW1CdUM7Z0JBRXpDLElBQUlDLGtCQUFrQixNQUFNO29CQUMxQixJQUFRQyxXQUFpQ1osWUFBRyxDQUFwQ1ksVUFBVUMscUJBQXVCYixZQUFHLENBQTFCYSxvQkFDWkMsV0FBV0gsZUFDWHBDLFNBQVN3QyxtQkFBbUJELFVBQVVoQyxVQUN0Q04sV0FBV29DLFNBQVNJLFlBQVksQ0FBQ0YsVUFBVWhDLFVBQzNDTCxxQkFBcUJvQyxtQkFBbUJHLFlBQVksQ0FBQ0YsVUFBVWhDO29CQUVyRWUsT0FBTyxJQUFJdkIsS0FBS0MsUUFBUUMsVUFBVUM7Z0JBQ3BDO2dCQUVBLE9BQU9vQjtZQUNUOzs7O0tBbEJBLHdCQUFPb0IsUUFBTztBQXFCaEIsU0FBU0YsbUJBQW1CRCxRQUFRLEVBQUVoQyxPQUFPO0lBQzNDLElBQU1vQyxlQUFlakQsa0JBQWtCNkMsV0FDakNLLGlCQUFpQi9DLG9CQUFvQjBDLFdBQ3JDTSxpQkFBaUJ0QyxRQUFRdUMsWUFBWSxDQUFDSCxlQUN0Q0ksbUJBQW1CeEMsUUFBUXVDLFlBQVksQ0FBQ0YsaUJBQ3hDNUMsU0FBUyxBQUFDLFFBQTJCK0MsT0FBcEJGLGdCQUFlLE9BQXNCLE9BQWpCRSxrQkFBaUI7SUFFNUQsT0FBTy9DO0FBQ1QifQ==