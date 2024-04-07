export const USER_LOCAL_STORAGE_KEY = 'USER_LOCAL_STORAGE_KEY'

'use strict'
const obj = {
  foo: function () {
    console.log(this) // 1
    function boo () {
      console.log(this) // 2
    }

    boo()
  }
}

function callMe (func) {
  func()
}

obj.foo() // 1 this = obj, 2 this = globalObject || undefined
callMe(obj.foo) // 1 this = globalObject || undefined, 2 this = globalObject || undefined
setTimeout(obj.foo, 0) //  // 1 this = globalObject, 2 this = globalObject || undefined
