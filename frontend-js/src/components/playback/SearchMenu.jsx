import React from 'react';
import TabIndex from "./tab";
import axios from "axios";
import {TableCommon} from "../common/table-common";
import PlayRecord from "./PlayRecord";
import { MultiSelect } from "react-multi-select-component";

class SearchMenu extends React.Component {

    constructor() {
        super();
        let columns = [{
            header: 'video-name',
            accessor: 'url'
        }];
        this.state = {
            startDate: new Date(),
            endDate: null,
            listData: [],
            selectedIndex: -1,
            columns: columns,
            videoUrl: null,
            comboBoxData: [],
            comboBoxSelected: []
        };
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        axios.get(`/get-all-cb-data`)
            .then(res => {
                if (res.status === 200){
                    this.setState({ comboBoxData: res.data });
                }
            })
            .catch(error => console.log(error));
    }

    onSearch = () => {
        let context = this;
        axios({
            method: 'post',
            url: '/search',
            data: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'},
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data);
                    context.setState({listData: response.data, selectedIndex: -1, videoUrl: null});
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    onChangeDate = (startDate, endDate) => {
        let nextState = {
            ...this.state,
            startDate: startDate,
            endDate: endDate
        };
        this.setState(nextState);
    }

    onSelected = (index) => {
        let nextState = {
            ...this.state,
            selectedIndex: index
        };
        this.setState(nextState);
    }

    loadPlayer = () => {
        this.setState({videoUrl: null});
        let lstData = this.state.listData;
        let index = this.state.selectedIndex;
        let fileName = lstData[index].url;
        this.setState({videoUrl: 'videos/' + fileName});
        axios({
            method: 'post',
            url: '/get-video',
            data: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'},
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    selectComboBox = (data) => {
        this.setState({comboBoxSelected: data});
    }

    render() {
        return (
            <div className={'col-12 ps-4'}>
                <div className={'row col-12'}>
                    <label className={'col-2'}>Pick camera</label>
                    <MultiSelect
                        options={this.state.comboBoxData}
                        value={this.state.comboBoxSelected}
                        onChange={this.selectComboBox}
                        labelledBy="Select"
                        className={'col-3'}
                    />
                </div>
                <div className={'row col-12'}>
                    <TabIndex onChangeDate={this.onChangeDate}/>
                </div>
                <button className={'btn btn-primary'} onClick={this.onSearch}>Search</button>
                <h1>{this.state.count}</h1>
                <div className={'col-12'}>
                    <div className={'col-4'}>
                        {this.state.listData ?
                            <TableCommon colName={['video-name']} colSize={['2em']}
                                         selectedIndex={this.state.selectedIndex}
                                         data={this.state.listData} onSelected={this.onSelected}/>
                            : null
                        }
                    </div>
                </div>
                {
                    this.state.selectedIndex > -1 ?
                        <button className={'btn btn-primary'} onClick={this.loadPlayer}>Play</button>
                        : null
                }
                <div className={'col-5'}>
                    {
                        this.state.videoUrl ?
                            <PlayRecord url={this.state.videoUrl} type={'video/mp4'}/>
                            : null
                    }
                </div>


            </div>
        );
    }
}

export default SearchMenu;