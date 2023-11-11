import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";

function FlipCard({ frontContent, backContent }) {
  return (
    <FlippingCard>
      <FlippingCardBack>
        <div className="bg-blue-800 w-[250px] h-[250px] rounded-sm">
          {backContent}
        </div>
      </FlippingCardBack>
      <FlippingCardFront>
        <div className="bg-teal-500 w-[250px] h-[250px] rounded-sm">
          {frontContent}
        </div>
      </FlippingCardFront>
    </FlippingCard>
  );
}

export default FlipCard;
