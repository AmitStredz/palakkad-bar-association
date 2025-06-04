import { Card, CardContent } from "@/components/ui/card";

interface MemberProps {
  name: string;
  email: string;
  enrl_number: string;
  imageUrl?: boolean;
  mobile_number?: string;
  mobile_number2?: string;
  res_addr?: string;
}

const MemberCard = ({ name, email, enrl_number, imageUrl, mobile_number, mobile_number2, res_addr }: MemberProps) => {
  const convertToDirectLink = (driveUrl) => {
    const match = driveUrl.match(/\/d\/(.+?)\//);
    console.log("matched: ", `https://drive.google.com/uc?export=view&id=${match[1]}`)
    return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : null;
  };
  
  return (
    <Card className="member-card overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col items-center p-6">
          <div className="w-full aspect-square rounded-md overflow-hidden mb-4">
            <img
              src={imageUrl? `/members/${mobile_number}.webp`: '/images/adv_avatar.webp'}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/300?text=Attorney";
              }}
            />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 text-center">{name}</h3>
          <div className="text-sm text-gray-600 mt-2 w-full">
            <div><span className="font-semibold">Enrollment No:</span> {enrl_number}</div>
            <div><span className="font-semibold">Email:</span> {email}</div>
            <div><span className="font-semibold">Phone No:</span> {mobile_number}</div>
{mobile_number2 &&            <div><span className="font-semibold">Phone No2:</span> {mobile_number2}</div>
}            {res_addr && (
              <div className="mt-2">
                <div className="font-semibold">Address:</div>
                <div className="whitespace-pre-line text-xs text-gray-700">{res_addr}</div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
