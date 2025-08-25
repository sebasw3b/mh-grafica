import { Star } from "lucide-react";
import { Badge } from "../shadcn/badge";
import { Button } from "../shadcn/button";

interface Props {
  price: number
  title: string
  items: string[]
  buttonText?: string
  action: () => void
}

export const PackageCard = ({ price, title, items, buttonText, action }: Props) => {
  return (
    <div className="border border-[#595e6626] p-10 w-full rounded-2xl drop-shadow-2xl drop-shadow-foreground/10 bg-linear-to-r/decreasing from-foreground/2 to-background space-y-4">
      <Badge variant="secondary" className="text-sm bg-accent/5">
        ${price}
      </Badge>
      <h4 className="text-2xl xl:text-3xl">{title}</h4>
      <ul className="space-y-4">
        {items.map(item => {
          return <li
            key={item}
            className="text-muted-foreground flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 xl:w-5 xl:h-5 fill-accent/10 stroke-accent" />
            {item}
          </li>
        })}


      </ul>

      <Button
        onClick={action}
        className="mt-2 tracking-tighter" size="sm">{buttonText ?? "Book now"}</Button>
    </div>
  );
};
