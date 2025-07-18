import { Menu } from "@/components/menu";
import { Post as PostBase } from "@components/index";
import { faker } from "@faker-js/faker";
import {
  IconCallOutgoing,
  IconChartAnalytics,
  IconCircleInfo,
  IconCodeLines,
  IconDotsHorizontal,
  IconHeart,
  IconLink,
  IconMessageDots,
  IconMute,
  IconPersonPasskey,
  IconPersonRemove,
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
        <div className="text-sm prose">
          <p>{faker.word.words(Math.random() * 100)}</p>
        </div>
        <PostBase.PostTypeAudio
          audioUrl="http://192.168.65.92:3000/wiwok-detok.mp3"
        />
      </PostBase.Body>
      <PostBase.Footer>
        <PostBase.Action
          count={100}
          onClick={() => {
            alert("Wellcome To mY Gys");
          }}
          icon={IconHeart}
        />
        <PostBase.Action count={200} icon={IconRepeat2} />
        <PostBase.Action icon={IconMessageDots} />{" "}
        <PostBase.Action count={50} icon={IconUpload} />
        <Menu>
          <Menu.Trigger className="flex active:scale-95 ml-auto p-2 rounded-full items-center justify-center cursor-pointer hover:bg-hovered-background active:bg-pressed-background">
            <IconDotsHorizontal className="w-5 h-5" />
          </Menu.Trigger>
          <Menu.Body>
            <Menu.Item icon={IconHeart}>
              <span>Add Reaction</span>
            </Menu.Item>
            <Menu.Item icon={IconCircleInfo}>
              <span>Laporkan</span>
            </Menu.Item>
            <Menu.Item icon={IconPersonPasskey}>
              <span>Follow</span>
            </Menu.Item>
            <Menu.Item icon={IconPersonRemove}>
              <span>Unfollow @hendy</span>
            </Menu.Item>
             <Menu.Item icon={IconMute}>
              <span>Mute Postingan</span>
            </Menu.Item>
             <Menu.Item icon={IconChartAnalytics}>
              <span>Lihat Satistik Postingan</span>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item icon={IconPersonRemove}>
              <span>Block This User</span>
            </Menu.Item>
            <Menu.Item icon={IconLink}>
              <span>Copy Link</span>
            </Menu.Item>
             <Menu.Item icon={IconCodeLines}>
              <span>Embed Postingan</span>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item icon={IconCallOutgoing}>
              <span>Daftarkan Akunk</span>
            </Menu.Item>
          </Menu.Body>
        </Menu>
      </PostBase.Footer>
    </PostBase>
  );
};
