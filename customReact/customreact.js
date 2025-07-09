
function customRender(reactElement,container) {
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.chldren
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.chldren
    for (const prop in reactElement.props){
        if (prop === 'chldren') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    chldren: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)