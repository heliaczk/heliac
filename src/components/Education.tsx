import { HiOutlineCalendar } from "@react-icons/all-files/hi/HiOutlineCalendar";
import { HiOutlineLocationMarker } from "@react-icons/all-files/hi/HiOutlineLocationMarker";
import FadeUpContainer from "./FadeUpContainer";

export default function Education() {
  return (
    <FadeUpContainer delay={0.01}>
      <div className="flex flex-col gap-6 mt-6 items-start px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 sm:w-2/3">
          <div className="col-span-1 text-md text-gray-100">
            M. Sc. Computer Science
          </div>
          <div>
            <div className="col-span-1 text-sm flex gap-2 items-center text-gray-300">
              <HiOutlineLocationMarker className="w-4 h-4" />
              Germany
            </div>
            <div className="col-span-1 text-sm flex gap-2 items-center text-gray-300">
              <HiOutlineCalendar className="w-4 h-4" />
              2021 - 2023
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 sm:w-2/3">
          <div className="col-span-1 text-md text-gray-100">
            B. Sc. IT Security
          </div>
          <div>
            <div className="col-span-1 text-sm flex gap-2 items-center text-gray-300">
              <HiOutlineLocationMarker className="w-4 h-4" />
              Germany
            </div>
            <div className="col-span-1 text-sm flex gap-2 items-center text-gray-300">
              <HiOutlineCalendar className="w-4 h-4" />
              Graduated in 2021
            </div>
          </div>
        </div>
      </div>
    </FadeUpContainer>
  );
}
