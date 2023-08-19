import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import Card from "./Card";
import classes from "./ImageList.module.css";
// import "./ImageLists.css";

const ImageList = () => {
  const [imageData, setImageData] = useState([]);
  const [apiId, setApiID] = useState("");
  const handler = (slashID) => {
    axios
      .get(`http://localhost:5000/fashion/${slashID}`)
      .then((response) => {
        // console.log("Okay");
        // console.log("result, ", response.data.link);
        setImageData((prevval) => [
          ...prevval,
          {
            link: response.data.link,
            productDisplayName: response.data.productDisplayName,
          },
        ]);
        // console.log(imageData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChangeHandler = (event) => {
    setApiID(event.target.value);
  };
  // useEffect((),[imageData])
  return (
    <div>
      <Card className={classes.input}>
        <label htmlFor="uesrname"> Enter username handle</label>
        <input
          id="username"
          type="text"
          value={apiId}
          onChange={onChangeHandler}
        />
        <Button onClick={() => handler(apiId)}> Try this</Button>

        <div className={classes.imagegallery}>
          {imageData.map((data, index) => (
            <div>
              <img
                key={index}
                src={data.link}
                alt={`Image ${index}`}
                className={classes.imageitem}
              />
              <p>{data.productDisplayName}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ImageList;
