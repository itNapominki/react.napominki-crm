import React from "react";
import { api } from "utils";

export default function loadingData(model, params, $node = false) {
  const [data, setData] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);

  React.useEffect(() => {
    if (fetching) {
      async function getData() {
        await api
          .getAll({
            model,
            params: {
              ...params,
              //page: currentPage,
            },
          })
          .then(({ data }) => {
            setData(data);
          })

          .finally(() => setFetching(false));
      }

      getData();
    }
  }, [fetching]);

  return [data];
}
