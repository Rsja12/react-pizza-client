import React from 'react'

const Navigation = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                {/* Make all of these links their own components and route to their pages */}
                <a className="item">Home</a>
                <a className="item">About</a>
                <a className="item">Menu</a>
                <a className="item">Create your own</a>
            </div>
        </div>
    )
}

export default Navigation
