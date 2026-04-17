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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5vZGVzUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLnNvbWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgIHRoaXMuZXZlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLnByb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXhwcmVzc2lvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXhwcmVzc2lvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJnZXRUZXJtIiwiZ2V0U29tZSIsImdldEV2ZXJ5IiwiZ2V0UmVkdWNlIiwiZ2V0VGVybmFyeSIsInRlcm5heSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRSZXR1cm5CbG9jayIsImdldFByb2NlZHVyZUNhbGwiLCJnZXRUeXBlIiwidHlwZSIsImV2YWx1YXRlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLENBQUU7UUFDcEksS0FBSyxDQUFDWixTQUFT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