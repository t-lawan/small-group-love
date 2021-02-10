export const SET_PAGES = "SET_PAGES";
export const SET_PROJECTS = "SET_PROJECTS";
export const SET_SITE_INFO= "SET_SITE_INFO";
export const SET_NAVBAR_LINKS = "SET_NAVBAR_LINKS";
export const IS_LOADED = "IS_LOADED";


export const isLoaded = () => {
    return {
        type: IS_LOADED
    }
}

export const setPages = (pages) => {
    return {
        type: SET_PAGES,
        pages: pages
    }
}

export const setProjects = (projects) => {
    return {
        type: SET_PROJECTS,
        projects: projects
    }
}

export const setSiteInfo = (site_info) => {
    return {
        type: SET_SITE_INFO,
        site_info: site_info
    }
}

export const setNavbarLinks = (navbar_links) => {
    return {
        type: SET_NAVBAR_LINKS,
        navbar_links: navbar_links
    }
}