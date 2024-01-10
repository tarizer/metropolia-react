import { useEffect, useState } from "react";

export const Nasa = () => {
  //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
  const nasaEndpoint =
    "https://api.nasa.gov/planetary/apod?api_key=ooEtg76d39s4sEA0N0xzr9Gp63Ik490QBGd89n7M";

  const [explanation, setExplanation] = useState("");
  const [url, setUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(nasaEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setExplanation(data.explanation);
        setUrl(data.url);
        setMediaType(data.media_type);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Nasa APOD</h1>
      {mediaType === "image" && (
        <img src={url} style={{ maxWidth: "100%" }} alt="Nasa APOD" />
      )}
      {mediaType === "video" && (
        <iframe
          width="560"
          height="315"
          src={url}
          title="Nasa APOD"
          allowFullScreen
        ></iframe>
      )}
      <p>{explanation}</p>
    </>
  );
};
