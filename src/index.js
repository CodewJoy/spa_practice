import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link } from 'react-router'


const API = 'https://cwpeng.github.io/live-records-samples/data/content.json'

class StartSection extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props);
    }
    render() {
        let chapters0 = this.props.chapters0;
        return (
            <ul id={chapters0.key}>
                {chapters0.sections.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }
}

class ReactSection extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    render() {
        let chapters1 = this.props.chapters1;
        return (
            <ul id={chapters1.key}>
                {chapters1.sections.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }
}

class ReduxSection extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    render() {
        let chapters2 = this.props.chapters2;
        return (
            <ul id={chapters2.key}>
                {chapters2.sections.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <h1>{this.props.headline}</h1>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            headline: "",
            chapters: []
        };
    }
    
    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              headline: result.headline,
              chapters: result.chapters
            })
            console.log(this.state)
            console.log(this.state.chapters)
            console.log(this.state.chapters[0])
            console.log(this.state.chapters[0].sections[0])
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
        console.log(this.state)
    }
    render() {
        const { error, isLoaded, headline, chapters } = this.state
        if (error) {
          return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
          return <div>Loading...</div>
        } else {
            return (
                <div>
                    <nav>
                        <div>
                            {/* {this.state.chapters.map(item => (
                                <p>
                                    <Link to={'/'+item.key} key={item.key}>
                                    {item.title}
                                    </Link>
                                </p>
                            ))} */}
                        </div>
                        <div>
                            {this.state.chapters.map(item => (
                                <p key={item.key} id={item.key}>
                                    {item.title}
                                </p>
                            ))}
                        </div>
                    </nav>
                    <section>
                        <HomePage
                            headline = {this.state.headline}
                        />                       
                        <StartSection
                            chapters0 = {this.state.chapters[0]}
                        />
                        <ReactSection
                            chapters1 = {this.state.chapters[1]}
                        />
                        <ReduxSection
                            chapters2 = {this.state.chapters[2]}
                        />
                    </section> 
                </div>
            )
        }
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))