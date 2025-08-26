export interface BenefitItem {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const BenefitItem = ({ Icon, title, description }: BenefitItem) => {
  return (
    <div className="flex flex-col items-start text-left gap-1">
      <div className="flex items-center gap-2.5">
        <Icon className="w-5 h-5" />
        <h3 className="text-lg xl:text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-secondary-foreground xl:text-lg">{description}</p>
    </div>
  );
};
