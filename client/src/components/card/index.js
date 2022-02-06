import React from 'react';
const Card = (props) => {
  const { item } = props;
  console.log("Item ",item)
  return (
    <div className="flex-1 mr-1">
      <div>
        <img src={item.metadata.image} />
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-medium">{props.title}</h4>
        <p className="mt-2 font-hairline text-sm text-grey-darker">
          {props.metadata.channel_name}
          <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
            &#10003;
          </span>
        </p>
        <p className="mt-1 font-hairline text-xs text-grey-darker">
          {props.time}
        </p>
      </div>
    </div>
  );
};
// function Card(props) {
//   console.log("I'm here")

// }

export default Card;
