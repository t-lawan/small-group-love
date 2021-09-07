import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { size } from "../index.styles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const PARAGRAPH = styled.p`
  /* margin-bottom: 1.5rem; */
  /* line-height: 1.2rem; */
  font-family: Arial Narrow;
`

const SPACE = styled.div`
  height: 2vh;
  width: 100%;
`

const EXTERNALLINK = styled.a`
  margin-bottom: 1rem;
  font-size: inherit;
  text-decoration: underline;
`
export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (<p>{children}</p>),
    [BLOCKS.HEADING_1]: (node, children) => <PARAGRAPH>{children}</PARAGRAPH>,
    [INLINES.HYPERLINK]: (node, children) => (
      <EXTERNALLINK href={node.data.uri} target="__blank">
        {children}
      </EXTERNALLINK>
    )
  }
}

export const ModalTypes = {
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT"
}

const Image = styled(Img)``


const AdjustableImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const ImageWrapper = styled.div`
  padding-bottom: 0.5rem;
  @media (max-width: ${size.mobileL}) {
    padding-bottom: 0.25rem;
  }
`

const WidthImageWrapper = styled(ImageWrapper)`
  width: ${props => props.width};
`
const TextWrapper = styled.div`
  /* width: 90%; */
  text-align: center;
  opacity: ${props => (props.isTranslucent ? "0.7" : "1")};

`

const InfoTextWrapper = styled(TextWrapper)`
  /* padding: 2rem; */
  font-family: AppleGaramondLight;
  padding-top: 0;
  p {
    font-size: 1.5vw;
    margin-bottom: 3vh;
    @media (max-width: ${size.mobileL}) {
        /* font-size: 3vh; */
       margin-bottom: 1vh;

    }
  }
`
export const GenerateContentSection = (section, index) => {
  let render

  switch (section.type) {
    case "images":
      if (section.images) {
        render = (
          <div key={index}>
            {section.images.map((img, ind) => (
              <ImageWrapper key={ind}>
                <Image backgroundColor={"white"} fluid={img.fluid} />
              </ImageWrapper>
            ))}
          </div>
        )
      }
      break
    case "image_list":
      if (section.image_list) {
        render = (
          <div key={index}>
            {section.image_list.map((img, ind) => (
              <AdjustableImageWrapper key={ind}>
                <WidthImageWrapper width={`${img.imageWidth}%`} >
                  <Image backgroundColor={"white"} fluid={img.image.fluid} />
                </WidthImageWrapper>
              </AdjustableImageWrapper>
 
            ))}
          </div>
        )
      }
      break
    case "text":
      render = (
        <TextWrapper isTranslucent={section.isTextTranslucent} key={index}>
          {documentToReactComponents(
            JSON.parse(section.text.raw),
            richTextOptions
          )}
        </TextWrapper>
      )
      break
    case "info_text":
      render = (
        <InfoTextWrapper isTranslucent={section.isTextTranslucent} key={index}>
          {documentToReactComponents(
            JSON.parse(section.text.raw),
            richTextOptions
          )}
        </InfoTextWrapper>
      )
      break
    case "space": 
      render = (
        <SPACE  key={index}/>
      )
    break;
    default:
      break
  }

  return render
}
