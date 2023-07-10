import styles from "./ListsResultSearch.module.scss";
import React from "react";

export default function ListsResultSearch({ lists, handle }) {
  //const hasBottom = action || (error && error.down) ? true : false

  // const listSelectingAddresses = (item) => (
  //   <div
  //     style={{ cursor: "pointer" }}
  //     key={item.osm_id}
  //     onClick={() => handleInsertionValuesInInputs(item)}
  //   >
  //     {item.display_name}
  //   </div>
  // );

  return (
    lists && (<ul className={styles.wrapper} >
      {
        lists?.map((item) => (
          <li className={styles.list}
            key={item.osm_id}
            onClick={() => handle(item)}
          >            
            {item.display_name}
          </li>
        ))}
    </ul>)    
  );
}
