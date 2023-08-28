import React, { useState } from "react";
import "./style.css";
import { Color } from "../../Style/Color";
import moment from "moment";

interface Props {
  item: any;
  sendTitle: any;
}

const ReadChatItem = ({ item, sendTitle }: Props) => {
  const [activeChatId, setActiveChatId] = useState(null);
  const profilePic: any = item?.lastMessage?.sender?.profilePic;
  const firstName: any = item?.lastMessage?.sender?.firstname;
  const lastName: any = item?.lastMessage?.sender?.lastname;
  const senderName: any = firstName + " " + lastName;
  const lastMessage: any = item?.lastMessage?.message;
  const senderNameByLetter: any =
    firstName?.substring(0, 1) + lastName?.substring(0, 1);
  const chatTitle: any =
    item?.type === "group" ? item?.title : firstName + " " + lastName;

  //-------------- Get last message time ------------//
  const now = new Date();
  const today = moment(now).format("MMM Do YY");
  const messageTimeFromApi = moment(item?.lastMessage?.dateCreated).format(
    "MMM Do YY"
  );
  const lastMessageTime =
    today === messageTimeFromApi
      ? moment(item?.lastMessage?.dateCreated).format("LT")
      : messageTimeFromApi;

  const handleChatClick = () => {
    setActiveChatId(item?.id);
    sendTitle(senderName);
    setTimeout(() => {
      setActiveChatId(null);
    }, 500);
  };

  return (
    <div
      className="ReadChatItemBoxContainer"
      onClick={handleChatClick}
      style={{
        backgroundColor: activeChatId === item?.id ? "#DCDCDC" : "",
      }}
    >
      <div className="ChatItemBody">
        {/* <div className="Indicator">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUoWF1WXjVWgDVD1m1VEq-mTyjf-VY9cRgdHEwOUZQfloC12V7Ii6hArEXGblnjcKOQk&usqp=CAU" />
        </div> */}
        <div className="itemImage">
          {item?.type === "single" ||
          (item?.type === "self" && profilePic === null) ? (
            <h4 style={{ color: Color.white }}>{senderNameByLetter}</h4>
          ) : item?.type === "group" ? (
            <img src="https://cdn-icons-png.flaticon.com/512/615/615075.png" />
          ) : (
            <img src={profilePic?.url} />
          )}
        </div>
        <div className="MessageBody">
          <div className="MessageHeaderContainer">
            <h5 className="single-line" style={{ fontWeight: 500 }}>
              {chatTitle
                ? chatTitle?.length > 25
                  ? chatTitle.slice(0, 25) + "..."
                  : chatTitle.slice(0, 25)
                : "N/A"}
            </h5>
            <h6 style={{ color: Color.gray }}>
              {lastMessageTime ? lastMessageTime : "N/A"}
            </h6>
          </div>

          <p
            className="single-line"
            style={{ color: Color.gray, fontWeight: 400, fontSize: 15 }}
          >
            {senderName}:{lastMessage ? lastMessage : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadChatItem;
