import { readdirSync } from "fs";
import { join } from "path";
import PlayerSlider from "./PlayerSlider";

const PlayerCard = () => {
  const playersDirectory = join(process.cwd(), "public/players");
  const playerFiles = readdirSync(playersDirectory);

  return <PlayerSlider images={playerFiles} />;
};

export default PlayerCard;