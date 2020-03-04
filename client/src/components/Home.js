import React, { Component } from 'react'
import axios from 'axios';
class Home extends Component {
    state = {
        age: '',
        name: '',
        gname: ''
    }
    handleClick = (e) => {
        axios.get('http://localhost:4000/')
            .then((res) => this.setState({ gname: res.data }))
            .catch((err) => console.log(err));
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/list', { name: this.state.name, age: this.state.age })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>{this.state.gname}</h1>
                <button onClick={this.handleClick}>Click</button>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <form>
                    Enter Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} /><br />
                    Enter an Age:
                    <input type="text" name="age" value={this.state.age} onChange={this.changeHandler} />
                    <br />
                    <button onClick={this.handleSubmit}>Submit Data</button>
                </form>
            </div>
        )
    }
}

export default Home
