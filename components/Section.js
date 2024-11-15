export default function Section({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md rounded-md p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Icon - Increased size */}
      <div className="text-blue-600 text-5xl sm:text-6xl">{icon}</div>
      <div>
        {/* Title - Adjust font size and weight */}
        <h3 className="text-2xl sm:text-xl font-semibold text-gray-800">{title}</h3>
        {/* Description - Adjust font size for readability */}
        <p className="text-lg sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}
