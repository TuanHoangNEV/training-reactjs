import React from 'react';
import TabIndex from "./tab";
import axios from "axios";
import {TableCommon} from "../common/table-common";
import {MultiSelect} from "react-multi-select-component";

class SearchMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: {
                startDate: new Date(),
                endDate: null,
                comboBoxSelected: []
            },
            responseData: {
                comboBoxData: [],
                listVideo: []
            },
            playContext: {
                selectedIndex: -1
            }
        };
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        axios.get(`/get-all-cb-data`)
            .then(res => {
                if (res.status === 200) {
                    this.setState(prevState => ({
                            responseData: {
                                ...prevState.responseData,
                                comboBoxData: res.data
                            }
                        }
                    ));
                }
            })
            .catch(error => console.log(error));
    }

    onSearch = () => {
        let context = this;
        axios({
            method: 'post',
            url: '/search',
            data: JSON.stringify(this.state.searchInput),
            headers: {'Content-Type': 'application/json'},
        })
            .then(function (response) {
                if (response.status === 200) {
                    context.setState(prevState => ({
                        responseData: {
                            ...prevState.responseData,
                            listVideo: response.data
                        },
                        playContext: {
                            selectedIndex: -1
                        }
                    }));
                    context.props.onUpdateVideoUrl(null)
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    onChangeDate = (startDate, endDate) => {
        this.setState(prevState => ({
            ...this.state,
            searchInput: {
                ...prevState.searchInput,
                startDate: startDate,
                endDate: endDate
            }
        }));
    }

    onSelected = (index) => {
        this.setState(prevState => ({
            playContext: {
                ...prevState.playContext,
                selectedIndex: index,
            }
        }));
    }

    loadPlayer = () => {
        let lstData = this.state.responseData.listVideo;
        let index = this.state.playContext.selectedIndex;
        let fileName = lstData[index].fileName;
        this.props.onUpdateVideoUrl(fileName);
        axios({
            method: 'post',
            url: '/get-video',
            data: JSON.stringify({fileName: fileName}),
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
        this.setState(prevState => ({
            searchInput: {
                ...prevState.searchInput,
                comboBoxSelected: data
            }
        }));
    }

    render() {
        return (
            <div className={'col-4 ps-4 search-menu'}>
                <div className={'row col-12'}>
                    <label className={'col-4'}>Pick camera</label>
                    <MultiSelect
                        options={this.state.responseData.comboBoxData}
                        value={this.state.searchInput.comboBoxSelected}
                        onChange={this.selectComboBox}
                        labelledBy="Select"
                        className={'col-6'}
                    />
                </div>
                <div className={'row col-12'}>
                    <TabIndex onChangeDate={this.onChangeDate}/>
                </div>
                <button className={'btn btn-primary'} onClick={this.onSearch}>Search</button>
                <h1>{this.state.count}</h1>
                <div className={'col-12'}>
                    <div className={'col-6'}>
                        {this.state.responseData.listVideo ?
                            <TableCommon colName={['camera-name','video-name']} colSize={['2em','2em']}
                                         selectedIndex={this.state.playContext.selectedIndex}
                                         data={this.state.responseData.listVideo} onSelected={this.onSelected}/>
                            : null
                        }
                    </div>
                </div>
                {
                    this.state.playContext.selectedIndex > -1 ?
                        <button className={'btn btn-primary'} onClick={this.loadPlayer}>Play</button>
                        : null
                }
            </div>
        );
    }
}

export default SearchMenu;