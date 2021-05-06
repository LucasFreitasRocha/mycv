import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong>FORMAÇÃO</strong>
					</h6>
					<table className='striped'>
						<thead>
							<tr>
								<th>Local</th>
								<th>Curso</th>
								<th>Date</th>
								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Instituto Federal Fluminense</td>
								<td>Bacharel em sistema de Informação</td>
								<td>
									Cursando
								</td>
							</tr>
							<tr>
								<td>UPTIME</td>
								<td>Inglês</td>
								<td>
									2018
								</td>
							</tr>
							<tr>
								<td>Instituto Federal Fluminense</td>
								<td>Técnico em Automação Industrial</td>
								<td>
									2016
								</td>
							</tr>
							<tr>
								<td>Graphic Design</td>
								<td>May 2018</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
