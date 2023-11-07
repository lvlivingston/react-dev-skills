import SkillListItem from "./SkillListItem";
import "./SkillList.css";

export default function SkillList({ skills }) {
  const items = skills.map((s, idx) => (
    <SkillListItem itemName={s.name} itemLevel={s.level} key={idx} />
  ));
  return <ul className="SkillList">{items}</ul>;
}
