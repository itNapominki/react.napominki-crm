import React from "react";
import { api } from "utils";

export default function filtringData(loadObjectData, datVisibleObjects) {
    // console.log(loadObjectData);
    // console.log(datVisibleObjects);
  const [data, setData] = React.useState(null);
  //   const [fetching, setFetching] = React.useState(true);

  React.useEffect(() => {

    const data = loadObjectData?.filter((i) =>
      datVisibleObjects.includes(i.type)
    );
    //console.log(data);
    setData( data );
  }, [datVisibleObjects]);

  return data;
}
