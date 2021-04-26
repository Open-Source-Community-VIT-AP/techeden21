import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";

import SectionHeader from "../sections/partials/SectionHeader";
const sectionHeader = {
  title: "Timeline",
};

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#6B6DFF",
  },
  marker: {
    borderColor: "#6B6DFF",
  },
  timelineTrack: {
    backgroundColor: "#6B6DFF",
  },
});
const completed = createTheme(themes.default, {
  card: {
    backgroundColor: "#6B6DFF",
    color: "#fff",
  },
  date: {
    backgroundColor: "#6B6DFF",
  },
  marker: {
    borderColor: "#6B6DFF",
    backgroundColor: "#6B6DFF",
  },
  timelineTrack: {
    backgroundColor: "#6B6DFF",
  },
  urlButton: {
    fontSize: "14px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "6px 30px",
    margin: "10px 0px 5px 0",
    border: "none",
    color: "#6B6DFF",
  },
});

function event_time_line() {
  return (
    <div className="timeline">
      <br />
      <br />
      <SectionHeader
        data={sectionHeader}
        style={{ margintop: "150px " }}
        className="center-content mt10"
      />
      <Timeline theme={completed}>
        <Events>
          <TextEvent date="06:00 PM on 26th April, 2021" text="**Bootcamp** ">
            <div>
              <UrlButton
                target="_blank"
                href="https://www.airmeet.com/e/fc1c9c30-a58c-11eb-9aaa-d9f2706c1dfc"
              >
                <b>Enter</b>
              </UrlButton>
            </div>
          </TextEvent>
          <br />
          <br />
        </Events>
      </Timeline>
      <Timeline theme={customTheme}>
        <Events>
          <br />
          <TextEvent date="27th April to 1st May, 2021" text="**Hackathon**" />
          <br />
          <br />
          <br />
          <br />

          <TextEvent
            date="2nd May, 2021"
            text="**Competitive Programming**  
                    **Contest**"
          />
          <br />
          <br />
        </Events>
      </Timeline>
    </div>
  );
}

export default event_time_line;
