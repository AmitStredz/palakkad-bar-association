
import { Card, CardContent } from "@/components/ui/card";

interface MemberProps {
  name: string;
  position: string;
  id: string;
  imageUrl?: string;
}

const MemberCard = ({ name, position, id, imageUrl }: MemberProps) => {
  return (
    <Card className="member-card overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col items-center p-6">
          <div className="w-full aspect-square rounded-md overflow-hidden mb-4">
            <img
              src={imageUrl || "/images/adv.png"}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/300?text=Attorney";
              }}
            />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{position}</p>
          <p className="text-xs text-gray-500">{id}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
