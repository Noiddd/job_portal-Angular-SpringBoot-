import React from "react";
import styles from "../../styles/SkillBubble.module.css";

const SkillBubble = (props) => {
  return <div className={styles.skillBubble}>{props.skill}</div>;
};

export default SkillBubble;
