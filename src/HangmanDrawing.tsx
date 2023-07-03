type HangManDrawingProps = {
  numberOfGuesses: number;
};

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      border: "8px solid black",
      borderRadius: "100%",
      position: "absolute",
      right: "-30px",
      top: "45px",
    }}
  ></div>
);
const BODY = (
  <div
    style={{
      width: "7px",
      height: "120px",
      backgroundColor: "black",
      position: "absolute",
      right: "0px",
      top: "105px",
    }}
  ></div>
);
const RIGHT_ARM = (
  <div
    style={{
      width: "90px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "-89px",
      top: "149px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
const LEFT_ARM = (
  <div
    style={{
      width: "90px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "2px",
      top: "152px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);
const LEFT_LEG = (
  <div
    style={{
      width: "90px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "0px",
      top: "220px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);
const RIGHT_LEG = (
  <div
    style={{
      width: "90px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "-85px",
      top: "220px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export const HangmanDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {BODY_PARTS.slice(0,numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};
