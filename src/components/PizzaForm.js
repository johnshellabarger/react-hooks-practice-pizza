import React from "react";
function PizzaForm({formData, handleInputText, onValueChange, handleChange, handleSubmit}) {
  return (
    <form id={formData.id} onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleInputText}
            value={formData.topping}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select onChange={handleChange} className="form-control" name="size" value={formData.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={formData.vegetarian ? 'checked': null}
              value="Vegetarian"
              onChange={onValueChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={formData.vegetarian ? null : 'checked'}
              value="Not Vegetarian"
              onChange={onValueChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default PizzaForm;