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
    constructor(context, string, node, variable, initialExpression, anonymousProcedure){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuY29uc3QgeyBhc3luY1JlZHVjZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5pbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRJbml0aWFsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcmVkdWNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3JlZHVjZVN0cmluZ30nIHJlZHVjZS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdGVybS5nZXROb2RlcygpLFxuICAgICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gYXdhaXQgdGhpcy5pbml0aWFsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHRlcm0gPSBhd2FpdCBhc3luY1JlZHVjZShub2RlcywgYXN5bmMgKGN1cnJlbnRFeHByZXNzaW9uLCBub2RlKSA9PiB7XG4gICAgICBsZXQgdGVybTtcblxuICAgICAgY29uc3QgeyBUZXJtcyB9ID0gZWxlbWVudHM7XG5cbiAgICAgIHRlcm0gPSBjdXJyZW50VGVybTsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1zID0gVGVybXMuZnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgIHRlcm0gPSB0ZXJtRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRlcm1zLmFkZFRlcm0odGVybSk7XG5cbiAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHRlcm07XG4gICAgfSwgaW5pdGlhbEV4cHJlc3Npb24pO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JlZHVjZVN0cmluZ30nIHJlZHVjZSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWR1Y2VcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jUmVkdWNlIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiUmVkdWNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidmFyaWFibGUiLCJpbml0aWFsRXhwcmVzc2lvbiIsImFub255bW91c1Byb2NlZHVyZSIsImdldFZhcmlhYmxlIiwiZ2V0SW5pdGlhbEV4cHJlc3Npb24iLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsInRlcm0iLCJicmVhayIsInJlZHVjZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwiY3VycmVudEV4cHJlc3Npb24iLCJUZXJtcyIsImVsZW1lbnRzIiwiY3VycmVudFRlcm0iLCJ0ZXJtcyIsImZyb21UZXJtIiwidGVybUZyb21Ob2RlIiwiYWRk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