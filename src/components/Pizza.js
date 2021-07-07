import React from "react";
function Pizza({topping, size, vegetarian, setFormData, id}) {
  function handleClick(e) {
    setFormData({
      topping,
      size,
      vegetarian,
      id
    })
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'yes' : 'no'}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}
export default Pizza;
