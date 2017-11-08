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

// tweet with the most favorites (own tweet)
export const ownTweetWithMostLikes = (data) => (
    data.reduce((accumulator, tweet) => (
        (tweet.favorite_count > accumulator.favorite_count)? tweet : accumulator)
    )
);

// tweet with the most favorites (retweeted tweet)
export const retweetWithMostLikes = (data) => (
    data.reduce((accumulator, tweet) => (
        (tweet.is_retweet)
            ? (tweet.retweet_count > accumulator.retweet_count)
                ? tweet
                : accumulator
            : accumulator
    ))
);

// day with most tweets (sort by day)
export const dayWithMostTweets = (data) => {
    let tweetsOnDays = new Array(365);
    let tempDate;

    tweetsOnDays = Array.apply(null, tweetsOnDays).map(Number.prototype.valueOf,0);

    console.log(tweetsOnDays.toString());

    for(var i = 0; i < data.length ; i++){
        tempDate = new Date(data[i].created_at);
        tweetsOnDays[tempDate.getDay()]++;
    }

    return tweetsOnDays.indexOf(Math.max(...tweetsOnDays));
};


