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
    function Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue) {
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
        this.returnBlock = returnBlock;
        this.procedureCall = procedureCall;
        this.negatedValue = negatedValue;
        this.bitwiseValue = bitwiseValue;
        this.bracketedValue = bracketedValue;
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
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
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
                } else if (this.returnBlock !== null) {
                    type = this.returnBlock.getType();
                } else if (this.procedureCall !== null) {
                    type = this.procedureCall.getType();
                } else if (this.negatedValue !== null) {
                    type = this.negatedValue.getType();
                } else if (this.bitwiseValue !== null) {
                    type = this.bitwiseValue.getType();
                } else if (this.bracketedValue !== null) {
                    type = this.bracketedValue.getType();
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
                } else if (this.returnBlock !== null) {
                    string = this.returnBlock.getString();
                } else if (this.procedureCall !== null) {
                    string = this.procedureCall.getString();
                } else if (this.negatedValue !== null) {
                    string = this.negatedValue.getString();
                } else if (this.bitwiseValue !== null) {
                    string = this.bitwiseValue.getString();
                } else if (this.bracketedValue !== null) {
                    string = this.bracketedValue.getString();
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
                } else if (this.returnBlock !== null) {
                    value = this.returnBlock.evaluate(context);
                } else if (this.procedureCall !== null) {
                    value = this.procedureCall.evaluate(context);
                } else if (this.negatedValue !== null) {
                    value = this.negatedValue.evaluate(context);
                } else if (this.bitwiseValue !== null) {
                    value = this.bitwiseValue.evaluate(context);
                } else if (this.bracketedValue !== null) {
                    value = this.bracketedValue.evaluate(context);
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
                var nodes = null, number = null, string = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
                return value;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, every = null, reduce = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
                return value;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
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
    var Some = _dom.default.Some, Every = _dom.default.Every, Reduce = _dom.default.Reduce, Value = _dom.default.Value, Ternary = _dom.default.Ternary, Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, Comparison = _dom.default.Comparison, ReturnBlock = _dom.default.ReturnBlock, ProcedureCall = _dom.default.ProcedureCall, NegatedValue = _dom.default.NegatedValue, BitwiseValue = _dom.default.BitwiseValue, BracketedValue = _dom.default.BracketedValue, node = nodeFromValueNode(valueNode, context), nodes = nodesFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), string = stringFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), some = Some.fromValueNode(valueNode, context), every = Every.fromValueNode(valueNode, context), reduce = Reduce.fromValueNode(valueNode, context), ternary = Ternary.fromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), _$nodeQuery = NodeQuery.fromValueNode(valueNode, context), nodesQuery = NodesQuery.fromValueNode(valueNode, context), comparison = Comparison.fromValueNode(valueNode, context), returnBlock = ReturnBlock.fromValueNode(valueNode, context), procedureCall = ProcedureCall.fromValueNode(valueNode, context), negatedValue = NegatedValue.fromValueNode(valueNode, context), bitwiseValue = BitwiseValue.fromValueNode(valueNode, context), bracketedValue = BracketedValue.fromValueNode(valueNode, context), value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcmVkdWNlVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL3ZhbHVlXCIpLFxuICAgICAgdGVybmFyeVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVcIiksXG4gICAgICBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ib29sZWFuID0gYm9vbGVhbjtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5vZGVRdWVyeSA9IG5vZGVRdWVyeTtcbiAgICB0aGlzLm5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5O1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gICAgdGhpcy5uZWdhdGVkVmFsdWUgPSBuZWdhdGVkVmFsdWU7XG4gICAgdGhpcy5iaXR3aXNlVmFsdWUgPSBiaXR3aXNlVmFsdWU7XG4gICAgdGhpcy5icmFja2V0ZWRWYWx1ZSA9IGJyYWNrZXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZTtcbiAgfVxuXG4gIGdldEV2ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5O1xuICB9XG5cbiAgZ2V0UmVkdWNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZTtcbiAgfVxuXG4gIGdldFRlcm5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybmF5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROb2RlUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZVF1ZXJ5O1xuICB9XG5cbiAgZ2V0Tm9kZXNRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1F1ZXJ5O1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXROZWdhdGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0Qml0d2lzZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJpdHdpc2VWYWx1ZTtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJyYWNrZXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRWYWx1ZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYml0d2lzZVZhbHVlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKHRoaXMubm9kZXMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bWJlckFzU3RyaW5nKHRoaXMubnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmdBc1N0cmluZyh0aGlzLnN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYm9vbGVhbkFzU3RyaW5nKHRoaXMuYm9vbGVhbilcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5zb21lLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ldmVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJlZHVjZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy50ZXJuYXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVRdWVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmNvbXBhcmlzb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJldHVybkJsb2NrLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5uZWdhdGVkVmFsdWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5iaXR3aXNlVmFsdWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLm5vZGUgIT09IG51bGwpICB8fFxuICAgICAgICAgICAgICAgKHRoaXMubm9kZXMgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5udW1iZXIgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5zdHJpbmcgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ib29sZWFuICE9PSBudWxsKSkge1xuICAgICAgdmFsdWUgPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbXBhcmlzb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5uZWdhdGVkVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJpdHdpc2VWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5icmFja2V0ZWRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYml0d2lzZVZhbHVlID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVkdWNlVmFsdWVOb2RlID0gcmVkdWNlVmFsdWVOb2RlUXVlcnkocmVkdWNlTm9kZSksXG4gICAgICAgICAgdmFsdWVOb2RlID0gcmVkdWNlVmFsdWVOb2RlLCAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm5hcnlWYWx1ZU5vZGUgPSB0ZXJuYXJ5VmFsdWVOb2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IHRlcm5hcnlWYWx1ZU5vZGUsIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBjb25kaXRpb25WYWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb25kaXRpb25WYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkocmV0dXJuU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbWVudE5vZGUpLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKSB7XG4gIGxldCBub2RlTWF0Y2hlcztcblxuICBpZiAoKG5vZGVBID09PSBudWxsTm9kZSkgfHwgKG5vZGVCID09PSBudWxsTm9kZSkpIHtcbiAgICBub2RlTWF0Y2hlcyA9IChub2RlQSA9PT0gbm9kZUIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBRXF1YWxUb05vZGVBID0gbm9kZUEuaXNFcXVhbFRvKG5vZGVCKTtcblxuICAgIG5vZGVNYXRjaGVzID0gbm9kZUFFcXVhbFRvTm9kZUE7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQikge1xuICBsZXQgbm9kZXNNYXRjaDtcblxuICBub2Rlc01hdGNoID0gbWF0Y2gobm9kZXNBLCBub2Rlc0IsIChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVTdHJpbmcgID0gKG5vZGUgPT09IG51bGxOb2RlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBOVUxMIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGVzKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZXNTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbnVtYmVyQXNTdHJpbmcobnVtYmVyKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCR7bnVtYmVyfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nQXNTdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGBcIiR7c3RyaW5nfVwiYDsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkFzU3RyaW5nKGJvb2xlYW4pIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJyR7Ym9vbGVhbn0nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSwgRXZlcnksIFJlZHVjZSwgVmFsdWUsIFRlcm5hcnksIFZhcmlhYmxlLCBOb2RlUXVlcnksIE5vZGVzUXVlcnksIENvbXBhcmlzb24sIFJldHVybkJsb2NrLCBQcm9jZWR1cmVDYWxsLCBOZWdhdGVkVmFsdWUsIEJpdHdpc2VWYWx1ZSwgQnJhY2tldGVkVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IFNvbWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IEV2ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gUmVkdWNlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IFRlcm5hcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gTm9kZVF1ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IE5vZGVzUXVlcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IE5lZ2F0ZWRWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJpdHdpc2VWYWx1ZSA9IEJpdHdpc2VWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFZhbHVlID0gQnJhY2tldGVkVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBOVUxMOiB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwicmVkdWNlVmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJuYXJ5VmFsdWVOb2RlUXVlcnkiLCJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYWx1ZSIsIm5vZGUiLCJub2RlcyIsIm51bWJlciIsInN0cmluZyIsImJvb2xlYW4iLCJzb21lIiwiZXZlcnkiLCJyZWR1Y2UiLCJ0ZXJuYXJ5IiwidmFyaWFibGUiLCJub2Rlc1F1ZXJ5IiwiY29tcGFyaXNvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsIm5lZ2F0ZWRWYWx1ZSIsImJpdHdpc2VWYWx1ZSIsImJyYWNrZXRlZFZhbHVlIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0U3RyaW5nIiwiZ2V0Qm9vbGVhbiIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXRWYXJpYWJsZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRDb21wYXJpc29uIiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0TmVnYXRlZFZhbHVlIiwiZ2V0Qml0d2lzZVZhbHVlIiwiZ2V0QnJhY2tldGVkVmFsdWUiLCJnZXRUeXBlIiwidHlwZSIsIk5PREVfVFlQRSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm51bWJlckFzU3RyaW5nIiwic3RyaW5nQXNTdHJpbmciLCJib29sZWFuQXNTdHJpbmciLCJldmFsdWF0ZSIsInZhbHVlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiZnJvbU5vZGUiLCJudWxsTm9kZSIsImZyb21Ob2RlcyIsImZyb21TdHJpbmciLCJmcm9tQm9vbGVhbiIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUZyb21WYWx1ZU5vZGUiLCJmcm9tUmVkdWNlTm9kZSIsInJlZHVjZU5vZGUiLCJyZWR1Y2VWYWx1ZU5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlWYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25WYWx1ZU5vZGUiLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZSIsIm5hbWUiLCJub2RlQUVxdWFsVG9Ob2RlQSIsIm5vZGVTdHJpbmciLCJOVUxMIiwibm9kZXNTdHJpbmciLCJTb21lIiwiZG9tIiwiRXZlcnkiLCJSZWR1Y2UiLCJUZXJuYXJ5IiwiVmFyaWFibGUiLCJOb2RlUXVlcnkiLCJOb2Rlc1F1ZXJ5IiwiQ29tcGFyaXNvbiIsIlJldHVybkJsb2NrIiwiUHJvY2VkdXJlQ2FsbCIsIk5lZ2F0ZWRWYWx1ZSIsIkJpdHdpc2VWYWx1ZSIsIkJyYWNrZXRlZFZhbHVlIiwibm9kZUZyb21WYWx1ZU5vZGUiLCJub2Rlc0Zyb21WYWx1ZU5vZGUiLCJudW1iZXJGcm9tVmFsdWVOb2RlIiwic3RyaW5nRnJvbVZhbHVlTm9kZSIsImJvb2xlYW5Gcm9tVmFsdWVOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJudW1iZXJUZXJtaW5hbE5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50IiwiTnVtYmVyIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50Iiwic3RyaW5nTGl0ZXJhbCIsInN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiVFJVRSIsIkZBTFNFIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUJBOzs7ZUFBQTs7O3lCQXJCK0I7MkRBRWY7K0RBQ0s7cUJBRUs7eUJBRXNCO3FCQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7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