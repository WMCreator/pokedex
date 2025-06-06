import "@/styles/_components/_progressStat.scss";
import { ChevronsUp, Heart, Shield, ShieldPlus, Sword, Swords } from "lucide-react";

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface ProgressStatProps {
  stat: Stat;
}

const icons = {
  hp: Heart,
  attack: Sword,
  defense: Shield,
  "special-attack": Swords,
  "special-defense": ShieldPlus,
  speed: ChevronsUp,
};

type StatName = keyof typeof icons;

const ProgressStat: React.FC<ProgressStatProps> = ({ stat }) => {
  const statName = stat.stat.name as StatName;
  const Icon = icons[statName];

  const percentage = (stat.base_stat / 255) * 100;

  return (
    <div
      className="progressStat"
      key={stat.stat.name}
    >
      <p>{stat.stat.name}</p>
      <div className="progressStat__bar">
        <Icon />
        <div className={`progressStat__barOuter`}>
          <span
            className={`progressStat__barInner progressStat__barInner--${stat.stat.name}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p>{stat.base_stat}</p>
      </div>
    </div>
  );
};

export default ProgressStat;
