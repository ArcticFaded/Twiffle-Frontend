import React from "react";
import { css } from "glamor";
import Button from "./Button";
import Text from "./Text";

let styles = {
  group: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  btnGroup: {
    display: "flex",
    marginTop: 200,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

function Raffle(props) {
  return (
    <div>
      <Text size="sm" weight="bold">
        Participant Restriction
      </Text>
      <select
        value={props.participantRestriction}
        onChange={({ target }) =>
          props.onChange("participantRestriction", target.value)
        }
      >
        <option value="everyone">Everyone</option>
        <option value="viewerOnly">Viewer Only</option>
        <option value="subscriberOnly">Subscriber Only</option>
      </select>
      <div className={css(styles.btnGroup)}>
        <Button
          backgroundColor="#6445A2"
          color="#fff"
          onClick={() => props.setField("isRunning", true)}
        >
          Submit
        </Button>
        <Button onClick={() => props.setField("isCard", false)}>Cancel</Button>
      </div>
    </div>
  );
}

export default Raffle;
