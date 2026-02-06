"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get asyncEvery () {
        return asyncEvery;
    },
    get asyncForEach () {
        return asyncForEach;
    },
    get asyncReduce () {
        return asyncReduce;
    },
    get asyncSome () {
        return asyncSome;
    },
    get default () {
        return _default;
    }
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function asyncSome(array, callback) {
    return _async_to_generator(function() {
        var result, length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = false;
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(item, index, array)
                    ];
                case 2:
                    result = _state.sent();
                    if (result) {
                        return [
                            3,
                            4
                        ];
                    }
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        result
                    ];
            }
        });
    })();
}
function asyncEvery(array, callback) {
    return _async_to_generator(function() {
        var result, length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = true;
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(item, index, array)
                    ];
                case 2:
                    result = _state.sent();
                    if (!result) {
                        return [
                            3,
                            4
                        ];
                    }
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        result
                    ];
            }
        });
    })();
}
function asyncReduce(array, callback, initialValue) {
    return _async_to_generator(function() {
        var value, length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    value = initialValue; ///
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(value, item, index, array)
                    ];
                case 2:
                    value = _state.sent();
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        value
                    ];
            }
        });
    })();
}
function asyncForEach(array, callback) {
    return _async_to_generator(function() {
        var length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(item, index, array)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}
var _default = {
    asyncSome: asyncSome,
    asyncEvery: asyncEvery,
    asyncReduce: asyncReduce,
    asyncForEach: asyncForEach
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBpdGVtID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soaXRlbSwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpbmRleF07XG5cbiAgICByZXN1bHQgPSBhd2FpdCBjYWxsYmFjayhpdGVtLCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gYXdhaXQgY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IGFycmF5W2luZGV4XTtcblxuICAgIGF3YWl0IGNhbGxiYWNrKGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luY1NvbWUsXG4gIGFzeW5jRXZlcnksXG4gIGFzeW5jUmVkdWNlLFxuICBhc3luY0ZvckVhY2hcbn07XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeSIsImFzeW5jRm9yRWFjaCIsImFzeW5jUmVkdWNlIiwiYXN5bmNTb21lIiwiYXJyYXkiLCJjYWxsYmFjayIsInJlc3VsdCIsImxlbmd0aCIsImluZGV4IiwiaXRlbSIsImluaXRpYWxWYWx1ZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvQnNCQTtlQUFBQTs7UUFnQ0FDO2VBQUFBOztRQWRBQztlQUFBQTs7UUFwQ0FDO2VBQUFBOztRQTREdEI7ZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNURPLFNBQWVBLFVBQVVDLEtBQUssRUFBRUMsUUFBUTs7WUFDekNDLFFBRUVDLFFBRUdDLE9BQ0RDOzs7O29CQUxKSCxTQUFTO29CQUVQQyxTQUFTSCxNQUFNRyxNQUFNO29CQUVsQkMsUUFBUTs7O3lCQUFHQSxDQUFBQSxRQUFRRCxNQUFLOzs7O29CQUN6QkUsT0FBT0wsS0FBSyxDQUFDSSxNQUFNO29CQUVoQjs7d0JBQU1ILFNBQVNJLE1BQU1ELE9BQU9KOzs7b0JBQXJDRSxTQUFTO29CQUVULElBQUlBLFFBQVE7d0JBQ1Y7Ozs7b0JBQ0Y7OztvQkFQa0NFLFNBQVM7Ozs7OztvQkFVN0M7O3dCQUFPRjs7OztJQUNUOztBQUVPLFNBQWVOLFdBQVdJLEtBQUssRUFBRUMsUUFBUTs7WUFDMUNDLFFBRUVDLFFBRUdDLE9BQ0RDOzs7O29CQUxKSCxTQUFTO29CQUVQQyxTQUFTSCxNQUFNRyxNQUFNO29CQUVsQkMsUUFBUTs7O3lCQUFHQSxDQUFBQSxRQUFRRCxNQUFLOzs7O29CQUN6QkUsT0FBT0wsS0FBSyxDQUFDSSxNQUFNO29CQUVoQjs7d0JBQU1ILFNBQVNJLE1BQU1ELE9BQU9KOzs7b0JBQXJDRSxTQUFTO29CQUVULElBQUksQ0FBQ0EsUUFBUTt3QkFDWDs7OztvQkFDRjs7O29CQVBrQ0UsU0FBUzs7Ozs7O29CQVU3Qzs7d0JBQU9GOzs7O0lBQ1Q7O0FBRU8sU0FBZUosWUFBWUUsS0FBSyxFQUFFQyxRQUFRLEVBQUVLLFlBQVk7O1lBQ3pEQyxPQUVFSixRQUVHQyxPQUNEQzs7OztvQkFMSkUsUUFBUUQsY0FBYyxHQUFHO29CQUV2QkgsU0FBU0gsTUFBTUcsTUFBTTtvQkFFbEJDLFFBQVE7Ozt5QkFBR0EsQ0FBQUEsUUFBUUQsTUFBSzs7OztvQkFDekJFLE9BQU9MLEtBQUssQ0FBQ0ksTUFBTTtvQkFFakI7O3dCQUFNSCxTQUFTTSxPQUFPRixNQUFNRCxPQUFPSjs7O29CQUEzQ08sUUFBUTs7O29CQUgwQkgsU0FBUzs7Ozs7O29CQU03Qzs7d0JBQU9HOzs7O0lBQ1Q7O0FBRU8sU0FBZVYsYUFBYUcsS0FBSyxFQUFFQyxRQUFROztZQUMxQ0UsUUFFR0MsT0FDREM7Ozs7b0JBSEZGLFNBQVNILE1BQU1HLE1BQU07b0JBRWxCQyxRQUFROzs7eUJBQUdBLENBQUFBLFFBQVFELE1BQUs7Ozs7b0JBQ3pCRSxPQUFPTCxLQUFLLENBQUNJLE1BQU07b0JBRXpCOzt3QkFBTUgsU0FBU0ksTUFBTUQsT0FBT0o7OztvQkFBNUI7OztvQkFIa0NJLFNBQVM7Ozs7Ozs7Ozs7O0lBSy9DOztJQUVBLFdBQWU7SUFDYkwsV0FBQUE7SUFDQUgsWUFBQUE7SUFDQUUsYUFBQUE7SUFDQUQsY0FBQUE7QUFDRiJ9