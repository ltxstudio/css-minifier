export default function Section({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md rounded-md p-6 flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
