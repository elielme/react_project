import './ExpenseItem.css';
const expenseDate = new Date(2021, 2, 28);
const expenseTitle = 'car Insurance';
const expenseAmount =294.67;

function ExpenseItem(props){
return (
<div className="expense-item">
    <div>{props.date.toISOString()}</div>
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
     </div>
</div>
);
}
export default ExpenseItem;