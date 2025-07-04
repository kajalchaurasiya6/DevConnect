import { EMOJIS } from "@/constants/constants"
const Features = () => {
  return (
    <div className="p-4 mt-2 rounded-md dark:bg-slate-700 bg-gray-200">
      <h2 className="text-3xl font-semibold  text-center mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">{EMOJIS?.folder} Organized Projects</h3>
          <p>Track and manage your code repositories in one place.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{EMOJIS?.sms} Team Communication</h3>
          <p>In-app chat and collaboration tools for teams.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{EMOJIS?.chart} Developer Insights</h3>
          <p>Visualize productivity and contributions via charts.</p>
        </div>
      </div>
    </div>
  )
}

export default Features