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
    constructor(context, string, node, lineIndex, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5vZGVzUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLnNvbWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgIHRoaXMuZXZlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLnByb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXhwcmVzc2lvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXhwcmVzc2lvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm0iLCJzb21lIiwiZXZlcnkiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsImdldFRlcm0iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0Tm9kZVF1ZXJ5IiwiZ2V0Tm9kZXNRdWVyeSIsImdldFJldHVybkJsb2NrIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFR5cGUiLCJ0eXBlIiwiZXZhbHVhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsQ0FBRTtRQUNuSSxLQUFLLENBQUNaLFNBQVNDLFFB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