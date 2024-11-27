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
var entries = [
    {
        "keyword": "^(?:Boolean|Number|Nodes|Node|Function)\\b"
    },
    {
        "primitive": "^(?:null|true|false)\\b"
    },
    {
        "instruction": "^(?:forEach|nodeQuery|nodesQuery)"
    },
    {
        "special": "^(?:@|!|;|=|,|\\*|\\||\\/|\\(|\\)|\\[|\\]|\\{|\\}|\\.\\.\\.)"
    },
    {
        "name": "^[a-zA-Z\-]+"
    },
    {
        "number": "^[0-9]+"
    },
    {
        "unassigned": "^."
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OkJvb2xlYW58TnVtYmVyfE5vZGVzfE5vZGV8RnVuY3Rpb24pXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwcmltaXRpdmVcIjogXCJeKD86bnVsbHx0cnVlfGZhbHNlKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJeKD86Zm9yRWFjaHxub2RlUXVlcnl8bm9kZXNRdWVyeSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/OkB8IXw7fD18LHxcXFxcKnxcXFxcfHxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXXxcXFxce3xcXFxcfXxcXFxcLlxcXFwuXFxcXC4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bYS16QS1aXFwtXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJudW1iZXJcIjogXCJeWzAtOV0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl4uXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBQTs7O0FBeEJBLElBQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9