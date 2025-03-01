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
                var variableAssignmentValueNode = variableAssignmentValueNodeQuery(variableAssigmentNode), valueNode = variableAssignmentValueNode, value = valueFromValueNode(valueNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgdGVybmFyeVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVcIiksXG4gICAgICBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIiksXG4gICAgICBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy92YWx1ZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC92YWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy5zb21lID0gc29tZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5vZGVRdWVyeSA9IG5vZGVRdWVyeTtcbiAgICB0aGlzLm5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5O1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5uZWdhdGVkVmFsdWUgPSBuZWdhdGVkVmFsdWU7XG4gICAgdGhpcy5iaXR3aXNlVmFsdWUgPSBiaXR3aXNlVmFsdWU7XG4gICAgdGhpcy5icmFja2V0ZWRWYWx1ZSA9IGJyYWNrZXRlZFZhbHVlO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkVmFsdWU7XG4gIH1cblxuICBnZXRCaXR3aXNlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYml0d2lzZVZhbHVlO1xuICB9XG5cbiAgZ2V0QnJhY2tldGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVmFsdWU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFU19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnNvbWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZFZhbHVlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYml0d2lzZVZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5iaXR3aXNlVmFsdWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVmFsdWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc1N0cmluZyhjb250ZXh0KSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZXNBc1N0cmluZyh0aGlzLm5vZGVzLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBudW1iZXJBc1N0cmluZyh0aGlzLm51bWJlciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nQXNTdHJpbmcodGhpcy5zdHJpbmcsIGNvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGJvb2xlYW5Bc1N0cmluZyh0aGlzLmJvb2xlYW4sIGNvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuc29tZS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy50ZXJuYXJ5LmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy52YXJpYWJsZS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVRdWVyeS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2Rlc1F1ZXJ5LmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmNvbXBhcmlzb24uYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5uZWdhdGVkVmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5iaXR3aXNlVmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5ub2RlICE9PSBudWxsKSAgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm5vZGVzICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMubnVtYmVyICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkpIHtcbiAgICAgIHZhbHVlID0gdGhpcztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnNvbWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29tcGFyaXNvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubmVnYXRlZFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iaXR3aXNlVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iaXR3aXNlVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYnJhY2tldGVkVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybmFyeVZhbHVlTm9kZSA9IHRlcm5hcnlWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgICAgdmFsdWVOb2RlID0gdGVybmFyeVZhbHVlTm9kZSwgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvblZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvblZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25hbEJsb2Nrc05vZGUoY29uZGl0aW9uYWxCbG9ja3NOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlID0gY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICB2YWx1ZU5vZGUgPSBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGUsICAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdtZW50Tm9kZSksXG4gICAgICAgICAgdmFsdWVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFFcXVhbFRvTm9kZUEgPSBub2RlQS5pc0VxdWFsVG8obm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQUVxdWFsVG9Ob2RlQTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGxldCBub2Rlc01hdGNoO1xuXG4gIG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1N0cmluZyhub2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVN0cmluZyAgPSAobm9kZSA9PT0gbnVsbE5vZGUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE5VTEwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZVN0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXMpO1xuXG4gIHN0cmluZyA9IGAnJHtub2Rlc1N0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBudW1iZXJBc1N0cmluZyhudW1iZXIsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJHtudW1iZXJ9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdBc1N0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgc3RyaW5nID0gYFwiJHtzdHJpbmd9XCJgOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuQXNTdHJpbmcoYm9vbGVhbiwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAnJHtib29sZWFufSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lLCBWYWx1ZSwgVGVybmFyeSwgVmFyaWFibGUsIE5vZGVRdWVyeSwgTm9kZXNRdWVyeSwgQ29tcGFyaXNvbiwgTmVnYXRlZFZhbHVlLCBCaXR3aXNlVmFsdWUsIEJyYWNrZXRlZFZhbHVlLCBQcm9jZWR1cmVDYWxsLCBBbm9ueW1vdXNQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBub2RlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBTb21lLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IFRlcm5hcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gTm9kZVF1ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IE5vZGVzUXVlcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IE5lZ2F0ZWRWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJpdHdpc2VWYWx1ZSA9IEJpdHdpc2VWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFZhbHVlID0gQnJhY2tldGVkVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBBbm9ueW1vdXNQcm9jZWR1cmVDYWxsLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwsIGFub255bW91c1Byb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBOVUxMOiB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwidGVybmFyeVZhbHVlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYWx1ZSIsIm5vZGUiLCJub2RlcyIsIm51bWJlciIsInN0cmluZyIsImJvb2xlYW4iLCJzb21lIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJuZWdhdGVkVmFsdWUiLCJiaXR3aXNlVmFsdWUiLCJicmFja2V0ZWRWYWx1ZSIsInByb2NlZHVyZUNhbGwiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0U3RyaW5nIiwiZ2V0Qm9vbGVhbiIsImdldFNvbWUiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldE5lZ2F0ZWRWYWx1ZSIsImdldEJpdHdpc2VWYWx1ZSIsImdldEJyYWNrZXRlZFZhbHVlIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldEFub255bW91c1Byb2NlZHVyZUNhbGwiLCJnZXRUeXBlIiwidHlwZSIsIk5PREVfVFlQRSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm51bWJlckFzU3RyaW5nIiwic3RyaW5nQXNTdHJpbmciLCJib29sZWFuQXNTdHJpbmciLCJldmFsdWF0ZSIsInZhbHVlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiZnJvbU5vZGUiLCJudWxsTm9kZSIsImZyb21Ob2RlcyIsImZyb21TdHJpbmciLCJmcm9tQm9vbGVhbiIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUZyb21WYWx1ZU5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlWYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25WYWx1ZU5vZGUiLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiY29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlIiwiZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGUiLCJuYW1lIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2RlU3RyaW5nIiwiTlVMTCIsIm5vZGVzU3RyaW5nIiwiU29tZSIsImRvbSIsIlRlcm5hcnkiLCJWYXJpYWJsZSIsIk5vZGVRdWVyeSIsIk5vZGVzUXVlcnkiLCJDb21wYXJpc29uIiwiTmVnYXRlZFZhbHVlIiwiQml0d2lzZVZhbHVlIiwiQnJhY2tldGVkVmFsdWUiLCJQcm9jZWR1cmVDYWxsIiwiQW5vbnltb3VzUHJvY2VkdXJlQ2FsbCIsIm5vZGVGcm9tVmFsdWVOb2RlIiwibm9kZXNGcm9tVmFsdWVOb2RlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsInN0cmluZ0Zyb21WYWx1ZU5vZGUiLCJib29sZWFuRnJvbVZhbHVlTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsIk51bWJlciIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsIlRSVUUiLCJGQUxTRSIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQUE7Ozt5QkFyQitCOzJEQUVmOytEQUNLO3FCQUVLO3lCQUVzQjtxQkFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNsQ0MsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLG1CQUNwQ0UsMEJBQTBCRixJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDLHNCQUN2Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLDJCQUMxQ0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQ00sbUNBQW1DTixJQUFBQSxnQkFBUyxFQUFDLDZCQUM3Q08sbUNBQW1DUCxJQUFBQSxnQkFBUyxFQUFDO0lBRW5ELFdBQWVRLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRWpCLFNBQVMsRUFBRWtCLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLHNCQUFzQjtnQ0FEaEtmO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxH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