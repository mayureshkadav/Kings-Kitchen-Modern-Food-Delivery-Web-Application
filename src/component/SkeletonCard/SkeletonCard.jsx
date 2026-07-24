import React from "react";
import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="skeletonCard">
      <div className="skeletonImage" />
      <div className="skeletonText skeletonTitle" />
      <div className="skeletonText skeletonDesc" />
      <div className="skeletonText skeletonDesc" />
      <div className="skeletonText skeletonPrice" />
      <div className="skeletonButtons">
        <div className="skeletonButton" />
        <div className="skeletonButton" />
      </div>
    </div>
  );
};

export default SkeletonCard;
