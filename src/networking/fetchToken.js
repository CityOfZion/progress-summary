import { get } from "axios";

import { TOKEN_API } from "./consts";

const fetchToken = () => get(TOKEN_API);

export default async store => {
  const hasToken = store.token.get();
  if (!hasToken) {
    const { data } = await fetchToken();
    store.token.set(data);
  }
};
