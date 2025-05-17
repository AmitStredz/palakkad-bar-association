
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link?: string;
}

const NewsCard = ({ title, description, date, imageUrl, link }: NewsCardProps) => {
  return (
    <Card className="news-card overflow-hidden">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x200?text=News";
            }}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={link || "#"}>
          <Button variant="outline">Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
