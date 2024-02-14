import crossIcon from "../../../images/cross-icon.png";
import { Backdrop } from "../backdrop/backdrop";
export const Modal = ({ onClose }) => {
  return (
    <Backdrop onClose={onClose}>
      <div className="rounded-lg bg-transparent p-[30px] w-[964px] max-w-[964px] max-h-[615px]">
        <div className="text-white flex flex-col items-center justify-center h-full p-10">
          <button onClick={onClose} className="self-end">
            <img src={crossIcon} alt="cross icon" width={50} height={50} />
          </button>
          <div className="flex flex-col justify-center items-center max-w-[721px] w-full">
            <h1 className="self-start text-[32px] font-hackathon border-white border-b border-opacity-20 pb-4 w-full tracking-[6px]">
              3 P 1 S O D 3 <span>&nbsp;&nbsp;&nbsp;&nbsp;/</span>
            </h1>
            <div className="text-[20px] font-jura font-medium leading-6 pt-4">
              <p>
                This new world, bathed in alien hues and strange landscapes,
                held secrets and wonders beyond their wildest imagination.{" "}
              </p>
              <br />
              <div className="relative w-fit overflow-hidden">
                <p className="animation_modal_1">
                  As they forged connections with the planet's indigenous beings
                  and delved deeper into its mysteries, they discovered that
                  their arrival was not by chance.
                </p>
              </div>
              <br />
              <div className="relative overflow-hidden">
                <p className="animation_modal_2">
                  The fate of both Earth and this mesmerizing new realm became
                  inexplicably intertwined, setting the stage for a fantastical
                  saga of exploration, adventure, and the boundless potential of
                  human resilience in the face of the unknown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};
