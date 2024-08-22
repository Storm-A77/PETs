
import { Link } from 'react-router-dom';
import Construction from './Construction';
import GameContainer from '../components/GameContainer';
function Games(props) {
  return (
    <>
    <div class="bg-[#040825] flex items-center justify-center min-h-screen">
      <div class="p-6 mt-16 h-[750px] w-[850px] bg-white rounded">
        <GameContainer/>
      </div>
</div>

    </>
  )
}

export default Games