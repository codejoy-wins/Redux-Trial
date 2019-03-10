import React, { Component } from 'react'

export class componentName extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }


    componentWillMount(){
        console.log(123);
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(info => info.json())
        .then(data => this.setState({
            posts: data,
        }))
    }

  render() {

    const myData = this.state.posts.map(thing => (
        <div key={thing.id}>
            <h3>{thing.title}</h3>
            <p>{thing.body}</p>
        </div>
    ));
    return (
      <div>
        I am Jason
        {myData}
      </div>
    )
  }
}

export default componentName
