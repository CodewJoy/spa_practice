import React from "react"

class StartSection extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props);
    }
    render() {
        let chapters0 = this.props.chapters0;
        return (
            <div>
                <h1>Start</h1>
                <ul id={chapters0.key}>
                    {chapters0.sections.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default StartSection