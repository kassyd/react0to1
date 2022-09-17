import {
  REACT_ELEMENT
} from '../instant'
const React = {
  createElement
}

function createElement(tag, props, ...children) {
  console.log(tag, props, children)
  return {
    type: tag,
    $$$typeof: REACT_ELEMENT,
    props: {
      ...props,
      children: children.length > 1 ? children.map(handleChild) : handleChild(children[0])
    }
  }
}

function handleChild(child) {
  if (typeof child !== 'object') {
    return String(child)
  }
  return child
}

export default React