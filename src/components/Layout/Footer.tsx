import React from 'react';
import Icon from '../Icon';

const Footer = () => {
	return (
		<div className='Footer'>
			<div className='Footer-container'>
				<div className='Footer-help'>
					<h5 className='Footer-title'>
						<span>Need any help?</span>
					</h5>
					<div className='Footer-helpInfo'>
						<div className='Footer-helpItem'>
							<p className='Footer-helpText'>Call 24/7 for any help</p>
							<p className='Footer-helpGreen'>+00 123 456 789</p>
						</div>
						<div className='Footer-helpItem'>
							<p className='Footer-helpText'>Mail to our support team</p>
							<p className='Footer-helpGreen'>support@domain.com</p>
						</div>
						<div className='Footer-helpItem'>
							<p className='Footer-helpText'>Follow us on</p>
							<ul className='Footer-socialList'>
								<li className='Footer-socialLink'>
									<a href='' className='Footer-icon'>
										<Icon className='fa-brands fa-square-facebook' />
									</a>
								</li>
								<li className='Footer-socialLink'>
									<a href='' className='Footer-icon'>
										<Icon className='fa-brands fa-square-twitter' />
									</a>
								</li>
								<li className='Footer-socialLink'>
									<a href='' className='Footer-icon'>
										<Icon className='fa-brands fa-instagram' />
									</a>
								</li>
								<li className='Footer-socialLink'>
									<a href='' className='Footer-icon'>
										<Icon className='fa-brands fa-linkedin' />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='Footer-quick'>
					<h5 className='Footer-title'>
						<span>Quick links</span>
					</h5>
					<ul className='Footer-list'>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								About us
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								Testimonials
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								Faqs
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								Terms Service
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								Food Grid
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								Blog
							</a>
						</li>
					</ul>
				</div>

				<div className='Footer-support'>
					<h5 className='Footer-title'>
						<span>Support</span>
					</h5>

					<ul className='Footer-list'>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								customer dashboard
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								login
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								cart
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								contact
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								reservation
							</a>
						</li>
						<li className='Footer-link'>
							<a href='' className='Footer-item'>
								privacy policy
							</a>
						</li>
					</ul>
				</div>

				<div className='Footer-opening'>
					<h5 className='Footer-title'>
						<span>Opening hours</span>
					</h5>
					<table className='Footer-table'>
						<tbody>
							<tr>
								<th className='Footer-tablecell'>Monday</th>
								<td className='Footer-tablecell'>0.9.00 - 18.00</td>
							</tr>
							<tr>
								<td className='Footer-tablecell'>Tuesday</td>
								<td className='Footer-tablecell'>10.00 - 18.00</td>
							</tr>
							<tr>
								<td className='Footer-tablecell'>Wednesday</td>
								<td className='Footer-tablecell'>11.00 - 18.00</td>
							</tr>
							<tr>
								<td className='Footer-tablecell'>Thursday</td>
								<td className='Footer-tablecell'>12.00 - 18.00</td>
							</tr>
							<tr>
								<td className='Footer-tablecell'>Thursday</td>
								<td className='Footer-tablecell'>14.00 - 18.00</td>
							</tr>
							<tr>
								<td className='Footer-tablecell'>Saturday, Sunday</td>
								<td className='Footer-tablecell'>Closed</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='FooterCopyright'>
				<div className='FooterCopyright-content'>
					<p className='FooterCopyright-text'>Copyright &copy; 2022 All Rights Reserved</p>
					<div className='FooterCopyright-image' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
