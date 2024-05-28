const root = document.getElementById("root")

const anyElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
        style: "background: green; padding: 1rem; color: white; text-decoration: none;",
        children: {
            type: 'span',
            children: 'Inner'
        }
    },
    children: "Click Me"
}

const renderElement = (e, r) => {
    const dom = document.createElement(e.type)
    dom.innerHTML = e.children

    // dom.setAttribute(`href`, e.props.href)
    // dom.setAttribute(`target`, e.props.target)

    for (const prop in e.props) {
        if (prop === 'children') continue
        dom.setAttribute(prop, e.props[prop])
    }

    r.appendChild(dom)
}

renderElement(anyElement, root)