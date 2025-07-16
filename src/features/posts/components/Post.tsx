import { Post as PostBase } from "@components/index";
import {
  IconDotsHorizontal,
  IconHeart,
  IconMessageDots,
  IconRepeat2,
  IconUpload,
} from "@intentui/icons";
export const Post = () => {
  return (
    <PostBase>
      <PostBase.Header
        author={{
          name: "d03x",
          nickname: "d03x.aep",
          isVerifiedBadge: true,
        }}
      />
      <PostBase.Body>
        <div className="text-lg">
          <p>
            Somebody help mem drowning. It expect 1 person to single handedly
            rescue me but out 50,000 statistically 15-20 people could buy save
            my housing, business, life and livelihood. Im at zero.
          </p>
          <p>
            enough art so I can cobble the money together over the next few days
            to
          </p>
        </div>
      </PostBase.Body>
      <PostBase.Footer>
        <PostBase.Action count={20} icon={IconHeart} />
        <PostBase.Action count={2} icon={IconRepeat2} />
        <PostBase.Action count={3.8} icon={IconMessageDots} />{" "}
        <PostBase.Action icon={IconUpload} />
        <PostBase.Action icon={IconDotsHorizontal} />
      </PostBase.Footer>
    </PostBase>
  );
};
