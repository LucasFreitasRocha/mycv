import React from 'react';

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
								<th>Location</th>
								<th>Course</th>
								<th>Date</th>
								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>IFF - Instituto Federal Fluminense</td>
								<td>Bachelor in Information Systems</td>
								<td>
								September 2016 – November 2022
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
								<td>IFF - Instituto Federal Fluminense</td>
								<td>Technician in Industrial Automation</td>
								<td>
									June 2014 – July 2016
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
