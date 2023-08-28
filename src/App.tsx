import React, { useEffect } from "react";
import "./App.css";
import UnreadChatItem from "./Components/UnreadChatItem";
import ReadChatItem from "./Components/ReadChatItem";
import { ChatData } from "./Constant/ChatData";

function App() {
  const [getTappedTitle, setTappedTitle] = React.useState<any>("");
  const chatArr: any = ChatData?.data?.chats?.chats;

  /**
   * @name compareByTime
   * @description compare two dates
   * @param firstItem, secondItem
   * @returns
   */

  const compareByTime = (firstItem: any, secondItem: any) => {
    const itemA: any = new Date(firstItem?.lastMessage?.dateCreated);
    const itemB: any = new Date(secondItem?.lastMessage?.dateCreated);
    return itemB - itemA;
  };

  /**
   * @name sendTitle
   * @description send title to the right side
   * @param title
   */

  const sendTitle = (title: any) => {
    setTappedTitle(title);
  };

  return (
    <div className="container">
      <div className="chatContainerLeft">
        <div className="chatHeader fw-500">
          <h6>Messaging</h6>
        </div>
        <div className="chatBodyMain">
        <UnreadChatItem />
        {chatArr?.sort(compareByTime)?.map((item: any, index: any) => {
          return <ReadChatItem item={item} key={index} sendTitle={sendTitle} />;
        })}
        </div>
      </div>

      <div className="chatContainerRight">
        <div className="chatHeader fw-500" style={{ justifyContent: "center" }}>
          <h6>{getTappedTitle ? getTappedTitle : "IPC Team"} </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
