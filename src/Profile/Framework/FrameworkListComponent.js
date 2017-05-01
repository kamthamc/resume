/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, {Component} from 'react';
import {Chip} from 'material-ui';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

export class FrameworkListComponent extends Component {

    render() {
        return (
            <div className="framework-list">
                <h4>Frameworks</h4>
                <div style={styles.wrapper}>
                {
                    this.props.frameworkList.map((framework, index) => <Chip
                        style={styles.chip}
                        key={index}
                        className='framework'
                    >{framework.name}</Chip>)
                }
                </div>

            </div>
        );
    }
}
