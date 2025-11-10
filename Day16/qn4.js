//4 Write a function Once(fn) that ensures a given function can only be executed once, returning the same result for subsequent calls.
function Once(){}
const initialize = Once(()=>console.log('Initialized'))
initialize()