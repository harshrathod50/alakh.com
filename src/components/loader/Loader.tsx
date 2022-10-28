import type { FC } from "react";

/**
 * `Loader` indicates that content is being processed.
 * @returns `ReactElement`
 */
const Loader: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center h-20">
      <div
        className={`h-8 w-8 rounded-full animate-spin 
          border-4 border-slate-800 dark:border-slate-200 
          border-t-4 border-t-slate-200 dark:border-t-slate-800`}
      ></div>
    </div>
  );
};

export default Loader;
