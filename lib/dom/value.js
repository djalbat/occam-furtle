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
var ternaryValueNodeQuery = (0, _query.nodeQuery)("/ternary/value"), numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal"), conditionalBlocksCValueNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/value"), variableAssignmentValueNodeQuery = (0, _query.nodeQuery)("/variableAssignment/value");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall) {
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
        this.anonymousProcedureCall = anonymousProcedureCall;
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
            key: "getAnonymousProcedureCall",
            value: function getAnonymousProcedureCall() {
                return this.anonymousProcedureCall;
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
                } else if (this.negatedValue !== null) {
                    type = this.negatedValue.getType();
                } else if (this.bitwiseValue !== null) {
                    type = this.bitwiseValue.getType();
                } else if (this.bracketedValue !== null) {
                    type = this.bracketedValue.getType();
                } else if (this.procedureCall !== null) {
                    type = this.procedureCall.getType();
                } else if (this.anonymousProcedureCall !== null) {
                    type = this.anonymousProcedureCall.getType();
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
                } else if (this.negatedValue !== null) {
                    string = this.negatedValue.asString(context);
                } else if (this.bitwiseValue !== null) {
                    string = this.bitwiseValue.asString(context);
                } else if (this.bracketedValue !== null) {
                    string = this.bracketedValue.asString(context);
                } else if (this.procedureCall !== null) {
                    string = this.procedureCall.asString(context);
                } else if (this.anonymousProcedureCall !== null) {
                    string = this.anonymousProcedureCall.asString(context);
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
                } else if (this.negatedValue !== null) {
                    value = this.negatedValue.evaluate(context);
                } else if (this.bitwiseValue !== null) {
                    value = this.bitwiseValue.evaluate(context);
                } else if (this.bracketedValue !== null) {
                    value = this.bracketedValue.evaluate(context);
                } else if (this.procedureCall !== null) {
                    value = this.procedureCall.evaluate(context);
                } else if (this.anonymousProcedureCall !== null) {
                    value = this.anonymousProcedureCall.evaluate(context);
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
                var nodes = null, number = null, string = null, boolean = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
                return value;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
                return value;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
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
        },
        {
            key: "fromVariableAssignmentNode",
            value: function fromVariableAssignmentNode(variableAssigmentNode, context) {
                var value = null;
                var variableAssignmentValueNode = variableAssignmentValueNodeQuery(variableAssigmentNode);
                if (variableAssignmentValueNode !== null) {
                    var valueNode = variableAssignmentValueNode; ///
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
    var Some = _dom.default.Some, Value = _dom.default.Value, Ternary = _dom.default.Ternary, Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, Comparison = _dom.default.Comparison, NegatedValue = _dom.default.NegatedValue, BitwiseValue = _dom.default.BitwiseValue, BracketedValue = _dom.default.BracketedValue, ProcedureCall = _dom.default.ProcedureCall, AnonymousProcedureCall = _dom.default.AnonymousProcedureCall, node = nodeFromValueNode(valueNode, context), nodes = nodesFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), string = stringFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), some = Some.fromValueNode(valueNode, context), ternary = Ternary.fromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), _$nodeQuery = NodeQuery.fromValueNode(valueNode, context), nodesQuery = NodesQuery.fromValueNode(valueNode, context), comparison = Comparison.fromValueNode(valueNode, context), negatedValue = NegatedValue.fromValueNode(valueNode, context), bitwiseValue = BitwiseValue.fromValueNode(valueNode, context), bracketedValue = BracketedValue.fromValueNode(valueNode, context), procedureCall = ProcedureCall.fromValueNode(valueNode, context), anonymousProcedureCall = AnonymousProcedureCall.fromValueNode(valueNode, context), value = new Value(node, nodes, number, string, boolean, some, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgdGVybmFyeVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVcIiksXG4gICAgICBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIiksXG4gICAgICBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy92YWx1ZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC92YWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy5zb21lID0gc29tZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5vZGVRdWVyeSA9IG5vZGVRdWVyeTtcbiAgICB0aGlzLm5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5O1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5uZWdhdGVkVmFsdWUgPSBuZWdhdGVkVmFsdWU7XG4gICAgdGhpcy5iaXR3aXNlVmFsdWUgPSBiaXR3aXNlVmFsdWU7XG4gICAgdGhpcy5icmFja2V0ZWRWYWx1ZSA9IGJyYWNrZXRlZFZhbHVlO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkVmFsdWU7XG4gIH1cblxuICBnZXRCaXR3aXNlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYml0d2lzZVZhbHVlO1xuICB9XG5cbiAgZ2V0QnJhY2tldGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVmFsdWU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFU19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnNvbWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZFZhbHVlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYml0d2lzZVZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5iaXR3aXNlVmFsdWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVmFsdWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc1N0cmluZyhjb250ZXh0KSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZXNBc1N0cmluZyh0aGlzLm5vZGVzLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBudW1iZXJBc1N0cmluZyh0aGlzLm51bWJlciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nQXNTdHJpbmcodGhpcy5zdHJpbmcsIGNvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGJvb2xlYW5Bc1N0cmluZyh0aGlzLmJvb2xlYW4sIGNvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuc29tZS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy50ZXJuYXJ5LmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy52YXJpYWJsZS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVRdWVyeS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2Rlc1F1ZXJ5LmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmNvbXBhcmlzb24uYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5uZWdhdGVkVmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5iaXR3aXNlVmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5ub2RlICE9PSBudWxsKSAgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm5vZGVzICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMubnVtYmVyICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkpIHtcbiAgICAgIHZhbHVlID0gdGhpcztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnNvbWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29tcGFyaXNvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubmVnYXRlZFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iaXR3aXNlVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iaXR3aXNlVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYnJhY2tldGVkVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybmFyeVZhbHVlTm9kZSA9IHRlcm5hcnlWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgICAgdmFsdWVOb2RlID0gdGVybmFyeVZhbHVlTm9kZSwgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvblZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvblZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25hbEJsb2Nrc05vZGUoY29uZGl0aW9uYWxCbG9ja3NOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlID0gY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICB2YWx1ZU5vZGUgPSBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGUsICAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlOyAgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQUVxdWFsVG9Ob2RlQSA9IG5vZGVBLmlzRXF1YWxUbyhub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBRXF1YWxUb05vZGVBOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgbGV0IG5vZGVzTWF0Y2g7XG5cbiAgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2RlU3RyaW5nICA9IChub2RlID09PSBudWxsTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTlVMTCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIHN0cmluZyA9IGAnJHtub2RlU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2Rlcyk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVzU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG51bWJlckFzU3RyaW5nKG51bWJlciwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAke251bWJlcn1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0FzU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICBzdHJpbmcgPSBgXCIke3N0cmluZ31cImA7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Bc1N0cmluZyhib29sZWFuLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCcke2Jvb2xlYW59J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUsIFZhbHVlLCBUZXJuYXJ5LCBWYXJpYWJsZSwgTm9kZVF1ZXJ5LCBOb2Rlc1F1ZXJ5LCBDb21wYXJpc29uLCBOZWdhdGVkVmFsdWUsIEJpdHdpc2VWYWx1ZSwgQnJhY2tldGVkVmFsdWUsIFByb2NlZHVyZUNhbGwsIEFub255bW91c1Byb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IFNvbWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gVGVybmFyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBOb2RlUXVlcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gTm9kZXNRdWVyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFZhbHVlID0gTmVnYXRlZFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYml0d2lzZVZhbHVlID0gQml0d2lzZVZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBCcmFja2V0ZWRWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCA9IEFub255bW91c1Byb2NlZHVyZUNhbGwuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBub2RlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIE5VTEw6IHtcbiAgICAgICAgbm9kZSA9IG51bGxOb2RlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBub2Rlc0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVzID0gbnVsbDsgIC8vL1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlID0gbnVtYmVyVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAobnVtYmVyVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlQ29udGVudCA9IG51bWJlclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBudW1iZXIgPSBOdW1iZXIobnVtYmVyVGVybWluYWxOb2RlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nID0gbnVsbDtcblxuICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Gcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgYm9vbGVhbiA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAocHJpbWl0aXZlVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzd2l0Y2ggKHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQpIHtcbiAgICAgIGNhc2UgVFJVRToge1xuICAgICAgICBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBGQUxTRToge1xuICAgICAgICBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gc3RyaW5nTGl0ZXJhbC5yZXBsYWNlKC8oXlwifFwiJCkvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJ0ZXJuYXJ5VmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tzQ1ZhbHVlTm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlIiwibm9kZSIsIm5vZGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbGVhbiIsInNvbWUiLCJ0ZXJuYXJ5IiwidmFyaWFibGUiLCJub2Rlc1F1ZXJ5IiwiY29tcGFyaXNvbiIsIm5lZ2F0ZWRWYWx1ZSIsImJpdHdpc2VWYWx1ZSIsImJyYWNrZXRlZFZhbHVlIiwicHJvY2VkdXJlQ2FsbCIsImFub255bW91c1Byb2NlZHVyZUNhbGwiLCJnZXROb2RlIiwiZ2V0Tm9kZXMiLCJnZXROdW1iZXIiLCJnZXRTdHJpbmciLCJnZXRCb29sZWFuIiwiZ2V0U29tZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXRWYXJpYWJsZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRDb21wYXJpc29uIiwiZ2V0TmVnYXRlZFZhbHVlIiwiZ2V0Qml0d2lzZVZhbHVlIiwiZ2V0QnJhY2tldGVkVmFsdWUiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlQ2FsbCIsImdldFR5cGUiLCJ0eXBlIiwiTk9ERV9UWVBFIiwiTk9ERVNfVFlQRSIsIk5VTUJFUl9UWVBFIiwiU1RSSU5HX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJhc1N0cmluZyIsImNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibnVtYmVyQXNTdHJpbmciLCJzdHJpbmdBc1N0cmluZyIsImJvb2xlYW5Bc1N0cmluZyIsImV2YWx1YXRlIiwidmFsdWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJmcm9tTm9kZSIsIm51bGxOb2RlIiwiZnJvbU5vZGVzIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsImZyb21UZXJuYXJ5Tm9kZSIsInRlcm5hcnlOb2RlIiwidGVybmFyeVZhbHVlTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudFZhbHVlTm9kZSIsImZyb21Db25kaXRpb25hbEJsb2Nrc05vZGUiLCJjb25kaXRpb25hbEJsb2Nrc05vZGUiLCJjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGUiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZSIsIm5hbWUiLCJub2RlQUVxdWFsVG9Ob2RlQSIsIm5vZGVTdHJpbmciLCJOVUxMIiwibm9kZXNTdHJpbmciLCJTb21lIiwiZG9tIiwiVGVybmFyeSIsIlZhcmlhYmxlIiwiTm9kZVF1ZXJ5IiwiTm9kZXNRdWVyeSIsIkNvbXBhcmlzb24iLCJOZWdhdGVkVmFsdWUiLCJCaXR3aXNlVmFsdWUiLCJCcmFja2V0ZWRWYWx1ZSIsIlByb2NlZHVyZUNhbGwiLCJBbm9ueW1vdXNQcm9jZWR1cmVDYWxsIiwibm9kZUZyb21WYWx1ZU5vZGUiLCJub2Rlc0Zyb21WYWx1ZU5vZGUiLCJudW1iZXJGcm9tVmFsdWVOb2RlIiwic3RyaW5nRnJvbVZhbHVlTm9kZSIsImJvb2xlYW5Gcm9tVmFsdWVOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJudW1iZXJUZXJtaW5hbE5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50IiwiTnVtYmVyIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50Iiwic3RyaW5nTGl0ZXJhbCIsInN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiVFJVRSIsIkZBTFNFIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUJBOzs7ZUFBQTs7O3lCQXJCK0I7MkRBRWY7K0RBQ0s7cUJBRUs7eUJBRXNCO3FCQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFNRSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQ2xDQywwQkFBMEJELElBQUFBLGdCQUFTLEVBQUMsbUJBQ3BDRSwwQkFBMEJGLElBQUFBLGdCQUFTLEVBQUMscUJBQ3BDRyw2QkFBNkJILElBQUFBLGdCQUFTLEVBQUMsc0JBQ3ZDSSxnQ0FBZ0NKLElBQUFBLGdCQUFTLEVBQUMsMkJBQzFDSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUMsMkJBQzNDTSxtQ0FBbUNOLElBQUFBLGdCQUFTLEVBQUMsNkJBQzdDTyxtQ0FBbUNQLElBQUFBLGdCQUFTLEVBQUM7SUFFbkQsV0FBZVEsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFakIsU0FBUyxFQUFFa0IsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsc0JBQXNCO2dD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