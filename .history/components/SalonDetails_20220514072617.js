mport styles from "../styles/SalonDetails.module.css";

export default function SalonDetails() {
return (
   
<div className={styles["salon"]}>
    <h1>Reserve seats</h1>
	<ul>

		<li className={styles["label"]}>
			<input id="R1-1" type="checkbox" />
			<label htmlFor="R1-1">Seat 1</label>
		</li>

		<li>
			<input id="R1-2" type="checkbox" />
			<label htmlFor="R1-2">Seat 2</label>
		</li>
		
		<li>
			<input id="R1-3" type="checkbox" />
			<label htmlFor="R1-3">Seat 3</label>
		</li>
		
		<li>
			<input id="R2-1" type="checkbox" />
			<label htmlFor="R2-1">Seat 4</label>
		</li>
		
		<li>
			<input id="R2-2" type="checkbox" />
			<label htmlFor="R2-2">Seat 5</label>
		</li>
		
		<li>
			<input id="R2-3" type="checkbox" />
			<label htmlFor="R2-3">Seat 6</label>
		</li>
		
		<li>
			<input id="R3-1" type="checkbox" />
			<label htmlFor="R3-1">Seat 7</label>
		</li>
		
		<li>
			<input id="R3-2" type="checkbox" />
			<label htmlFor="R3-2">Seat 8</label>
		</li>
		
		<li>
			<input id="R3-3" type="checkbox" />
			<label htmlFor="R3-3">Seat 9</label>
		</li>
		
		<li>
			<input id="R4-1" type="checkbox" />
			<label htmlFor="R4-1">Seat 10</label>
		</li>

		<li>
			<input id="R4-2" type="checkbox" />
			<label htmlFor="R4-2">Seat 11</label>
		</li>

		<li>
			<input id="R4-3" type="checkbox" />
			<label htmlFor="R4-3">Seat 12</label>
		</li>

	</ul>
</div>


);


}
