function createRoot(root) {
  return new ReactDOMRoot(root)
}

class ReactDOMRoot {
  constructor(root) {
    // 通过打印可以看到ReactDOMRoot有一个_internalRoot属性，它是一个FiberRootNode,里面有个containerInfo存的是真实的dom
    this._internalRoot = new FiberRootNode(root)
  }

  render(vdom) {
    const { containerInfo } = this._internalRoot
    renderVdom(containerInfo, vdom)
  }
}

class FiberRootNode {
  constructor(root) {
    this.containerInfo = root
  }
}

function renderVdom(container, vdom) {
  if (!vdom) return
  const { type, props } = vdom
  let dom = vdomToDom(vdom)
  let children = props?.children
  handleProps(dom, props)
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        renderVdom(dom, child)
      })
    } else {
      renderVdom(dom, children)
    }
  }
  container.append(dom)
}

function handleProps(dom, props) {
  for (let k in props) {
    if (k === "children") continue
    if (k === "style") {
      for (let styleKey in props[k]) {
        dom[k][styleKey] = props[k][styleKey]
      }
    } else {
      dom.setAttribute(k, props[k])
    }
  }
}

function vdomToDom(vdom) {
  return typeof vdom === "object"
    ? document.createElement(vdom.type)
    : document.createTextNode(vdom)
}

const ReactDOM = {
  createRoot,
}

export default ReactDOM
