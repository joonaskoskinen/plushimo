import { Card, CardContent } from "@/components/ui/card"

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden animate-pulse">
      <CardContent className="p-0">
        <div className="aspect-square bg-muted" />
        <div className="p-4 space-y-3">
          <div className="h-6 bg-muted rounded w-3/4" />
          <div className="h-8 bg-muted rounded w-1/3" />
        </div>
      </CardContent>
    </Card>
  )
}
