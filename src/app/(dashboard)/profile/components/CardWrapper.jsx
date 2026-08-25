import { Card } from "./Cards";
import {fetchCardData} from "@/services/data";

async function CardWrapper() {
    let cardData = {numOfUsers: 0, numOfPosts: 0, numOfComments: 0};
    try {
        cardData = await fetchCardData();
    } catch {
        cardData = {numOfUsers: 0, numOfPosts: 0, numOfComments: 0};
    }
    const {numOfUsers, numOfPosts, numOfComments} = cardData;


  return (
    <div className={'grid grid-cols-1 gap-4 sm:grid-cols-3'}>
      <Card title="کاربران" value={numOfUsers} type="users" />
      <Card title="پست ها" value={numOfPosts} type="posts" />
      <Card title="نظرات" value={numOfComments} type="comments" />
    </div>
  );
}
export default CardWrapper;
