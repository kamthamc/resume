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
        setTimeout(() => {
            this.drawArcs(context);
            this.drawLabels(context);
        }, 500);
    }

    drawArcs (context) {
        const colors = {
            great: '#43A047',
            bad: '#ef5350',
            average: '#F57F17'
        };
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
            .attr('class', 'language-arc')
            .attr('fill', (d) => d.rating < 3 ? colors.bad : d.rating < 7 ? colors.average : colors.great)
            .exit();


        context
            .selectAll('.language-arc')
            .on('mouseover', function() {
                d3.selectAll('.language-arc').style('opacity', 0.4);
                d3.select(this).style('opacity', 1);
            })
            .on('mouseout', function() {
                d3.selectAll('.language-arc').style('opacity', 1);
            })
            .transition()
            .ease(d3.easeLinear)
            .delay((d, i) => i * 200)
            .duration(5000)
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
            const data = { rating: 0 };

            return function(t) {
                data.rating = interpolate(t);
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
