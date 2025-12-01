
const Carusel = () => {
   return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" className="d-block w-100" alt="Imagen 1" />
        </div>

        <div className="carousel-item">
          <img src="https://shoppingdelsiglo.com/wp-content/uploads/2025/06/IMG_4740-scaled.jpg" className="d-block w-100" alt="Imagen 2" />
        </div>

        <div className="carousel-item">
          <img src="https://img77.uenicdn.com/image/upload/v1544801307/category/shutterstock_2185577.jpg" className="d-block w-100" alt="Imagen 3" />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carusel