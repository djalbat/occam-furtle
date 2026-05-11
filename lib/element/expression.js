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
    constructor(context, string, node, breakPoint, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall){
        super(context, string, node, breakPoint);
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
        let value;
        if (false) {
        ///
        } else if (this.term !== null) {
            value = this.term.evaluate(context);
        } else if (this.nodeQuery !== null) {
            value = this.nodeQuery.evaluate(context);
        } else if (this.nodesQuery !== null) {
            value = this.nodesQuery.evaluate(context);
        } else if (this.some !== null) {
            value = await this.some.evaluate(context);
        } else if (this.every !== null) {
            value = await this.every.evaluate(context);
        } else if (this.reduce !== null) {
            value = await this.reduce.evaluate(context);
        } else if (this.ternary !== null) {
            value = await this.ternary.evaluate(context);
        } else if (this.returnBlock !== null) {
            value = await this.returnBlock.evaluate(context);
        } else if (this.procedureCall !== null) {
            value = await this.procedureCall.evaluate(context);
        }
        return value;
    }
    static name = "Expression";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gYXdhaXQgIHRoaXMuZXZlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLnJlZHVjZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLnRlcm5hcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFeHByZXNzaW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm0iLCJzb21lIiwiZXZlcnkiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsImdldFRlcm0iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0Tm9kZVF1ZXJ5IiwiZ2V0Tm9kZXNRdWVyeSIsImdldFJldHVybkJsb2NrIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFR5cGUiLCJ0eXBlIiwiZXZhbHVhdGUiLCJ2YWx1ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxDQUFFO1FB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