import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Tooltip } from 'element-react';
import logo from "../../logo.png";

class SideBar extends Component {
    render(){
        return (
            <div className="side-bar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" width="40"/>
                    </Link>
                </div>
                <div className="side-content">
                    <ul>
                        <li className="nav-item">
                            <Tooltip placement="right" content="团队">
                                <Link to="/team" activeClassName="active" className="team">
                                    <span>团队</span>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item">
                            <Tooltip placement="right" content="时间">
                                <Link to="/time" activeClassName="active" className="time">
                                    <span>时间</span>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item">
                            <Tooltip placement="right" content="案件">
                                <Link to="/case" activeClassName="active" className="case">
                                    <span>案件</span>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item">
                            <Tooltip placement="right" content="事项">
                                <Link to="/matter" activeClassName="active" className="matter">
                                    <span>事项</span>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item">
                            <Tooltip placement="right" content="知识">
                                <Link to="/knowledge" activeClassName="active" className="knowledge">
                                    <span>知识</span>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item">
                            <Tooltip placement="right" content="工具">
                                <Link to="/tools" activeClassName="active" className="tools">
                                    <span>工具</span>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="nav-item">
                            <Tooltip placement="right" content="客户">
                                <Link to="/customer" activeClassName="active" className="customer">
                                    <span>客户</span>
                                </Link>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;