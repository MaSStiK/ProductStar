import { useState } from "react";

export const Collapse = ({ className, title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className} onClick={() => setOpen(prevState => !prevState)}>
      <h3>{title}</h3>
      {open && (
        <div onClick={(e) => e.stopPropagation()}>
          {content}
        </div>
      )}
    </div>
  );
};