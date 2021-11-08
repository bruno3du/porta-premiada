/** @format */
import React from 'react';
import styles from '../styles/EntradaNumerica.module.css';

interface EntradaNumericaProps {
	text: string;
	comPresente?: number;
	qtdePortas: number;
	onChange: (newValue: number) => void;
}

export default function EntradaNumerica({
	text,
	comPresente,
	qtdePortas,
	onChange,
}: EntradaNumericaProps) {
	const value = comPresente ? comPresente : qtdePortas;
	const handleDecrease = () => {
		if (comPresente && comPresente !== 1) onChange(comPresente - 1);

		if (!comPresente && qtdePortas > 3) onChange(qtdePortas - 1);
	};

	const handleIncrease = () => {
		if (comPresente && comPresente < qtdePortas) onChange(comPresente + 1);

		if (!comPresente) onChange(qtdePortas + 1);
	};

	return (
		<div className={styles.entradaNumerica}>
			<span className={styles.text}>{text}</span>
			<span className={styles.value}>{value}</span>
			<div className={styles.botoes}>
				<button className={styles.btn} onClick={handleDecrease}>
					-
				</button>
				<button className={styles.btn} onClick={handleIncrease}>
					+
				</button>
			</div>
		</div>
	);
}
