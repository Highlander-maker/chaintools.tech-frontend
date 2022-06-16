import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient,
} from "next-sanity";

export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project. 
     * There are considered "public", but you can use enviroment variables
     * if you want differ between local dev and production.
     * 
     * https://nextjs.org/docs/basic-features/enviroment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Helper function for using the current logged in your account
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);