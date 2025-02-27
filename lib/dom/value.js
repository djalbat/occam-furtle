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
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
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
var _Value;
var match = _necessary.arrayUtilities.match;
var numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), assignmentValueNodeQuery = (0, _query.nodeQuery)("/assignment/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, procedureCall) {
        _class_call_check(this, Value);
        this.node = node;
        this.nodes = nodes;
        this.number = number;
        this.string = string;
        this.boolean = boolean;
        this.some = some;
        this.ternary = ternary;
        this.variable = variable;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.comparison = comparison;
        this.procedureCall = procedureCall;
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
            key: "getSome",
            value: function getSome() {
                return this.some;
            }
        },
        {
            key: "getTernary",
            value: function getTernary() {
                return this.ternay;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getNodeQuery",
            value: function getNodeQuery() {
                return this.nodeQuery;
            }
        },
        {
            key: "getNodesQuery",
            value: function getNodesQuery() {
                return this.nodesQuery;
            }
        },
        {
            key: "getComparison",
            value: function getComparison() {
                return this.comparison;
            }
        },
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.node !== null) {
                    type = _types.NODE_TYPE;
                } else if (this.nodes !== null) {
                    type = _types.NODES_TYPE;
                } else if (this.number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (this.string !== null) {
                    type = _types.STRING_TYPE;
                } else if (this.boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (this.some !== null) {
                    type = this.some.getType();
                } else if (this.ternary !== null) {
                    type = this.ternary.getType();
                } else if (this.variable !== null) {
                    type = this.variable.getType();
                } else if (this.nodeQuery !== null) {
                    type = this.nodeQuery.getType();
                } else if (this.nodesQuery !== null) {
                    type = this.nodesQuery.getType();
                } else if (this.comparison !== null) {
                    type = this.comparison.getType();
                } else if (this.procedureCall !== null) {
                    type = this.procedureCall.getType();
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
                } else if (this.node !== null) {
                    string = nodeAsString(this.node, context);
                } else if (this.nodes !== null) {
                    string = nodesAsString(this.nodes, context);
                } else if (this.number !== null) {
                    string = numberAsString(this.number, context);
                } else if (this.string !== null) {
                    string = stringAsString(this.string, context);
                } else if (this.boolean !== null) {
                    string = booleanAsString(this.boolean, context);
                } else if (this.some !== null) {
                    string = this.some.asString(context);
                } else if (this.ternary !== null) {
                    string = this.ternary.asString(context);
                } else if (this.variable !== null) {
                    string = this.variable.asString(context);
                } else if (this.nodeQuery !== null) {
                    string = this.nodeQuery.asString(context);
                } else if (this.nodesQuery !== null) {
                    string = this.nodesQuery.asString(context);
                } else if (this.comparison !== null) {
                    string = this.comparison.asString(context);
                } else if (this.procedureCall !== null) {
                    string = this.procedureCall.asString(context);
                }
                return string;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                if (false) {
                ///
                } else if (this.node !== null || this.nodes !== null || this.number !== null || this.string !== null || this.boolean !== null) {
                    value = this;
                } else if (this.some !== null) {
                    value = this.some.evaluate(context);
                } else if (this.ternary !== null) {
                    value = this.ternary.evaluate(context);
                } else if (this.variable !== null) {
                    value = this.variable.evaluate(context);
                } else if (this.nodeQuery !== null) {
                    value = this.nodeQuery.evaluate(context);
                } else if (this.nodesQuery !== null) {
                    value = this.nodesQuery.evaluate(context);
                } else if (this.comparison !== null) {
                    value = this.comparison.evaluate(context);
                } else if (this.procedureCall !== null) {
                    value = this.procedureCall.evaluate(context);
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
                } else if (this.node !== null) {
                    var node = value.getNode();
                    if (node === null) {
                        equalTo = false;
                    } else {
                        var nodeA = this.node, nodeB = node, nodeMatches = matchNode(nodeA, nodeB);
                        equalTo = nodeMatches; ///
                    }
                } else if (this.nodes !== null) {
                    var nodes = value.getNode();
                    if (nodes === null) {
                        equalTo = false;
                    } else {
                        var nodesA = this.nodes, nodesB = nodes, nodesMatch = matchNodes(nodesA, nodesB);
                        equalTo = nodesMatch; ///
                    }
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
                    debugger;
                }
                return equalTo;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                if (node === null) {
                    node = _nullNode.default;
                }
                var nodes = null, number = null, string = null, boolean = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, procedureCall);
                return value;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, procedureCall);
                return value;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, procedureCall);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, procedureCall);
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
    if (nodeA === _nullNode.default || nodeB === _nullNode.default) {
        nodeMatches = nodeA === nodeB;
    } else {
        var nodeAEqualToNodeA = nodeA.isEqualTo(nodeB);
        nodeMatches = nodeAEqualToNodeA; ///
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    var nodesMatch;
    nodesMatch = match(nodesA, nodesB, function(nodeA, nodeB) {
        var nodeMatches = matchNode(nodeA, nodeB);
        if (nodeMatches) {
            return true;
        }
    });
    return nodesMatch;
}
function nodeAsString(node, context) {
    var string;
    var nodeString = node === _nullNode.default ? _constants.NULL : context.nodeAsString(node);
    string = "'".concat(nodeString, "'");
    return string;
}
function nodesAsString(nodes, context) {
    var string;
    var nodesString = context.nodesAsString(nodes);
    string = "'".concat(nodesString, "'");
    return string;
}
function numberAsString(number, context) {
    var string;
    string = "".concat(number);
    return string;
}
function stringAsString(string, context) {
    string = '"'.concat(string, '"'); ///
    return string;
}
function booleanAsString(boolean, context) {
    var string;
    string = "'".concat(boolean, "'");
    return string;
}
function valueFromValueNode(valueNode, context) {
    var Value = _dom.default.Value, Ternary = _dom.default.Ternary, Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, Comparison = _dom.default.Comparison, ProcedureCall = _dom.default.ProcedureCall, node = nodeFromValueNode(valueNode, context), nodes = nodesFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), string = stringFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), ternary = Ternary.fromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), _$nodeQuery = NodeQuery.fromValueNode(valueNode, context), nodesQuery = NodesQuery.fromValueNode(valueNode, context), comparison = Comparison.fromValueNode(valueNode, context), procedureCall = ProcedureCall.fromValueNode(valueNode, context), value = new Value(node, nodes, number, string, boolean, ternary, variable, _$nodeQuery, nodesQuery, comparison, procedureCall);
    return value;
}
function nodeFromValueNode(valueNode, context) {
    var node = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.NULL:
                {
                    node = _nullNode.default;
                    break;
                }
        }
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbnVtYmVyVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQG51bWJlclwiKSxcbiAgICAgIGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi92YWx1ZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ib29sZWFuID0gYm9vbGVhbjtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZTtcbiAgfVxuXG4gIGdldFRlcm5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybmF5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROb2RlUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZVF1ZXJ5O1xuICB9XG5cbiAgZ2V0Tm9kZXNRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1F1ZXJ5O1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKHRoaXMubm9kZXMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bWJlckFzU3RyaW5nKHRoaXMubnVtYmVyLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmdBc1N0cmluZyh0aGlzLnN0cmluZywgY29udGV4dClcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYm9vbGVhbkFzU3RyaW5nKHRoaXMuYm9vbGVhbiwgY29udGV4dClcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5zb21lLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnRlcm5hcnkuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZVF1ZXJ5LmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVzUXVlcnkuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuY29tcGFyaXNvbi5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLm5vZGUgIT09IG51bGwpICB8fFxuICAgICAgICAgICAgICAgKHRoaXMubm9kZXMgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5udW1iZXIgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5zdHJpbmcgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ib29sZWFuICE9PSBudWxsKSkge1xuICAgICAgdmFsdWUgPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnRlcm5hcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm5vZGVzUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5jb21wYXJpc29uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvblZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvblZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgYXNzaWdubWVudFZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeShhc3NpZ21lbnROb2RlKTtcblxuICAgIGlmIChhc3NpZ25tZW50VmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBhc3NpZ25tZW50VmFsdWVOb2RlOyAgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkocmV0dXJuU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFFcXVhbFRvTm9kZUEgPSBub2RlQS5pc0VxdWFsVG8obm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQUVxdWFsVG9Ob2RlQTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGxldCBub2Rlc01hdGNoO1xuXG4gIG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1N0cmluZyhub2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVN0cmluZyAgPSAobm9kZSA9PT0gbnVsbE5vZGUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE5VTEwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZVN0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXMpO1xuXG4gIHN0cmluZyA9IGAnJHtub2Rlc1N0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBudW1iZXJBc1N0cmluZyhudW1iZXIsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJHtudW1iZXJ9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdBc1N0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgc3RyaW5nID0gYFwiJHtzdHJpbmd9XCJgOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuQXNTdHJpbmcoYm9vbGVhbiwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAnJHtib29sZWFufSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgVGVybmFyeSwgVmFyaWFibGUsIE5vZGVRdWVyeSwgTm9kZXNRdWVyeSwgQ29tcGFyaXNvbiwgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJvb2xlYW4gPSBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gVGVybmFyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBOb2RlUXVlcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gTm9kZXNRdWVyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBOVUxMOiB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSIsImFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlIiwibm9kZSIsIm5vZGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbGVhbiIsInNvbWUiLCJ0ZXJuYXJ5IiwidmFyaWFibGUiLCJub2Rlc1F1ZXJ5IiwiY29tcGFyaXNvbiIsInByb2NlZHVyZUNhbGwiLCJnZXROb2RlIiwiZ2V0Tm9kZXMiLCJnZXROdW1iZXIiLCJnZXRTdHJpbmciLCJnZXRCb29sZWFuIiwiZ2V0U29tZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXRWYXJpYWJsZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRDb21wYXJpc29uIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFR5cGUiLCJ0eXBlIiwiTk9ERV9UWVBFIiwiTk9ERVNfVFlQRSIsIk5VTUJFUl9UWVBFIiwiU1RSSU5HX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJhc1N0cmluZyIsImNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibnVtYmVyQXNTdHJpbmciLCJzdHJpbmdBc1N0cmluZyIsImJvb2xlYW5Bc1N0cmluZyIsImV2YWx1YXRlIiwidmFsdWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJmcm9tTm9kZSIsIm51bGxOb2RlIiwiZnJvbU5vZGVzIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJhc3NpZ25tZW50VmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwibmFtZSIsIm5vZGVBRXF1YWxUb05vZGVBIiwibm9kZVN0cmluZyIsIk5VTEwiLCJub2Rlc1N0cmluZyIsImRvbSIsIlRlcm5hcnkiLCJWYXJpYWJsZSIsIk5vZGVRdWVyeSIsIk5vZGVzUXVlcnkiLCJDb21wYXJpc29uIiwiUHJvY2VkdXJlQ2FsbCIsIm5vZGVGcm9tVmFsdWVOb2RlIiwibm9kZXNGcm9tVmFsdWVOb2RlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsInN0cmluZ0Zyb21WYWx1ZU5vZGUiLCJib29sZWFuRnJvbVZhbHVlTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsIk51bWJlciIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsIlRSVUUiLCJGQUxTRSIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7Ozt5QkFuQitCOzJEQUVmOytEQUNLO3FCQUVLO3lCQUVzQjtxQkFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsMEJBQTBCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNwQ0MsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0UsMkJBQTJCRixJQUFBQSxnQkFBUyxFQUFDLHNCQUNyQ0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDLHNCQUN2Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLDJCQUMxQ0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0lBRWpELFdBQWVNLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFB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