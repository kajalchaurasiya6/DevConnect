import { EMOJIS } from "@/constants/constants";
import Hero from "./Hero"
import Post from "../../posts/components/Post";
import Features from "./Features";
const trendingPosts = [
    { title: "AI is taking over design!", author: "Jane Doe", time: "2h ago", tag: "AI" },
    { title: "Best React practices in 2025", author: "John Smith", time: "5h ago", tag: "Tech" },
    { title: "Life of a remote dev", author: "Kajal", time: "1d ago", tag: "Life" },
];
const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <div className="px-4 md:px-8 py-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900"> {EMOJIS?.fire} Trending Posts</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {trendingPosts?.map((post, idx) => (
                        <Post key={idx} {...post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;