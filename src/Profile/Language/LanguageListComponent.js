/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, {Component} from 'react';
import * as d3 from 'd3';
import {schemeCategory10} from 'd3';
import {LanguageComponent} from './LanguageComponent';

export class LanguageListComponent extends Component {

    tau = Math.PI * 2;
    begin = -3 * Math.PI / 8;

    componentDidMount() {
        const context = this.setContext();
        // this.props.languageList.forEach((language, index) => {
        //    this.addLanguage(context, language, index);
        // });
        context
            .selectAll('language')
            .data(this.props.languageList)
            .enter()
            .append('path')
            .attr('id', (d) => 'language-arc-' + d.name)
            .attr('fill', () => schemeCategory10[Math.floor(Math.random() * 1000 % schemeCategory10.length)])
            .datum({endAngle: this.begin})
            .attr('d', d3
                .arc()
                .innerRadius((d, i) => 50 + i * 15)
                .outerRadius((d, i) => 50 + i * 15 + 15)
                .startAngle(this.begin + Math.PI)
            )
            .exit();

        ;
    }

    setContext() {
        return d3.select(this.refs.arc)
        .append('svg')
        .attr('height', '300px')
        .attr('width', '300px')
        .attr('id', 'd3-arc')
        .append('g')
        .attr('transform', `translate(150, 150)`);
    }

    arc(data , index) {
        const radius = 50 + index * 15;
        return d3
        .arc()
        .innerRadius(radius)
        .outerRadius(radius + 15)
        .startAngle(this.begin);
    }

    arcTween(arc, newAngle) {

        // The function passed to attrTween is invoked for each selected element when
        // the transition starts, and for each element returns the interpolator to use
        // over the course of transition. This function is thus responsible for
        // determining the starting angle of the transition (which is pulled from the
        // element’s bound datum, d.endAngle), and the ending angle (simply the
        // newAngle argument to the enclosing function).
        return function(d) {

            // To interpolate between the two angles, we use the default d3.interpolate.
            // (Internally, this maps to d3.interpolateNumber, since both of the
            // arguments to d3.interpolate are numbers.) The returned function takes a
            // single argument t and returns a number between the starting angle and the
            // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
            // newAngle; and for 0 < t < 1 it returns an angle in-between.
            const interpolate = d3.interpolate(d.endAngle, newAngle);

            // The return value of the attrTween is also a function: the function that
            // we want to run for each tick of the transition. Because we used
            // attrTween("d"), the return value of this last function will be set to the
            // "d" attribute at every tick. (It’s also possible to use transition.tween
            // to run arbitrary code for every tick, say if you want to set multiple
            // attributes from a single function.) The argument t ranges from 0, at the
            // start of the transition, to 1, at the end.
            return function(t) {

                // Calculate the current arc angle based on the transition time, t. Since
                // the t for the transition and the t for the interpolate both range from
                // 0 to 1, we can pass t directly to the interpolator.
                //
                // Note that the interpolated angle is written into the element’s bound
                // data object! This is important: it means that if the transition were
                // interrupted, the data bound to the element would still be consistent
                // with its appearance. Whenever we start a new arc transition, the
                // correct starting angle can be inferred from the data.
                d.endAngle = interpolate(t);

                // Lastly, compute the arc path given the updated data! In effect, this
                // transition uses data-space interpolation: the data is interpolated
                // (that is, the end angle) rather than the path string itself.
                // Interpolating the angles in polar coordinates, rather than the raw path
                // string, produces valid intermediate arcs during the transition.
                return arc(d);
            };
        };
    }

    addLanguage(context, language, index) {
        const arc = this.arc(50 + index * 17);
        context
            .append('path')
            .datum({endAngle: this.begin})
            .attr('d', arc)
            .attr("id", language.name) //very important to give the path element a unique ID to reference later
            .attr("fill", function() {
                return schemeCategory10[Math.floor(Math.random() * 1000 % schemeCategory10.length)];
            })
            .transition()
            .delay(750 * index / 4)
            .duration(750)
            .attrTween("d", this.arcTween(arc, (language.rating * this.tau / 10) + this.begin));

    }

    shouldComponentUpdate() {
        return false; // This prevents future re-renders of this component
    }

    render() {
        return (
            <div ref="arc"/>
        );
    }

}
