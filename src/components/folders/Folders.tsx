import Image from "../image/Image";
import FoldersStyled from "./styles";

const Folders = () => {
  return (
    <FoldersStyled>
      <div className="folder">
        <a href="https://resume.creddle.io/resume/humytkwmthb" target="_blank" rel="noreferrer">
          <Image name="folder.png" />
        </a>
        <p>Resume</p>
      </div>
      <div className="folder">
        <a href="https://github.com/SarahAvery" target="_blank" rel="noreferrer">
          <Image name="github.png" />
          <p>Github</p>
        </a>
      </div>
      <div className="folder">
        <a href="https://sarahavery.github.io/dev-portfolio/" target="_blank" rel="noreferrer">
          <Image name="folder.png" />
        </a>
        <p>Portfolio</p>
      </div>
    </FoldersStyled>
  );
};

export default Folders;
