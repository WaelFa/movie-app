import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <input type="text" className="filter"/>
                <input type="button" value="Search"/>
            </div>
        )
    }
}

