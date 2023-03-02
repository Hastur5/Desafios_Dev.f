const Juego = ({name, image}) => {
    return(
        
        <div className="columns">
            <div className="column is-12">
                <div className="card"
                             onClick={() => this.props.getJuego(this.props.fili.toLowerCase())}>
                    <div className="card-image box-inner">
                        <figure className="image box-front">
                            <img src={image}/>
                        </figure>
                    </div>
                    <div className="card-content box-back">{name}</div>
                </div>
            </div>
        </div>  
    )
}

export {Juego};