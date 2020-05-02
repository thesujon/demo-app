import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <h2>Sidebar Headding</h2>
                <h5>Sidebar content goes here</h5>
                <div className="fakeimg" style={{height:200}}>Image</div>
                <p>paragraph</p>
                <h3>Some headdings here</h3>
                <div className="fakeimg" style={{height:60}}>Image</div><br/>
                <div className="fakeimg" style={{height:60}}>Image</div><br/>
                <div className="fakeimg" style={{height:60}}>Image</div>
            </div>
        );
    }
}
export default Sidebar;