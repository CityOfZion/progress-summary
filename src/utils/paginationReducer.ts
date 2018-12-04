// Types
import { LinkData } from "../types/ghdata";

export default (props, key) => ({ data, headers }) => {
  const { link = "" } = headers;
  const storeData = props.store.get(key);

  const links: LinkData = {};
  link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (_, uri, type) => {
    if (uri.length > 0) links[type] = uri.substr(uri.indexOf("&page=") + 6);
  });

  if (!links.last && !storeData.pages.last) storeData.pages.last = 1;
  if (storeData.pages.next && storeData.pages.last && storeData.pages.next === storeData.pages.last)
    storeData.pages.done = true;

  return { data: [...storeData.data, ...data], pages: Object.assign({}, storeData.pages, links) };
};
