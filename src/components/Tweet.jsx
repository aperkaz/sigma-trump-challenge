import React from 'react';

const Tweet = ({data}) => (
    <div style={{ marginTop: '10    px' }}>
        <i>
            {data.text}
        </i>
    </div>
);

export default Tweet;