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


// how many tweets total
export const totalTweetCount = (data) => (
  data.length;
);


// tweet with the most favorites (own tweet)


// tweet with the most favorites (retweet tweet)


// day with most tweets (sort by day)

//let tweetDate = new Date(tweet.created_at);




