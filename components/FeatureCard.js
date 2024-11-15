export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex items-center space-x-6">
      {/* Icon - increased size and more space */}
      <div className="text-blue-600 text-4xl">{icon}</div>
      <div>
        {/* Title - larger font size and bold */}
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        {/* Description - adjusted text size for better readability */}
        <p className="text-gray-500 text-lg">{description}</p>
      </div>
    </div>
  );
}
