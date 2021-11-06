/** @format */

import styles from '../styles/Porta.module.css';
import PortaModel from '../model/porta';
import { FormEvent } from 'react';
import Presente from './Presente';

interface PortaProps {
	porta: PortaModel;
	onChange: (novaPorta: PortaModel) => void;
}

const Porta = ({ porta, onChange }: PortaProps) => {
	const selecionada =
		porta.selecionada && !porta.aberta ? styles.selecionada : '';

	const alternarSelecao = (e: FormEvent) => {
		onChange(porta.alternarSelecao());
	};

	const abrirPorta = (e: FormEvent) => {
		e.stopPropagation();

		onChange(porta.abrir());
	};

	return (
		<div className={styles.area} onClick={alternarSelecao}>
			<div className={`${styles.estrutura} ${selecionada}`}>
				{porta.aberta ? (
					porta.temPresente ? (
						<Presente></Presente>
					) : (
						''
					)
				) : (
					<div className={styles.porta}>
						<div className={styles.numero}>{porta.numero}</div>
						<div className={styles.macaneta} onClick={abrirPorta}></div>
					</div>
				)}
			</div>
			<div className={styles.chao}></div>
		</div>
	);
};

export default Porta;
