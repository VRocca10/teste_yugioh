import React, { useState } from 'react';
import './style.css';

function Navbar() {
    const categorias = [
        'Agua', 'Beast', 'Beast Warrior', 'Continous', 'Counter', 'Creator God',
        'Cyberse', 'Dark', 'Dinosaur', 'Divine Beast', 'Divino', 'Dragon',
        'Earth', 'Effect', 'Equip', 'Fairy', 'Fiend', 'Fire', 'Flip', 'Fusion',
        'Insect', 'Light', 'Link', 'Machine', 'Monster', 'N/A', 'Normal',
        'Pendulum', 'Plant', 'Psychic', 'Pyro', 'Reptile'
    ];

    const [selecionados, setSelecionados] = useState([]);

    const handleChange = (categoria) => {
        setSelecionados(prev =>
            prev.includes(categoria)
                ? prev.filter(item => item !== categoria)
                : [...prev, categoria]
        );
    };

    return (
        <div className="filtros-container">
            <h3 className="filtros-titulo">TIPO / ATRIBUTO</h3>
            <div className="filtros-lista">
                {categorias.map(categoria => (
                    <label key={categoria} className="filtros-item">
                        <input
                            type="checkbox"
                            checked={selecionados.includes(categoria)}
                            onChange={() => handleChange(categoria)}
                            className="filtros-checkbox"
                        />
                        <span className="filtros-texto">{categoria}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Navbar;