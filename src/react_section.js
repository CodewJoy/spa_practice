import React from "react"

class ReactSection extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    render() {
        let chapters1 = this.props.chapters1;
        return (
            <div>
                <h1>React</h1>
                <ul id={chapters1.key}>
                    {chapters1.sections.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ReactSection