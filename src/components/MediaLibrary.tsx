
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaItem {
  title: string;
  image: string;
  category: string;
  url?: string;
}

const mediaItems: MediaItem[] = [
  {
    title: "Legal Directory 2023",
    image: "/images/im1.png",
    category: "directories"
  },
  {
    title: "The Scottish Law List",
    image: "/images/im2.png",
    category: "directories"
  },
  {
    title: "Directory of Central Government Officials",
    image: "/images/central.png",
    category: "directories"
  },
  {
    title: "Law Manual 5th Edition",
    image: "/images/img8.png",
    category: "manuals"
  },
  {
    title: "Property Law Guide",
    image: "/images/im4.png",
    category: "guides"
  },
  {
    title: "Court Procedures Handbook",
    image: "/images/img5.png",
    category: "handbooks"
  },
  {
    title: "Tax Law Compendium",
    image: "/images/img6.png",
    category: "guides"
  },
  {
    title: "Constitutional Rights Manual",
    image: "/images/img7.png",
    category: "manuals"
  }
];

const MediaLibrary = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Media Library</h2>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="directories">Directories</TabsTrigger>
          <TabsTrigger value="manuals">Manuals</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="handbooks">Handbooks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaItems.map((item) => (
              <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <a href={item.url || "#"} className="block">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover object-center"
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="directories">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaItems.filter(item => item.category === 'directories').map((item) => (
              <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <a href={item.url || "#"} className="block">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover object-center"
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="manuals">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaItems.filter(item => item.category === 'manuals').map((item) => (
              <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <a href={item.url || "#"} className="block">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover object-center"
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="guides">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaItems.filter(item => item.category === 'guides').map((item) => (
              <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <a href={item.url || "#"} className="block">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover object-center"
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="handbooks">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaItems.filter(item => item.category === 'handbooks').map((item) => (
              <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <a href={item.url || "#"} className="block">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover object-center"
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MediaLibrary;
