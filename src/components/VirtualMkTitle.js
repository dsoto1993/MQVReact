import React from 'react';


class VirtualMkTitle extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.category
    }

    render() {
        return (
            <div className="col m12 l6">
                <div className="initial-content">
                    <div className="virtualmk-title">
                        <h1 className="text-uppercase">
                            <span>Maquillador</span> Virtual
                        </h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <ul>
                                {this.props.categories.map((category, i) => (
                                    <li key={i} id={category.id} className="category initial">
                                        <img src={category.image} alt={category.name} />
                                        <p>{category.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="virtualmk-intro mt-minus-8">
                        <p className="intro-text"><span className="text-init bold-phrase">¡Es hora de maquillarte sin maquillarte!</span> Prueba todos los tonos de labiales, máscaras, sombras, bases, delineadores y más productos en vivo.</p>
                        <div className="instruction-container">
                            <p className="instructions-title bold-phrase">Instrucciones:</p>
                            <ol className="instructions-list">
                                <li className="step bold-phrase">Enciende tu cámara, carga una foto o selecciona una modelo.</li>
                                <li className="step">Selecciona una de las categorías en la parte superior.</li>
                            </ol>
                        </div>
                        <p className="start-color text-uppercase">¡Comienza una nueva experiencia!</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default VirtualMkTitle;