import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import Card from "./Card";
import classes from "./ImageList.module.css";
// import "./ImageLists.css";

const itemsPerPage = 16;
const ImageList = () => {
  const [imageData, setImageData] = useState([]);
  const [userId, setUserId] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = imageData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(imageData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handler = (slashID, query) => {
    axios
      .get(`http://localhost:5000/fashion/${slashID}`)
      .then((response) => {
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
  const postRequest = (usernameId, query) => {
    axios
      .post(
        "http://localhost:5000/query",
        {
          username: usernameId,
          query_str: query,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const parsedResponse = res.data.map((jsonString) =>
          JSON.parse(jsonString)
        );
        // console.log(parsedResponse);
        var current = [];
        parsedResponse.forEach((product) => {
          current = [
            ...current,
            {
              link: product.link,
              productDisplayName: product.productDisplayName,
            },
          ];
          // ... and so on for other properties ...
        });
        // console.log("current: ", current);
        setImageData(current);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const onUserIdChangeHandler = (event) => {
    setUserId(event.target.value);
  };
  const onQueryChangeHandler = (event) => {
    setQuery(event.target.value);
  };
  // useEffect((),[imageData])
  return (
    <div>
      <Card className={classes.input}>
        <label htmlFor="userid"> Enter User ID</label>
        <input
          id="userid"
          type="text"
          value={userId}
          onChange={onUserIdChangeHandler}
        />
        <label htmlFor="query">Enter Search Query</label>
        <input
          id="query"
          type="text"
          value={query}
          onChange={onQueryChangeHandler}
        />
        {/* <Button onClick={() => handler(userId, query)}> Try this</Button> */}
        <Button onClick={() => postRequest(userId, query)}> Find Match </Button>

        <div className={classes.imagegallery}>
          {currentItems.map((data, index) => (
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
        <div className={classes.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? classes.activePage : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ImageList;
