import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  amazonLink?: string
  flipkartLink?: string
  meeshowLink?: string
  otherLinks?: Array<{ platform: string; url: string }>
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const buyLinks = [
    { name: "Amazon", url: product.amazonLink, color: "bg-[#FF9900]" },
    { name: "Flipkart", url: product.flipkartLink, color: "bg-[#2874F0]" },
    { name: "Meeshow", url: product.meeshowLink, color: "bg-green-500" },
  ].filter((link) => link.url)

  // Add other links
  if (product.otherLinks) {
    product.otherLinks.forEach((link) => {
      buyLinks.push({
        name: link.platform.charAt(0).toUpperCase() + link.platform.slice(1),
        url: link.url,
        color: "bg-gray-600",
      })
    })
  }

  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <CardHeader className="p-4 relative">
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-1">
          {product.amazonLink && (
            <Badge variant="secondary" className="bg-[#FF9900] text-white hover:bg-[#FF9900]/90">
              Amazon
            </Badge>
          )}
          {product.flipkartLink && (
            <Badge variant="secondary" className="bg-[#2874F0] text-white hover:bg-[#2874F0]/90">
              Flipkart
            </Badge>
          )}
          {product.meeshowLink && (
            <Badge variant="secondary" className="bg-green-500 text-white hover:bg-green-500/90">
              Meeshow
            </Badge>
          )}
          {product.otherLinks?.map((link, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-600 text-white hover:bg-gray-600/90">
              {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
            </Badge>
          ))}
        </div>
        <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Badge variant="outline" className="w-fit mb-2 capitalize">
          {product.category.replace("-", " ")}
        </Badge>
        <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{product.description}</p>
        <div className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          {buyLinks.map((link, index) => (
            <Button key={index} asChild className={`w-full ${link.color} hover:opacity-90`} size="sm">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Buy on {link.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
