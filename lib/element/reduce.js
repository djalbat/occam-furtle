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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _types = require("../types");
const _term = require("../utilities/term");
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
const { asyncReduce } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Reduce extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, variable, initialExpression, anonymousProcedure){
        super(context, string, node, lineIndex);
        this.variable = variable;
        this.initialExpression = initialExpression;
        this.anonymousProcedure = anonymousProcedure;
    }
    getVariable() {
        return this.variable;
    }
    getInitialExpression() {
        return this.initialExpression;
    }
    getAnonymousProcedure() {
        return this.anonymousProcedure;
    }
    async evaluate(context) {
        let term;
        await this.break(context);
        const reduceString = this.getString();
        context.trace(`Evaluating the '${reduceString}' reduce...`);
        term = this.variable.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.NODES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NODES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = term.getNodes(), initialExpression = await this.initialExpression.evaluate(context);
        term = await asyncReduce(nodes, async (currentExpression, node)=>{
            let term;
            const { Terms } = _elements.default;
            term = currentTerm; ///
            const terms = Terms.fromTerm(term, context);
            term = (0, _term.termFromNode)(node, context);
            terms.addTerm(term);
            term = await this.anonymousProcedure.call(terms, context);
            return term;
        }, initialExpression);
        const termString = term.getString();
        context.trace(`...evaluated the '${reduceString}' reduce as '${termString}'.`);
        return term;
    }
    static name = "Reduce";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuY29uc3QgeyBhc3luY1JlZHVjZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbjtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0SW5pdGlhbEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJlZHVjZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRlcm0uZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGF3YWl0IHRoaXMuaW5pdGlhbEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICB0ZXJtID0gYXdhaXQgYXN5bmNSZWR1Y2Uobm9kZXMsIGFzeW5jIChjdXJyZW50RXhwcmVzc2lvbiwgbm9kZSkgPT4ge1xuICAgICAgbGV0IHRlcm07XG5cbiAgICAgIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzO1xuXG4gICAgICB0ZXJtID0gY3VycmVudFRlcm07IC8vL1xuXG4gICAgICBjb25zdCB0ZXJtcyA9IFRlcm1zLmZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB0ZXJtcy5hZGRUZXJtKHRlcm0pO1xuXG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB0ZXJtO1xuICAgIH0sIGluaXRpYWxFeHByZXNzaW9uKTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1JlZHVjZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJlZHVjZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInZhcmlhYmxlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRWYXJpYWJsZSIsImdldEluaXRpYWxFeHByZXNzaW9uIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJ0ZXJtIiwiYnJlYWsiLCJyZWR1Y2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImN1cnJlbnRFeHByZXNzaW9uIiwiVGVybXMiLCJlbGVtZW50cyIsImN1cnJlbnRUZXJtIiwidGVy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