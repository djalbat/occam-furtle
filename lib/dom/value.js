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
var reduceValueNodeQuery = (0, _query.nodeQuery)("/reduce/value"), ternaryValueNodeQuery = (0, _query.nodeQuery)("/ternary/value"), numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal"), conditionalBlocksCValueNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/value"), variableAssignmentValueNodeQuery = (0, _query.nodeQuery)("/variableAssignment/value");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall) {
        _class_call_check(this, Value);
        this.node = node;
        this.nodes = nodes;
        this.number = number;
        this.string = string;
        this.boolean = boolean;
        this.some = some;
        this.every = every;
        this.reduce = reduce;
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
            key: "getEvery",
            value: function getEvery() {
                return this.every;
            }
        },
        {
            key: "getReduce",
            value: function getReduce() {
                return this.reduce;
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
                } else if (this.every !== null) {
                    type = this.every.getType();
                } else if (this.reduce !== null) {
                    type = this.reduce.getType();
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
                } else if (this.every !== null) {
                    string = this.every.asString(context);
                } else if (this.reduce !== null) {
                    string = this.reduce.asString(context);
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
                } else if (this.every !== null) {
                    value = this.every.evaluate(context);
                } else if (this.reduce !== null) {
                    value = this.reduce.evaluate(context);
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
                var nodes = null, number = null, string = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
                return value;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, every = null, reduce = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
                return value;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, procedureCall = null, anonymousProcedureCall = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
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
            key: "fromReduceNode",
            value: function fromReduceNode(reduceNode, context) {
                var reduceValueNode = reduceValueNodeQuery(reduceNode), valueNode = reduceValueNode, value = valueFromValueNode(valueNode, context);
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
    var Some = _dom.default.Some, Every = _dom.default.Every, Reduce = _dom.default.Reduce, Value = _dom.default.Value, Ternary = _dom.default.Ternary, Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, Comparison = _dom.default.Comparison, NegatedValue = _dom.default.NegatedValue, BitwiseValue = _dom.default.BitwiseValue, BracketedValue = _dom.default.BracketedValue, ProcedureCall = _dom.default.ProcedureCall, AnonymousProcedureCall = _dom.default.AnonymousProcedureCall, node = nodeFromValueNode(valueNode, context), nodes = nodesFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), string = stringFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), some = Some.fromValueNode(valueNode, context), every = Every.fromValueNode(valueNode, context), reduce = Reduce.fromValueNode(valueNode, context), ternary = Ternary.fromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), _$nodeQuery = NodeQuery.fromValueNode(valueNode, context), nodesQuery = NodesQuery.fromValueNode(valueNode, context), comparison = Comparison.fromValueNode(valueNode, context), negatedValue = NegatedValue.fromValueNode(valueNode, context), bitwiseValue = BitwiseValue.fromValueNode(valueNode, context), bracketedValue = BracketedValue.fromValueNode(valueNode, context), procedureCall = ProcedureCall.fromValueNode(valueNode, context), anonymousProcedureCall = AnonymousProcedureCall.fromValueNode(valueNode, context), value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcmVkdWNlVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL3ZhbHVlXCIpLFxuICAgICAgdGVybmFyeVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVcIiksXG4gICAgICBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIiksXG4gICAgICBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy92YWx1ZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC92YWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy5zb21lID0gc29tZTtcbiAgICB0aGlzLmV2ZXJ5ID0gZXZlcnk7XG4gICAgdGhpcy5yZWR1Y2UgPSByZWR1Y2U7XG4gICAgdGhpcy50ZXJuYXJ5ID0gdGVybmFyeTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICAgIHRoaXMubmVnYXRlZFZhbHVlID0gbmVnYXRlZFZhbHVlO1xuICAgIHRoaXMuYml0d2lzZVZhbHVlID0gYml0d2lzZVZhbHVlO1xuICAgIHRoaXMuYnJhY2tldGVkVmFsdWUgPSBicmFja2V0ZWRWYWx1ZTtcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCA9IGFub255bW91c1Byb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib29sZWFuO1xuICB9XG5cbiAgZ2V0U29tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb21lO1xuICB9XG5cbiAgZ2V0RXZlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlcnk7XG4gIH1cblxuICBnZXRSZWR1Y2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlO1xuICB9XG5cbiAgZ2V0VGVybmFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJuYXk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXROZWdhdGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0Qml0d2lzZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJpdHdpc2VWYWx1ZTtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJyYWNrZXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZFZhbHVlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYml0d2lzZVZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5iaXR3aXNlVmFsdWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVmFsdWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc1N0cmluZyhjb250ZXh0KSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZXNBc1N0cmluZyh0aGlzLm5vZGVzLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBudW1iZXJBc1N0cmluZyh0aGlzLm51bWJlciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nQXNTdHJpbmcodGhpcy5zdHJpbmcsIGNvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGJvb2xlYW5Bc1N0cmluZyh0aGlzLmJvb2xlYW4sIGNvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuc29tZS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuZXZlcnkuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5yZWR1Y2UuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMudGVybmFyeS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMudmFyaWFibGUuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2RlUXVlcnkuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZXNRdWVyeS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5jb21wYXJpc29uLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmVnYXRlZFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iaXR3aXNlVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuYml0d2lzZVZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5icmFja2V0ZWRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmFzU3RyaW5nKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGwuYXNTdHJpbmcoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMubm9kZSAhPT0gbnVsbCkgIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ub2RlcyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm51bWJlciAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLnN0cmluZyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLmJvb2xlYW4gIT09IG51bGwpKSB7XG4gICAgICB2YWx1ZSA9IHRoaXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5zb21lLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmV2ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yZWR1Y2UuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29tcGFyaXNvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubmVnYXRlZFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iaXR3aXNlVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iaXR3aXNlVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYnJhY2tldGVkVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVmFsdWUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZHVjZVZhbHVlTm9kZSA9IHJlZHVjZVZhbHVlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IHJlZHVjZVZhbHVlTm9kZSwgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJuYXJ5VmFsdWVOb2RlID0gdGVybmFyeVZhbHVlTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgICB2YWx1ZU5vZGUgPSB0ZXJuYXJ5VmFsdWVOb2RlLCAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5KHJldHVyblN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbmFsQmxvY2tzTm9kZShjb25kaXRpb25hbEJsb2Nrc05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGUgPSBjb25kaXRpb25hbEJsb2Nrc0NWYWx1ZU5vZGVRdWVyeShjb25kaXRpb25hbEJsb2Nrc05vZGUpLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IGNvbmRpdGlvbmFsQmxvY2tzQ1ZhbHVlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkodmFyaWFibGVBc3NpZ21lbnROb2RlKSxcbiAgICAgICAgICB2YWx1ZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGUsICAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQUVxdWFsVG9Ob2RlQSA9IG5vZGVBLmlzRXF1YWxUbyhub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBRXF1YWxUb05vZGVBOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgbGV0IG5vZGVzTWF0Y2g7XG5cbiAgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2RlU3RyaW5nICA9IChub2RlID09PSBudWxsTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTlVMTCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIHN0cmluZyA9IGAnJHtub2RlU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2Rlcyk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVzU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG51bWJlckFzU3RyaW5nKG51bWJlciwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAke251bWJlcn1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0FzU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICBzdHJpbmcgPSBgXCIke3N0cmluZ31cImA7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Bc1N0cmluZyhib29sZWFuLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCcke2Jvb2xlYW59J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUsIEV2ZXJ5LCBSZWR1Y2UsIFZhbHVlLCBUZXJuYXJ5LCBWYXJpYWJsZSwgTm9kZVF1ZXJ5LCBOb2Rlc1F1ZXJ5LCBDb21wYXJpc29uLCBOZWdhdGVkVmFsdWUsIEJpdHdpc2VWYWx1ZSwgQnJhY2tldGVkVmFsdWUsIFByb2NlZHVyZUNhbGwsIEFub255bW91c1Byb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IFNvbWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IEV2ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gUmVkdWNlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IFRlcm5hcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gTm9kZVF1ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IE5vZGVzUXVlcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IE5lZ2F0ZWRWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJpdHdpc2VWYWx1ZSA9IEJpdHdpc2VWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFZhbHVlID0gQnJhY2tldGVkVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBBbm9ueW1vdXNQcm9jZWR1cmVDYWxsLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwsIGFub255bW91c1Byb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBOVUxMOiB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwicmVkdWNlVmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJuYXJ5VmFsdWVOb2RlUXVlcnkiLCJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tzQ1ZhbHVlTm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlIiwibm9kZSIsIm5vZGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbGVhbiIsInNvbWUiLCJldmVyeSIsInJlZHVjZSIsInRlcm5hcnkiLCJ2YXJpYWJsZSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uIiwibmVnYXRlZFZhbHVlIiwiYml0d2lzZVZhbHVlIiwiYnJhY2tldGVkVmFsdWUiLCJwcm9jZWR1cmVDYWxsIiwiYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldFN0cmluZyIsImdldEJvb2xlYW4iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldE5lZ2F0ZWRWYWx1ZSIsImdldEJpdHdpc2VWYWx1ZSIsImdldEJyYWNrZXRlZFZhbHVlIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldEFub255bW91c1Byb2NlZHVyZUNhbGwiLCJnZXRUeXBlIiwidHlwZSIsIk5PREVfVFlQRSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm51bWJlckFzU3RyaW5nIiwic3RyaW5nQXNTdHJpbmciLCJib29sZWFuQXNTdHJpbmciLCJldmFsdWF0ZSIsInZhbHVlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiZnJvbU5vZGUiLCJudWxsTm9kZSIsImZyb21Ob2RlcyIsImZyb21TdHJpbmciLCJmcm9tQm9vbGVhbiIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUZyb21WYWx1ZU5vZGUiLCJmcm9tUmVkdWNlTm9kZSIsInJlZHVjZU5vZGUiLCJyZWR1Y2VWYWx1ZU5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlWYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25WYWx1ZU5vZGUiLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiY29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiY29uZGl0aW9uYWxCbG9ja3NDVmFsdWVOb2RlIiwiZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGUiLCJuYW1lIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2RlU3RyaW5nIiwiTlVMTCIsIm5vZGVzU3RyaW5nIiwiU29tZSIsImRvbSIsIkV2ZXJ5IiwiUmVkdWNlIiwiVGVybmFyeSIsIlZhcmlhYmxlIiwiTm9kZVF1ZXJ5IiwiTm9kZXNRdWVyeSIsIkNvbXBhcmlzb24iLCJOZWdhdGVkVmFsdWUiLCJCaXR3aXNlVmFsdWUiLCJCcmFja2V0ZWRWYWx1ZSIsIlByb2NlZHVyZUNhbGwiLCJBbm9ueW1vdXNQcm9jZWR1cmVDYWxsIiwibm9kZUZyb21WYWx1ZU5vZGUiLCJub2Rlc0Zyb21WYWx1ZU5vZGUiLCJudW1iZXJGcm9tVmFsdWVOb2RlIiwic3RyaW5nRnJvbVZhbHVlTm9kZSIsImJvb2xlYW5Gcm9tVmFsdWVOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJudW1iZXJUZXJtaW5hbE5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50IiwiTnVtYmVyIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50Iiwic3RyaW5nTGl0ZXJhbCIsInN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiVFJVRSIsIkZBTFNFIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0JBOzs7ZUFBQTs7O3lCQXRCK0I7MkRBRWY7K0RBQ0s7cUJBRUs7eUJBRXNCO3FCQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUs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