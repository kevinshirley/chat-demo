import React from "react";
import "./style.css";
import { Color } from "../../Style/Color";

const UnreadChatItem = () => {
  return (
    <div
      className="ChatItemBoxContainer"
      style={{ backgroundColor: Color.yellow }}
    >
      <h6>Priority</h6>
      <div className="ChatItemBody">
        <div className="IndicatorUnreadChatItem">
          <img src="https://icon-library.com/images/red-exclamation-mark-icon/red-exclamation-mark-icon-14.jpg" />
        </div>
        <div className="UnReaditemImage">
          <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" />
        </div>
        <div className="MessageBody fw-500">
          <div className="MessageHeaderContainer">
            <h5>John Doe</h5>
            <h6>2:30 AM</h6>
          </div>
          <p      className="single-line"
            style={{ fontWeight: 500, fontSize: 15 }}>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default UnreadChatItem;
