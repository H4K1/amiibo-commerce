import Button from "./Button";
import { useState } from "react";

const Modal = ({ title, children, isHidden = false }) => {
  const [hidden, setHidden] = useState(isHidden);

  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={ `${hidden && 'hidden'} overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-screen md:h-full md:inset-0` }
    >
      <div className="relative mx-auto px-4 w-full max-w-2xl h-full items-center md:h-auto">
        <div className="relative bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
              { title }
            </h3>
            <Button onClick={ () => setHidden(true)  } color="gray">
              <i className="fa-solid fa-x"></i>
            </Button>
          </div>

          <div className="p-6 space-y-6">
            { children }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
