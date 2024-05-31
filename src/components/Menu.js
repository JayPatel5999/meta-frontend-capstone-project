import React from 'react';
import Recipes from './Recipes';
import Swal from 'sweetalert2';

function Menu() {

    const handleOrder = (id) => {
        Swal.fire({
            title: "Confirm Order?",
            text: "You won't be able to revert the Order!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Order it!",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff",
            backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `
            }).then((result) => 
            {
            
                if (result.isConfirmed) 
                {
                    Swal.fire({
                    title: "Ordered!",
                    text: "Your Order Placed Successfully.",
                    icon: "success"
                    });
                }
        });
    }
  return (
    <div className="menu-container">
      <div className='menu-header'>
        <h2>Special's This Week</h2>
        <button>Order Menu</button>
      </div>

      <div className="cards">
        {
            Recipes.map(Recipe => <div key={Recipe.id} className='menu-items'>
                <img src={Recipe.image} alt={Recipe.title} />
                <div className='menu-content'>
                    <div className='heading'>
                        <h5 className='menu-title'>{Recipe.title}</h5>
                        <p>{Recipe.price}</p>
                    </div>
                    <p>{Recipe.description}</p>
                    <button className='order-button' onClick={ () => handleOrder(Recipe.id)}>Order Now</button>
                </div>
            </div>)
        }
      </div>
    </div>
  );
}

export default Menu;