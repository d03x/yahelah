import { Post } from "./Post";

export default function Posts() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((item, index) => {
        return <Post key={index} />;
      })}
    </div>
  );
}
