/** @format */

import React, { useEffect, useState } from 'react';
import Porta from '../../../components/Porta';
import criarPortas, { atualizarPortas } from '../../../functions/portas';
import styles from '../../../styles/Jogo.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PortaModel from '../../../model/porta';

export default function Jogo() {
	const router = useRouter();
	const [portas, setPortas] = useState<PortaModel[]>([]);

	useEffect(() => {
		const porta = Number(router.query.portas);
		const temPresente = Number(router.query?.temPresente);
		setPortas(criarPortas(porta, temPresente));
	}, [router.query]);
	return (
		<div className={styles.jogo}>
			<div className={styles.portas}>
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
			<div className={styles.botoes}>
				<Link href='/' passHref>
					<button>Reiniciar Jogo</button>
				</Link>
			</div>
		</div>
	);
}
