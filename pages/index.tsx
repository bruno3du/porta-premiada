/** @format */

import Cartao from '../components/Cartao';
import styles from '../styles/Formulario.module.css';
import Link from 'next/link';
import EntradaNumerica from '../components/EntradaNumerica';
import React, { useState } from 'react';

export default function Formulario() {
	const [qtdePortas, setQtdePortas] = useState(3);
	const [comPresente, setComPresente] = useState(2);
	return (
		<div className={styles.formulario}>
			<div>
				<Cartao bgColor='#c0392c'>
					<h1>Monty Hall</h1>
				</Cartao>
				<Cartao>
					<EntradaNumerica
						text='Qtde Portas?'
						qtdePortas={qtdePortas}
						onChange={(novaQtde) => setQtdePortas(novaQtde)}
					/>
				</Cartao>
			</div>
			<div>
				<Cartao>
					<EntradaNumerica
						text='Porta com Presente?'
						comPresente={comPresente}
						qtdePortas={qtdePortas}
						onChange={(novaQtde) => setComPresente(novaQtde)}
					/>
				</Cartao>
				<Cartao bgColor='#28a085'>
					<Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
						<h2 className={styles.link}>Iniciar</h2>
					</Link>
				</Cartao>
			</div>
		</div>
	);
}
