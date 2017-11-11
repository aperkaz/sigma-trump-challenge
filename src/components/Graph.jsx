import React from 'react';
import ReactHighcharts from 'react-highcharts';

class Graph extends React.Component {
    render(){
    return (
        <ReactHighcharts config={{
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '0h',
                    '1h',
                    '2h',
                    '3h',
                    '4h',
                    '5h',
                    '6h',
                    '7h',
                    '8h',
                    '9h',
                    '10h',
                    '11h',
                    '12h',
                    '13h',
                    '14h',
                    '15h',
                    '16h',
                    '17h',
                    '18h',
                    '19h',
                    '20h',
                    '21h',
                    '22h',
                    '23h'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Tweets'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Tweets per hour',
                data: this.props.data
            }]
        }} />
    )};
};

export default Graph;