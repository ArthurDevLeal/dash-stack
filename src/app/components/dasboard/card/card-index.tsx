import { CardData } from "./card-data";
import { CardIcon } from "./card-icon";
import { CardName } from "./card-name";
import { CardPercentageNumber } from "./card-percentage-number";
import { CardPercentageText } from "./card-percentage-text";
import { CardRoot } from "./card-root";

export const CardIndex = {
  Root: CardRoot,
  Name: CardName,
  Data: CardData,
  Icon: CardIcon,
  Percentage: {
    Number: CardPercentageNumber,
    Text: CardPercentageText,
  },
};
