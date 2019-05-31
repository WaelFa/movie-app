import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             keyword:''
        }
    }
    handlechange = (event)=>{
        this.setState({ keyword: event.target.value },()=>this.props.searchByName(this.state.keyword))
        
    }
    

    render() {
        return (
            <div>
                <h4 style={{color:'whitesmoke'}}>Search by Name</h4>
                <input type="text" className="filter" onChange={this.handlechange} style={{borderRadius:'15px', height:'20px', width:'300px'}}/>
            </div>
        )
    }
}

