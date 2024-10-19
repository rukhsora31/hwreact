import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="eatwell">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsPGI_cwLYpxaSTjV__rBmF6tiwyqYfXq5w&s" alt="" />
            <h1>Eat Well</h1>
          </div>
          <h1>Today`s Meal Plan:</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="card1">
            <div className="wrap">
              <h2>Caesar salad: Calories:44, carbs:7.2g, fat:16.4g</h2>
              <h2>🔻</h2>
              <img src="https://yanusia.com/data/2022/12/salat-tsezar.jpg" alt="" />
            </div>
          </div>

          <div className="card2">
            <div className="wrap">
              <h2>Sushi: Calories:73, carbs:15.4g, fat:0.6g</h2>
              <h2>🔻</h2>
              <img src="https://www.allrecipes.com/thmb/CBOcP0zp71lR2bn-KUMkgCB92RA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24228-Sushi-roll-ddmfs-4x3-2914-1839f746d9334814a7a5d93ed45ba082.jpg" alt="" />
            </div>
          </div>

          <div className="card2">
            <div className="wrap">
              <h2>Strawberry: Calories:33, carbs:8g, fat:0.3g</h2>
              <h2>🔻</h2>
              <img src="https://images.indianexpress.com/2024/05/strawberry-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <h1 className='favfood'>Your Favourite Food <br/> Delivery Partner </h1>
        <div className="delivery">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/6491/6491453.png" alt="" />
          <h3>Easy to order</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fugiat obcaecati ullam dicta facilis saepe.</p>
        </div>

        <div>
          <img src="https://png.pngtree.com/png-vector/20221221/ourmid/pngtree-fast-delivery-truck-icon-png-image_6529764.png" alt="" />
          <h3>Fastests delivery</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reprehenderit veritatis cupiditate velit debitis consequatur.</p>
        </div>

        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/5619/5619116.png" alt="" />
          <h3>Best quality</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium expedita facilis magni molestias officiis?</p>
        </div>
        </div>

        </div>
      </section>


    </>
  )
}

export default App
