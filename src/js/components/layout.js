import React from "react";
import './profile';
import './activity';
import './history';
import './programming';
import './post';

export default class layout extends React.Component() {
    render() {
        return (
            <div>
                <profile/>
                <activity/>
                <history/>
                <post/>
                <programming/>
            </div>
        );
    }
}



