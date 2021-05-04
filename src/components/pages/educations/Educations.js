import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table className='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Web Development</td>
								<td>Jan 2018</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
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
							<tr>
								<td>Tech Gadgets</td>
								<td>June 2018</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Other</td>
								<td>Dec 2018</td>
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
