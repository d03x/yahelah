import { Post } from "./Post";

export default function Posts() {
  return (
    <div className="border-content-panel-border border border-x-0 lg:border-x-1 lg:rounded-lg overflow-hidden lg:mx-2">
      {[1, 2, 3, 4].map((item, index) => {
        return <Post key={index} />;
      })}
    </div>
  );
}
