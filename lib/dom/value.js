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
var ternaryValueNodeQuery = (0, _query.nodeQuery)("/ternary/value"), numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), assignmentValueNodeQuery = (0, _query.nodeQuery)("/assignment/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal"), conditionalBlocksCValueNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/value");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall) {
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
        this.negatedValue = negatedValue;
        this.bitwiseValue = bitwiseValue;
        this.bracketedValue = bracketedValue;
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
            key: "getNegatedValue",
            value: function getNegatedValue() {
                return this.negatedValue;
            }
        },
        {
            key: "getBitwiseValue",
            value: function getBitwiseValue() {
                return this.bitwiseValue;
            }
        },
        {
            key: "getBracketedValue",
            value: function getBracketedValue() {
                return this.bracketedValue;
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
                var nodes = null, number = null, string = null, boolean = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall);
                return value;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall);
                return value;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall);
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
            key: "fromTernaryNode",
            value: function fromTernaryNode(ternaryNode, context) {
                var ternaryValueNode = ternaryValueNodeQuery(ternaryNode), valueNode = ternaryValueNode, value = valueFromValueNode(valueNode, context);
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
        },
        {
            key: "fromConditionalBlocksNode",
            value: function fromConditionalBlocksNode(conditionalBlocksNode, context) {
                var conditionalBlocksCValueNode = conditionalBlocksCValueNodeQuery(conditionalBlocksNode), valueNode = conditionalBlocksCValueNode, value = valueFromValueNode(valueNode, context);
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
    var Some = _dom.default.Some, Value = _dom.default.Value, Ternary = _dom.default.Ternary, Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, Comparison = _dom.default.Comparison, NegatedValue = _dom.default.NegatedValue, BitwiseValue = _dom.default.BitwiseValue, BracketedValue = _dom.default.BracketedValue, ProcedureCall = _dom.default.ProcedureCall, node = nodeFromValueNode(valueNode, context), nodes = nodesFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), string = stringFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), some = Some.fromValueNode(valueNode, context), ternary = Ternary.fromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), _$nodeQuery = NodeQuery.fromValueNode(valueNode, context), nodesQuery = NodesQuery.fromValueNode(valueNode, context), comparison = Comparison.fromValueNode(valueNode, context), negatedValue = NegatedValue.fromValueNode(valueNode, context), bitwiseValue = BitwiseValue.fromValueNode(valueNode, context), bracketedValue = BracketedValue.fromValueNode(valueNode, context), procedureCall = ProcedureCall.fromValueNode(valueNode, context), value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgdGVybmFyeVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVcIiksXG4gICAgICBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvdmFsdWVcIiksXG4gICAgICBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AcHJpbWl0aXZlXCIpLFxuICAgICAgcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmV0dXJuU3RhdGVtZW50L3ZhbHVlXCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BzdHJpbmctbGl0ZXJhbFwiKSxcbiAgICAgIGNvbmRpdGlvbmFsQmxvY2tzQ1ZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2tzL3ZhbHVlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ib29sZWFuID0gYm9vbGVhbjtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLm5lZ2F0ZWRWYWx1ZSA9IG5lZ2F0ZWRWYWx1ZTtcbiAgICB0aGlzLmJpdHdpc2VWYWx1ZSA9IGJpdHdpc2VWYWx1ZTtcbiAgICB0aGlzLmJyYWNrZXRlZFZhbHVlID0gYnJhY2tldGVkVmFsdWU7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkVmFsdWU7XG4gIH1cblxuICBnZXRCaXR3aXNlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYml0d2lzZVZhbHVlO1xuICB9XG5cbiAgZ2V0QnJhY2tldGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVmFsdWU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFU19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnNvbWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoY29udGV4dCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVzQXNTdHJpbmcodGhpcy5ub2RlcywgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbnVtYmVyQXNTdHJpbmcodGhpcy5udW1iZXIsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZ0FzU3RyaW5nKHRoaXMuc3RyaW5nLCBjb250ZXh0KVxuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBib29sZWFuQXNTdHJpbmcodGhpcy5ib29sZWFuLCBjb250ZXh0KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnNvbWUuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMudGVybmFyeS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMudmFyaWFibGUuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2RlUXVlcnkuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZXNRdWVyeS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5jb21wYXJpc29uLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMubm9kZSAhPT0gbnVsbCkgIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ub2RlcyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm51bWJlciAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLnN0cmluZyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLmJvb2xlYW4gIT09IG51bGwpKSB7XG4gICAgICB2YWx1ZSA9IHRoaXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5zb21lLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbXBhcmlzb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YWx1ZSkge1xuICAgIGxldCBlcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBlcXVhbFRvID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgICAgICBub2Rlc0IgPSBub2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgICAgICBlcXVhbFRvID0gbm9kZXNNYXRjaDsgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gdmFsdWUuZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5udW1iZXIgPT09IG51bWJlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5ib29sZWFuID09PSBib29sZWFuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYWx1ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBudWxsTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYml0d2lzZVZhbHVlID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYml0d2lzZVZhbHVlID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYml0d2lzZVZhbHVlID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJuYXJ5VmFsdWVOb2RlID0gdGVybmFyeVZhbHVlTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgICB2YWx1ZU5vZGUgPSB0ZXJuYXJ5VmFsdWVOb2RlLCAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50VmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKGFzc2lnbm1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGU7ICAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25hbEJsb2Nrc05vZGUoY29uZGl0aW9uYWxCbG9ja3NOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlID0gY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICB2YWx1ZU5vZGUgPSBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGUsICAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQUVxdWFsVG9Ob2RlQSA9IG5vZGVBLmlzRXF1YWxUbyhub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBRXF1YWxUb05vZGVBOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgbGV0IG5vZGVzTWF0Y2g7XG5cbiAgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2RlU3RyaW5nICA9IChub2RlID09PSBudWxsTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTlVMTCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIHN0cmluZyA9IGAnJHtub2RlU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2Rlcyk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVzU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG51bWJlckFzU3RyaW5nKG51bWJlciwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAke251bWJlcn1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0FzU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICBzdHJpbmcgPSBgXCIke3N0cmluZ31cImA7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Bc1N0cmluZyhib29sZWFuLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCcke2Jvb2xlYW59J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUsIFZhbHVlLCBUZXJuYXJ5LCBWYXJpYWJsZSwgTm9kZVF1ZXJ5LCBOb2Rlc1F1ZXJ5LCBDb21wYXJpc29uLCBOZWdhdGVkVmFsdWUsIEJpdHdpc2VWYWx1ZSwgQnJhY2tldGVkVmFsdWUsIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IFNvbWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gVGVybmFyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBOb2RlUXVlcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gTm9kZXNRdWVyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFZhbHVlID0gTmVnYXRlZFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYml0d2lzZVZhbHVlID0gQml0d2lzZVZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBCcmFja2V0ZWRWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBOVUxMOiB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwidGVybmFyeVZhbHVlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSIsImFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwic29tZSIsInRlcm5hcnkiLCJ2YXJpYWJsZSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uIiwibmVnYXRlZFZhbHVlIiwiYml0d2lzZVZhbHVlIiwiYnJhY2tldGVkVmFsdWUiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0U3RyaW5nIiwiZ2V0Qm9vbGVhbiIsImdldFNvbWUiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldE5lZ2F0ZWRWYWx1ZSIsImdldEJpdHdpc2VWYWx1ZSIsImdldEJyYWNrZXRlZFZhbHVlIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFR5cGUiLCJ0eXBlIiwiTk9ERV9UWVBFIiwiTk9ERVNfVFlQRSIsIk5VTUJFUl9UWVBFIiwiU1RSSU5HX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJhc1N0cmluZyIsImNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibnVtYmVyQXNTdHJpbmciLCJzdHJpbmdBc1N0cmluZyIsImJvb2xlYW5Bc1N0cmluZyIsImV2YWx1YXRlIiwidmFsdWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJmcm9tTm9kZSIsIm51bGxOb2RlIiwiZnJvbU5vZGVzIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsImZyb21UZXJuYXJ5Tm9kZSIsInRlcm5hcnlOb2RlIiwidGVybmFyeVZhbHVlTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJhc3NpZ25tZW50VmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwiZnJvbUNvbmRpdGlvbmFsQmxvY2tzTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tzTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tzQ1ZhbHVlTm9kZSIsIm5hbWUiLCJub2RlQUVxdWFsVG9Ob2RlQSIsIm5vZGVTdHJpbmciLCJOVUxMIiwibm9kZXNTdHJpbmciLCJTb21lIiwiZG9tIiwiVGVybmFyeSIsIlZhcmlhYmxlIiwiTm9kZVF1ZXJ5IiwiTm9kZXNRdWVyeSIsIkNvbXBhcmlzb24iLCJOZWdhdGVkVmFsdWUiLCJCaXR3aXNlVmFsdWUiLCJCcmFja2V0ZWRWYWx1ZSIsIlByb2NlZHVyZUNhbGwiLCJub2RlRnJvbVZhbHVlTm9kZSIsIm5vZGVzRnJvbVZhbHVlTm9kZSIsIm51bWJlckZyb21WYWx1ZU5vZGUiLCJzdHJpbmdGcm9tVmFsdWVOb2RlIiwiYm9vbGVhbkZyb21WYWx1ZU5vZGUiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGUiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm51bWJlclRlcm1pbmFsTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJOdW1iZXIiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJzdHJpbmdMaXRlcmFsIiwic3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwiLCJUUlVFIiwiRkFMU0UiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1QkE7OztlQUFBOzs7eUJBckIrQjsyREFFZjsrREFDSztxQkFFSzt5QkFFc0I7cUJBQzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDbENDLDBCQUEwQkQsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDcENFLDBCQUEwQkYsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDcENHLDJCQUEyQkgsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDckNJLDZCQUE2QkosSUFBQUEsZ0JBQVMsRUFBQyxzQkFDdkNLLGdDQUFnQ0wsSUFBQUEsZ0JBQVMsRUFBQywyQkFDMUNNLGlDQUFpQ04sSUFBQUEsZ0JBQVMsRUFBQywyQkFDM0NPLG1DQUFtQ1AsSUFBQUEsZ0JBQVMsRUFBQztJQUVuRCxXQUFlUSxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVqQixTQUFTLEVBQUVrQixVQUFVLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsYUFBYTtnQ0FEeElkO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNqQixTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ2tCLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7OztZQUd2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDZCxJQUFJO1lBQ2xCOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDZCxLQUFLO1lBQ25COzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDZCxNQUFNO1lBQ3BCOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDZCxNQUFNO1lBQ3BCOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDZCxPQUFPO1lBQ3JCOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDZCxJQUFJO1lBQ2xCOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxNQUFNO1lBQ3BCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDZixRQUFRO1lBQ3RCOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pDLFNBQVM7WUFDdkI7OztZQUVBa0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDaEIsVUFBVTtZQUN4Qjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNoQixVQUFVO1lBQ3hCOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2hCLFlBQVk7WUFDMUI7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDaEIsWUFBWTtZQUMxQjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNoQixjQUFjO1lBQzVCOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2hCLGFBQWE7WUFDM0I7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUMvQixJQUFJLEtBQUssTUFBTTtvQkFDN0IrQixPQUFPQyxnQkFBUztnQkFDbEIsT0FBTyxJQUFJLElBQUksQ0FBQy9CLEtBQUssS0FBSyxNQUFNO29CQUM5QjhCLE9BQU9FLGlCQUFVO2dCQUNuQixPQUFPLElBQUksSUFBSSxDQUFDL0IsTUFBTSxLQUFLLE1BQU07b0JBQy9CNkIsT0FBT0csa0JBQVc7Z0JBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUMvQixNQUFNLEtBQUssTUFBTTtvQkFDL0I0QixPQUFPSSxrQkFBVztnQkFDcEIsT0FBTyxJQUFJLElBQUksQ0FBQy9CLE9BQU8sS0FBSyxNQUFNO29CQUNoQzJCLE9BQU9LLG1CQUFZO2dCQUNyQixPQUFPLElBQUksSUFBSSxDQUFDL0IsSUFBSSxLQUFLLE1BQU07b0JBQzdCMEIsT0FBTyxJQUFJLENBQUMxQixJQUFJLENBQUN5QixPQUFPO2dCQUMxQixPQUFPLElBQUksSUFBSSxDQUFDeEIsT0FBTyxLQUFLLE1BQU07b0JBQ2hDeUIsT0FBTyxJQUFJLENBQUN6QixPQUFPLENBQUN3QixPQUFPO2dCQUM3QixPQUFPLElBQUksSUFBSSxDQUFDdkIsUUFBUSxLQUFLLE1BQU07b0JBQ2pDd0IsT0FBTyxJQUFJLENBQUN4QixRQUFRLENBQUN1QixPQUFPO2dCQUM5QixPQUFPLElBQUksSUFBSSxDQUFDeEMsU0FBUyxLQUFLLE1BQU07b0JBQ2xDeUMsT0FBTyxJQUFJLENBQUN6QyxTQUFTLENBQUN3QyxPQUFPO2dCQUMvQixPQUFPLElBQUksSUFBSSxDQUFDdEIsVUFBVSxLQUFLLE1BQU07b0JBQ25DdUIsT0FBTyxJQUFJLENBQUN2QixVQUFVLENBQUNzQixPQUFPO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDckIsVUFBVSxLQUFLLE1BQU07b0JBQ25Dc0IsT0FBTyxJQUFJLENBQUN0QixVQUFVLENBQUNxQixPQUFPO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDakIsYUFBYSxLQUFLLE1BQU07b0JBQ3RDa0IsT0FBTyxJQUFJLENBQUNsQixhQUFhLENBQUNpQixPQUFPO2dCQUNuQztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSW5DO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNILElBQUksS0FBSyxNQUFNO29CQUM3QkcsU0FBU29DLGFBQWEsSUFBSSxDQUFDdkMsSUFBSSxFQUFFc0M7Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUNyQyxLQUFLLEtBQUssTUFBTTtvQkFDOUJFLFNBQVNxQyxjQUFjLElBQUksQ0FBQ3ZDLEtBQUssRUFBRXFDO2dCQUNyQyxPQUFPLElBQUksSUFBSSxDQUFDcEMsTUFBTSxLQUFLLE1BQU07b0JBQy9CQyxTQUFTc0MsZUFBZSxJQUFJLENBQUN2QyxNQUFNLEVBQUVvQztnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ25DLE1BQU0sS0FBSyxNQUFNO29CQUMvQkEsU0FBU3VDLGVBQWUsSUFBSSxDQUFDdkMsTUFBTSxFQUFFbUM7Z0JBQ3ZDLE9BQU8sSUFBSSxJQUFJLENBQUNsQyxPQUFPLEtBQUssTUFBTTtvQkFDaENELFNBQVN3QyxnQkFBZ0IsSUFBSSxDQUFDdkMsT0FBTyxFQUFFa0M7Z0JBQ3pDLE9BQU8sSUFBSSxJQUFJLENBQUNqQyxJQUFJLEtBQUssTUFBTTtvQkFDN0JGLFNBQVMsSUFBSSxDQUFDRSxJQUFJLENBQUNnQyxRQUFRLENBQUNDO2dCQUM5QixPQUFPLElBQUksSUFBSSxDQUFDaEMsT0FBTyxLQUFLLE1BQU07b0JBQ2hDSCxTQUFTLElBQUksQ0FBQ0csT0FBTyxDQUFDK0IsUUFBUSxDQUFDQztnQkFDakMsT0FBTyxJQUFJLElBQUksQ0FBQy9CLFFBQVEsS0FBSyxNQUFNO29CQUNqQ0osU0FBUyxJQUFJLENBQUNJLFFBQVEsQ0FBQzhCLFFBQVEsQ0FBQ0M7Z0JBQ2xDLE9BQU8sSUFBSSxJQUFJLENBQUNoRCxTQUFTLEtBQUssTUFBTTtvQkFDbENhLFNBQVMsSUFBSSxDQUFDYixTQUFTLENBQUMrQyxRQUFRLENBQUNDO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDOUIsVUFBVSxLQUFLLE1BQU07b0JBQ25DTCxTQUFTLElBQUksQ0FBQ0ssVUFBVSxDQUFDNkIsUUFBUSxDQUFDQztnQkFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQzdCLFVBQVUsS0FBSyxNQUFNO29CQUNuQ04sU0FBUyxJQUFJLENBQUNNLFVBQVUsQ0FBQzRCLFFBQVEsQ0FBQ0M7Z0JBQ3BDLE9BQU8sSUFBSSxJQUFJLENBQUN6QixhQUFhLEtBQUssTUFBTTtvQkFDdENWLFNBQVMsSUFBSSxDQUFDVSxhQUFhLENBQUN3QixRQUFRLENBQUNDO2dCQUN2QztnQkFFQSxPQUFPbkM7WUFDVDs7O1lBRUF5QyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU04sT0FBTztnQkFDZCxJQUFJTztnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksQUFBQyxJQUFJLENBQUM3QyxJQUFJLEtBQUssUUFDZCxJQUFJLENBQUNDLEtBQUssS0FBSyxRQUNmLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFFBQ2hCLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFFBQ2hCLElBQUksQ0FBQ0MsT0FBTyxLQUFLLE1BQU87b0JBQ2xDeUMsUUFBUSxJQUFJO2dCQUNkLE9BQU8sSUFBSSxJQUFJLENBQUN4QyxJQUFJLEtBQUssTUFBTTtvQkFDN0J3QyxRQUFRLElBQUksQ0FBQ3hDLElBQUksQ0FBQ3VDLFFBQVEsQ0FBQ047Z0JBQzdCLE9BQU8sSUFBSSxJQUFJLENBQUNoQyxPQUFPLEtBQUssTUFBTTtvQkFDaEN1QyxRQUFRLElBQUksQ0FBQ3ZDLE9BQU8sQ0FBQ3NDLFFBQVEsQ0FBQ047Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUMvQixRQUFRLEtBQUssTUFBTTtvQkFDakNzQyxRQUFRLElBQUksQ0FBQ3RDLFFBQVEsQ0FBQ3FDLFFBQVEsQ0FBQ047Z0JBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUNoRCxTQUFTLEtBQUssTUFBTTtvQkFDbEN1RCxRQUFRLElBQUksQ0FBQ3ZELFNBQVMsQ0FBQ3NELFFBQVEsQ0FBQ047Z0JBQ2xDLE9BQU8sSUFBSSxJQUFJLENBQUM5QixVQUFVLEtBQUssTUFBTTtvQkFDbkNxQyxRQUFRLElBQUksQ0FBQ3JDLFVBQVUsQ0FBQ29DLFFBQVEsQ0FBQ047Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUM3QixVQUFVLEtBQUssTUFBTTtvQkFDbkNvQyxRQUFRLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ21DLFFBQVEsQ0FBQ047Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUN6QixhQUFhLEtBQUssTUFBTTtvQkFDdENnQyxRQUFRLElBQUksQ0FBQ2hDLGFBQWEsQ0FBQytCLFFBQVEsQ0FBQ047Z0JBQ3RDO2dCQUVBLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUQsS0FBSztnQkFDYixJQUFJRTtnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDL0MsSUFBSSxLQUFLLE1BQU07b0JBQzdCLElBQU1BLE9BQU82QyxNQUFNL0IsT0FBTztvQkFFMUIsSUFBSWQsU0FBUyxNQUFNO3dCQUNqQitDLFVBQVU7b0JBQ1osT0FBTzt3QkFDTCxJQUFNQyxRQUFRLElBQUksQ0FBQ2hELElBQUksRUFDakJpRCxRQUFRakQsTUFDUmtELGNBQWNDLFVBQVVILE9BQU9DO3dCQUVyQ0YsVUFBVUcsYUFBYyxHQUFHO29CQUM3QjtnQkFDRixPQUFPLElBQUksSUFBSSxDQUFDakQsS0FBSyxLQUFLLE1BQU07b0JBQzlCLElBQU1BLFFBQVE0QyxNQUFNL0IsT0FBTztvQkFFM0IsSUFBSWIsVUFBVSxNQUFNO3dCQUNsQjhDLFVBQVU7b0JBQ1osT0FBTzt3QkFDTCxJQUFNSyxTQUFTLElBQUksQ0FBQ25ELEtBQUssRUFDbkJvRCxTQUFTcEQsT0FDVHFELGFBQWFDLFdBQVdILFFBQVFDO3dCQUV0Q04sVUFBVU8sWUFBWSxHQUFHO29CQUMzQjtnQkFDRixPQUFPLElBQUksSUFBSSxDQUFDcEQsTUFBTSxLQUFLLE1BQU07b0JBQy9CLElBQU1BLFNBQVMyQyxNQUFNN0IsU0FBUztvQkFFOUIrQixVQUFXLElBQUksQ0FBQzdDLE1BQU0sS0FBS0E7Z0JBQzdCLE9BQU8sSUFBSSxJQUFJLENBQUNDLE1BQU0sS0FBSyxNQUFNO29CQUMvQixJQUFNQSxTQUFTMEMsTUFBTTVCLFNBQVM7b0JBRTlCOEIsVUFBVyxJQUFJLENBQUM1QyxNQUFNLEtBQUtBO2dCQUM3QixPQUFPLElBQUksSUFBSSxDQUFDQyxPQUFPLEtBQUssTUFBTTtvQkFDaEMsSUFBTUEsVUFBVXlDLE1BQU0zQixVQUFVO29CQUVoQzZCLFVBQVcsSUFBSSxDQUFDM0MsT0FBTyxLQUFLQTtnQkFDOUIsT0FBTztvQkFDTCxRQUFRO2dCQUNWO2dCQUVBLE9BQU8yQztZQUNUOzs7O1lBSU9TLEtBQUFBO21CQUFQLFNBQU9BLFNBQVN4RCxJQUFJLEVBQUVzQyxPQUFPO2dCQUMzQixJQUFJdEMsU0FBUyxNQUFNO29CQUNqQkEsT0FBT3lELGlCQUFRO2dCQUNqQjtnQkFFQSxJQUFNeEQsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFNBQVMsTUFDVEMsVUFBVSxNQUNWQyxPQUFPLE1BQ1BDLFVBQVUsTUFDVkMsV0FBVyxNQUNYakIsY0FBWSxNQUNaa0IsYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGVBQWUsTUFDZkMsZUFBZSxNQUNmQyxpQkFBaUIsTUFDakJDLGdCQUFnQixNQUNoQmdDLFFBQVEsSUFBSTlDLE1BQU1DLE1BQU1DLE9BQU9DLFFBQVFDLFFBQVFDLFNBQVNDLE1BQU1DLFNBQVNDLFVBQVVqQixhQUFXa0IsWUFBWUMsWUFBWUMsY0FBY0MsY0FBY0MsZ0JBQWdCQztnQkFFdEssT0FBT2dDO1lBQ1Q7OztZQUVPYSxLQUFBQTttQkFBUCxTQUFPQSxVQUFVekQsS0FBSyxFQUFFcUMsT0FBTztnQkFDN0IsSUFBTXRDLE9BQU8sTUFDUEUsU0FBUyxNQUNUQyxTQUFTLE1BQ1RDLFVBQVUsTUFDVkUsVUFBVSxNQUNWRCxPQUFPLE1BQ1BFLFdBQVcsTUFDWGpCLGNBQVksTUFDWmtCLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxlQUFlLE1BQ2ZDLGVBQWUsTUFDZkMsaUJBQWlCLE1BQ2pCQyxnQkFBZ0IsTUFDaEJnQyxRQUFRLElBQUk5QyxNQUFNQyxNQUFNQyxPQUFPQyxRQUFRQyxRQUFRQyxTQUFTQyxNQUFNQyxTQUFTQyxVQUFVakIsYUFBV2tCLFlBQVlDLFlBQVlDLGNBQWNDLGNBQWNDLGdCQUFnQkM7Z0JBRXRLLE9BQU9nQztZQUNUOzs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV3hELE1BQU0sRUFBRW1DLE9BQU87Z0JBQy9CLElBQU10QyxPQUFPLE1BQ1BDLFFBQVEsTUFDUkMsU0FBUyxNQUNURSxVQUFVLE1BQ1ZDLE9BQU8sTUFDUEMsVUFBVSxNQUNWQyxXQUFXLE1BQ1hqQixjQUFZLE1BQ1prQixhQUFhLE1BQ2JDLGFBQWEsTUFDYkMsZUFBZSxNQUNmQyxlQUFlLE1BQ2ZDLGlCQUFpQixNQUNqQkMsZ0JBQWdCLE1BQ2hCZ0MsUUFBUSxJQUFJOUMsTUFBTUMsTUFBTUMsT0FBT0MsUUFBUUMsUUFBUUMsU0FBU0MsTUFBTUMsU0FBU0MsVUFBVWpCLGFBQVdrQixZQUFZQyxZQUFZQyxjQUFjQyxjQUFjQyxnQkFBZ0JDO2dCQUV0SyxPQUFPZ0M7WUFDVDs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BLFlBQVl4RCxPQUFPLEVBQUVrQyxPQUFPO2dCQUNqQyxJQUFNdEMsT0FBTyxNQUNQQyxRQUFRLE1BQ1JDLFNBQVMsTUFDVEMsU0FBUyxNQUNURSxPQUFPLE1BQ1BDLFVBQVUsTUFDVkMsV0FBVyxNQUNYakIsY0FBWSxNQUNaa0IsYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGVBQWUsTUFDZkMsZUFBZSxNQUNmQyxpQkFBaUIsTUFDakJDLGdCQUFnQixNQUNoQmdDLFFBQVEsSUFBSTlDLE1BQU1DLE1BQU1DLE9BQU9DLFFBQVFDLFFBQVFDLFNBQVNDLE1BQU1DLFNBQVNDLFVBQVVqQixhQUFXa0IsWUFBWUMsWUFBWUMsY0FBY0MsY0FBY0MsZ0JBQWdCQztnQkFFdEssT0FBT2dDO1lBQ1Q7OztZQUVPZ0IsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFeEIsT0FBTztnQkFDckMsSUFBTU8sUUFBUWtCLG1CQUFtQkQsV0FBV3hCO2dCQUU1QyxPQUFPTztZQUNUOzs7WUFFT21CLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQkMsV0FBVyxFQUFFM0IsT0FBTztnQkFDekMsSUFBTTRCLG1CQUFtQjdFLHNCQUFzQjRFLGNBQ3pDSCxZQUFZSSxrQkFDWnJCLFFBQVFrQixtQkFBbUJELFdBQVd4QjtnQkFFNUMsT0FBT087WUFDVDs7O1lBRU9zQixLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRTlCLE9BQU87Z0JBQzdDLElBQUlPLFFBQVE7Z0JBRVosSUFBTXdCLHFCQUFxQjdFLHdCQUF3QjRFO2dCQUVuRCxJQUFJQyx1QkFBdUIsTUFBTTtvQkFDL0IsSUFBTVAsWUFBWU8sb0JBQW9CLEdBQUc7b0JBRXpDeEIsUUFBUWtCLG1CQUFtQkQsV0FBV3hCO2dCQUN4QztnQkFFQSxPQUFPTztZQUNUOzs7WUFFT3lCLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYSxFQUFFakMsT0FBTztnQkFDOUMsSUFBSU8sUUFBUTtnQkFFWixJQUFNMkIsc0JBQXNCL0UseUJBQXlCOEU7Z0JBRXJELElBQUlDLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNVixZQUFZVSxxQkFBc0IsR0FBRztvQkFFM0MzQixRQUFRa0IsbUJBQW1CRCxXQUFXeEI7Z0JBQ3hDO2dCQUVBLE9BQU9PO1lBQ1Q7OztZQUVPNEIsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCQyxtQkFBbUIsRUFBRXBDLE9BQU87Z0JBQ3pELElBQUlPLFFBQVE7Z0JBRVosSUFBTThCLDJCQUEyQmhGLDhCQUE4QitFO2dCQUUvRCxJQUFJQyw2QkFBNkIsTUFBTTtvQkFDckMsSUFBTWIsWUFBWWEsMEJBQTBCLEdBQUc7b0JBRS9DOUIsUUFBUWtCLG1CQUFtQkQsV0FBV3hCO2dCQUN4QztnQkFFQSxPQUFPTztZQUNUOzs7WUFFTytCLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMscUJBQXFCLEVBQUV2QyxPQUFPO2dCQUM3RCxJQUFNd0MsOEJBQThCakYsaUNBQWlDZ0Ysd0JBQy9EZixZQUFZZ0IsNkJBQ1pqQyxRQUFRa0IsbUJBQW1CRCxXQUFXeEI7Z0JBRTVDLE9BQU9PO1lBQ1Q7Ozs7S0FwSkEseUJBQU9rQyxRQUFPO0FBdUpoQixTQUFTNUIsVUFBVUgsS0FBSyxFQUFFQyxLQUFLO0lBQzdCLElBQUlDO0lBRUosSUFBSSxBQUFDRixVQUFVUyxpQkFBUSxJQUFNUixVQUFVUSxpQkFBUSxFQUFHO1FBQ2hEUCxjQUFlRixVQUFVQztJQUMzQixPQUFPO1FBQ0wsSUFBTStCLG9CQUFvQmhDLE1BQU1GLFNBQVMsQ0FBQ0c7UUFFMUNDLGNBQWM4QixtQkFBb0IsR0FBRztJQUN2QztJQUVBLE9BQU85QjtBQUNUO0FBRUEsU0FBU0ssV0FBV0gsTUFBTSxFQUFFQyxNQUFNO0lBQ2hDLElBQUlDO0lBRUpBLGFBQWFuRSxNQUFNaUUsUUFBUUMsUUFBUSxTQUFDTCxPQUFPQztRQUN6QyxJQUFNQyxjQUFjQyxVQUFVSCxPQUFPQztRQUVyQyxJQUFJQyxhQUFhO1lBQ2YsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU2YsYUFBYXZDLElBQUksRUFBRXNDLE9BQU87SUFDakMsSUFBSW5DO0lBRUosSUFBTThFLGFBQWMsQUFBQ2pGLFNBQVN5RCxpQkFBUSxHQUNoQnlCLGVBQUksR0FDRjVDLFFBQVFDLFlBQVksQ0FBQ3ZDO0lBRTdDRyxTQUFTLEFBQUMsSUFBYyxPQUFYOEUsWUFBVztJQUV4QixPQUFPOUU7QUFDVDtBQUVBLFNBQVNxQyxjQUFjdkMsS0FBSyxFQUFFcUMsT0FBTztJQUNuQyxJQUFJbkM7SUFFSixJQUFNZ0YsY0FBYzdDLFFBQVFFLGFBQWEsQ0FBQ3ZDO0lBRTFDRSxTQUFTLEFBQUMsSUFBZSxPQUFaZ0YsYUFBWTtJQUV6QixPQUFPaEY7QUFDVDtBQUVBLFNBQVNzQyxlQUFldkMsTUFBTSxFQUFFb0MsT0FBTztJQUNyQyxJQUFJbkM7SUFFSkEsU0FBUyxBQUFDLEdBQVMsT0FBUEQ7SUFFWixPQUFPQztBQUNUO0FBRUEsU0FBU3VDLGVBQWV2QyxNQUFNLEVBQUVtQyxPQUFPO0lBQ3JDbkMsU0FBUyxBQUFDLElBQVUsT0FBUEEsUUFBTyxNQUFJLEdBQUc7SUFFM0IsT0FBT0E7QUFDVDtBQUVBLFNBQVN3QyxnQkFBZ0J2QyxPQUFPLEVBQUVrQyxPQUFPO0lBQ3ZDLElBQUluQztJQUVKQSxTQUFTLEFBQUMsSUFBVyxPQUFSQyxTQUFRO0lBRXJCLE9BQU9EO0FBQ1Q7QUFFQSxTQUFTNEQsbUJBQW1CRCxTQUFTLEVBQUV4QixPQUFPO0lBQzVDLElBQVE4QyxPQUFpSUMsWUFBRyxDQUFwSUQsTUFBTXJGLFFBQTJIc0YsWUFBRyxDQUE5SHRGLE9BQU91RixVQUFvSEQsWUFBRyxDQUF2SEMsU0FBU0MsV0FBMkdGLFlBQUcsQ0FBOUdFLFVBQVVDLFlBQWlHSCxZQUFHLENBQXBHRyxXQUFXQyxhQUFzRkosWUFBRyxDQUF6RkksWUFBWUMsYUFBMEVMLFlBQUcsQ0FBN0VLLFlBQVlDLGVBQThETixZQUFHLENBQWpFTSxjQUFjQyxlQUFnRFAsWUFBRyxDQUFuRE8sY0FBY0MsaUJBQWtDUixZQUFHLENBQXJDUSxnQkFBZ0JDLGdCQUFrQlQsWUFBRyxDQUFyQlMsZUFDakg5RixPQUFPK0Ysa0JBQWtCakMsV0FBV3hCLFVBQ3BDckMsUUFBUStGLG1CQUFtQmxDLFdBQVd4QixVQUN0Q3BDLFNBQVMrRixvQkFBb0JuQyxXQUFXeEIsVUFDeENuQyxTQUFTK0Ysb0JBQW9CcEMsV0FBV3hCLFVBQ3hDbEMsVUFBVStGLHFCQUFxQnJDLFdBQVd4QixVQUMxQ2pDLE9BQU8rRSxLQUFLdkIsYUFBYSxDQUFDQyxXQUFXeEIsVUFDckNoQyxVQUFVZ0YsUUFBUXpCLGFBQWEsQ0FBQ0MsV0FBV3hCLFVBQzNDL0IsV0FBV2dGLFNBQVMxQixhQUFhLENBQUNDLFdBQVd4QixVQUM3Q2hELGNBQVlrRyxVQUFVM0IsYUFBYSxDQUFDQyxXQUFXeEIsVUFDL0M5QixhQUFhaUYsV0FBVzVCLGFBQWEsQ0FBQ0MsV0FBV3hCLFVBQ2pEN0IsYUFBYWlGLFdBQVc3QixhQUFhLENBQUNDLFdBQVd4QixVQUNqRDVCLGVBQWVpRixhQUFhOUIsYUFBYSxDQUFDQyxXQUFXeEIsVUFDckQzQixlQUFlaUYsYUFBYS9CLGFBQWEsQ0FBQ0MsV0FBV3hCLFVBQ3JEMUIsaUJBQWlCaUYsZUFBZWhDLGFBQWEsQ0FBQ0MsV0FBV3hCLFVBQ3pEekIsZ0JBQWdCaUYsY0FBY2pDLGFBQWEsQ0FBQ0MsV0FBV3hCLFVBQ3ZETyxRQUFRLElBQUk5QyxNQUFNQyxNQUFNQyxPQUFPQyxRQUFRQyxRQUFRQyxTQUFTQyxNQUFNQyxTQUFTQyxVQUFVakIsYUFBV2tCLFlBQVlDLFlBQVlDLGNBQWNDLGNBQWNDLGdCQUFnQkM7SUFFdEssT0FBT2dDO0FBQ1Q7QUFFQSxTQUFTa0Qsa0JBQWtCakMsU0FBUyxFQUFFeEIsT0FBTztJQUMzQyxJQUFJdEMsT0FBTztJQUVYLElBQU1vRyx3QkFBd0IxRywyQkFBMkJvRTtJQUV6RCxJQUFJc0MsMEJBQTBCLE1BQU07UUFDbEMsSUFBTUMsK0JBQStCRCxzQkFBc0JFLFVBQVU7UUFFckUsT0FBUUQ7WUFDTixLQUFLbkIsZUFBSTtnQkFBRTtvQkFDVGxGLE9BQU95RCxpQkFBUTtvQkFFZjtnQkFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPekQ7QUFDVDtBQUVBLFNBQVNnRyxtQkFBbUJsQyxTQUFTLEVBQUV4QixPQUFPO0lBQzVDLElBQU1yQyxRQUFRLE1BQU8sR0FBRztJQUV4QixPQUFPQTtBQUNUO0FBRUEsU0FBU2dHLG9CQUFvQm5DLFNBQVMsRUFBRXhCLE9BQU87SUFDN0MsSUFBSXBDLFNBQVM7SUFFYixJQUFNcUcscUJBQXFCaEgsd0JBQXdCdUU7SUFFbkQsSUFBSXlDLHVCQUF1QixNQUFNO1FBQy9CLElBQU1DLDRCQUE0QkQsbUJBQW1CRCxVQUFVO1FBRS9EcEcsU0FBU3VHLE9BQU9EO0lBQ2xCO0lBRUEsT0FBT3RHO0FBQ1Q7QUFFQSxTQUFTZ0csb0JBQW9CcEMsU0FBUyxFQUFFeEIsT0FBTztJQUM3QyxJQUFJbkMsU0FBUztJQUViLElBQU11Ryw0QkFBNEI5RywrQkFBK0JrRTtJQUVqRSxJQUFJNEMsOEJBQThCLE1BQU07UUFDdEMsSUFBTUMsbUNBQW1DRCwwQkFBMEJKLFVBQVUsSUFDdkVNLGdCQUFnQkQsa0NBQWtDLEdBQUc7UUFFM0R4RyxTQUFTMEcsd0JBQXdCRCxlQUFldEU7SUFDbEQ7SUFFQSxPQUFPbkM7QUFDVDtBQUVBLFNBQVNnRyxxQkFBcUJyQyxTQUFTLEVBQUV4QixPQUFPO0lBQzlDLElBQUlsQyxVQUFVO0lBRWQsSUFBTWdHLHdCQUF3QjFHLDJCQUEyQm9FO0lBRXpELElBQUlzQywwQkFBMEIsTUFBTTtRQUNsQyxJQUFNQywrQkFBK0JELHNCQUFzQkUsVUFBVTtRQUVyRSxPQUFRRDtZQUNOLEtBQUtTLGVBQUk7Z0JBQUU7b0JBQ1QxRyxVQUFVO29CQUVWO2dCQUNGO1lBRUEsS0FBSzJHLGdCQUFLO2dCQUFFO29CQUNWM0csVUFBVTtvQkFFVjtnQkFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU3lHLHdCQUF3QkQsYUFBYSxFQUFFdEUsT0FBTztJQUNyRCxJQUFNbkMsU0FBU3lHLGNBQWNJLE9BQU8sQ0FBQyxZQUFZQyx1QkFBWTtJQUU3RCxPQUFPOUc7QUFDVCJ9