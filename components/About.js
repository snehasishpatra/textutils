import React, { useState } from "react";

export default function About() {
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid red",
  });

  const [btntext, setBtnText] = useState("enable dark mode");

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("enable light mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
        border: "2px solid red",
      });
      setBtnText("enable dark mode");
    }
  };

  return (
    <div className="container" style={mystyle}>
      <h2>about us</h2>
      <h5>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        beatae delectus provident illum natus, omnis architecto ducimus id rerum
        ipsam aspernatur, asperiores rem dolorem deserunt perferendis optio
        voluptate, corporis magni. Nemo, itaque est perspiciatis pariatur quia
        dolores possimus, iste commodi consequuntur nulla necessitatibus minima
        at neque voluptate aspernatur ipsa sit tempore adipisci maiores magni.
        Neque animi porro rerum excepturi velit. Nihil, omnis officiis harum
        voluptate provident ex a ipsa, recusandae, dicta quibusdam assumenda
        accusamus numquam est. Obcaecati, id natus, magni maxime rerum quibusdam
        placeat officia fugit iste officiis a esse? Possimus deserunt cupiditate
        illum ipsa, dicta assumenda temporibus? Architecto dolores sunt
        repudiandae expedita ducimus sequi, quod impedit laudantium, eum velit
        non iusto dignissimos sit eius? Fugiat, itaque. Odit, a dolore. Odit
        laudantium nnatur! Perspiciatis quos consequatur autem ex id corrupti
        officiis molestiae soluta, repellat quia qui neque, cum sit tenetur
        fugiat. Laborum? Laudantium quisquam consequuntur dignissimos quasi eos
        labore temporibus ullam fuga quo culpa ut nihil beatae expedita atque
        impedit facere, voluptatum dolorem porro, nobis officia ad soluta
        molestias. In, similique nostrum! Hic quod aliquid vel magnam officiis
        dicta voluptates, in eum eligendi explicabo sed, dolore est deserunt.
        Nostrum voluptas corporis facere officia id. Dolores veniam iusto ipsum
        nobis quos, hic dicta? Minima omnis molestias nemo iure cupiditate
        repellat quidem, assumenda, pariatur recusandae, sint non quaerat atque
        rerum nostrum dolore fugiat officia. Repudiandae quod et nisi explicabo
        neque saepe molestias voluptate quia. Corrupti eveniet, itaque maiores
        numquam illo quos nesciunt excepturi molestiae quam natus facere dolore
        sed exercitationem id aliquid vitae mollitia, repellendus nulla deserunt
        fuga consequuntur error soluta incidunt iste. Delectus.
      </h5>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
         {btntext}
        </button>
      </div>
    </div>
  );
}
