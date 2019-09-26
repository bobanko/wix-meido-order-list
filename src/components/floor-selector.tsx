import * as React from "react";

import { floors, defaultHash } from "../../config";

import "./floor-selector.scss";

function redirectToHash(hash) {
  window.location.href = window.location.origin + `/?hash=${hash}`;
}

export function FloorSelector() {
  function changeFloor(event) {
    const hash = event.target.value;
    redirectToHash(hash);
  }

  const currentHash = new URL(location.href).searchParams.get("hash");
  if (!currentHash) {
    //redirect to known floor/hash
    redirectToHash(defaultHash);
  }
  const hashIsValid = [...floors.values()].includes(currentHash);

  return (
    <label className="floor-selector">
      <span>Floor</span>
      <select
        name="floor"
        onChange={changeFloor}
        value={hashIsValid ? currentHash : ""}
      >
        <option value="" disabled>
          ?
        </option>
        {[...floors].map(([floorNum, hash]) => (
          <option key={hash} value={hash}>
            {floorNum}
          </option>
        ))}
      </select>
    </label>
  );
}
