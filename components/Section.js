export default function Section({ title, description, icon }) {
  return (
    <div className="flex items-center space-x-4 mt-10">
      {icon}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
