import React from "react";
import { api } from "utils";

export default function filtringData(loadObjectData, datVisibleObjects) {
    
  const [data, setData] = React.useState([]);
  //   const [fetching, setFetching] = React.useState(true);

  React.useEffect(() => {
    // console.log(loadObjectData);
    // console.log(datVisibleObjects);
    if(loadObjectData != null) {
      const data = loadObjectData?.filter((i) =>
      datVisibleObjects.includes(i.type)
    );
    //console.log(data);
    setData( data );
  }
    
    
  }, [datVisibleObjects]);

  return data;
}
