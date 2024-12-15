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
                var value = this.variable !== null ? this.variable.resolve(context) : this; ///
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
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, variable = null, value = new Value(node, nodes, number, string, boolean, variable);
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
        var stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), stringLiteral = stringLiteralTerminalNodeContent; ///
        string = stringFromStringLiteral(stringLiteral, context);
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
function stringFromStringLiteral(stringLiteral, context) {
    var string = stringLiteral.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbnVtYmVyVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQG51bWJlclwiKSxcbiAgICAgIGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi92YWx1ZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCB2YXJpYWJsZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gTk9ERV9UWVBFO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoY29udGV4dCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcodGhpcy5ub2Rlcyk7XG5cbiAgICAgIHN0cmluZyA9IGAnJHtub2Rlc1N0cmluZ30nYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm51bWJlcn1gO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGBcIiR7dGhpcy5zdHJpbmd9XCJgO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJyR7dGhpcy5ib29sZWFufSdgO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZVN0cmluZyAgPSAodGhpcy5ub2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTlVMTCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm5vZGVBc1N0cmluZyh0aGlzLm5vZGUpO1xuXG4gICAgICBzdHJpbmcgPSBgJyR7bm9kZVN0cmluZ30nYDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZS5yZXNvbHZlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpczsgLy8vXG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKHRoaXMubm9kZXMsIG5vZGVzKTtcblxuICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gdmFsdWUuZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5udW1iZXIgPT09IG51bWJlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5ib29sZWFuID09PSBib29sZWFuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKHRoaXMubm9kZSwgbm9kZSk7XG5cbiAgICAgIGVxdWFsVG8gPSBub2RlTWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYWx1ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50VmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKGFzc2lnbm1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGU7ICAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbCkgfHwgKG5vZGVCID09PSBudWxsKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFFcXVhbFRvTm9kZUEgPSBub2RlQS5pc0VxdWFsVG8obm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQUVxdWFsVG9Ob2RlQTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGxldCBub2Rlc01hdGNoO1xuXG4gIGlmICgobm9kZXNBID09PSBudWxsKSB8fCAobm9kZXNCID09PSBudWxsKSkge1xuICAgIG5vZGVzTWF0Y2ggPSAobm9kZXNBID09PSBub2Rlc0IpO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG5vZGVzRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbnVtYmVyID0gbnVsbDtcblxuICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGUgPSBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChudW1iZXJUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gbnVtYmVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAoc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBib29sZWFuID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBUUlVFOiB7XG4gICAgICAgIGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEZBTFNFOiB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwiYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwidmFyaWFibGUiLCJnZXROb2RlIiwiZ2V0Tm9kZXMiLCJnZXROdW1iZXIiLCJnZXRTdHJpbmciLCJnZXRCb29sZWFuIiwiZ2V0VmFyaWFibGUiLCJnZXRUeXBlIiwidHlwZSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiTk9ERV9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZVN0cmluZyIsIk5VTEwiLCJub2RlQXNTdHJpbmciLCJyZXNvbHZlIiwidmFsdWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZyb21Ob2RlIiwiZnJvbU5vZGVzIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJhc3NpZ25tZW50VmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwibmFtZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlQUVxdWFsVG9Ob2RlQSIsIm5vZGVzQSIsIm5vZGVzQiIsImRvbSIsIlZhcmlhYmxlIiwibm9kZUZyb21WYWx1ZU5vZGUiLCJub2Rlc0Zyb21WYWx1ZU5vZGUiLCJudW1iZXJGcm9tVmFsdWVOb2RlIiwic3RyaW5nRnJvbVZhbHVlTm9kZSIsImJvb2xlYW5Gcm9tVmFsdWVOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJOdW1iZXIiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJzdHJpbmdMaXRlcmFsIiwic3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGUiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50IiwiVFJVRSIsIkZBTFNFIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0JBOzs7ZUFBQTs7O3lCQWxCK0I7MkRBRWY7cUJBRVU7eUJBRXNCO3FCQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsMEJBQTBCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNwQ0MsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0UsMkJBQTJCRixJQUFBQSxnQkFBUyxFQUFDLHNCQUNyQ0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDLHNCQUN2Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLDJCQUMxQ0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0lBRWpELFdBQWVNLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQ0FEM0JOO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixLQUFLO1lBQ25COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixPQUFPO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixRQUFRO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNaLEtBQUssS0FBSyxNQUFNO29CQUM5QlksT0FBT0MsaUJBQVU7Z0JBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUNaLE1BQU0sS0FBSyxNQUFNO29CQUMvQlcsT0FBT0Usa0JBQVc7Z0JBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUNaLE1BQU0sS0FBSyxNQUFNO29CQUMvQlUsT0FBT0csa0JBQVc7Z0JBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUNaLE9BQU8sS0FBSyxNQUFNO29CQUNoQ1MsT0FBT0ksbUJBQVk7Z0JBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUNaLFFBQVEsS0FBSyxNQUFNO29CQUNqQ1EsT0FBTyxJQUFJLENBQUNSLFFBQVEsQ0FBQ08sT0FBTztnQkFDOUIsT0FBTztvQkFDTEMsT0FBT0ssZ0JBQVM7Z0JBQ2xCO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJakI7Z0JBRUosSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ0YsS0FBSyxLQUFLLE1BQU07b0JBQzlCLElBQU1vQixjQUFjRCxRQUFRRSxhQUFhLENBQUMsSUFBSSxDQUFDckIsS0FBSztvQkFFcERFLFNBQVMsQUFBQyxJQUFlLE9BQVprQixhQUFZO2dCQUMzQixPQUFPLElBQUksSUFBSSxDQUFDbkIsTUFBTSxLQUFLLE1BQU07b0JBQy9CQyxTQUFTLEFBQUMsR0FBYyxPQUFaLElBQUksQ0FBQ0QsTUFBTTtnQkFDekIsT0FBTyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxLQUFLLE1BQU07b0JBQy9CQSxTQUFTLEFBQUMsSUFBZSxPQUFaLElBQUksQ0FBQ0EsTUFBTSxFQUFDO2dCQUMzQixPQUFPLElBQUksSUFBSSxDQUFDQyxPQUFPLEtBQUssTUFBTTtvQkFDaENELFNBQVMsQUFBQyxJQUFnQixPQUFiLElBQUksQ0FBQ0MsT0FBTyxFQUFDO2dCQUM1QixPQUFPLElBQUksSUFBSSxDQUFDQyxRQUFRLEtBQUssTUFBTTtvQkFDakNGLFNBQVM7Z0JBQ1gsT0FBTztvQkFDTCxJQUFNb0IsYUFBYyxBQUFDLElBQUksQ0FBQ3ZCLElBQUksS0FBSyxPQUNid0IsZUFBSSxHQUNGSixRQUFRSyxZQUFZLENBQUMsSUFBSSxDQUFDekIsSUFBSTtvQkFFdERHLFNBQVMsQUFBQyxJQUFjLE9BQVhvQixZQUFXO2dCQUMxQjtnQkFFQSxPQUFPcEI7WUFDVDs7O1lBRUF1QixLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU4sT0FBTztnQkFDYixJQUFNTyxRQUFRLEFBQUMsSUFBSSxDQUFDdEIsUUFBUSxLQUFLLE9BQ2hCLElBQUksQ0FBQ0EsUUFBUSxDQUFDcUIsT0FBTyxDQUFDTixXQUNwQixJQUFJLEVBQUUsR0FBRztnQkFFNUIsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRCxLQUFLO2dCQUNiLElBQUlFO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUM1QixLQUFLLEtBQUssTUFBTTtvQkFDOUIsSUFBTUEsUUFBUTBCLE1BQU1yQixPQUFPLElBQ3JCd0IsYUFBYUMsV0FBVyxJQUFJLENBQUM5QixLQUFLLEVBQUVBO29CQUUxQzRCLFVBQVVDO2dCQUNaLE9BQU8sSUFBSSxJQUFJLENBQUM1QixNQUFNLEtBQUssTUFBTTtvQkFDL0IsSUFBTUEsU0FBU3lCLE1BQU1uQixTQUFTO29CQUU5QnFCLFVBQVcsSUFBSSxDQUFDM0IsTUFBTSxLQUFLQTtnQkFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxLQUFLLE1BQU07b0JBQy9CLElBQU1BLFNBQVN3QixNQUFNbEIsU0FBUztvQkFFOUJvQixVQUFXLElBQUksQ0FBQzFCLE1BQU0sS0FBS0E7Z0JBQzdCLE9BQU8sSUFBSSxJQUFJLENBQUNDLE9BQU8sS0FBSyxNQUFNO29CQUNoQyxJQUFNQSxVQUFVdUIsTUFBTWpCLFVBQVU7b0JBRWhDbUIsVUFBVyxJQUFJLENBQUN6QixPQUFPLEtBQUtBO2dCQUM5QixPQUFPO29CQUNMLElBQU1KLE9BQU8yQixNQUFNckIsT0FBTyxJQUNwQjBCLGNBQWNDLFVBQVUsSUFBSSxDQUFDakMsSUFBSSxFQUFFQTtvQkFFekM2QixVQUFVRztnQkFDWjtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBSU9LLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNsQyxJQUFJLEVBQUVvQixPQUFPO2dCQUMzQixJQUFNbkIsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFNBQVMsTUFDVEMsVUFBVSxNQUNWQyxXQUFXLE1BQ1hzQixRQUFRLElBQUk1QixNQUFNQyxNQUFNQyxPQUFPQyxRQUFRQyxRQUFRQyxTQUFTQztnQkFFOUQsT0FBT3NCO1lBQ1Q7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxVQUFVbEMsS0FBSyxFQUFFbUIsT0FBTztnQkFDN0IsSUFBTXBCLE9BQU8sTUFDUEUsU0FBUyxNQUNUQyxTQUFTLE1BQ1RDLFVBQVUsTUFDVkMsV0FBVyxNQUNYc0IsUUFBUSxJQUFJNUIsTUFBTUMsTUFBTUMsT0FBT0MsUUFBUUMsUUFBUUMsU0FBU0M7Z0JBRTlELE9BQU9zQjtZQUNUOzs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV2pDLE1BQU0sRUFBRWlCLE9BQU87Z0JBQy9CLElBQU1wQixPQUFPLE1BQ1BDLFFBQVEsTUFDUkMsU0FBUyxNQUNURSxVQUFVLE1BQ1ZDLFdBQVcsTUFDWHNCLFFBQVEsSUFBSTVCLE1BQU1DLE1BQU1DLE9BQU9DLFFBQVFDLFFBQVFDLFNBQVNDO2dCQUU5RCxPQUFPc0I7WUFDVDs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlqQyxPQUFPLEVBQUVnQixPQUFPO2dCQUNqQyxJQUFNcEIsT0FBTyxNQUNQQyxRQUFRLE1BQ1JDLFNBQVMsTUFDVEMsU0FBUyxNQUNURSxXQUFXLE1BQ1hzQixRQUFRLElBQUk1QixNQUFNQyxNQUFNQyxPQUFPQyxRQUFRQyxRQUFRQyxTQUFTQztnQkFFOUQsT0FBT3NCO1lBQ1Q7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVuQixPQUFPO2dCQUNyQyxJQUFNTyxRQUFRYSxtQkFBbUJELFdBQVduQjtnQkFFNUMsT0FBT087WUFDVDs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFdEIsT0FBTztnQkFDN0MsSUFBSU8sUUFBUTtnQkFFWixJQUFNZ0IscUJBQXFCbEQsd0JBQXdCaUQ7Z0JBRW5ELElBQUlDLHVCQUF1QixNQUFNO29CQUMvQixJQUFNSixZQUFZSSxvQkFBb0IsR0FBRztvQkFFekNoQixRQUFRYSxtQkFBbUJELFdBQVduQjtnQkFDeEM7Z0JBRUEsT0FBT087WUFDVDs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGFBQWEsRUFBRXpCLE9BQU87Z0JBQzlDLElBQUlPLFFBQVE7Z0JBRVosSUFBTW1CLHNCQUFzQnBELHlCQUF5Qm1EO2dCQUVyRCxJQUFJQyx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTVAsWUFBWU8scUJBQXNCLEdBQUc7b0JBRTNDbkIsUUFBUWEsbUJBQW1CRCxXQUFXbkI7Z0JBQ3hDO2dCQUVBLE9BQU9PO1lBQ1Q7OztZQUVPb0IsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCQyxtQkFBbUIsRUFBRTVCLE9BQU87Z0JBQ3pELElBQUlPLFFBQVE7Z0JBRVosSUFBTXNCLDJCQUEyQnJELDhCQUE4Qm9EO2dCQUUvRCxJQUFJQyw2QkFBNkIsTUFBTTtvQkFDckMsSUFBTVYsWUFBWVUsMEJBQTBCLEdBQUc7b0JBRS9DdEIsUUFBUWEsbUJBQW1CRCxXQUFXbkI7Z0JBQ3hDO2dCQUVBLE9BQU9PO1lBQ1Q7Ozs7S0E1RkEseUJBQU91QixRQUFPO0FBK0ZoQixTQUFTakIsVUFBVWtCLEtBQUssRUFBRUMsS0FBSztJQUM3QixJQUFJcEI7SUFFSixJQUFJLEFBQUNtQixVQUFVLFFBQVVDLFVBQVUsTUFBTztRQUN4Q3BCLGNBQWVtQixVQUFVQztJQUMzQixPQUFPO1FBQ0wsSUFBTUMsb0JBQW9CRixNQUFNdkIsU0FBUyxDQUFDd0I7UUFFMUNwQixjQUFjcUIsbUJBQW9CLEdBQUc7SUFDdkM7SUFFQSxPQUFPckI7QUFDVDtBQUVBLFNBQVNELFdBQVd1QixNQUFNLEVBQUVDLE1BQU07SUFDaEMsSUFBSXpCO0lBRUosSUFBSSxBQUFDd0IsV0FBVyxRQUFVQyxXQUFXLE1BQU87UUFDMUN6QixhQUFjd0IsV0FBV0M7SUFDM0IsT0FBTztRQUNMekIsYUFBYXpDLE1BQU1pRSxRQUFRQyxRQUFRLFNBQUNKLE9BQU9DO1lBQ3pDLElBQU1wQixjQUFjQyxVQUFVa0IsT0FBT0M7WUFFckMsSUFBSXBCLGFBQWE7Z0JBQ2YsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1Q7QUFFQSxTQUFTVSxtQkFBbUJELFNBQVMsRUFBRW5CLE9BQU87SUFDNUMsSUFBUXJCLFFBQW9CeUQsWUFBRyxDQUF2QnpELE9BQU8wRCxXQUFhRCxZQUFHLENBQWhCQyxVQUNUekQsT0FBTzBELGtCQUFrQm5CLFdBQVduQixVQUNwQ25CLFFBQVEwRCxtQkFBbUJwQixXQUFXbkIsVUFDdENsQixTQUFTMEQsb0JBQW9CckIsV0FBV25CLFVBQ3hDakIsU0FBUzBELG9CQUFvQnRCLFdBQVduQixVQUN4Q2hCLFVBQVUwRCxxQkFBcUJ2QixXQUFXbkIsVUFDMUNmLFdBQVdvRCxTQUFTbkIsYUFBYSxDQUFDQyxXQUFXbkIsVUFDN0NPLFFBQVEsSUFBSTVCLE1BQU1DLE1BQU1DLE9BQU9DLFFBQVFDLFFBQVFDLFNBQVNDO0lBRTlELE9BQU9zQjtBQUNUO0FBRUEsU0FBUytCLGtCQUFrQm5CLFNBQVMsRUFBRW5CLE9BQU87SUFDM0MsSUFBTXBCLE9BQU8sTUFBTyxHQUFHO0lBRXZCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTMkQsbUJBQW1CcEIsU0FBUyxFQUFFbkIsT0FBTztJQUM1QyxJQUFNbkIsUUFBUSxNQUFPLEdBQUc7SUFFeEIsT0FBT0E7QUFDVDtBQUVBLFNBQVMyRCxvQkFBb0JyQixTQUFTLEVBQUVuQixPQUFPO0lBQzdDLElBQUlsQixTQUFTO0lBRWIsSUFBTTZELHFCQUFxQnhFLHdCQUF3QmdEO0lBRW5ELElBQUl3Qix1QkFBdUIsTUFBTTtRQUMvQixJQUFNQyw0QkFBNEJELG1CQUFtQkUsVUFBVTtRQUUvRC9ELFNBQVNnRSxPQUFPRjtJQUNsQjtJQUVBLE9BQU85RDtBQUNUO0FBRUEsU0FBUzJELG9CQUFvQnRCLFNBQVMsRUFBRW5CLE9BQU87SUFDN0MsSUFBSWpCLFNBQVM7SUFFYixJQUFNZ0UsNEJBQTRCdEUsK0JBQStCMEM7SUFFakUsSUFBSTRCLDhCQUE4QixNQUFNO1FBQ3RDLElBQU1DLG1DQUFtQ0QsMEJBQTBCRixVQUFVLElBQ3ZFSSxnQkFBZ0JELGtDQUFrQyxHQUFHO1FBRTNEakUsU0FBU21FLHdCQUF3QkQsZUFBZWpEO0lBQ2xEO0lBRUEsT0FBT2pCO0FBQ1Q7QUFFQSxTQUFTMkQscUJBQXFCdkIsU0FBUyxFQUFFbkIsT0FBTztJQUM5QyxJQUFJaEIsVUFBVTtJQUVkLElBQU1tRSx3QkFBd0I1RSwyQkFBMkI0QztJQUV6RCxJQUFJZ0MsMEJBQTBCLE1BQU07UUFDbEMsSUFBTUMsK0JBQStCRCxzQkFBc0JOLFVBQVU7UUFFckUsT0FBUU87WUFDTixLQUFLQyxlQUFJO2dCQUFFO29CQUNUckUsVUFBVTtvQkFFVjtnQkFDRjtZQUVBLEtBQUtzRSxnQkFBSztnQkFBRTtvQkFDVnRFLFVBQVU7b0JBRVY7Z0JBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNrRSx3QkFBd0JELGFBQWEsRUFBRWpELE9BQU87SUFDckQsSUFBTWpCLFNBQVNrRSxjQUFjTSxPQUFPLENBQUMsWUFBWUMsdUJBQVk7SUFFN0QsT0FBT3pFO0FBQ1QifQ==