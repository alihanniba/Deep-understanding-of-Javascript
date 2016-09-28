/**
 *  ###单例模式的核心是确保只有一个实例,并提供全局访问
 */

//  作为普通的开发者,我们有必要尽减少全局变量的使用,即时需要,也要把它的污染降到最低。
//  以下几种方式可以相对降低全局变量带来的命名污染。

//    1, 使用命名空间
//      最简单的方法是使用对象字面量的方式:
        var namespace1 = {
            a: function() {
                alert(1);
            },
            b: function() {
                alert(2);
            }
        };

//
