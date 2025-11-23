import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-sm border border-gray-100 
        p-8 hover:shadow-lg transition group
      "
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-200 transition">
        <Icon className="w-7 h-7 text-orange-600" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
