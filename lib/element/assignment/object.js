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
const _occamlanguages = require("occam-languages");
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
const _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
const _stringLiteral = require("../../utilities/stringLiteral");
const _nominal = require("../../utilities/nominal");
const _term = require("../../utilities/term");
const _types = require("../../types");
const _parameterNames = require("../../parameterNames");
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
const _default = (0, _elements.define)(class ObjectAssigment extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, namedParameters){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.namedParameters = namedParameters;
    }
    getVariable() {
        return this.variable;
    }
    getNamedParameters() {
        return this.namedParameters;
    }
    evaluate(context) {
        const objectAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);
        const term = this.variable.evaluate(context), termType = term.getType();
        if (termType !== _types.NOMINAL_VALUE_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        _nodeProperties.default.compareNamedParameters(this.namedParameters, context);
        this.namedParameters.forEachNamedParameter((namedParameter)=>{
            this.evaluateNamedParameter(namedParameter, term, context);
        });
        context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
    }
    evaluateNamedParameter(namedParameter, term, context) {
        const termString = term.getString(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the '${namedParameterString}' named parameter against the '${termString}' term...`);
        const name = namedParameter.getName();
        switch(name){
            case _parameterNames.CONTENT_PARAMETER_NAME:
                {
                    term = this.evaluateContentNamedParameter(namedParameter, term, context);
                    break;
                }
            case _parameterNames.TERMINAL_PARAMETER_NAME:
                {
                    term = this.evaluateTerminalNamedParameter(namedParameter, term, context);
                    break;
                }
            case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                {
                    term = this.evaluateChildNodesNamedParameter(namedParameter, term, context);
                    break;
                }
        }
        const { Variable } = _elements.default, variable = Variable.fromNamedParameter(namedParameter, context);
        variable.assign(term, context);
        context.debug(`...evaluated the '${namedParameterString}' parameter named against the '${termString}' term.`);
    }
    evaluateContentNamedParameter(namedParameter, term, context) {
        const type = namedParameter.getType(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the content '${namedParameterString}' named parameter...`);
        if (type !== _types.STRING_TYPE) {
            const namedParameterString = namedParameter.getString(), message = `The '${namedParameterString}' named parameter's type should be '${_types.STRING_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeTerminalNode = node.isTerminalNode();
        if (!nodeTerminalNode) {
            const termString = term.getString(), message = `The '${termString}' term's node must be terminal.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const terminalNode = node, content = terminalNode.getContent(), string = content, stringLiteral = (0, _stringLiteral.stringLiteralFromString)(string);
        term = (0, _term.termFromStringLiteral)(stringLiteral, context);
        const termSttring = term.getString();
        context.debug(`...evaluated the content '${namedParameterString}' named parameter as '${termSttring}'.`);
        return term;
    }
    evaluateTerminalNamedParameter(namedParameter, term, context) {
        const type = namedParameter.getType(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the terminal '${namedParameterString}' named parameter...`);
        if (type !== _types.BOOLEAN_TYPE) {
            const namedParameterString = namedParameter.getString(), message = `The '${namedParameterString}' named parameter's type should be '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
        const boolean = terminal; ///
        term = (0, _term.termFromBoolean)(boolean, context); ///
        const termSttring = term.getString();
        context.debug(`...evaluated the terminal '${namedParameterString}' named parameter as '${termSttring}'.`);
        return term;
    }
    evaluateChildNodesNamedParameter(namedParameter, term, context) {
        const type = namedParameter.getType(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the child nodes '${namedParameterString}' named parameter...`);
        if (type !== _types.NOMINAL_VALUES_TYPE) {
            const namedParameterString = namedParameter.getString(), message = `The '${namedParameterString}' named parameter's type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
        if (!nodeNonTerminalNode) {
            const termString = term.getString(), message = `The '${termString}' term's node must be non-terminal.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
        term = (0, _nominal.termFromNodesAndNominalValue)(nodes, nominalValue);
        const termSttring = term.getString();
        context.debug(`...evaluated the childNodes '${namedParameterString}' named parameter as '${termSttring}'.`);
        return term;
    }
    static name = "ObjectAssigment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuLCB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcbmltcG9ydCB7IFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUsIE5PTUlOQUxfVkFMVUVfVFlQRSwgTk9NSU5BTF9WQUxVRVNfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PTUlOQUxfVkFMVUVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLmNvbXBhcmVOYW1lZFBhcmFtZXRlcnModGhpcy5uYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgdGhpcy5ldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNSU5BTF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24odGVybSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIG5hbWVkIGFnYWluc3QgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICB9XG5cbiAgZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSBjb250ZW50ICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG5vbWluYWxWYWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmICghbm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21TdHJpbmcoc3RyaW5nKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIGNvbnRlbnQgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgdGVybWluYWwgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgdGVybWluYWwgPSBub2RlVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCBib29sZWFuID0gdGVybWluYWw7IC8vL1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgdGVybVN0dHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSB0ZXJtaW5hbCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhcyAnJHt0ZXJtU3R0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIGNoaWxkIG5vZGVzICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gTk9NSU5BTF9WQUxVRVNfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZShub2Rlcywgbm9taW5hbFZhbHVlKTtcblxuICAgIGNvbnN0IHRlcm1TdHRyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgY2hpbGROb2RlcyAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhcyAnJHt0ZXJtU3R0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJPYmplY3RBc3NpZ21lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidmFyaWFibGUiLCJuYW1lZFBhcmFtZXRlcnMiLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkUGFyYW1ldGVycyIsImV2YWx1YXRlIiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlUHJvcGVydGllcyIsImNvbXBhcmVOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZSIsImdldE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsInRlcm1TdHRyaW5nIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwiTk9NSU5BTF9WQUxVRVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJ0ZXJtRnJvbU5vZGVzQW5kTm9taW5hbFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OztnQ0Fid0I7a0VBRUg7a0VBQ0M7dUVBQ0s7K0JBR2E7eUJBQ0s7c0JBQ1U7dUJBQzRCO2dDQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU1RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHdCQUF3QkMsdUJBQU87SUFDekQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsQ0FBRTtRQUN4RSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7SUFDekI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0YsZUFBZTtJQUM3QjtJQUVBRyxTQUFTUixPQUFPLEVBQUU7UUFDaEIsTUFBTVMseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFcERWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix1QkFBdUIsc0JBQXNCLENBQUM7UUFFL0UsTUFBTUcsT0FBTyxJQUFJLENBQUNSLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUixVQUM5QmEsV0FBV0QsS0FBS0UsT0FBTztRQUU3QixJQUFJRCxhQUFhRSx5QkFBa0IsRUFBRTtZQUNuQyxNQUFNQyxhQUFhSixLQUFLRixTQUFTLElBQzNCTyxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUseUJBQWtCLENBQUMsRUFBRSxDQUFDLEVBQzVGRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQUcsdUJBQWMsQ0FBQ0Msc0JBQXNCLENBQUMsSUFBSSxDQUFDakIsZUFBZSxFQUFFTDtRQUU1RCxJQUFJLENBQUNLLGVBQWUsQ0FBQ2tCLHFCQUFxQixDQUFDLENBQUNDO1lBQzFDLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNELGdCQUFnQlosTUFBTVo7UUFDcEQ7UUFFQUEsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFakIsdUJBQXVCLG9CQUFvQixDQUFDO0lBQ2pGO0lBRUFnQix1QkFBdUJELGNBQWMsRUFBRVosSUFBSSxFQUFFWixPQUFPLEVBQUU7UUFDcEQsTUFBTWdCLGFBQWFKLEtBQUtGLFNBQVMsSUFDM0JpQix1QkFBdUJILGVBQWVkLFNBQVM7UUFFckRWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFZ0IscUJBQXFCLCtCQUErQixFQUFFWCxXQUFXLFNBQVMsQ0FBQztRQUU1RyxNQUFNWSxPQUFPSixlQUFlSyxPQUFPO1FBRW5DLE9BQVFEO1lBQ04sS0FBS0Usc0NBQXNCO2dCQUFFO29CQUMzQmxCLE9BQU8sSUFBSSxDQUFDbUIsNkJBQTZCLENBQUNQLGdCQUFnQlosTUFBTVo7b0JBRWhFO2dCQUNGO1lBRUEsS0FBS2dDLHVDQUF1QjtnQkFBRTtvQkFDNUJwQixPQUFPLElBQUksQ0FBQ3FCLDhCQUE4QixDQUFDVCxnQkFBZ0JaLE1BQU1aO29CQUVqRTtnQkFDRjtZQUVBLEtBQUtrQywwQ0FBMEI7Z0JBQUU7b0JBQy9CdEIsT0FBTyxJQUFJLENBQUN1QixnQ0FBZ0MsQ0FBQ1gsZ0JBQWdCWixNQUFNWjtvQkFFbkU7Z0JBQ0Y7UUFDRjtRQUVBLE1BQU0sRUFBRW9DLFFBQVEsRUFBRSxHQUFHQyxpQkFBUSxFQUN2QmpDLFdBQVdnQyxTQUFTRSxrQkFBa0IsQ0FBQ2QsZ0JBQWdCeEI7UUFFN0RJLFNBQVNtQyxNQUFNLENBQUMzQixNQUFNWjtRQUV0QkEsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFQyxxQkFBcUIsK0JBQStCLEVBQUVYLFdBQVcsT0FBTyxDQUFDO0lBQzlHO0lBRUFlLDhCQUE4QlAsY0FBYyxFQUFFWixJQUFJLEVBQUVaLE9BQU8sRUFBRTtRQUMzRCxNQUFNd0MsT0FBT2hCLGVBQWVWLE9BQU8sSUFDN0JhLHVCQUF1QkgsZUFBZWQsU0FBUztRQUVyRFYsUUFBUVcsS0FBSyxDQUFDLENBQUMsd0JBQXdCLEVBQUVnQixxQkFBcUIsb0JBQW9CLENBQUM7UUFFbkYsSUFBSWEsU0FBU0Msa0JBQVcsRUFBRTtZQUN4QixNQUFNZCx1QkFBdUJILGVBQWVkLFNBQVMsSUFDL0NPLFVBQVUsQ0FBQyxLQUFLLEVBQUVVLHFCQUFxQixvQ0FBb0MsRUFBRWMsa0JBQVcsQ0FBQyxFQUFFLENBQUMsRUFDNUZ2QixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNd0IsaUJBQWlCOUIsS0FBSytCLGlCQUFpQixJQUN2Q0MsZUFBZUYsZ0JBQ2Z4QyxPQUFPMEMsYUFBYUMsT0FBTyxJQUMzQkMsbUJBQW1CNUMsS0FBSzZDLGNBQWM7UUFFNUMsSUFBSSxDQUFDRCxrQkFBa0I7WUFDckIsTUFBTTlCLGFBQWFKLEtBQUtGLFNBQVMsSUFDM0JPLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsK0JBQStCLENBQUMsRUFDN0RFLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU04QixlQUFlOUMsTUFDZitDLFVBQVVELGFBQWFFLFVBQVUsSUFDakNqRCxTQUFTZ0QsU0FDVEUsZ0JBQWdCQyxJQUFBQSxzQ0FBdUIsRUFBQ25EO1FBRTlDVyxPQUFPeUMsSUFBQUEsMkJBQXFCLEVBQUNGLGVBQWVuRDtRQUU1QyxNQUFNc0QsY0FBYzFDLEtBQUtGLFNBQVM7UUFFbENWLFFBQVEwQixLQUFLLENBQUMsQ0FBQywwQkFBMEIsRUFBRUMscUJBQXFCLHNCQUFzQixFQUFFMkIsWUFBWSxFQUFFLENBQUM7UUFFdkcsT0FBTzFDO0lBQ1Q7SUFFQXFCLCtCQUErQlQsY0FBYyxFQUFFWixJQUFJLEVBQUVaLE9BQU8sRUFBRTtRQUM1RCxNQUFNd0MsT0FBT2hCLGVBQWVWLE9BQU8sSUFDN0JhLHVCQUF1QkgsZUFBZWQsU0FBUztRQUVyRFYsUUFBUVcsS0FBSyxDQUFDLENBQUMseUJBQXlCLEVBQUVnQixxQkFBcUIsb0JBQW9CLENBQUM7UUFFcEYsSUFBSWEsU0FBU2UsbUJBQVksRUFBRTtZQUN6QixNQUFNNUIsdUJBQXVCSCxlQUFlZCxTQUFTLElBQy9DTyxVQUFVLENBQUMsS0FBSyxFQUFFVSxxQkFBcUIsb0NBQW9DLEVBQUU0QixtQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUM3RnJDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU13QixpQkFBaUI5QixLQUFLK0IsaUJBQWlCLElBQ3ZDQyxlQUFlRixnQkFDZnhDLE9BQU8wQyxhQUFhQyxPQUFPLElBQzNCQyxtQkFBbUI1QyxLQUFLNkMsY0FBYyxJQUN0Q1MsV0FBV1Ysa0JBQW1CLEdBQUc7UUFFdkMsTUFBTVcsVUFBVUQsVUFBVSxHQUFHO1FBRTdCNUMsT0FBTzhDLElBQUFBLHFCQUFlLEVBQUNELFNBQVN6RCxVQUFXLEdBQUc7UUFFOUMsTUFBTXNELGNBQWMxQyxLQUFLRixTQUFTO1FBRWxDVixRQUFRMEIsS0FBSyxDQUFDLENBQUMsMkJBQTJCLEVBQUVDLHFCQUFxQixzQkFBc0IsRUFBRTJCLFlBQVksRUFBRSxDQUFDO1FBRXhHLE9BQU8xQztJQUNUO0lBRUF1QixpQ0FBaUNYLGNBQWMsRUFBRVosSUFBSSxFQUFFWixPQUFPLEVBQUU7UUFDOUQsTUFBTXdDLE9BQU9oQixlQUFlVixPQUFPLElBQzdCYSx1QkFBdUJILGVBQWVkLFNBQVM7UUFFckRWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLDRCQUE0QixFQUFFZ0IscUJBQXFCLG9CQUFvQixDQUFDO1FBRXZGLElBQUlhLFNBQVNtQiwwQkFBbUIsRUFBRTtZQUNoQyxNQUFNaEMsdUJBQXVCSCxlQUFlZCxTQUFTLElBQy9DTyxVQUFVLENBQUMsS0FBSyxFQUFFVSxxQkFBcUIsb0NBQW9DLEVBQUVnQywwQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFDcEd6QyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNd0IsaUJBQWlCOUIsS0FBSytCLGlCQUFpQixJQUN2Q0MsZUFBZUYsZ0JBQ2Z4QyxPQUFPMEMsYUFBYUMsT0FBTyxJQUMzQmUsc0JBQXNCMUQsS0FBSzJELGlCQUFpQjtRQUVsRCxJQUFJLENBQUNELHFCQUFxQjtZQUN4QixNQUFNNUMsYUFBYUosS0FBS0YsU0FBUyxJQUMzQk8sVUFBVSxDQUFDLEtBQUssRUFBRUQsV0FBVyxtQ0FBbUMsQ0FBQyxFQUNqRUUsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTTRDLGtCQUFrQjVELE1BQ2xCNkQsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxRQUFRRixZQUFhLEdBQUc7UUFFOUJuRCxPQUFPc0QsSUFBQUEscUNBQTRCLEVBQUNELE9BQU9yQjtRQUUzQyxNQUFNVSxjQUFjMUMsS0FBS0YsU0FBUztRQUVsQ1YsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLDZCQUE2QixFQUFFQyxxQkFBcUIsc0JBQXNCLEVBQUUyQixZQUFZLEVBQUUsQ0FBQztRQUUxRyxPQUFPMUM7SUFDVDtJQUVBLE9BQU9nQixPQUFPLGtCQUFrQjtBQUNsQyJ9