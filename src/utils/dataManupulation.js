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
export const ownTweetWithMostLikes = (data) => {
    let tweet = {
        favorite_count: 0,
    };

    for(var i = 0; i < data.length ; i++){
        if(!data[i].is_retweet) {
            if (data[i].favorite_count > tweet.favorite_count) {
                tweet = data[i];
            }
        }
    }

    return tweet;
};


// tweet with the most favorites (retweet tweet)
export const retweetWithMostLikes = (data) => {
    let tweet = {
        retweet_count: 0,
    };

    for(var i = 0; i < data.length ; i++){
        if(data[i].is_retweet) {
            if (data[i].retweet_count > tweet.retweet_count) {
                tweet = data[i];
            }
        }
    }

    return tweet;
};

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

//let tweetDate = new Date(tweet.created_at);




