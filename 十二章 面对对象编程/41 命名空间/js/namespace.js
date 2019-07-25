var namespace=(function (namespace) {
    namespace.PersonInfo = function (obj) {
        this.name  = obj.name || null;
        this.age = obj.age || null;
    }
    namespace.PersonInfoUtil = function () {
        return{
            show:function (p) {
                console.log('姓名'+':'+p.name,'年龄'+':'+p.age)
            }
        }
    }()
    return namespace
})(window.namespace || {});
