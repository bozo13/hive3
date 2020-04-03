import React from "react";
import Hero from "./Hero";
import TextBlock from "./TextBlock";
import TextTitle from "./TextTitle";
import KeyFacts from "./Keyfacts";
import Carousel from "./Carousel";
import Mapbox from "./Mapbox";
import Footer from "./Footer";
import Divider from "./Divider";
import Einobjekt from "./Einobjekt"
import Berlins from "./Berlins"
import Network from './Network'
import Downloadable from './Downloadable'
import Kontakt from './Kontakt'
import Video from "./Video";



const AllLayouts = ({ layoutData }) => {

  const layoutType = layoutData.fieldGroupName

  /**
   * Default component
   */
  const Default = () => <div>In AllLayouts the mapping of this component is missing: {layoutType}</div>

  /**
   * Mapping the fieldGroupName(s) to our components
   */
  const layouts = {
    page_Pagebuilder_Layouts_Einobjekt: Einobjekt,
    page_Pagebuilder_Layouts_Berlins: Berlins,
    page_Pagebuilder_Layouts_Network: Network,
    page_Pagebuilder_Layouts_Hero: Hero,
    page_Pagebuilder_Layouts_TextTitle: TextTitle,
    page_Pagebuilder_Layouts_Keyfacts: KeyFacts,
    page_Pagebuilder_Layouts_Carousels: Carousel,
    page_Pagebuilder_Layouts_Mapbox: Mapbox,
    page_Pagebuilder_Layouts_Downloadable: Downloadable,
    page_Pagebuilder_Layouts_Kontakt: Kontakt,
    page_Pagebuilder_Layouts_Vimeoplayer: Video,
    page_default: Default
  }
  
  /**
   * If layout type is not existing in our mapping, it shows our Default instead.
   */
  const ComponentTag = layouts[layoutType] ? layouts[layoutType] : layouts['page_default']


  return (

    <ComponentTag {...layoutData} />

  )
}

export default AllLayouts
