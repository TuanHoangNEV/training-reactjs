import * as React from 'react';
import {Link} from "react-router-dom";
import {TableCommon} from "./form/table";

interface IProps {
}

interface IState {
}

class Home extends React.Component<IProps, IState> {


    public componentDidMount() {

    }

    public render(): React.ReactNode {
        return (
            <div>
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">React TypeScript Sample</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Play Video</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link to={'/dashPlayer'} className="btn btn-outline-secondary btn-lg px-4">Video stream</Link>
                        </div>
                    </div>
                </div>

                <TableCommon colName={['Col-1', 'Col-2']} colSize={['10%', '2em']}
                             data={[{col1:'pewpew', col2:'sand'}, {col1:'bag', col2:'stand'}]}/>
            </div>

        );
    }
}

export default Home;