import CardList from "@/components/CardList";
import StyledCard_Modal from "@/components/StyledCard/StyledCard_Modal";

import { activitys, IActivity } from "@/constants/activity";

const ActivityCardList = () => (
  <CardList title="Activity" columns={2}>
    {activitys
      .sort((a, b) => b.id - a.id)
      .map((activity: IActivity) => (
        <StyledCard_Modal key={activity.id} {...activity} />
      ))}
  </CardList>
);

export default ActivityCardList;
