import { REACT_ELEMENT } from "../instant"
import Component from "./component"

function createElement(type, props, ...children) {
  const vdom = {
    type,
    $$$typeof: REACT_ELEMENT,
    props: {
      ...props,
    },
  }
  if (children.length) {
    vdom.props.children =
      children.length > 1 ? children.map(handleChild) : handleChild(children[0])
  }
  return vdom
}

function handleChild(child) {
  if (typeof child !== "object") {
    return String(child)
  }
  return child
}

const React = {
  createElement,
  Component,
}

export default React
