/** @jsx jsx */
import { Box, Container, Flex, jsx, Themed } from "theme-ui";

const Youtube = ({ src }: {src: string}) => {
  return (
    <div style={{backgroundColor: `#000`}}>
      {src && <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>}
    </div>
  );
};

export default Youtube;
