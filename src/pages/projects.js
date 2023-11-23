import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import PageTitle from '../components/page_title';
import { motion } from 'framer-motion';
import styles from '../animations/index';
import { staggerContainer, fadeIn, zoomIn } from '../animations/motion';

const Projects = () => {
	return (
		<div>
			<PageTitle title="Projects"></PageTitle>
			<section className={`${styles.paddings} relative z-10`}>
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: 'false', amount: 0.25 }}
					className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
				>
					<motion.div
						variants={fadeIn('right', 'tween', 0.2, 1)}
						className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
					>
						<div className="feedback-gradient" />
						<div>
							<h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-dark">
								SDE Intern
							</h4>
							<p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-dark">
								Code Inbound LLP | Internship
							</p>
						</div>

						<p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-dark">
							Open Network Monitoring System Project Contribution: -
							Collaborated in cross-functional teams to enhance OpenNMS
							frontend. - Applied strong JavaScript programming skills for
							feature implementation. - Followed microservice design patterns
							and Agile methodologies for iterative development. - Designed and
							tested frontend components, including dashboards, using
							Test-Driven Development (TDD) principles. API Integration and
							Documentation: - Integrated various APIs to enhance functionality
							and user experience. - Ensured comprehensive documentation and
							effective communication within the team.
						</p>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: 'false', amount: 0.25 }}
					className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
				>
					<motion.div
						variants={fadeIn('left', 'tween', 0.2, 1)}
						className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
					>
						<div className="feedback-gradient" />
						<div>
							<h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-dark">
								SDE Intern
							</h4>
							<p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-dark">
								VishwaGuru Infotech Private Ltd · Internship
							</p>
						</div>

						<p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-dark">
							-Crafting compelling frontend interfaces using Angular,
							prioritizing UI/UX excellence. - Leveraging Java for backend
							development, ensuring robust and efficient systems. - Optimizing
							database queries and refining SQL skills to enhance data
							management. - Actively contributing within cross-functional teams,
							practicing Agile methodologies like Scrum, Kanban, and Sprint
							Planning
						</p>
					</motion.div>
					<motion.div
						variants={fadeIn('left', 'tween', 0.2, 1)}
						className="relative flex-1 flex justify-center items-center"
					></motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: 'false', amount: 0.25 }}
					className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
				>
					<motion.div
						variants={fadeIn('right', 'tween', 0.2, 1)}
						className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
					>
						<div className="feedback-gradient" />
						<div>
							<h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-dark">
								Samantha
							</h4>
							<p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-dark">
								Founder | CodeHub
							</p>
						</div>

						<p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-dark">
							codehub founder desc codehub founder desc codehub founder desc
							codehub founder desc codehub founder desc codehub founder desc
							codehub founder desc codehub founder desc codehub founder desc
						</p>
					</motion.div>
					<motion.div
						variants={fadeIn('left', 'tween', 0.2, 1)}
						className="relative flex-1 flex justify-center items-center"
					></motion.div>
				</motion.div>
			</section>
		</div>
	);
};

export default Projects;
