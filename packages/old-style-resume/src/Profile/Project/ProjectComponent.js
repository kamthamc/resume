/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';

export class ProjectComponent extends Component {
  render() {
    return <div className="project">{this.props.project.name}</div>;
  }
}
