import { SiteModel } from "../models/SiteInfoModel";
import { PageLink } from "../models/PageLink";
import { NavigationLink } from "../models/NavigationLink";
import { PageModel } from "../models/PageModel";
import { ContentModel } from "../models/ContentModel";
import { ProjectModel } from "../models/ProjectModel";

export class Convert {

  static toSiteModel = contentfulModel => {
    return new SiteModel(
      contentfulModel.name,
      contentfulModel.description ? contentfulModel.description.description : ''
    )
  }

  static toPageLink = contentfulModel => {
    return new PageLink(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.url
    )
  }

  static toContentModel = contentfulModel => {
    return new ContentModel(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.type,
      contentfulModel.images,
      contentfulModel.text,
    )
  }


  static toPageModel = contentfulModel => {
    let content = []
    if(contentfulModel.contentSection){
      contentfulModel.contentSection.forEach((cn) => {
        content.push(Convert.toContentModel(cn));
      })
    }
    return new PageModel(
      contentfulModel.contentful_id,
      contentfulModel.title, 
      contentfulModel.type,
      content
    )
  }

  static toProjectModel = contentfulModel => {
    let content = []
    if(contentfulModel.contentSection){
      contentfulModel.contentSection.forEach((cn) => {
        content.push(Convert.toContentModel(cn));
      })
    }
    return new ProjectModel(
      contentfulModel.contentful_id,
      contentfulModel.title, 
      contentfulModel.isCurrent, 
      contentfulModel.startDate, 
      contentfulModel.endDate,
      content
    )
  }

  static toNavigationLink = contentfulModel => {
    return new NavigationLink(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.order,
      Convert.toPageLink(contentfulModel.linkedPage) 
    )
  }


  static toModelArray = (query, modelConverter) => {
    const modelArray = []
    query.edges.forEach(contentfulModel => {
      let model = modelConverter(contentfulModel.node)
      modelArray.push(model)
    })
    return modelArray
  }
}
