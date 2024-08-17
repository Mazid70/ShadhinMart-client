import { useEffect, useState } from 'react';

const StarRating = ({ rating }) => {
  const [stars, setStars] = useState(0);
  const [ishalf, setHalf] = useState(false);
  useEffect(() => {
    if (Number.isInteger(rating) === false) {
      setStars(Math.ceil(rating) - 1);
      setHalf(true);
    } else setStars(rating);
  }, [rating]);

  const totalStar = [...Array(stars).keys()];
  return (
    <div className="flex items-center my-2">
      <div className="rating rating-sm">
        {totalStar.map(t => (
          <input
            key={t}
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-yellow-500"
            readOnly
          />
        ))}
      </div>

      {ishalf && (
        <div className="relative ">
          <div className="rating rating-sm absolute -top-2">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2   bg-gray-300"
              readOnly
            />
          </div>
          <div className="rating rating-sm rating-half absolute -top-2">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 mask-half-1  bg-yellow-500 "
              readOnly
            />
          </div>
        </div>
      )}
      <span className="ml-7">({rating})</span>
    </div>
  );
};

export default StarRating;
