import React, { Component } from 'react'
import Spinner from './Spinner'

const LoadingHoc = (WrappedComponent) => {
    return class LoadingHoc extends Component {
        render() {
            return (
                this.props.isLoading ? <center style={{ marginTop: '200px', marginBottom:'200px'}}><Spinner loading={this.props.isLoading} /> </center>: <WrappedComponent {...this.props}/>
            
            )
        }
    }
    
}
export default LoadingHoc