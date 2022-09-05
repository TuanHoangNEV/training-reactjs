import React from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from "react-router-dom";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

class TabIndex extends React.Component {

    onChangeDate = (startDate, endDate) =>{
        this.props.onChangeDate(startDate, endDate)
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/tab-1'} className="nav-link">Tab 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/tab-2'} className="nav-link">Tab 2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/tab-3'} className="nav-link">Tab 3</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br/>

                    <Routes>
                        <Route path='/tab-1' element={<Tab1 onChangeDate={this.onChangeDate}/>}/>
                        <Route path='/tab-2' element={<Tab2/>}/>
                        <Route path='/tab-3' element={<Tab3/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default TabIndex;