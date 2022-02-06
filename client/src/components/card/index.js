function Card() {
  return (
    <div className="flex-1 mr-1">
      <div>
        <img src={} alt="" />
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-medium">{ Channel Title }</h4>
        <p className="mt-2 font-hairline text-sm text-grey-darker">
          {Channel Name}
          <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
            &#10003;
          </span>
        </p>
        <p className="mt-1 font-hairline text-xs text-grey-darker">
          {Time}
        </p>
      </div>
    </div>
  );
}

export default Card;
