import "./PlayerInfo.sass";
import avatarSvgSrc from "../../images/avatar.svg";
import starSvgSrc from "../../images/star.svg";
import hideSvgSrc from "../../images/hide.svg";

export const PlayerInfo = () => {
  return (
    <div className="PlayerInfo-Container">
      <div className="PlayerInfo-Info">
        <div className="PlayerInfo-Info_userName">LongUserName</div>
        <div className="PlayerInfo-Info_rank">
          <img src={starSvgSrc} alt="star" />
          <img src={starSvgSrc} alt="star" />
          <img src={starSvgSrc} alt="star" />
          <img src={starSvgSrc} alt="star" />
          <img src={starSvgSrc} alt="star" />
        </div>
      </div>
      <div className="PlayerInfo-Avatar">
        <img src={avatarSvgSrc} alt="avatar" />
      </div>
      <div className="PlayerInfo-BalanceInfo">
        <button className="PlayerInfo-BalanceInfo_hideButton">
          <img src={hideSvgSrc} alt="hide" />
        </button>
        <div className="PlayerInfo-BalanceInfo_amount">$100,500.00</div>
      </div>
    </div>
  );
};
