import React from 'react';

const Tweet = ({data}) => (
    <pre>
        {data.text}
    </pre>
);

export default Tweet;