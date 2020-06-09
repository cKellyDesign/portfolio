import { Dictionary } from '@onaio/utils';
import { About } from '.';

export const aboutModel: Dictionary<About> = {
  general: {
		'pitch' : 'My name is Conor Kelly and I utilize HCD methods to design, explore, and ultimately build ICT solutions that advance efforts to solve society\'s most pressing issues. I am a designer, coder, and problem solver who is passionate about creating positive social impact, empowering and enriching the lives of my users.',
		'highlights': [
			{
				'title': 'Human Centered Designer',
				'paragraph': '"Form follows function" is a cornerstone design principle, and I truly believe that <b>function follows human</b>. With this focus I strive to build empathy and iterate approaches when searching for solutions.',
				'tags' :[]
			},
			{
				'title': 'Innovative Developer',
				'paragraph': 'I stand on the shoulders of giants when architecting and implementing full stack infrastructures and I enjoy the science, craft, and challenge of creating efficient, robust, modular, and scalable systems.',
				'tags' :[] 
			},
			{
				'title': 'Data Fanatic', // todo: redo this content
				'paragraph': 'Empowering organizations to use data effectively, from automatic analysis to qualitative data collection and analysis methodologies, we can start to uncover key insights for better decision-making.',
				'tags' :[]
			}
		]
	}
};
