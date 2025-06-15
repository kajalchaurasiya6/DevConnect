type PostProps = {
  title: string;
  author: string;
  time: string;
  tag: string;
};

const Post = ({ title, author, time, tag }: PostProps) => {
  return (
    <div className="bg-[#1f1f1f] rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <div className="text-lg font-semibold text-white mb-1">{title}</div>
      <div className="text-sm text-gray-400 mb-2">
        by {author} • {time}
      </div>
      <span className="inline-block bg-indigo-600 text-white text-xs font-medium px-2 py-0.5 rounded">
        {tag}
      </span>
    </div>
  );
};

export default Post;
