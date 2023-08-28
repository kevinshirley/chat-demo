import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ChatData } from "../Constant/ChatData";

/**
   * @name useChatApi
   * @description custom hook to set chats in state
   * @param setChats
   */

export default function useChatApi({
  setChats,
}: any) {
  useEffect(() => {
    const chatArr: any = ChatData?.data?.chats?.chats || [];

    const fetchData = async () => {
      const apiUrl: string = 'https://api.staging.hypercare.com/graphql/private';
      const headers: Record<string, string> = {
        'hypercare-scope': 'eyJvcmdhbml6YXRpb25JZCI6MX0=\'',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 3a1aeb259e5987a8be639d05714cc1dd2f87ff15'
      };
    
      try {
        const response: AxiosResponse = await axios.post(apiUrl, {}, { headers });
        console.log('Data:', response.data);
        setChats(response.data);
      } catch (error: any) {
        console.log('Error:', error.response);
        setChats(chatArr);
      }
    }

    fetchData();
  }, []);
}
