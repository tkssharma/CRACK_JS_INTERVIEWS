
function assignDeep(target, ...sources) {
  for (let source of sources) {
    for (let key in source) {
      if (isObject(source[key])) {
        if (!isObject(target[key])) {
          target[key] = {}
        }
        assignDeep(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

function isObject(a) {
  return typeof a === 'object' && a !== null
}