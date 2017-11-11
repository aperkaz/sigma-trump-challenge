// -- dependencies --
import groupBy from 'lodash/groupBy';
import moment from 'moment';

// categorize tweets per [0-23]h range
export const tweetsPerHour = (data) => {
    let tweetsInHour = new Array(24);
    let tempDate;

    tweetsInHour = Array.apply(null, tweetsInHour).map(Number.prototype.valueOf,0);

    console.log(tweetsInHour.toString());

    for(var i = 0; i < data.length ; i++){
        tempDate = new Date(data[i].created_at);
        tweetsInHour[tempDate.getHours()]++;
    }

    console.log(tweetsInHour.toString());

    return tweetsInHour;
};

export const ownTweetWithMostFavs = (data) => (
    data.reduce((accumulator, tweet) => (
        (tweet.favorite_count > accumulator.favorite_count)? tweet : accumulator)
    )
);

export const mostRetweetedTweet = (data) => (
    data.reduce((accumulator, tweet) => (
        (tweet.is_retweet)
            ? (tweet.retweet_count > accumulator.retweet_count)
                ? tweet
                : accumulator
            : accumulator
    ))
);


