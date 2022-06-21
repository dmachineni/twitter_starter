import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import { sampleNewTweet } from "../../constants"

export default function TweetBox(props) {
  const handleOnSubmit = () => {
    let newTweet = {};
    newTweet.name = props.userProfile.name;
    newTweet.handle = props.userProfile.handle;
    newTweet.text = props.tweetText;
    newTweet.comments = 0;
    newTweet.retweets = 0;
    newTweet.likes = 0;
    newTweet.id = props.tweets.length; 
    props.setTweets((prevState)=>[...prevState,newTweet]) //gets info from before change and adds it to the new array + the new tweet; then sets the state var = new array
    props.setTweetText("");
  }

  const handleOnTweetTextChange = (textarea) => {
    if (textarea.length != 0) {
      props.setTweetText(textarea.target.value);
    }
    
    textarea = "";
  }
  console.log(props.tweetText);
  // console.log(props.tweetText);

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        {(props.tweetText.length != 0) && (props.tweetText.length < 141)} {
          <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
        }
      </div>
    </div>
  )
  
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span className="tweet-length"></span>
}

export function TweetSubmitButton({handleOnSubmit}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} >Tweet</button>
    </div>
  )
}
