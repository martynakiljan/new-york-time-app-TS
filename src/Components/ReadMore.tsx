import React, { useState } from "react";

const ReadMore = ({ text }: { text: string }) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return text ? (
    <p className="text">
      {isReadMore ? text.slice(0, 50) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ fontWeight: "bold" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  ) : null;
};

export default ReadMore;
