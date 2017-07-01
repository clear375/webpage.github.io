// JavaScript source code
function doToggleClassName(obj, onClassName, offClassName) {
    obj.className = (obj.className != onClassName) ? onClassName : offClassName;
    var elements = document.getElementsByTagName(obj.tagName);
    for (var i = 0; i < elements.length; i++) {
        if ((elements[i] != obj) && (elements[i].className == onClassName))
            elements[i].className = offClassName;
    }
}
