import React from 'react'
import "./SearchPage.css"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneIcon from '@material-ui/icons/Tune';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
             
            </div>
            <hr/>

            <ChannelRow
            image="https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/105033882_111974483899506_4292054876506181786_o.png?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGsS8ZSRzuIuvy5lSG10h9sq51qjJpWe1OrnWqMmlZ7UwuPBKt_C2CV_QKNotmoy6ZwwuVqVhCUxxjg2bE0Gx4I&_nc_ohc=vGvQ1Rj4cSUAX8sLjg6&_nc_ht=scontent-los2-1.xx&oh=3482d1d954c875126ad3e5421fc85d1a&oe=5FEFF80B"
            channel="TzCapito Gaming"
            verified
            subs="300k"
            noOfVideos={300}
            description="I make Interesting gameplays  🎥  

            Subscribe, Like and Comment, also Share Interesting Video... SUBSCRIBE Now, It For Free!!! 
            
            FOLLOW MY HANDLE BELOW..THANKS 👑 👑 ♥ !!!"/>
            <hr/>

            <VideoRow
            views="1.4M"
            subs="300K"
            description="Do you want to make your first 100k subscribers on youtube? it's very easy" 
            timestamp="20 Minutes Ago"
            channel="TzCapito Gaming" 
            title="How To Get A Your First 100K Subscribers" 
            image="https://i.ytimg.com/vi/fjxlr1y-sX8/maxresdefault.jpg"/>

              <VideoRow
            views="1.4M"
            subs="300K"
            description="Do you want to make your first 100k subscribers on youtube? it's very easy" 
            timestamp="20 Minutes Ago"
            channel="TzCapito Gaming" 
            title="How To Get A Your First 100K Subscribers" 
            image="https://i.ytimg.com/vi/fjxlr1y-sX8/maxresdefault.jpg"/>
            
              <VideoRow
            views="1.4M"
            subs="300K"
            description="Do you want to make your first 100k subscribers on youtube? it's very easy" 
            timestamp="20 Minutes Ago"
            channel="TzCapito Gaming" 
            title="How To Get A Your First 100K Subscribers" 
            image="https://i.ytimg.com/vi/fjxlr1y-sX8/maxresdefault.jpg"/>
        </div>
    )
}

export default SearchPage
