export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md flex items-center space-x-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
