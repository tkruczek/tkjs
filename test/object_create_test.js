/*global TestCase, assertFunction, assertObject, assertEquals, assertException */

(function () {
  "use strict";
  TestCase('ObjectCreateTest', {
    'test should be a function': function () {
      assertFunction(Object.create);
    },
    'test should require and argument': function () {
      assertException(function () {
        Object.create();
      }, 'TypeError');
    },
    'test should return an object': function () {
      assertObject(Object.create({}));
    },
    'test should return object with specified prototype': function () {
      var circle = { radius: 10 },
          sphere = Object.create(circle);
      
      assertEquals(sphere.radius, circle.radius);
      
    }
    
  }); 
}());
