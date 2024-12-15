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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgTlVNQkVSX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BudW1iZXJcIiksXG4gICAgICBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vdmFsdWVcIiksXG4gICAgICBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC92YWx1ZVwiKSxcbiAgICAgIHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BwcmltaXRpdmVcIiksXG4gICAgICByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZXR1cm5TdGF0ZW1lbnQvdmFsdWVcIiksXG4gICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHN0cmluZy1saXRlcmFsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgdmFyaWFibGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVTX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5VTUJFUl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBTVFJJTkdfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKHRoaXMubm9kZXMpO1xuXG4gICAgICBzdHJpbmcgPSBgJyR7bm9kZXNTdHJpbmd9J2A7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7dGhpcy5udW1iZXJ9YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgXCIke3RoaXMuc3RyaW5nfVwiYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCcke3RoaXMuYm9vbGVhbn0nYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVTdHJpbmcgID0gKHRoaXMubm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5VTEwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ub2RlQXNTdHJpbmcodGhpcy5ub2RlKTtcblxuICAgICAgc3RyaW5nID0gYCcke25vZGVTdHJpbmd9J2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMudmFyaWFibGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGUucmVzb2x2ZShjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhbHVlKSB7XG4gICAgbGV0IGVxdWFsVG87XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyh0aGlzLm5vZGVzLCBub2Rlcyk7XG5cbiAgICAgIGVxdWFsVG8gPSBub2Rlc01hdGNoO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZSh0aGlzLm5vZGUsIG5vZGUpO1xuXG4gICAgICBlcXVhbFRvID0gbm9kZU1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvblZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvblZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgYXNzaWdubWVudFZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeShhc3NpZ21lbnROb2RlKTtcblxuICAgIGlmIChhc3NpZ25tZW50VmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBhc3NpZ25tZW50VmFsdWVOb2RlOyAgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkocmV0dXJuU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGwpIHx8IChub2RlQiA9PT0gbnVsbCkpIHtcbiAgICBub2RlTWF0Y2hlcyA9IChub2RlQSA9PT0gbm9kZUIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBRXF1YWxUb05vZGVBID0gbm9kZUEuaXNFcXVhbFRvKG5vZGVCKTtcblxuICAgIG5vZGVNYXRjaGVzID0gbm9kZUFFcXVhbFRvTm9kZUE7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQikge1xuICBsZXQgbm9kZXNNYXRjaDtcblxuICBpZiAoKG5vZGVzQSA9PT0gbnVsbCkgfHwgKG5vZGVzQiA9PT0gbnVsbCkpIHtcbiAgICBub2Rlc01hdGNoID0gKG5vZGVzQSA9PT0gbm9kZXNCKTtcbiAgfSBlbHNlIHtcbiAgICBub2Rlc01hdGNoID0gbWF0Y2gobm9kZXNBLCBub2Rlc0IsIChub2RlQSwgbm9kZUIpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuXG5mdW5jdGlvbiB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBub2RlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHZhcmlhYmxlKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gbnVsbDsgIC8vL1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBub2Rlc0Zyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVzID0gbnVsbDsgIC8vL1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlID0gbnVtYmVyVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAobnVtYmVyVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlQ29udGVudCA9IG51bWJlclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBudW1iZXIgPSBOdW1iZXIobnVtYmVyVGVybWluYWxOb2RlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nID0gbnVsbDtcblxuICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBib29sZWFuID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBUUlVFOiB7XG4gICAgICAgIGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEZBTFNFOiB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9vbGVhbjtcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSIsImFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlIiwibm9kZSIsIm5vZGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbGVhbiIsInZhcmlhYmxlIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0U3RyaW5nIiwiZ2V0Qm9vbGVhbiIsImdldFZhcmlhYmxlIiwiZ2V0VHlwZSIsInR5cGUiLCJOT0RFU19UWVBFIiwiTlVNQkVSX1RZUEUiLCJTVFJJTkdfVFlQRSIsIkJPT0xFQU5fVFlQRSIsIk5PREVfVFlQRSIsImFzU3RyaW5nIiwiY29udGV4dCIsIm5vZGVzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVTdHJpbmciLCJOVUxMIiwibm9kZUFzU3RyaW5nIiwicmVzb2x2ZSIsInZhbHVlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmcm9tTm9kZSIsImZyb21Ob2RlcyIsImZyb21TdHJpbmciLCJmcm9tQm9vbGVhbiIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUZyb21WYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25WYWx1ZU5vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwiYXNzaWdubWVudFZhbHVlTm9kZSIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudFZhbHVlTm9kZSIsIm5hbWUiLCJub2RlQSIsIm5vZGVCIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2Rlc0EiLCJub2Rlc0IiLCJkb20iLCJWYXJpYWJsZSIsIm5vZGVGcm9tVmFsdWVOb2RlIiwibm9kZXNGcm9tVmFsdWVOb2RlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsInN0cmluZ0Zyb21WYWx1ZU5vZGUiLCJib29sZWFuRnJvbVZhbHVlTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiTnVtYmVyIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50IiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsIlRSVUUiLCJGQUxTRSJdLCJt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