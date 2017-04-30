/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, {Component} from 'react';
import * as d3 from 'd3';
import {schemeCategory10} from 'd3';

import './LanguageListComponent.css';

export class LanguageListComponent extends Component {

    tau = Math.PI * 2;
    begin = -3 * Math.PI / 8;
    arcRadius = 25;
    arcBegins = 50;

    componentDidMount() {
        const context = this.setContext();
        this.drawArcs(context);
        this.drawLabels(context);

    }

    drawArcs (context) {
        const arc = d3.arc()
            .innerRadius((d, i) => this.arcBegins + i * this.arcRadius + 2)
            .outerRadius((d, i) => this.arcBegins + (i + 1) * this.arcRadius)
            .startAngle(this.begin)
            .endAngle((d) => ((d.rating * this.tau / 10) + this.begin));

        context
            .selectAll('language')
            .data(this.props.languageList)
            .enter()
            .append('path')
            .attr('id', (d) => 'language-arc-' + d.name)
            .attr('fill', () => schemeCategory10[Math.floor(
                Math.random() * 1000 % schemeCategory10.length)])
            .transition()
            .delay(300)
            .duration(3000)
            .attr('d', arc)
            .attrTween('d', this.arcTween(arc));
    }

    drawLabels(context) {
        const text = context
            .selectAll('.language-label')
            .data(this.props.languageList);
        text.enter()
            .append("text")
            .attr('class', 'language-label')
            .attr("x", 8)
            .attr("dy", 18)
            .attr('fill', '#FFF')
            .append('textPath')
            .attr('xlink:href', (d) => '#language-arc-' + d.name)
            .attr('transform', `translate(10, -5)`)
            .text(function(d) {
                return d.name;
            })
            .exit();
    }

    setContext() {
        const dimension = 2 * (this.arcBegins +
            (this.props.languageList.length + 1) * this.arcRadius) + 20;
        return d3.select(this.refs.arc)
        .append('svg')
        .attr('height', dimension + 'px')
        .attr('width', dimension + 'px')
        .attr('id', 'd3-arc')
        .append('g')
        .attr('transform', `translate(${dimension/2}, ${dimension / 2})`);
    }

    arcTween(arc) {
        return function(d, i) {
            let self = this;
            const interpolate = d3.interpolateNumber(0, d.rating);
            return function(t) {
                const data = {
                    rating: interpolate(t)
                };
                return arc.call(self, data, i);
            };
        };
    }

    shouldComponentUpdate() {
        return false; // This prevents future re-renders of this component
    }

    render() {
        return (
            <div className="language-list">
                <h3>Language Skills</h3>
                <div ref="arc" className="language-list"/>
            </div>
        );
    }

}
