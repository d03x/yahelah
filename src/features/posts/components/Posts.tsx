import { Post } from "./Post";

export default function Posts() {
  return (
    <div className="lg:space-y-2  border-content-panel-border border-t lg:border-0 lg:mx-3">
      {[1, 2, 3, 4].map((item, index) => {
        return <Post key={index} />;
      })}
    </div>
  );
}
