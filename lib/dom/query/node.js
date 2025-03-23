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
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var _occamentities = require("occam-entities");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _types = require("../../types");
var _query = require("../../utilities/query");
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
var _NodeQuery;
var first = _necessary.arrayUtilities.first, trimDoubleQuotes = _occamentities.contentUtilities.trimDoubleQuotes;
var valueNodeQueryNodeQuery = (0, _query.nodeQuery)("/value/nodeQuery"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/nodeQuery/@string-literal");
var _default = (0, _dom.domAssigned)((_NodeQuery = /*#__PURE__*/ function() {
    function NodeQuery(string, variable, query) {
        _class_call_check(this, NodeQuery);
        this.string = string;
        this.variable = variable;
        this.query = query;
    }
    _create_class(NodeQuery, [
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
            key: "getQuery",
            value: function getQuery() {
                return this.query;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var nodeQueryString = this.string; ///
                context.trace("Evaluating the '".concat(nodeQueryString, "' node query..."));
                if (this.query === null) {
                    var message = "Cannot evaluate the '".concat(nodeQueryString, "' node query because its expression is malformed."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                value = this.variable.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var valueNode = value.getNode();
                if (valueNode === null) {
                    var valueString1 = value.asString(context), message2 = "The ".concat(valueString1, " value's node is null."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var node;
                node = valueNode; ///
                var nodes = this.query.execute(node), nodesLength = nodes.length;
                if (nodesLength !== 1) {
                    var message3 = "The length of the returned nodes is ".concat(nodesLength, " when it should be 1."), exception3 = _exception.default.fromMessage(message3);
                    throw exception3;
                }
                var firstNode = first(nodes);
                node = firstNode; ///
                var Value = _dom.default.Value;
                value = Value.fromNode(node, context);
                context.debug("...evaluated the '".concat(nodeQueryString, "' node query."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var _$nodeQuery = null;
                var valueNodeQueryNode = valueNodeQueryNodeQuery(valueNode);
                if (valueNodeQueryNode !== null) {
                    var nodeQueryNode = valueNodeQueryNode; ///
                    _$nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
                }
                return _$nodeQuery;
            }
        }
    ]);
    return NodeQuery;
}(), _define_property(_NodeQuery, "name", "NodeQuery"), _NodeQuery));
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    var Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, node = nodeQueryNode, string = context.nodeAsString(node), expressionString = expressionStringFromNodeQueryNode(nodeQueryNode, context), variable = Variable.fromNodeQueryNode(nodeQueryNode, context), query = _occamquery.Query.fromExpressionString(expressionString), _$nodeQuery = new NodeQuery(string, variable, query);
    return _$nodeQuery;
}
function expressionStringFromNodeQueryNode(nodeQueryNode, context) {
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(nodeQueryNode), stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), expressionString = trimDoubleQuotes(stringLiteralTerminalNodeContent);
    return expressionString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgY29udGVudFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1lbnRpdGllc1wiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgdHJpbURvdWJsZVF1b3RlcyB9ID0gY29udGVudFV0aWxpdGllcztcblxuY29uc3QgdmFsdWVOb2RlUXVlcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvbm9kZVF1ZXJ5XCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS9Ac3RyaW5nLWxpdGVyYWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE5vZGVRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG5vZGVRdWVyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2RlUXVlcnlTdHJpbmd9JyBub2RlIHF1ZXJ5Li4uYCk7XG5cbiAgICBpZiAodGhpcy5xdWVyeSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBDYW5ub3QgZXZhbHVhdGUgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkgYmVjYXVzZSBpdHMgZXhwcmVzc2lvbiBpcyBtYWxmb3JtZWQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlTm9kZSA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgIGlmICh2YWx1ZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgaXMgbnVsbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG5cbiAgICBub2RlID0gdmFsdWVOb2RlOyAvLy9cblxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5xdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5vZGVzTGVuZ3RoICE9PSAxKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlIHJldHVybmVkIG5vZGVzIGlzICR7bm9kZXNMZW5ndGh9IHdoZW4gaXQgc2hvdWxkIGJlIDEuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2RlUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlTm9kZVF1ZXJ5Tm9kZSA9IHZhbHVlTm9kZVF1ZXJ5Tm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVOb2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlUXVlcnlOb2RlID0gdmFsdWVOb2RlUXVlcnlOb2RlOyAvLy9cblxuICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVRdWVyeTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgTm9kZVF1ZXJ5IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB0cmltRG91YmxlUXVvdGVzKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50KTtcblxuICByZXR1cm4gZXhwcmVzc2lvblN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidHJpbURvdWJsZVF1b3RlcyIsImNvbnRlbnRVdGlsaXRpZXMiLCJ2YWx1ZU5vZGVRdWVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsIm5vZGVRdWVyeVN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZU5vZGUiLCJnZXROb2RlIiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIiwiVmFsdWUiLCJkb20iLCJmcm9tTm9kZSIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsIm5vZGVBc1N0cmluZyIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVRdWVyeU5vZGUiLCJmcm9tTm9kZVF1ZXJ5Tm9kZSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7MEJBakJzQjt5QkFDUzs2QkFDRTsyREFFakI7Z0VBQ007cUJBRUk7cUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0YsQUFBRUUsbUJBQXFCQywrQkFBZ0IsQ0FBckNEO0FBRVIsSUFBTUUsMEJBQTBCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0MsaUNBQWlDRCxJQUFBQSxnQkFBUyxFQUFDO0lBRWpELFdBQWVFLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSztnQ0FESkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FB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