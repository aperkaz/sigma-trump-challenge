import React from 'react';
import ReactHighcharts from 'react-highcharts';

const graphConfig = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Tweet Bar Chart'
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
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
};

const Graph = () => (
    <ReactHighcharts config={graphConfig} />
);

export default Graph;