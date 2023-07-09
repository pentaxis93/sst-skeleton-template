export const prerender = true;

// export current URL for use in animation
export const load = ({ url }: { url: URL }) => {
  const currentRoute = url.pathname;

  return {
    currentRoute
  };
};
