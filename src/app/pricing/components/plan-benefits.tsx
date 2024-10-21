export function PlanBenefits({ level }: { level: number }) {
  interface Feature {
    name: string;
    always?: boolean;
    level?: number;
  }

  const features: Feature[] = [
    { name: "Free Setup", always: true },
    { name: "Bandwidth Limit 10 GB", always: true },
    { name: "20 User Connection", always: true },
    { name: "Analytics Report", level: 1 },
    { name: "Public API Access", level: 2 },
    { name: "Plugins Intregation", level: 3 },
    { name: "Custom Content Management", level: 3 },
  ];
  return (
    <ul className="flex flex-col justify-center items-center gap-[30px]">
      {features.map((feature, index) => {
        const isEnabled = feature.always || (feature.level !== undefined && feature.level <= level);
        return (
          <li
            key={index}
            className={`${isEnabled ? "opacity-100 text-diferentblack" : "opacity-40"}`}
          >
            {feature.name}
          </li>
        );
      })}
    </ul>
  );
}
