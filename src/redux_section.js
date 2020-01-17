import React from "react"

class ReduxSection extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    render() {
        let chapters2 = this.props.chapters2;
        return (
            <div>
                <h1>Redux</h1>
                <ul id={chapters2.key}>
                    {chapters2.sections.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default ReduxSection