import React, { Component } from 'react'

export default class datafetchclasses extends Component {
    state = { data: [] };

    componentDidMount(){
        fetch("http://localhost:8000/api/users/")
        .then(response => response.json())
        .then(data => this.setState(() => {
            return {data};
        }))

    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(user => (
                        <li key ={user.id}>{user.username}</li>
                    ))}

                </ul>
                
            </div>
        )
    }
}
