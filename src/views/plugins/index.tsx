import React, { useState } from'react';
import Model from './p-rnd'

class Plugins extends React.Component {
    constructor(props: {}) {
        super(props);

        this.state = {
            isModelopen: true
        }
    }

    render() {
        return (
            <div>
                <h1>react-rnd</h1>
                <Model 
                    isopen={this.state.isModelopen} 
                    isclose={() => {
                        this.setState({
                            isModelopen: false
                        })
                    }}
                >
                    {/* <iframe 
                        src="http://kkfile170.com/onlinePreview?url=L3Byb2ZpbGUvc3ViamVjLzEwOS8xLzIwMjUvMTAvMTUvVkNUaVVvZkxVQ1oydVRmQThWUk5fMjAyNTEwMTUxMDUyNDZBMDAxLnBwdHg%3D" 
                        frameBorder="0"
                        style={{
                            width: '100%',
                            height: 'auto',
                            minWidth: '200px',
                            minHeight: '200px'
                        }}
                    ></iframe> */}
                </Model>
            </div>
        )
    }
}

export default Plugins;