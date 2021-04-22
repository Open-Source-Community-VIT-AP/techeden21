import React from 'react'
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
    themes,
    createTheme
  } from '@merc/react-timeline';

  import SectionHeader from '../sections/partials/SectionHeader';
  const sectionHeader = {
    title: 'Timeline',
    
  };

  const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#efefef',
    },
    date: {
      backgroundColor: '#6B6DFF',
    },
    marker: {
      borderColor: '#6B6DFF',
    
    },
    timelineTrack: {
      backgroundColor: '#6B6DFF',
    },
  });
  const completed = createTheme(themes.default, {
    card: {
      backgroundColor: '#6B6DFF',
      color:'#fff',
    },
    date: {
      backgroundColor: '#6B6DFF',
    },
    marker: {
      borderColor: '#6B6DFF',
      backgroundColor: '#6B6DFF',
    
    },
    timelineTrack: {
      backgroundColor: '#6B6DFF',
    },
  });

function event_time_line() {
    return (
        <div className = "timeline">
            <br/>
            <br/>
            <SectionHeader data={sectionHeader}  style={{margintop:'150px '}} className="center-content mt10" />
            <Timeline  theme={completed}>
              <Events>
                <TextEvent date="25 - April - 2021" text="**Bootcamp** " />
               <br/>
               <br/>
              </Events>
            </Timeline>
            <Timeline  theme={customTheme}>
              <Events>

                <br/>
                <TextEvent date="26 - April - 2021" text="**Hackathon**" />
                <br/>
                <br/>
                <br/>
                <br/>

                <TextEvent date="01 - May - 2021" text="**Review** " />
                <br/>
                <br/>     
                <br/>     
                <br/>     

                <TextEvent date="02 - May - 2021" text="**Compitative Programing**  
                    **Contest**" />
                <br/>
                <br/>                

 
              </Events>
            </Timeline>
        </div>
    )
}

export default event_time_line
