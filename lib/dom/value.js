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
var reduceValueNodeQuery = (0, _query.nodeQuery)("/reduce/value"), ternaryValueNodeQuery = (0, _query.nodeQuery)("/ternary/value"), numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal"), variableAssignmentValueNodeQuery = (0, _query.nodeQuery)("/variableAssignment/value");
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
                    string = numberAsString(this.number);
                } else if (this.string !== null) {
                    string = stringAsString(this.string);
                } else if (this.boolean !== null) {
                    string = booleanAsString(this.boolean);
                } else if (this.some !== null) {
                    string = this.some.getString();
                } else if (this.every !== null) {
                    string = this.every.getString();
                } else if (this.reduce !== null) {
                    string = this.reduce.getString();
                } else if (this.ternary !== null) {
                    string = this.ternary.getString();
                } else if (this.variable !== null) {
                    string = this.variable.getString();
                } else if (this.nodeQuery !== null) {
                    string = this.nodeQuery.getString();
                } else if (this.nodesQuery !== null) {
                    string = this.nodesQuery.getString();
                } else if (this.comparison !== null) {
                    string = this.comparison.getString();
                } else if (this.negatedValue !== null) {
                    string = this.negatedValue.getString();
                } else if (this.bitwiseValue !== null) {
                    string = this.bitwiseValue.getString();
                } else if (this.bracketedValue !== null) {
                    string = this.bracketedValue.getString();
                } else if (this.procedureCall !== null) {
                    string = this.procedureCall.getString();
                } else if (this.anonymousProcedureCall !== null) {
                    string = this.anonymousProcedureCall.getString();
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
function numberAsString(number) {
    var string;
    string = "".concat(number);
    return string;
}
function stringAsString(string) {
    string = '"'.concat(string, '"'); ///
    return string;
}
function booleanAsString(boolean) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcmVkdWNlVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL3ZhbHVlXCIpLFxuICAgICAgdGVybmFyeVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVcIiksXG4gICAgICBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwsIGFub255bW91c1Byb2NlZHVyZUNhbGwpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5ldmVyeSA9IGV2ZXJ5O1xuICAgIHRoaXMucmVkdWNlID0gcmVkdWNlO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLm5lZ2F0ZWRWYWx1ZSA9IG5lZ2F0ZWRWYWx1ZTtcbiAgICB0aGlzLmJpdHdpc2VWYWx1ZSA9IGJpdHdpc2VWYWx1ZTtcbiAgICB0aGlzLmJyYWNrZXRlZFZhbHVlID0gYnJhY2tldGVkVmFsdWU7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGwgPSBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZTtcbiAgfVxuXG4gIGdldEV2ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5O1xuICB9XG5cbiAgZ2V0UmVkdWNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZTtcbiAgfVxuXG4gIGdldFRlcm5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybmF5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROb2RlUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZVF1ZXJ5O1xuICB9XG5cbiAgZ2V0Tm9kZXNRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1F1ZXJ5O1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uO1xuICB9XG5cbiAgZ2V0TmVnYXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRWYWx1ZTtcbiAgfVxuXG4gIGdldEJpdHdpc2VWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5iaXR3aXNlVmFsdWU7XG4gIH1cblxuICBnZXRCcmFja2V0ZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5icmFja2V0ZWRWYWx1ZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERV9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVTX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5VTUJFUl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBTVFJJTkdfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRWYWx1ZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYml0d2lzZVZhbHVlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoY29udGV4dCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVzQXNTdHJpbmcodGhpcy5ub2RlcywgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbnVtYmVyQXNTdHJpbmcodGhpcy5udW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZ0FzU3RyaW5nKHRoaXMuc3RyaW5nKVxuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBib29sZWFuQXNTdHJpbmcodGhpcy5ib29sZWFuKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnNvbWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmV2ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucmVkdWNlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnRlcm5hcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZVF1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuY29tcGFyaXNvbi5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5lZ2F0ZWRWYWx1ZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYml0d2lzZVZhbHVlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJpdHdpc2VWYWx1ZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuYnJhY2tldGVkVmFsdWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLm5vZGUgIT09IG51bGwpICB8fFxuICAgICAgICAgICAgICAgKHRoaXMubm9kZXMgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5udW1iZXIgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5zdHJpbmcgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ib29sZWFuICE9PSBudWxsKSkge1xuICAgICAgdmFsdWUgPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbXBhcmlzb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm5lZ2F0ZWRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYml0d2lzZVZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYml0d2lzZVZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhbHVlKSB7XG4gICAgbGV0IGVxdWFsVG87XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlQSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2Rlc0EgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVzQiA9IG5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2Rlc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSB2YWx1ZS5nZXROdW1iZXIoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLm51bWJlciA9PT0gbnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLnN0cmluZyA9PT0gc3RyaW5nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlXCI7XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG51bGxOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYml0d2lzZVZhbHVlID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUsIHByb2NlZHVyZUNhbGwsIGFub255bW91c1Byb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIG5lZ2F0ZWRWYWx1ZSwgYml0d2lzZVZhbHVlLCBicmFja2V0ZWRWYWx1ZSwgcHJvY2VkdXJlQ2FsbCwgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VWYWx1ZU5vZGUgPSByZWR1Y2VWYWx1ZU5vZGVRdWVyeShyZWR1Y2VOb2RlKSxcbiAgICAgICAgICB2YWx1ZU5vZGUgPSByZWR1Y2VWYWx1ZU5vZGUsIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybmFyeVZhbHVlTm9kZSA9IHRlcm5hcnlWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgICAgdmFsdWVOb2RlID0gdGVybmFyeVZhbHVlTm9kZSwgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvblZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvblZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdtZW50Tm9kZSksXG4gICAgICAgICAgdmFsdWVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFFcXVhbFRvTm9kZUEgPSBub2RlQS5pc0VxdWFsVG8obm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQUVxdWFsVG9Ob2RlQTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGxldCBub2Rlc01hdGNoO1xuXG4gIG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1N0cmluZyhub2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVN0cmluZyAgPSAobm9kZSA9PT0gbnVsbE5vZGUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE5VTEwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZVN0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXMpO1xuXG4gIHN0cmluZyA9IGAnJHtub2Rlc1N0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBudW1iZXJBc1N0cmluZyhudW1iZXIpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJHtudW1iZXJ9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdBc1N0cmluZyhzdHJpbmcpIHtcbiAgc3RyaW5nID0gYFwiJHtzdHJpbmd9XCJgOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuQXNTdHJpbmcoYm9vbGVhbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAnJHtib29sZWFufSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lLCBFdmVyeSwgUmVkdWNlLCBWYWx1ZSwgVGVybmFyeSwgVmFyaWFibGUsIE5vZGVRdWVyeSwgTm9kZXNRdWVyeSwgQ29tcGFyaXNvbiwgTmVnYXRlZFZhbHVlLCBCaXR3aXNlVmFsdWUsIEJyYWNrZXRlZFZhbHVlLCBQcm9jZWR1cmVDYWxsLCBBbm9ueW1vdXNQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBub2RlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBTb21lLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBFdmVyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IFJlZHVjZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSBUZXJuYXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IE5vZGVRdWVyeS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBOb2Rlc1F1ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVmFsdWUgPSBOZWdhdGVkVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBiaXR3aXNlVmFsdWUgPSBCaXR3aXNlVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRWYWx1ZSA9IEJyYWNrZXRlZFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gQW5vbnltb3VzUHJvY2VkdXJlQ2FsbC5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlLCBwcm9jZWR1cmVDYWxsLCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAocHJpbWl0aXZlVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzd2l0Y2ggKHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQpIHtcbiAgICAgIGNhc2UgTlVMTDoge1xuICAgICAgICBub2RlID0gbnVsbE5vZGU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG5vZGVzRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbnVtYmVyID0gbnVsbDtcblxuICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGUgPSBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChudW1iZXJUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gbnVtYmVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAoc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBib29sZWFuID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBUUlVFOiB7XG4gICAgICAgIGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEZBTFNFOiB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsInJlZHVjZVZhbHVlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybmFyeVZhbHVlTm9kZVF1ZXJ5IiwibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJuZWdhdGVkVmFsdWUiLCJiaXR3aXNlVmFsdWUiLCJicmFja2V0ZWRWYWx1ZSIsInByb2NlZHVyZUNhbGwiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0U3RyaW5nIiwiZ2V0Qm9vbGVhbiIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXRWYXJpYWJsZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRDb21wYXJpc29uIiwiZ2V0TmVnYXRlZFZhbHVlIiwiZ2V0Qml0d2lzZVZhbHVlIiwiZ2V0QnJhY2tldGVkVmFsdWUiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlQ2FsbCIsImdldFR5cGUiLCJ0eXBlIiwiTk9ERV9UWVBFIiwiTk9ERVNfVFlQRSIsIk5VTUJFUl9UWVBFIiwiU1RSSU5HX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJhc1N0cmluZyIsImNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibnVtYmVyQXNTdHJpbmciLCJzdHJpbmdBc1N0cmluZyIsImJvb2xlYW5Bc1N0cmluZyIsImV2YWx1YXRlIiwidmFsdWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJmcm9tTm9kZSIsIm51bGxOb2RlIiwiZnJvbU5vZGVzIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZVZhbHVlTm9kZSIsImZyb21UZXJuYXJ5Tm9kZSIsInRlcm5hcnlOb2RlIiwidGVybmFyeVZhbHVlTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudFZhbHVlTm9kZSIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50VmFsdWVOb2RlIiwibmFtZSIsIm5vZGVBRXF1YWxUb05vZGVBIiwibm9kZVN0cmluZyIsIk5VTEwiLCJub2Rlc1N0cmluZyIsIlNvbWUiLCJkb20iLCJFdmVyeSIsIlJlZHVjZSIsIlRlcm5hcnkiLCJWYXJpYWJsZSIsIk5vZGVRdWVyeSIsIk5vZGVzUXVlcnkiLCJDb21wYXJpc29uIiwiTmVnYXRlZFZhbHVlIiwiQml0d2lzZVZhbHVlIiwiQnJhY2tldGVkVmFsdWUiLCJQcm9jZWR1cmVDYWxsIiwiQW5vbnltb3VzUHJvY2VkdXJlQ2FsbCIsIm5vZGVGcm9tVmFsdWVOb2RlIiwibm9kZXNGcm9tVmFsdWVOb2RlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsInN0cmluZ0Zyb21WYWx1ZU5vZGUiLCJib29sZWFuRnJvbVZhbHVlTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsIk51bWJlciIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsIlRSVUUiLCJGQUxTRSIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQUE7Ozt5QkFyQitCOzJEQUVmOytEQUNLO3FCQUVLO3lCQUVzQjtxQkFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUNqQ0Msd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLG1CQUNsQ0UsMEJBQTBCRixJQUFBQSxnQkFBUyxFQUFDLG1CQUNwQ0csMEJBQTBCSCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHNCQUN2Q0ssZ0NBQWdDTCxJQUFBQSxnQkFBUyxFQUFDLDJCQUMxQ00saUNBQWlDTixJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQ08sbUNBQW1DUCxJQUFBQSxnQkFBUyxFQUFDO0lBRW5ELFdBQWVRLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVuQixTQUFTLEVBQUVvQixVQUFVLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsYUFBYSxFQUFFQyxzQkFBc0I7Z0NBRC9LakI7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxN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