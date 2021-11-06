/** @format */

import { useState } from 'react';
import Porta from '../components/Porta';
import criarPortas, { atualizarPortas } from '../functions/portas';

export default function Home() {
	const [portas, setPortas] = useState(criarPortas(10, 2));

	return (
		<div>
			{portas.map((porta) => (
				<Porta
					key={porta.numero}
					porta={porta}
					onChange={(portaModificada) =>
						setPortas(atualizarPortas(portas, portaModificada))
					}
				/>
			))}
		</div>
	);
}
