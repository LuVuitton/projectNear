import stackS from './StackItem.module.css'

function StackItem(props) {
  return (
    <div className={stackS.mainWrapper}>
      <div className={stackS.item}>
        <div>{props.flag}</div>
        <div>{props.km}</div>
        <div>{props.money} $</div>
      </div>
    </div>
  );
}

export default StackItem;
