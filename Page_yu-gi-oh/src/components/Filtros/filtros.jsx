import { useState } from 'react';
import './style.scss';

function Filtros({ onPesquisar, onLimpar }) {
    const categorias = [
        'Agua', 'Beast', 'Beast Warrior', 'Continous', 'Counter', 'Creator God',
        'Cyberse', 'Dark', 'Dinosaur', 'Divine Beast', 'Divino', 'Dragon',
        'Earth', 'Effect', 'Equip', 'Fairy', 'Fiend', 'Fire', 'Flip', 'Fusion',
        'Insect', 'Light', 'Link', 'Machine', 'Monster', 'N/A', 'Normal',
        'Pendulum', 'Plant', 'Psychic', 'Pyro', 'Reptile'
    ];

    const cartas = [
        'Armadilha', 'Counter', 'Mágica', 'Monstro', 'Skill Card', 'Token'
    ];

    const [selecionados, setSelecionados] = useState([]);

    const handleChange = (categoria) => {
        setSelecionados(prev =>
            prev.includes(categoria)
                ? prev.filter(item => item !== categoria)
                : [...prev, categoria]
        );
    };

    const handlePesquisar = () => {
        // envia para o Home.jsx os filtros selecionados
        onPesquisar(selecionados);
    };

    const handleLimpar = () => {
        setSelecionados([]);
        onLimpar();
    };

    return (
        <div className="filtros-container">
            <h2 className='filtros-titulo'>FILTROS</h2>

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

            <h3 className="filtros-subtitulo">TIPO CARTA</h3>
            <div className="filtros-lista">
                {cartas.map(carta => (
                    <label key={carta} className="filtros-item">
                        <input
                            type="checkbox"
                            checked={selecionados.includes(carta)}
                            onChange={() => handleChange(carta)}
                            className="filtros-checkbox"
                        />
                        <span className="filtros-texto">{carta}</span>
                    </label>
                ))}
            </div>

            <div className="filtros-botoes">
                <button className="button-pesquisa" onClick={handlePesquisar}>
                    PESQUISAR
                </button>
                <button className="button-filtro" onClick={handleLimpar}>
                    LIMPAR FILTROS
                </button>
            </div>
        </div>
    );
}

export default Filtros;
