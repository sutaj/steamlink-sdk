/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.3/15.3.4/15.3.4.5/15.3.4.5-15-5.js
 * @description Function.prototype.bind - The [[Configurable]] attribute of length property in F set as false
 */


function testcase() {

        var canConfigurable = false;
        var hasProperty = false;
        function foo() { }
        var obj = foo.bind({});
        hasProperty = obj.hasOwnProperty("length");
        delete obj.caller;
        canConfigurable = !obj.hasOwnProperty("length");
        return hasProperty && !canConfigurable;
    }
runTestCase(testcase);
