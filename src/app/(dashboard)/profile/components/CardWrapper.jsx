import { Card } from "./Cards";
import {fetchCardData} from "@/services/data";

async function CardWrapper() {
    const {numOfUsers, numOfPosts, numOfComments} = await fetchCardData()


  return (
    <div className={'grid grid-cols-1 gap-5 sm:grid-cols-3'}>
      <Card title="کاربران" value={numOfUsers} type="users" />
      <Card title="پست ها" value={numOfPosts} type="posts" />
      <Card title="نظرات" value={numOfComments} type="comments" />
    </div>
  );
}
export default CardWrapper;
