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
    get default () {
        return _default;
    },
    get define () {
        return define;
    }
});
var elements = {};
function define(Element) {
    var name = Element.name;
    elements[name] = Element;
    return Element;
}
Object.assign(elements, {
    define: define
});
var _default = elements;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWxlbWVudHMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZShFbGVtZW50KSB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gRWxlbWVudDtcblxuICBlbGVtZW50c1tuYW1lXSA9IEVsZW1lbnQ7XG5cbiAgcmV0dXJuIEVsZW1lbnQ7XG59XG5cbk9iamVjdC5hc3NpZ24oZWxlbWVudHMsIHtcbiAgZGVmaW5lXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudHM7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJFbGVtZW50IiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ0JBO2VBQUE7O1FBWmdCQTtlQUFBQTs7O0FBRmhCLElBQU1DLFdBQVcsQ0FBQztBQUVYLFNBQVNELE9BQU9FLE9BQU87SUFDNUIsSUFBTSxBQUFFQyxPQUFTRCxRQUFUQztJQUVSRixRQUFRLENBQUNFLEtBQUssR0FBR0Q7SUFFakIsT0FBT0E7QUFDVDtBQUVBRSxPQUFPQyxNQUFNLENBQUNKLFVBQVU7SUFDdEJELFFBQUFBO0FBQ0Y7SUFFQSxXQUFlQyJ9