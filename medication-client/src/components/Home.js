import '../styles/Home.scss';
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <section className='Home'>
      <Box sx={{ pt: 50, color: 'black' }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('How well ')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1500)
              .typeString('do you know your drugs? ')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .pauseFor(1000)
              .typeString('Check your medications.')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .start();
          }}
        />
      </Box>
    </section>
  );
}
