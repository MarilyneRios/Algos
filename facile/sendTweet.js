function sendTweet(tweet) {
   
    return tweet.slice(0,280);   
    
}
console.log(sendTweet("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel arcu mi. Donec dictum auctor finibus. Aliquam suscipit dolor at justo finibus, dictum vulputate metus efficitur. Quisque elementum pharetra nunc, quis congue metus posuere quis. Duis tincidunt dictum justo, non mattis purus maximus eu. Integer est diam, sodales sit amet nisi laoreet."));
sendTweet();