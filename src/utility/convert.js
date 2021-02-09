import { SiteModel } from "../models/SiteInfoModel";

export class Convert {

  static toSiteModel = contentfulModel => {
    return new SiteModel(
      contentfulModel.name,
      contentfulModel.description ? contentfulModel.description.description : ''
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
