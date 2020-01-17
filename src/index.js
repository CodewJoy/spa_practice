import React from "react"
import ReactDOM from "react-dom"
// import { Router } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import StartSection from "./start_section.js"
import ReactSection from "./react_section.js"
import ReduxSection from "./redux_section.js"

// const customHistory = createBrowserHistory();
const API = 'https://cwpeng.github.io/live-records-samples/data/content.json'

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
            // console.log(result);
            this.setState({
              isLoaded: true,
              headline: result.headline,
              chapters: result.chapters
            })
            // console.log(this.state)
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
        // console.log(this.state)
    }
    render() {
        const { error, isLoaded, headline, chapters } = this.state
        if (error) {
          return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
          return <div>Loading...</div>
        } else {
            return (
                <div className="view">
                    <nav>
                        {this.state.chapters.map(item => (
                            <p key={item.key}>
                                <Link to={'/'+item.key}>
                                {item.title}
                                </Link>
                            </p>
                        ))}
                    </nav>
                    <Switch>
                        <Route path="/redux">
                            <ReduxSection
                                chapters2 = {this.state.chapters[2]}
                            />
                            <p><Link to="/">回首頁</Link></p>
                        </Route>
                        <Route path="/react">
                            <ReactSection
                                chapters1 = {this.state.chapters[1]}
                            />
                            <p><Link to="/">回首頁</Link></p>
                        </Route>
                        <Route path="/start">
                            <StartSection
                                chapters0 = {this.state.chapters[0]}
                            />
                            <p><Link to="/">回首頁</Link></p>
                        </Route>
                        <Route path="/">
                            <HomePage
                                headline = {this.state.headline}
                            />
                        </Route>
                    </Switch>
                </div>
            )
        }
    }
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
document.querySelector('#root'))
