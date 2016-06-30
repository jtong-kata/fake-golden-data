

var ajax = function(object){
        setTimeout(object.success, 1000)
};

var a = function(callback){
    var x = "2";

    ajax({
        success: function(){
            x =callback();
            console.log(x)
        }

    })
    return x;
}

var z = function(){
    return "1"

};

var y = a(z);

//y?

[function(){}, function(){}]

var b = function c(){
    return [1,2,3];
};

b();

b = function(){
    return [1,2,3];
};

b = (function(){
        return [1,2,3].forEach(function(item){
            return item+1;
        });
})();

b = (function(){
    return (function(){
       return [1,2,3]

   })
})

b = (function(){
     (function(){
        return [1,2,3]

    })()
})

b = (function(){
    var x = function(){
        return [1,2,3]

    };
    x()
})()

b = ((function(){
    return (function(){
        return [1,2,3]

    })
}))()


b = (function(){
    return (function(){
        return [1,2,3]

    })()
})()
