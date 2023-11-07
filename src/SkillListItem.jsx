import "./SkillListItem.css";

export default function SkillListItem({ itemName, itemLevel }) {
  return (
    <div className="SkillListItem">
      <li>{itemName}</li>
      <div className="level">Level {itemLevel}</div>
    </div>
  );
}
