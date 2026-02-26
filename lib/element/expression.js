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
const _elements = require("../elements");
const _default = (0, _elements.define)(class Expression extends _occamlanguages.Element {
    constructor(context, string, node, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall){
        super(context, string, node);
        this.term = term;
        this.some = some;
        this.every = every;
        this.reduce = reduce;
        this.ternary = ternary;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.returnBlock = returnBlock;
        this.procedureCall = procedureCall;
    }
    getTerm() {
        return this.term;
    }
    getSome() {
        return this.some;
    }
    getEvery() {
        return this.every;
    }
    getReduce() {
        return this.reduce;
    }
    getTernary() {
        return this.ternay;
    }
    getNodeQuery() {
        return this.nodeQuery;
    }
    getNodesQuery() {
        return this.nodesQuery;
    }
    getReturnBlock() {
        return this.returnBlock;
    }
    getProcedureCall() {
        return this.procedureCall;
    }
    getType() {
        let type;
        if (false) {
        ///
        } else if (this.term !== null) {
            type = this.term.getType();
        } else if (this.some !== null) {
            type = this.some.getType();
        } else if (this.every !== null) {
            type = this.every.getType();
        } else if (this.reduce !== null) {
            type = this.reduce.getType();
        } else if (this.ternary !== null) {
            type = this.ternary.getType();
        } else if (this.nodeQuery !== null) {
            type = this.nodeQuery.getType();
        } else if (this.nodesQuery !== null) {
            type = this.nodesQuery.getType();
        } else if (this.returnBlock !== null) {
            type = this.returnBlock.getType();
        } else if (this.procedureCall !== null) {
            type = this.procedureCall.getType();
        }
        return type;
    }
    async evaluate(context) {
        let term;
        if (false) {
        ///
        } else if (this.term !== null) {
            term = this.term.evaluate(context);
        } else if (this.nodeQuery !== null) {
            term = this.nodeQuery.evaluate(context);
        } else if (this.nodesQuery !== null) {
            term = this.nodesQuery.evaluate(context);
        } else if (this.some !== null) {
            term = await this.some.evaluate(context);
        } else if (this.every !== null) {
            term = await this.every.evaluate(context);
        } else if (this.reduce !== null) {
            term = await this.reduce.evaluate(context);
        } else if (this.ternary !== null) {
            term = await this.ternary.evaluate(context);
        } else if (this.returnBlock !== null) {
            term = await this.returnBlock.evaluate(context);
        } else if (this.procedureCall !== null) {
            term = await this.procedureCall.evaluate(context);
        }
        return term;
    }
    static name = "Expression";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5ldmVyeSA9IGV2ZXJ5O1xuICAgIHRoaXMucmVkdWNlID0gcmVkdWNlO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZTtcbiAgfVxuXG4gIGdldEV2ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5O1xuICB9XG5cbiAgZ2V0UmVkdWNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZTtcbiAgfVxuXG4gIGdldFRlcm5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybmF5O1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJldHVybkJsb2NrLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCAgdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZWR1Y2UuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLnRlcm5hcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMucHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFeHByZXNzaW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsInNvbWUiLCJldmVyeSIsInJlZHVjZSIsInRlcm5hcnkiLCJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwiZ2V0VGVybSIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0VHlwZSIsInR5cGUiLCJldmFsdWF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsQ0FBRTtRQUN4SCxLQUFLLENBQUNYLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FB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