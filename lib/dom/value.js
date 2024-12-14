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
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
var _constants = require("../constants");
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
var _Value;
var match = _necessary.arrayUtilities.match;
var numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), assignmentValueNodeQuery = (0, _query.nodeQuery)("/assignment/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(node, nodes, number, string, boolean, variable) {
        _class_call_check(this, Value);
        this.node = node;
        this.nodes = nodes;
        this.number = number;
        this.string = string;
        this.boolean = boolean;
        this.variable = variable;
    }
    _create_class(Value, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.nodes;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                return this.boolean;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.nodes !== null) {
                    type = _types.NODES_TYPE;
                } else if (this.number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (this.string !== null) {
                    type = _types.STRING_TYPE;
                } else if (this.boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (this.variable !== null) {
                    type = this.variable.getType();
                } else {
                    type = _types.NODE_TYPE;
                }
                return type;
            }
        },
        {
            key: "asString",
            value: function asString(context) {
                var string;
                if (false) {
                ///
                } else if (this.nodes !== null) {
                    var nodesString = context.nodesAsString(this.nodes);
                    string = "'".concat(nodesString, "'");
                } else if (this.number !== null) {
                    string = "".concat(this.number);
                } else if (this.string !== null) {
                    string = '"'.concat(this.string, '"');
                } else if (this.boolean !== null) {
                    string = "'".concat(this.boolean, "'");
                } else if (this.variable !== null) {
                    string = null;
                } else {
                    var nodeString = this.node === null ? _constants.NULL : context.nodeAsString(this.node);
                    string = "'".concat(nodeString, "'");
                }
                return string;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var value = this; ///
                if (this.variable !== null) {
                    value = this.variable.resolve(context);
                }
                return value;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(value) {
                var equalTo;
                if (false) {
                ///
                } else if (this.nodes !== null) {
                    var nodes = value.getNode(), nodesMatch = matchNodes(this.nodes, nodes);
                    equalTo = nodesMatch;
                } else if (this.number !== null) {
                    var number = value.getNumber();
                    equalTo = this.number === number;
                } else if (this.string !== null) {
                    var string = value.getString();
                    equalTo = this.string === string;
                } else if (this.boolean !== null) {
                    var boolean = value.getBoolean();
                    equalTo = this.boolean === boolean;
                } else {
                    var node = value.getNode(), nodeMatches = matchNode(this.node, node);
                    equalTo = nodeMatches;
                }
                return equalTo;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var nodes = null, number = null, string = null, boolean = null, variable = null, value = new Value(node, nodes, number, string, boolean, variable);
                return value;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, variable = null, value = new Value(node, nodes, number, string, boolean, variable);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, variable = null, value = new Value(node, nodes, number, string, boolean, variable);
                return value;
            }
        },
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var value = valueFromValueNode(valueNode, context);
                return value;
            }
        },
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var value = null;
                var conditionValueNode = conditionValueNodeQuery(conditionNode);
                if (conditionValueNode !== null) {
                    var valueNode = conditionValueNode; ///
                    value = valueFromValueNode(valueNode, context);
                }
                return value;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var value = null;
                var assignmentValueNode = assignmentValueNodeQuery(assigmentNode);
                if (assignmentValueNode !== null) {
                    var valueNode = assignmentValueNode; ///
                    value = valueFromValueNode(valueNode, context);
                }
                return value;
            }
        },
        {
            key: "fromReturnStatementNode",
            value: function fromReturnStatementNode(returnStatementNode, context) {
                var value = null;
                var returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode);
                if (returnStatementValueNode !== null) {
                    var valueNode = returnStatementValueNode; ///
                    value = valueFromValueNode(valueNode, context);
                }
                return value;
            }
        }
    ]);
    return Value;
}(), _define_property(_Value, "name", "Value"), _Value));
function matchNode(nodeA, nodeB) {
    var nodeMatches;
    if (nodeA === null || nodeB === null) {
        nodeMatches = nodeA === nodeB;
    } else {
        var nodeAEqualToNodeA = nodeA.isEqualTo(nodeB);
        nodeMatches = nodeAEqualToNodeA; ///
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    var nodesMatch;
    if (nodesA === null || nodesB === null) {
        nodesMatch = nodesA === nodesB;
    } else {
        nodesMatch = match(nodesA, nodesB, function(nodeA, nodeB) {
            var nodeMatches = matchNode(nodeA, nodeB);
            if (nodeMatches) {
                return true;
            }
        });
    }
    return nodesMatch;
}
function valueFromValueNode(valueNode, context) {
    var Value = _dom.default.Value, Variable = _dom.default.Variable, node = nodeFromValueNode(valueNode, context), nodes = nodesFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), string = stringFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), value = new Value(node, nodes, number, string, boolean, variable);
    return value;
}
function nodeFromValueNode(valueNode, context) {
    var node = null; ///
    return node;
}
function nodesFromValueNode(valueNode, context) {
    var nodes = null; ///
    return nodes;
}
function numberFromValueNode(valueNode, context) {
    var number = null;
    var numberTerminalNode = numberTerminalNodeQuery(valueNode);
    if (numberTerminalNode !== null) {
        var numberTerminalNodeContent = numberTerminalNode.getContent();
        number = Number(numberTerminalNodeContent);
    }
    return number;
}
function stringFromValueNode(valueNode, context) {
    var string = null;
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(valueNode);
    if (stringLiteralTerminalNode !== null) {
        var stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent();
        string = stringLiteralTerminalNodeContent; ///
    }
    return string;
}
function booleanFromValueNode(valueNode, context) {
    var boolean = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.TRUE:
                {
                    boolean = true;
                    break;
                }
            case _constants.FALSE:
                {
                    boolean = false;
                    break;
                }
        }
    }
    return boolean;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgTlVNQkVSX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BudW1iZXJcIiksXG4gICAgICBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vdmFsdWVcIiksXG4gICAgICBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC92YWx1ZVwiKSxcbiAgICAgIHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BwcmltaXRpdmVcIiksXG4gICAgICByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZXR1cm5TdGF0ZW1lbnQvdmFsdWVcIiksXG4gICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHN0cmluZy1saXRlcmFsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgdmFyaWFibGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVTX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5VTUJFUl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBTVFJJTkdfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKHRoaXMubm9kZXMpO1xuXG4gICAgICBzdHJpbmcgPSBgJyR7bm9kZXNTdHJpbmd9J2A7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7dGhpcy5udW1iZXJ9YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgXCIke3RoaXMuc3RyaW5nfVwiYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCcke3RoaXMuYm9vbGVhbn0nYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVTdHJpbmcgID0gKHRoaXMubm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5VTEwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ub2RlQXNTdHJpbmcodGhpcy5ub2RlKTtcblxuICAgICAgc3RyaW5nID0gYCcke25vZGVTdHJpbmd9J2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXM7IC8vL1xuXG4gICAgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YWx1ZSkge1xuICAgIGxldCBlcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXModGhpcy5ub2Rlcywgbm9kZXMpO1xuXG4gICAgICBlcXVhbFRvID0gbm9kZXNNYXRjaDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSB2YWx1ZS5nZXROdW1iZXIoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLm51bWJlciA9PT0gbnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLnN0cmluZyA9PT0gc3RyaW5nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUodGhpcy5ub2RlLCBub2RlKTtcblxuICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlXCI7XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50VmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKGFzc2lnbm1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGU7ICAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbCkgfHwgKG5vZGVCID09PSBudWxsKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFFcXVhbFRvTm9kZUEgPSBub2RlQS5pc0VxdWFsVG8obm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQUVxdWFsVG9Ob2RlQTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGxldCBub2Rlc01hdGNoO1xuXG4gIGlmICgobm9kZXNBID09PSBudWxsKSB8fCAobm9kZXNCID09PSBudWxsKSkge1xuICAgIG5vZGVzTWF0Y2ggPSAobm9kZXNBID09PSBub2Rlc0IpO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG5vZGVzRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbnVtYmVyID0gbnVsbDtcblxuICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGUgPSBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChudW1iZXJUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gbnVtYmVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAoc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwiYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwidmFyaWFibGUiLCJnZXROb2RlIiwiZ2V0Tm9kZXMiLCJnZXROdW1iZXIiLCJnZXRTdHJpbmciLCJnZXRCb29sZWFuIiwiZ2V0VmFyaWFibGUiLCJnZXRUeXBlIiwidHlwZSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiTk9ERV9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZVN0cmluZyIsIk5VTEwiLCJub2RlQXNTdHJpbmciLCJyZXNvbHZlIiwidmFsdWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZyb21Ob2RlIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJhc3NpZ25tZW50VmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwibmFtZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlQUVxdWFsVG9Ob2RlQSIsIm5vZGVzQSIsIm5vZGVzQiIsImRvbSIsIlZhcmlhYmxlIiwibm9kZUZyb21WYWx1ZU5vZGUiLCJub2Rlc0Zyb21WYWx1ZU5vZGUiLCJudW1iZXJGcm9tVmFsdWVOb2RlIiwic3RyaW5nRnJvbVZhbHVlTm9kZSIsImJvb2xlYW5Gcm9tVmFsdWVOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJOdW1iZXIiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGUiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50IiwiVFJVRSIsIkZBTFNFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUFBOzs7eUJBbEIrQjsyREFFZjtxQkFFVTt5QkFFUTtxQkFDNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLDBCQUEwQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDcENDLDBCQUEwQkQsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDcENFLDJCQUEyQkYsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDckNHLDZCQUE2QkgsSUFBQUEsZ0JB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