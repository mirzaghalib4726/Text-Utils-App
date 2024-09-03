import { useState } from "react";

export default function About(props) {
  const [open, setOpen] = useState(0);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="flex flex-col flex-1">
      <div
        className={`sm:mx-64 mx-5 mt-3 ${
            props.mode ? "dark:bg-slate-400" : "bg-slate-50"
          }`}
      >

        <div className="border border-slate-300">
          <h2 className="">
            <button
              className={`p-3 text-left w-full ${
                props.mode ? "dark:bg-slate-800" : "bg-gray-200"
              } relative`}
              onClick={() => toggleAccordion(1)}
            >
              <span
                className={`${
                    props.mode ? "dark:text-slate-100 " : "text-slate-900"
                }`}
              >
                Accordion Item #1
              </span>

              {open !== 1 && (
                <span
                  className={`text-xl absolute right-4 top-1/2 transform -translate-y-1/2`}
                >
                  🔽
                </span>
              )}
            </button>
          </h2>
          <div
            className={`accordion-collapse ${open === 1 ? "block" : "hidden"}`}
            aria-labelledby="headingOne"
          >
            <div className={`p-3 ${props.mode ? "dark:text-slate-900" : "text-gray-600"} w-full`}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="border border-slate-300">
        <h2 className="">
            <button
              className={`p-3 text-left w-full ${
                props.mode ? "dark:bg-slate-800" : "bg-gray-200"
              } relative`}
              onClick={() => toggleAccordion(2)}
            >
              <span
                className={`${
                    props.mode ? "dark:text-slate-100" : "text-slate-900"
                }`}
              >
                Accordion Item #2
              </span>

              {open !== 2 && (
                <span
                  className={`text-xl absolute right-4 top-1/2 transform -translate-y-1/2`}
                >
                  🔽
                </span>
              )}
            </button>
          </h2>
          <div
            className={`accordion-collapse ${open === 2 ? "block" : "hidden"}`}
            aria-labelledby="headingOne"
          >
            <div className={`p-3 ${props.mode ? "dark:text-slate-900" : "text-gray-600"} w-full`}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="border border-slate-300">
        <h2 className="">
            <button
              className={`p-3 text-left w-full ${
                props.mode ? "dark:bg-slate-800" : "bg-gray-200"
              } relative`}
              onClick={() => toggleAccordion(3)}
            >
              <span
                className={`${
                  props.mode ? "dark:text-slate-100" : "text-slate-900"
                }`}
              >
                Accordion Item #3
              </span>

              {open !== 3 && (
                <span
                  className={`text-xl absolute right-4 top-1/2 transform -translate-y-1/2`}
                >
                  🔽
                </span>
              )}
            </button>
          </h2>
          <div
            className={`accordion-collapse ${open === 3 ? "block" : "hidden"}`}
            aria-labelledby="headingOne"
          >
            <div className={`p-3 ${props.mode ? "dark:text-slate-900" : "text-gray-600"} w-full`}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
