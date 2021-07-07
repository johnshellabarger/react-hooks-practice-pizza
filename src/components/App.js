import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
function App() {
  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({
    topping: '',
    size: '',
    vegetarian: '',
    id: ''
  })
  const handleInputText = (e) => {
    setFormData({
      ...formData,
      topping: e.target.value
    })
  }
  const onValueChange = (e) => {
    if (e.target.value === 'Vegetarian') {
      setFormData({
        ...formData,
        vegetarian: true
      })
    } else {
      setFormData({
        ...formData,
        vegetarian: false
      })
    }
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      size: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPizzas = pizzas.map(pizza => { 
      if (pizza.id === parseInt(e.target.id)) {
        return (
          { 
            topping: formData.topping,
            size: formData.size,
            vegetarian: formData.vegetarian,
            id: parseInt(e.target.id)
          }
        )
      } else {
        return (
          pizza
        )
      }
    })
    setPizzas(newPizzas)
    fetch(`http://localhost:3001/pizzas/${e.target.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topping: formData.topping,
        size: formData.size,
        vegetarian: formData.vegetarian,
      })
    })
  }
  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  },[])
  return (
    <>
      <Header />
      <PizzaForm 
        formData={formData} 
        handleInputText={handleInputText} 
        onValueChange={onValueChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <PizzaList 
        pizzas={pizzas}
        setFormData={setFormData}
      />
    </>
  );
}
export default App



















