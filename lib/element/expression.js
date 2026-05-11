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
        } else if (this.value !== null) {
            value = this.value.evaluate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm5vZGVzUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5zb21lLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBhd2FpdCAgdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLnByb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV4cHJlc3Npb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkV4cHJlc3Npb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGVybSIsInNvbWUiLCJldmVyeSIsInJlZHVjZSIsInRlcm5hcnkiLCJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwiZ2V0VGVybSIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0VHlwZSIsInR5cGUiLCJldmFsdWF0ZSIsInZhbHVlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLENBQUU7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