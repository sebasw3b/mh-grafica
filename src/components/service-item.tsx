import { Badge } from "../shadcn/badge";

interface Props {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  price: number;
  description: string;
}

export const ServiceItem = ({ Icon, title, price, description }: Props) => {
  return (
    <div className="flex flex-col items-center text-center ">
      <div className="mb-3 border border-foreground/10 rounded-full p-2">
        <Icon className="fill-accent w-10 h-10" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <h3 className="text-xl">{title}</h3>
        <Badge variant="secondary">${price}</Badge>
      </div>
      <p className="text-secondary-foreground text-[0.85rem] xl:text-sm font-light mt-2">{description}</p>
    </div>
  );
};
