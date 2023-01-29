import { useEffect, useState } from "react";
import { slide1, slide2, slide3, slide4 } from "../assets";


function Slide() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      image: slide1,
    },
    {
      id: "2",
      image: slide2,
    },
    {
      id: "3",
      image: slide3,
    },
    {
      id: "4",
      image: slide4,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (

    <div className="Service_Boot">
    <h2>Selamat Menikmati Hasil,<br/>Agak jelek gak apa lah yaa</h2>
     <div className="Boot">
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card_active";
          } else if (i === indexRight) {
            className = "card card_right";
          } else if (i === indexLeft) {
            className = "card card_left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Comic"
            ></img>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default Slide;
