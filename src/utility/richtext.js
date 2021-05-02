import React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import styled from 'styled-components';
import Img from "gatsby-image"
import { size } from "../index.styles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PARAGRAPH = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.2rem;
`

const EXTERNALLINK = styled.a`
  margin-bottom: 1rem;
  text-decoration: underline;
  :hover {
    cursor: url('../images/surfer.png');
  }
`
export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <PARAGRAPH>{children}</PARAGRAPH>
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <EXTERNALLINK href={node.data.uri} target="__blank">{children}</EXTERNALLINK>
    },
  };

export const ModalTypes = {
  PROJECTS: 'PROJECTS',
  CONTACT: 'CONTACT'
}

const Image = styled(Img)``
const ImageWrapper = styled.div`
  padding-bottom: 0.5rem;
  @media (max-width: ${size.mobileL}) {
    padding-bottom: 0.25rem;
  }
`
const TextWrapper = styled.div`
  /* width: 90%; */
  text-align: center;
  opacity: ${props => props.isTranslucent ? '0.7' : '1'};
`
export const GenerateContentSection = (section, index) => {
    let render;

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
        break;
      case "text":
        render = (
          <TextWrapper isTranslucent={section.isTextTranslucent} key={index}>
            {documentToReactComponents(
              JSON.parse(section.text.raw),
              richTextOptions
            )}
          </TextWrapper>
        )
        break;
      default:
        break
    }
  
    return render
}