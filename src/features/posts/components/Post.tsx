import { Menu } from "@/components/menu";
import NavLink from "@/features/navbar/components/NavLink";
import { Post as PostBase } from "@components/index";
import {
  IconCircleInfo,
  IconDotsHorizontal,
  IconHeart,
  IconLink,
  IconMessageDots,
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
        <div className="text-sm">
          <p>
            Hi everyone! Just a small mod update: I will ask everyone here to
            please limit the amount of 2D and traditional art you post or share
            here.
          </p>
          <div className="rounded overflow-hidden">
            <img
              className="w-full h-full"
              src="https://64.media.tumblr.com/65c08015cf3ac111b54a9917692a365d/2f1b269529fe0b42-51/s540x810/4a6b1e289481e337c37d73385e5d188f33fabd85.pnj"
              alt="dada"
            />
          </div>
          <p className="text-md">
            <span className="text-orange-500">Sharing</span> your 2D concept art
            ALONGSIDE or IN REFERENCE TO a model is completely fine, but I ask
            that you do not share your art here if you only work in 2D, and have
            no intention of creating in 3D! If you do not create in 3D, you are
            free to lurk or respond to other posts here, but please. There are
            plenty of other communities who would be happy to see your 2D
            digital or traditional art! Please share them there instead!
          </p>
          <p>
            This has also been added to the communitys guidelines. If I see this
            happen anymore after this post is made, the offending post will
            receive a warning and removal. If it happens again from the same
          </p>
          <p>
            poster, they will be removed from this community. Thank you for your
            time 🖤❤️
          </p>
        </div>
      </PostBase.Body>
      <PostBase.Footer>
        <PostBase.Action
          onClick={() => {
            alert("Wellcome To mY Gys");
          }}
          count={20}
          icon={IconHeart}
        />
        <PostBase.Action count={2} icon={IconRepeat2} />
        <PostBase.Action count={3.8} icon={IconMessageDots} />{" "}
        <PostBase.Action icon={IconUpload} />
        <Menu>
          <Menu.Trigger>
            <IconDotsHorizontal className="w-5 h-5"/>
          </Menu.Trigger>
          <Menu.Body>
            <Menu.Item>
              <IconRepeat2 className="w-5 h-5" />
              <span>Reblog</span>
            </Menu.Item>
            <Menu.Item>
              <IconCircleInfo className="w-5 h-5" />
              <span>Laporkan</span>
            </Menu.Item>
             <Menu.Item>
              <IconPersonPasskey className="w-5 h-5" />
              <span>Follow</span>
            </Menu.Item>
            <Menu.Item>
              <IconPersonRemove className="w-5 h-5" />
              <span>Block This User</span>
            </Menu.Item>
            <Menu.Item>
              <IconLink className="w-5 h-5" />
              <span>Copy Link</span>
            </Menu.Item>
          </Menu.Body>
        </Menu>
        {/* <PostBase.ActionMenu>
          <PostBase.Action icon={IconDotsHorizontal} />
        </PostBase.ActionMenu> */}
      </PostBase.Footer>
    </PostBase>
  );
};
