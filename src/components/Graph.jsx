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
                text: 'Trump\'s Tweets per hour'
            },
            xAxis: {
                categories: [
                    '0',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Time (h)'
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