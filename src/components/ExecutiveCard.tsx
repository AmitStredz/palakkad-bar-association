import { Card, CardContent } from "@/components/ui/card";

interface ExecutiveProps {
  name: string;
  position: string;
  id: string;
  phone1?: string;
  phone2?: string;
  email?: string;
}

const ExecutiveCard = ({ name, position, id, phone1, phone2, email }: ExecutiveProps) => {
  return (
    <Card className="executive-card overflow-hidden border-2 border-legal hover:border-legal-secondary transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col items-center p-4">
          <div className="w-full aspect-square rounded-md overflow-hidden mb-4 relative">
            <img
              src={phone1 ? `/members/${phone1}.webp` : '/images/adv.png'}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/300?text=Attorney";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-legal bg-opacity-90 text-white py-2 px-4">
              <h3 className="font-bold text-lg text-center">{position}</h3>
            </div>
          </div>
          <h3 className="font-semibold text-xl text-gray-800 text-center mb-2">{name}</h3>
          <div className="text-sm text-gray-600 w-full space-y-1">
            <div><span className="font-semibold">Enrollment No:</span> {id}</div>
            {email && <div><span className="font-semibold">Email:</span> {email}</div>}
            {phone1 && <div><span className="font-semibold">Phone:</span> {phone1}</div>}
            {phone2 && <div><span className="font-semibold">Alt. Phone:</span> {phone2}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveCard; 