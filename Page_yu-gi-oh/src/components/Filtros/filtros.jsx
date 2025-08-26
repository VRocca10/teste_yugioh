import React, { useState } from 'react';
import './style.scss';

function Navbar() {
    const categorias = [
        'Agua', 'Beast', 'Beast Warrior', 'Continous', 'Counter', 'Creator God',
        'Cyberse', 'Dark', 'Dinosaur', 'Divine Beast', 'Divino', 'Dragon',
        'Earth', 'Effect', 'Equip', 'Fairy', 'Fiend', 'Fire', 'Flip', 'Fusion',
        'Insect', 'Light', 'Link', 'Machine', 'Monster', 'N/A', 'Normal',
        'Pendulum', 'Plant', 'Psychic', 'Pyro', 'Reptile'
    ];

    const cartas = [
        'Armadilha', 'Counter', 'Mágica', 'Monstro', 'Skill Card', 'Token'
    ]

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
            <h2 className='filtros-titulo'>Filtros</h2>
            <h3 className="filtros-subtitulo">TIPO / ATRIBUTO</h3>
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
            <h3 className="filtros-subtitulo">Tipo Carta</h3>
            <div className="filtros-lista">
                {cartas.map(cartas => (
                    <label key={cartas} className="filtros-item">
                        <input
                            type="checkbox"
                            checked={selecionados.includes(cartas)}
                            onChange={() => handleChange(cartas)}
                            className="filtros-checkbox"
                        />
                        <span className="filtros-texto">{cartas}</span>
                    </label>
                ))}
            </div>
            <button className="button-pesquisa">Pesquisar</button>
            <button className="button-filtro">Limpar Filtros</button>
        </div>
    );
}

export default Navbar;